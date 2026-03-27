"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  labelColour?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  labelColour = "var(--color-sea-blue)",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={align === "center" ? "text-center" : ""}
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: labelColour }}>
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-text-bright text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base leading-relaxed text-pretty max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
