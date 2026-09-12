import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";

export const metadata: Metadata = { title: "BritTech Guides | Practical IT Help", description: "Practical DIY IT guides, troubleshooting, buying advice, simple technology explanations and myth busting." };

const labels = { diy: "Do It Yourself", fix: "Fix It Yourself", buy: "Before You Buy", explained: "Tech Explained", myth: "Myth Busters" } as const;

export default function GuidesPage() {
  return <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
    <header className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">BritTech Guides</p><h1 className="text-4xl font-bold tracking-tight md:text-6xl">Fix it. Install it. Understand it.</h1><p className="mt-5 text-lg text-muted-foreground">Straightforward technology help for everyday people: practical installations, guided troubleshooting, smarter buying decisions, simple explanations and myth busting.</p></header>
    <div className="mt-10 flex flex-wrap gap-2">{Object.values(labels).map(label => <span key={label} className="rounded-full border px-3 py-1 text-sm">{label}</span>)}</div>
    <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map(guide => <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{labels[guide.category]}</p><h2 className="mt-3 text-xl font-semibold group-hover:underline">{guide.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p><div className="mt-5 flex gap-3 text-xs text-muted-foreground"><span>{guide.difficulty}</span><span>•</span><span>{guide.minutes} min</span><span>•</span><span>Audio available</span></div></Link>)}</section>
  </main>;
}
