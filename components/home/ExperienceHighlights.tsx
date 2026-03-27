"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getSiteCopy } from "@/data/site-copy";

const sectorColours = [
  "var(--color-sea-blue)",
  "var(--color-emerald)",
  "var(--color-orange)",
  "var(--color-violet)",
];

const icons = [GraduationCap, Stethoscope, Building2, Briefcase];

export default function ExperienceHighlights() {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).home.experienceHighlights;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelColour="var(--color-emerald)"
          />
          <Link
            href="/profile"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium shrink-0 hover:gap-3 transition-all"
          >
            {copy.profileCta} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {copy.highlights.map((highlight, index) => {
            const Icon = icons[index];
            const colour = sectorColours[index % sectorColours.length];

            return (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-lg border border-border bg-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-md"
                    style={{
                      background: `color-mix(in oklch, ${colour} 12%, transparent)`,
                      border: `1px solid color-mix(in oklch, ${colour} 25%, transparent)`,
                    }}
                  >
                    <Icon size={16} style={{ color: colour }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: colour }}
                    >
                      {highlight.sector}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {highlight.company}
                    </p>
                  </div>
                </div>
                <h3 className="font-semibold text-text-bright mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {highlight.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        color: colour,
                        background: `color-mix(in oklch, ${colour} 10%, transparent)`,
                        border: `1px solid color-mix(in oklch, ${colour} 22%, transparent)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
