"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getShowcaseData } from "@/data/showcase";

const colours = [
  "var(--color-sea-blue)",
  "var(--color-orange)",
  "var(--color-emerald)",
  "var(--color-violet)",
];

export default function ImpactResults() {
  const { language } = useLanguage();
  const copy = getShowcaseData(language).impact;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelColour="var(--color-emerald)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {copy.items.map((item, index) => {
            const colour = colours[index % colours.length];

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: colour }}
                >
                  {item.value}
                </p>
                <h3 className="text-sm font-semibold text-text-bright mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
