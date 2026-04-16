"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getShowcaseData } from "@/data/showcase";

const colours = [
  "var(--color-sea-blue)",
  "var(--color-emerald)",
  "var(--color-orange)",
];

export default function LiveProjectsSection() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const copy = getShowcaseData(language).liveProjects;

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelColour="var(--color-sea-blue)"
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            <Github size={15} />
            {copy.githubProfileLabel}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {copy.items.map((project, index) => {
            const colour = colours[index % colours.length];

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-lg border border-border bg-background p-6 flex flex-col"
                style={{ borderTopWidth: "3px", borderTopColor: colour }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: colour }}
                >
                  {project.type}
                </p>
                <h3 className="text-lg font-bold text-text-bright mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        color: colour,
                        borderColor: `color-mix(in oklch, ${colour} 25%, transparent)`,
                        background: `color-mix(in oklch, ${colour} 10%, transparent)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {"liveUrl" in project && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel={
                        project.liveUrl.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      {copy.liveLabel}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {copy.repoLabel}
                    <Github size={13} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
