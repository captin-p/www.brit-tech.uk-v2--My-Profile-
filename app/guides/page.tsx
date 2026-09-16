import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { moreGuides } from "@/data/guides-more";
import { GuideBrowser } from "@/components/guides/GuideBrowser";

export const metadata: Metadata = {
  title: "BritTech Guides | Practical IT Help",
  description: "Practical DIY IT guides, troubleshooting, buying advice, simple technology explanations and myth busting.",
};

export default function GuidesPage() {
  const allGuides = [...guides, ...moreGuides];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">BritTech Guides</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Fix it. Install it. Understand it.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Straightforward technology help for everyday people: practical installations, guided troubleshooting, smarter buying decisions, simple explanations and myth busting.</p>
        <p className="mt-3 text-sm text-muted-foreground">Every guide includes a read-aloud option, and selected topics include video-learning suggestions for visitors who prefer to watch.</p>
        <Link href="/briefings" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
          Looking for current developments? Read the Daily Tech Briefings →
        </Link>
      </header>
      <GuideBrowser guides={allGuides} />
    </main>
  );
}
