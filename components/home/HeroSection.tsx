"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getSiteCopy } from "@/data/site-copy";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const copy = getSiteCopy(language).home.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div aria-hidden className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-25" style={{ background: "var(--color-sea-blue)" }} />
      <div aria-hidden className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20" style={{ background: "var(--color-orange)" }} />
      <div aria-hidden className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full blur-[110px] opacity-15" style={{ background: "var(--color-emerald)" }} />
      <div aria-hidden className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full blur-[100px] opacity-15" style={{ background: "var(--color-violet)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border px-3 py-1.5 rounded-full">
              <MapPin size={11} className="text-primary" />
              {profile.location}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{
                color: "var(--color-emerald)",
                borderColor: "color-mix(in oklch, var(--color-emerald) 30%, transparent)",
                background: "color-mix(in oklch, var(--color-emerald) 12%, transparent)",
              }}
            >
              {copy.ccnaBadge}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{
                color: "var(--color-orange)",
                borderColor: "color-mix(in oklch, var(--color-orange) 30%, transparent)",
                background: "color-mix(in oklch, var(--color-orange) 12%, transparent)",
              }}
            >
              {copy.designBadge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-bright text-balance leading-tight mb-6"
          >
            {copy.headingStart}{" "}
            <span style={{ color: "var(--color-sea-blue)" }}>{copy.headingMiddle}</span>, {copy.headingConnector}{" "}
            <span style={{ color: "var(--color-orange)" }}>{copy.headingEnd}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed text-pretty mb-10 max-w-2xl"
          >
            {copy.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {copy.profileCta}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/graphics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {copy.portfolioCta}
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
            >
              {copy.contactCta}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-6 flex items-center gap-2"
        >
          <div className="w-px h-12 bg-border" />
          <span className="text-xs text-text-subtle tracking-widest uppercase rotate-90 origin-left ml-4">
            {copy.scroll}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
