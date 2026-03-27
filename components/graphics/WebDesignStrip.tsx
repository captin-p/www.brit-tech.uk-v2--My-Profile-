"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, MousePointer2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSiteCopy } from "@/data/site-copy";

const icons = [Monitor, MousePointer2, Smartphone];

export default function WebDesignStrip() {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).graphics.webDesign;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12 rounded-xl border border-border bg-card">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {copy.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text-bright text-balance">
              {copy.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
              {copy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.features.map((feature, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="flex flex-col gap-3"
                >
                  <div className="p-2.5 rounded-md bg-primary/10 border border-primary/20 w-fit">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-bright text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
