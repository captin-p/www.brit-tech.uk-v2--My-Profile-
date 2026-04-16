"use client";

import { motion } from "framer-motion";
import {
  Network,
  Server,
  Camera,
  Wifi,
  Headphones,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { getProfileData } from "@/data/profile";
import { getSiteCopy } from "@/data/site-copy";

const iconMap: Record<string, LucideIcon> = {
  Network,
  Server,
  Camera,
  Wifi,
  Headphones,
  Palette,
};

const cardColours = [
  "var(--color-sea-blue)",
  "var(--color-orange)",
  "var(--color-emerald)",
  "var(--color-violet)",
  "var(--color-sea-blue)",
  "var(--color-orange)",
];

export default function ServicesSection() {
  const { language } = useLanguage();
  const services = getProfileData(language).services;
  const copy = getSiteCopy(language).home.services;

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
            labelColour="var(--color-orange)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const colour = cardColours[index % cardColours.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative p-6 rounded-lg border border-border bg-background transition-all duration-300"
                style={{ "--card-colour": colour } as React.CSSProperties}
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full opacity-70"
                  style={{ background: colour }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-md shrink-0 transition-opacity"
                    style={{
                      background: `color-mix(in oklch, ${colour} 12%, transparent)`,
                      border: `1px solid color-mix(in oklch, ${colour} 25%, transparent)`,
                    }}
                  >
                    {Icon && <Icon size={20} style={{ color: colour }} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-bright mb-2 text-sm">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
