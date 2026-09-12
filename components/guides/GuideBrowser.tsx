"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Guide, GuideCategory } from "@/data/guides";

const labels: Record<GuideCategory | "all", string> = {
  all: "All",
  diy: "Do It Yourself",
  fix: "Fix It Yourself",
  buy: "Before You Buy",
  explained: "Tech Explained",
  myth: "Myth Busters",
};

export function GuideBrowser({ guides }: { guides: Guide[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GuideCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((guide) => {
      const categoryMatch = category === "all" || guide.category === category;
      const searchMatch = !q || [guide.title, guide.description, ...guide.tags].join(" ").toLowerCase().includes(q);
      return categoryMatch && searchMatch;
    });
  }, [guides, query, category]);

  return (
    <section className="mt-10">
      <div className="rounded-2xl border bg-card p-4 md:p-5">
        <label className="sr-only" htmlFor="guide-search">Search guides</label>
        <input id="guide-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Wi-Fi, printer, RAM, router..." className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" />
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Guide categories">
          {(Object.keys(labels) as (GuideCategory | "all")[]).map((key) => (
            <button key={key} onClick={() => setCategory(key)} className={`rounded-full border px-3 py-1.5 text-sm transition ${category === key ? "bg-foreground text-background" : "hover:bg-muted"}`}>{labels[key]}</button>
          ))}
        </div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{filtered.length} guide{filtered.length === 1 ? "" : "s"}</p>
      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{labels[guide.category]}</p>
            <h2 className="mt-3 text-xl font-semibold group-hover:underline">{guide.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground"><span>{guide.difficulty}</span><span>•</span><span>{guide.minutes} min</span><span>•</span><span>Audio available</span></div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && <div className="mt-8 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">No guide matches that search yet. Try another term.</div>}
    </section>
  );
}
