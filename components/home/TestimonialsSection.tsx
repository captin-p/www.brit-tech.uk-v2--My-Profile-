"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getShowcaseData } from "@/data/showcase";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const copy = getShowcaseData(language).testimonials;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelColour="var(--color-violet)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {copy.items.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Quote
                size={22}
                className="mb-5"
                style={{ color: "var(--color-violet)" }}
              />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-text-bright">
                  {item.name}
                </p>
                <p className="text-xs text-text-subtle mt-1">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
