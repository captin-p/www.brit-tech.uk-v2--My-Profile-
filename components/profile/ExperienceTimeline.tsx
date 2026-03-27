"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getProfileData, getProfilePageCopy } from "@/data/profile";

export default function ExperienceTimeline() {
  const { language } = useLanguage();
  const experience = getProfileData(language).experience;
  const copy = getProfilePageCopy(language);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader label={copy.careerLabel} title={copy.experienceTitle} />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="flex flex-col gap-8">
            {experience.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative pl-14 md:pl-12"
              >
                <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background md:left-2.5" />

                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-text-bright">
                        {job.role}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                      <span className="text-xs text-text-subtle border border-border px-2 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
