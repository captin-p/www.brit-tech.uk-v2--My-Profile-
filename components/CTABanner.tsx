"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getShowcaseData } from "@/data/showcase";
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
  const contact = getShowcaseData(language).contact;

  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="rounded-lg bg-primary px-8 py-14 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance mb-4">
            {title ?? copy.title}
          </h2>
          <p className="text-primary-foreground/75 text-lg leading-relaxed text-pretty mb-10 max-w-2xl mx-auto">
            {subtitle ?? copy.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              <MessageCircle size={16} />
              {contact.whatsappLabel}
            </a>
            <a
              href={primaryHref ?? copy.primaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/50 text-primary-foreground font-semibold text-sm hover:bg-white/10 transition-colors"
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
