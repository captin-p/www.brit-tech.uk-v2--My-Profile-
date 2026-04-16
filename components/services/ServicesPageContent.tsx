"use client";

import { motion } from "framer-motion";
import {
  Camera,
  CheckCircle2,
  Headphones,
  Mail,
  MessageCircle,
  Monitor,
  Network,
  Palette,
  Server,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { getShowcaseData } from "@/data/showcase";

const iconMap: Record<string, LucideIcon> = {
  Network,
  Camera,
  Monitor,
  Palette,
  Headphones,
  Server,
};

const colours = [
  "var(--color-sea-blue)",
  "var(--color-orange)",
  "var(--color-emerald)",
  "var(--color-violet)",
];

export default function ServicesPageContent() {
  const { language } = useLanguage();
  const profile = getProfileData(language).profile;
  const copy = getShowcaseData(language);
  const services = copy.servicesPage;

  return (
    <>
      <section className="pt-32 pb-16 px-6 border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {services.label}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-text-bright leading-tight text-balance mb-5">
              {services.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {services.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={copy.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                {services.primaryLabel}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={16} />
                {services.secondaryLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <SectionHeader
              label={services.processLabel}
              title={services.processTitle}
              labelColour="var(--color-emerald)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {services.process.map((step, index) => {
              const colour = colours[index % colours.length];

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: colour }}
                  >
                    0{index + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-text-bright mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <SectionHeader
              label={services.servicesLabel}
              title={services.servicesTitle}
              labelColour="var(--color-orange)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? CheckCircle2;
              const colour = colours[index % colours.length];

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-lg border border-border bg-background p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-2.5 rounded-md shrink-0 border"
                      style={{
                        color: colour,
                        borderColor: `color-mix(in oklch, ${colour} 25%, transparent)`,
                        background: `color-mix(in oklch, ${colour} 10%, transparent)`,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text-bright">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: colour }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
