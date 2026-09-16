import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { briefings, getBriefing } from "@/data/briefings";
import { siteName, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return briefings.map(({ date }) => ({ date }));
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }): Promise<Metadata> {
  const { date } = await params;
  const briefing = getBriefing(date);
  if (!briefing) return {};

  const path = `/briefings/${briefing.date}`;
  const image = briefing.stories[0]?.image || "/og-image.jpg";
  return {
    title: briefing.title,
    description: briefing.description,
    alternates: { canonical: path },
    openGraph: {
      title: briefing.title,
      description: briefing.description,
      url: `${siteUrl}${path}`,
      siteName,
      type: "article",
      publishedTime: `${briefing.date}T06:00:00+02:00`,
      authors: ["Bright Konadu"],
      images: [{ url: image, alt: briefing.stories[0]?.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: briefing.title,
      description: briefing.description,
      images: [image],
    },
  };
}

export default async function BriefingPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const briefing = getBriefing(date);
  if (!briefing) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: briefing.title,
    description: briefing.description,
    datePublished: briefing.date,
    dateModified: briefing.date,
    mainEntityOfPage: `${siteUrl}/briefings/${briefing.date}`,
    author: { "@type": "Person", name: "Bright Konadu", url: `${siteUrl}/profile` },
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    image: briefing.stories.map((story) => `${siteUrl}${story.image}`),
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Link href="/briefings" className="text-sm text-muted-foreground hover:underline">
        ← All Tech Briefings
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{briefing.date}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{briefing.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{briefing.description}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Reporting window: the preceding 24 hours. Sources are linked under every story.
        </p>
      </header>

      <article className="mt-14 space-y-14">
        {briefing.stories.map((story, index) => (
          <section key={story.headline} className="overflow-hidden rounded-3xl border bg-card">
            <Image
              src={story.image}
              alt={story.imageAlt}
              width={1200}
              height={675}
              className="aspect-[16/9] w-full border-b object-cover"
              priority={index === 0}
            />
            <div className="p-6 md:p-9">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                  {story.category}
                </span>
                <span className="text-muted-foreground">Story {index + 1} of {briefing.stories.length}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">{story.headline}</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{story.summary}</p>
              <div className="mt-6 rounded-2xl border bg-background p-5">
                <h3 className="font-semibold">Why it matters to you</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{story.whyItMatters}</p>
              </div>
              <a
                href={story.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Read the source: {story.sourceLabel} ↗
              </a>
            </div>
          </section>
        ))}
      </article>

      <aside className="mt-14 rounded-3xl border border-primary/25 bg-primary/5 p-7 md:p-9">
        <h2 className="text-xl font-semibold">Today&apos;s takeaway</h2>
        <p className="mt-3 leading-8 text-muted-foreground">{briefing.takeaway}</p>
      </aside>
    </main>
  );
}
