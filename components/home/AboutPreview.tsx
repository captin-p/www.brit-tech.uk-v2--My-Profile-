"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getSiteCopy } from "@/data/site-copy";

export default function AboutPreview() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const copy = getSiteCopy(language).home.about;

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {copy.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text-bright text-balance mb-6">
              {copy.title}
            </h2>
            <div className="space-y-4">
              {profile.about.map((para, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-sm md:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/profile"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-3 transition-all"
              >
                {copy.profileCta} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-xl border border-border bg-background"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-5">
              {copy.strengthsLabel}
            </p>
            <ul className="flex flex-col gap-4">
              {copy.strengths.map((strength, index) => (
                <li key={strength} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{
                      color: [
                        "var(--color-sea-blue)",
                        "var(--color-orange)",
                        "var(--color-emerald)",
                        "var(--color-violet)",
                      ][index % 4],
                    }}
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
