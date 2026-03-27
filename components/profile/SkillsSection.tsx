"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getProfileData, getProfilePageCopy } from "@/data/profile";

export default function SkillsSection() {
  const { language } = useLanguage();
  const skillGroups = getProfileData(language).skillGroups;
  const copy = getProfilePageCopy(language);

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader label={copy.expertiseLabel} title={copy.skillsTitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-lg border border-border bg-background"
            >
              <h3 className="text-sm font-semibold text-text-bright mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-foreground bg-secondary border border-border px-3 py-1.5 rounded-md hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
