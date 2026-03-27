"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getProfileData, getProfilePageCopy } from "@/data/profile";

export default function AchievementsSection() {
  const { language } = useLanguage();
  const achievements = getProfileData(language).achievements;
  const copy = getProfilePageCopy(language);

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader
            label={copy.impactLabel}
            title={copy.achievementsTitle}
            subtitle={copy.achievementsSubtitle}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group p-6 rounded-lg border border-border bg-background hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={15} className="text-primary" />
                <h3 className="font-semibold text-text-bright text-sm">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
