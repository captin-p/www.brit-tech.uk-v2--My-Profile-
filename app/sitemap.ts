import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { guides } from "@/data/guides";
import { moreGuides } from "@/data/guides-more";
import { briefings } from "@/data/briefings";

export const dynamic = "force-static";

const lastModified = new Date("2026-04-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/profile`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/graphics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/guides`,
      lastModified: new Date("2026-09-16"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/briefings`,
      lastModified: new Date("2026-09-16"),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const guidePages: MetadataRoute.Sitemap = [...guides, ...moreGuides].map((guide) => ({
    url: `${siteUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.published),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const briefingPages: MetadataRoute.Sitemap = briefings.map((briefing) => ({
    url: `${siteUrl}/briefings/${briefing.date}`,
    lastModified: new Date(briefing.date),
    changeFrequency: "never",
    priority: 0.8,
  }));

  return [...staticPages, ...guidePages, ...briefingPages];
}
