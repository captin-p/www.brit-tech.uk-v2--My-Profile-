"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getProfileData, getProfilePageCopy } from "@/data/profile";

export default function CertificationsSection() {
  const { language } = useLanguage();
  const { certifications, education, languages } = getProfileData(language);
  const copy = getProfilePageCopy(language);
  const credentialListTitle =
    language === "fr" ? "Liste des certifications" : "Credential list";

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader
            label={copy.qualificationsLabel}
            title={copy.certificationsTitle}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative aspect-[7/5] bg-secondary">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate preview`}
                  fill
                  sizes="(min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-text-bright">
                  {cert.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <SectionHeader
                label={copy.qualificationsLabel}
                title={credentialListTitle}
              />
            </div>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <Award
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-sea-blue)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-text-bright">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-8">
              <SectionHeader label={copy.academicLabel} title={copy.educationTitle} />
            </div>
            <div className="flex flex-col gap-4">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.degree}-${item.period}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <GraduationCap
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-emerald)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-text-bright">
                      {item.degree}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.institution}, {item.country}
                    </p>
                    <p className="text-xs text-text-subtle mt-0.5">
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-8">
              <SectionHeader
                label={copy.communicationLabel}
                title={copy.languagesTitle}
              />
            </div>
            <div className="flex flex-col gap-4">
              {languages.map((item, index) => (
                <motion.div
                  key={item.language}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <Globe
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-violet)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-text-bright">
                      {item.language}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.level}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
