"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Image, ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSiteCopy } from "@/data/site-copy";

const iconMap = {
  profile: User,
  services: BriefcaseBusiness,
  graphics: Image,
} as const;

const colourMap = {
  profile: "var(--color-sea-blue)",
  services: "var(--color-emerald)",
  graphics: "var(--color-orange)",
} as const;

export default function FeaturedTeaser() {
  const { language } = useLanguage();
  const cards = getSiteCopy(language).home.featuredTeaser.cards;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = iconMap[card.key];
            const colour = colourMap[card.key];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300"
                style={{ borderTopWidth: "3px", borderTopColor: colour }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-md"
                    style={{
                      background: `color-mix(in oklch, ${colour} 12%, transparent)`,
                      border: `1px solid color-mix(in oklch, ${colour} 25%, transparent)`,
                    }}
                  >
                    <Icon size={20} style={{ color: colour }} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: colour }}
                  >
                    {card.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-bright mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                  style={{ color: colour }}
                >
                  {card.cta} <ArrowRight size={14} />
                </Link>

                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-[0.06]"
                  style={{ background: colour }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
