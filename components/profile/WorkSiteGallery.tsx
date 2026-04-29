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
    src: "/images/work-site/cable-termination-closeup.jpg",
    title: {
      en: "Cable termination",
      fr: "Raccordement des cables",
    },
    description: {
      en: "Hands-on network cable preparation before final testing.",
      fr: "Preparation pratique des cables reseau avant les tests finaux.",
    },
    alt: {
      en: "Close-up of network cable termination work during an installation.",
      fr: "Gros plan du raccordement de cables reseau pendant une installation.",
    },
  },
  {
    src: "/images/work-site/rack-cabling-run.jpg",
    title: {
      en: "Rack cabling",
      fr: "Cablage rack",
    },
    description: {
      en: "Structured cabling routed into the network rack.",
      fr: "Cablage structure raccorde dans le rack reseau.",
    },
    alt: {
      en: "Network cables connected to rack-mounted switching equipment.",
      fr: "Cables reseau connectes a un equipement installe en rack.",
    },
  },
  {
    src: "/images/work-site/wall-network-point.jpg",
    title: {
      en: "Wall network point",
      fr: "Point reseau mural",
    },
    description: {
      en: "Surface-mounted network point installed for endpoint connectivity.",
      fr: "Point reseau mural installe pour connecter les terminaux.",
    },
    alt: {
      en: "Wall-mounted network box and cable on a finished installation.",
      fr: "Boitier reseau mural et cable sur une installation terminee.",
    },
  },
  {
    src: "/images/work-site/cctv-camera-mounting.jpg",
    title: {
      en: "CCTV mounting",
      fr: "Fixation CCTV",
    },
    description: {
      en: "Camera positioning and mounting during a security installation.",
      fr: "Positionnement et fixation de camera pendant une installation de securite.",
    },
    alt: {
      en: "Technician mounting CCTV hardware from a ladder on site.",
      fr: "Technicien fixant du materiel CCTV depuis une echelle sur site.",
    },
  },
  {
    src: "/images/work-site/projector-av-installation.jpg",
    title: {
      en: "AV installation",
      fr: "Installation AV",
    },
    description: {
      en: "Projector and classroom display equipment mounted and aligned.",
      fr: "Projecteur et equipement d'affichage de salle installes et alignes.",
    },
    alt: {
      en: "Technician installing classroom projector equipment near the ceiling.",
      fr: "Technicien installant un projecteur de salle pres du plafond.",
    },
  },
  {
    src: "/images/work-site/field-network-configuration.jpg",
    title: {
      en: "Field configuration",
      fr: "Configuration terrain",
    },
    description: {
      en: "On-site configuration and checks before service handover.",
      fr: "Configuration et controles sur site avant la remise en service.",
    },
    alt: {
      en: "Technician configuring network equipment with a laptop on site.",
      fr: "Technicien configurant un equipement reseau avec un ordinateur sur site.",
    },
  },
  {
    src: "/images/work-site/fiber-link-testing.jpg",
    title: {
      en: "Fiber link testing",
      fr: "Test de liaison fibre",
    },
    description: {
      en: "Checking fiber patch leads with a visual fault locator.",
      fr: "Verification des cordons fibre avec un localisateur visuel de defaut.",
    },
    alt: {
      en: "Fiber patch leads connected to a visual fault locator during testing.",
      fr: "Cordons fibre connectes a un localisateur visuel de defaut pendant un test.",
    },
  },
  {
    src: "/images/work-site/projector-screen-test.jpg",
    title: {
      en: "Projection test",
      fr: "Test de projection",
    },
    description: {
      en: "Classroom display screen checked after projector setup.",
      fr: "Ecran de salle verifie apres l'installation du projecteur.",
    },
    alt: {
      en: "Projected Windows desktop on a classroom screen during testing.",
      fr: "Bureau Windows projete sur un ecran de salle pendant les tests.",
    },
  },
  {
    src: "/images/work-site/ladder-cable-routing.jpg",
    title: {
      en: "Ceiling cable route",
      fr: "Passage de cable plafond",
    },
    description: {
      en: "Routing cabling at ceiling height with ladder support.",
      fr: "Passage des cables en hauteur avec appui sur echelle.",
    },
    alt: {
      en: "Technician routing cables near the ceiling from a ladder.",
      fr: "Technicien passant des cables pres du plafond depuis une echelle.",
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
  {
    src: "/videos/work-site/projector-installation.mp4",
    poster: "/images/work-site/projector-screen-test.jpg",
    title: {
      en: "Projector installation",
      fr: "Installation projecteur",
    },
  },
  {
    src: "/videos/work-site/rack-site-clip.mp4",
    poster: "/images/work-site/rack-cabling-run.jpg",
    title: {
      en: "Rack site clip",
      fr: "Clip rack sur site",
    },
  },
  {
    src: "/videos/work-site/field-installation-clip.mp4",
    poster: "/images/work-site/ladder-cable-routing.jpg",
    title: {
      en: "Field installation",
      fr: "Installation terrain",
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
