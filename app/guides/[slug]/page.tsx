import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guides, getGuide } from "@/data/guides";
import { ArticleReader } from "@/components/guides/ArticleReader";

export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const guide = getGuide(slug); return guide ? { title: `${guide.title} | BritTech Guides`, description: guide.description } : {}; }

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const guide = getGuide(slug); if (!guide) notFound();
  const readerText = guide.sections.flatMap(s => [s.heading, ...s.body]).join(" ");
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(guide.videoSearch || guide.title)}`;
  return <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
    <Link href="/guides" className="text-sm text-muted-foreground hover:underline">← All BritTech Guides</Link>
    <header className="mt-8"><div className="flex flex-wrap gap-2 text-sm text-muted-foreground"><span>{guide.difficulty}</span><span>•</span><span>{guide.minutes} min read</span><span>•</span><span>{guide.published}</span></div><h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{guide.title}</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">{guide.description}</p></header>
    <div className="mt-8"><ArticleReader title={guide.title} text={readerText} /></div>
    <article className="mt-12 space-y-10">{guide.sections.map(section => <section key={section.heading}><h2 className="text-2xl font-semibold">{section.heading}</h2>{section.body.map((paragraph, i) => <p key={i} className="mt-4 text-base leading-8 text-muted-foreground">{paragraph}</p>)}</section>)}</article>
    <aside className="mt-14 rounded-2xl border bg-card p-6"><h2 className="text-xl font-semibold">Prefer to watch?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">See video demonstrations related to this topic. Videos are suggestions for visual learning; check that the steps match your device model and manufacturer's instructions.</p><a href={youtubeUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted">Find related videos on YouTube ↗</a></aside>
    <aside className="mt-6 rounded-2xl border p-6"><h2 className="font-semibold">Need professional help?</h2><p className="mt-2 text-sm text-muted-foreground">If the guide does not resolve the problem, stop before making risky hardware, electrical or destructive configuration changes.</p><Link href="/contact" className="mt-4 inline-block text-sm font-semibold underline">Contact Bright</Link></aside>
  </main>;
}
