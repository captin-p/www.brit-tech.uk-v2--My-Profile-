"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Wrench } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import type { Language } from "@/lib/i18n";

const galleryCopy = {
  en: {
    label: "Field Work",
    title: "Work-Site Installation Media",
    subtitle:
      "A closer look at practical installation work: preparing hardware, routing cables, terminating wall points, and checking equipment before deployment.",
    photosTitle: "Installation Photos",
    videosTitle: "Site Clips",
  },
  fr: {
    label: "Terrain",
    title: "Medias d'installation sur site",
    subtitle:
      "Un apercu du travail pratique: preparation du materiel, passage des cables, raccordement mural et verification des equipements avant deploiement.",
    photosTitle: "Photos d'installation",
    videosTitle: "Clips du site",
  },
} satisfies Record<
  Language,
  {
    label: string;
    title: string;
    subtitle: string;
    photosTitle: string;
    videosTitle: string;
  }
>;

const photos = [
  {
    src: "/images/work-site/rack-panel-prep.jpg",
    title: {
      en: "Rack panel preparation",
      fr: "Preparation du panneau rack",
    },
    description: {
      en: "Preparing mounting points and hardware for installation.",
      fr: "Preparation des supports et du materiel avant installation.",
    },
    alt: {
      en: "Hands preparing a rack panel and installation hardware on site.",
      fr: "Preparation d'un panneau rack et du materiel d'installation sur site.",
    },
  },
  {
    src: "/images/work-site/hardware-mounting.jpg",
    title: {
      en: "Hardware mounting",
      fr: "Fixation du materiel",
    },
    description: {
      en: "Drilling and fastening equipment before final placement.",
      fr: "Percage et fixation des equipements avant la mise en place finale.",
    },
    alt: {
      en: "Technician drilling into a mounting surface for equipment placement.",
      fr: "Technicien percant une surface pour fixer un equipement.",
    },
  },
  {
    src: "/images/work-site/wall-cabling-run.jpg",
    title: {
      en: "Wall cabling run",
      fr: "Passage des cables",
    },
    description: {
      en: "Structured cabling routed from the wall-mounted distribution point.",
      fr: "Cablage structure depuis un point de distribution mural.",
    },
    alt: {
      en: "Network cables routed from a wall-mounted distribution point.",
      fr: "Cables reseau sortant d'un point de distribution mural.",
    },
  },
  {
    src: "/images/work-site/wall-outlet-termination.jpg",
    title: {
      en: "Outlet termination",
      fr: "Raccordement mural",
    },
    description: {
      en: "Cable termination and wall outlet work during site setup.",
      fr: "Raccordement des cables et prise murale pendant l'installation.",
    },
    alt: {
      en: "Network cable termination work at a wall outlet.",
      fr: "Travail de raccordement reseau au niveau d'une prise murale.",
    },
  },
  {
    src: "/images/work-site/network-power-adapters.jpg",
    title: {
      en: "Power and adapters",
      fr: "Alimentation et adaptateurs",
    },
    description: {
      en: "Adapters, patch leads, and power accessories staged for configuration.",
      fr: "Adaptateurs, cordons et accessoires d'alimentation prepares.",
    },
    alt: {
      en: "Network adapters, patch leads, and power accessories on a table.",
      fr: "Adaptateurs reseau, cordons et accessoires d'alimentation sur une table.",
    },
  },
  {
    src: "/images/work-site/equipment-kit.jpg",
    title: {
      en: "Equipment kit",
      fr: "Kit d'equipement",
    },
    description: {
      en: "Network equipment and accessories prepared for deployment.",
      fr: "Equipements reseau et accessoires prets pour le deploiement.",
    },
    alt: {
      en: "Network equipment and accessories prepared for site deployment.",
      fr: "Equipements reseau et accessoires prepares pour le deploiement sur site.",
    },
  },
] satisfies Array<{
  src: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  alt: Record<Language, string>;
}>;

const videos = [
  {
    src: "/videos/work-site/rack-preparation.mp4",
    poster: "/images/work-site/rack-panel-prep.jpg",
    title: {
      en: "Rack preparation",
      fr: "Preparation rack",
    },
  },
  {
    src: "/videos/work-site/cabling-installation.mp4",
    poster: "/images/work-site/wall-cabling-run.jpg",
    title: {
      en: "Cabling installation",
      fr: "Installation cablage",
    },
  },
  {
    src: "/videos/work-site/equipment-check.mp4",
    poster: "/images/work-site/equipment-kit.jpg",
    title: {
      en: "Equipment check",
      fr: "Verification du materiel",
    },
  },
] satisfies Array<{
  src: string;
  poster: string;
  title: Record<Language, string>;
}>;

export default function WorkSiteGallery() {
  const { language } = useLanguage();
  const copy = galleryCopy[language];

  return (
    <section className="py-16 px-6 border-y border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)] gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={16} className="text-primary" />
              <h3 className="text-sm font-semibold text-text-bright">
                {copy.photosTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <motion.article
                  key={photo.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] bg-secondary">
                    <Image
                      src={photo.src}
                      alt={photo.alt[language]}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-text-bright">
                      {photo.title[language]}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {photo.description[language]}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play size={16} className="text-primary" />
              <h3 className="text-sm font-semibold text-text-bright">
                {copy.videosTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {videos.map((video, index) => (
                <motion.article
                  key={video.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.12 + index * 0.05 }}
                  className="overflow-hidden rounded-lg border border-border bg-card"
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="block aspect-video w-full bg-black object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-text-bright">
                      {video.title[language]}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
