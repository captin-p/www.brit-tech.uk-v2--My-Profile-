"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSiteCopy } from "@/data/site-copy";

export default function GraphicsHero() {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).graphics.hero;

  return (
    <section className="pt-36 pb-16 px-6 border-b border-border bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-md bg-primary/10 border border-primary/20">
              <Palette size={20} className="text-primary" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {copy.label}
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-bright text-balance mb-5">
            {copy.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {copy.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
