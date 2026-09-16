import Link from "next/link";
import type { Metadata } from "next";
import { briefings } from "@/data/briefings";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Daily Tech Briefings",
  description:
    "A concise daily selection of important cybersecurity, artificial intelligence and IT infrastructure developments, with practical context for engineers and SaaS builders.",
  path: "/briefings",
  keywords: ["cybersecurity news", "AI news", "IT infrastructure", "daily tech briefing"],
});

export default function BriefingsPage() {
  const ordered = [...briefings].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          BritTech Briefings
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">What changed—and why it matters.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Five verified developments across cybersecurity, artificial intelligence and IT infrastructure,
          selected for network engineers, systems administrators and SaaS builders.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {ordered.map((briefing) => (
          <Link
            key={briefing.date}
            href={`/briefings/${briefing.date}`}
            className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
          >
            <p className="text-sm font-medium text-primary">{briefing.date}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              {briefing.title.replace(/^Daily Tech Briefing — /, "")}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{briefing.description}</p>
            <p className="mt-5 text-sm font-semibold">Read the five stories →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
