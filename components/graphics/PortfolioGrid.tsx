"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getPortfolioData, type PortfolioCategory } from "@/data/portfolio";
import { getSiteCopy } from "@/data/site-copy";
import { cn } from "@/lib/utils";

export default function PortfolioGrid() {
  const { language } = useLanguage();
  const portfolio = getPortfolioData(language);
  const copy = getSiteCopy(language).graphics.portfolio;
  const [active, setActive] = useState<PortfolioCategory>("all");

  const filtered =
    active === "all"
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === active);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          role="tablist"
          aria-label={copy.categoryAriaLabel}
          className="flex flex-wrap gap-2 mb-12"
        >
          {portfolio.categories.map((category) => (
            <button
              key={category.value}
              role="tab"
              aria-selected={active === category.value}
              onClick={() => setActive(category.value)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                active === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium bg-background/80 backdrop-blur-sm border border-border px-2.5 py-1 rounded-full text-foreground">
                      {
                        portfolio.categories.find(
                          (category) => category.value === item.category
                        )?.label
                      }
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-text-bright mb-2 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tools.map((tool, index) => {
                      const colour = [
                        "var(--color-sea-blue)",
                        "var(--color-orange)",
                        "var(--color-emerald)",
                        "var(--color-violet)",
                      ][index % 4];

                      return (
                        <span
                          key={tool}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            color: colour,
                            background: `color-mix(in oklch, ${colour} 10%, transparent)`,
                            border: `1px solid color-mix(in oklch, ${colour} 22%, transparent)`,
                          }}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>

                  {item.caseStudy && (
                    <details className="group/details">
                      <summary className="text-xs text-primary font-medium cursor-pointer hover:underline list-none flex items-center gap-1">
                        {copy.caseStudyToggle}
                      </summary>
                      <div className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">
                        <div>
                          <span className="font-semibold text-text-bright">
                            {copy.problemLabel}:{" "}
                          </span>
                          {item.caseStudy.problem}
                        </div>
                        <div>
                          <span className="font-semibold text-text-bright">
                            {copy.approachLabel}:{" "}
                          </span>
                          {item.caseStudy.approach}
                        </div>
                        <div>
                          <span className="font-semibold text-text-bright">
                            {copy.outcomeLabel}:{" "}
                          </span>
                          {item.caseStudy.outcome}
                        </div>
                      </div>
                    </details>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
