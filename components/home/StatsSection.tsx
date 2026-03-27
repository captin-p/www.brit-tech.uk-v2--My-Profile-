"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";

export default function StatsSection() {
  const { language } = useLanguage();
  const stats = getProfileData(language).stats;

  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-3xl font-bold mb-1.5"
                style={{
                  color: [
                    "var(--color-sea-blue)",
                    "var(--color-orange)",
                    "var(--color-emerald)",
                    "var(--color-violet)",
                  ][index % 4],
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug max-w-[80px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
