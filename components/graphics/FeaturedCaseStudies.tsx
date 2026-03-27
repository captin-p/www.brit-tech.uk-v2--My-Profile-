"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getPortfolioData } from "@/data/portfolio";
import { getSiteCopy } from "@/data/site-copy";

export default function FeaturedCaseStudies() {
  const { language } = useLanguage();
  const portfolio = getPortfolioData(language);
  const copy = getSiteCopy(language).graphics.featuredCaseStudies;
  const featured = portfolio.items.filter((item) => item.featured && item.caseStudy);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
          />
        </div>

        <div className="flex flex-col gap-10">
          {featured.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-xl border border-border bg-background"
            >
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  {copy.caseStudyLabel}
                </p>
                <h3 className="text-xl font-bold text-text-bright mb-2">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {item.caseStudy && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-xs font-semibold text-text-subtle uppercase tracking-wider mb-1">
                        {copy.problemLabel}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.caseStudy.problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-xs font-semibold text-text-subtle uppercase tracking-wider mb-1">
                        {copy.approachLabel}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.caseStudy.approach}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {copy.outcomeLabel}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.caseStudy.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
