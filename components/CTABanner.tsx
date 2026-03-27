"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSiteCopy } from "@/data/site-copy";

interface CTABannerProps {
  variant?: "default" | "profile" | "graphics";
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  variant = "default",
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).ctaBanners[variant];

  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 md:px-16 text-center">
          <div aria-hidden className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative text-3xl md:text-4xl font-bold text-primary-foreground text-balance mb-4">
            {title ?? copy.title}
          </h2>
          <p className="relative text-primary-foreground/75 text-lg leading-relaxed text-pretty mb-10 max-w-2xl mx-auto">
            {subtitle ?? copy.subtitle}
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryHref ?? copy.primaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              <Mail size={16} />
              {primaryLabel ?? copy.primaryLabel}
            </a>
            <Link
              href={secondaryHref ?? copy.secondaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/40 text-primary-foreground text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {secondaryLabel ?? copy.secondaryLabel}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
