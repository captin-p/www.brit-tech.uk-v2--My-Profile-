"use client";

import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import type { Language } from "@/lib/i18n";

const copy = {
  en: {
    label: "Field Work",
    title: "France Field Engineering",
    subtitle:
      "Individual photos from hands-on network infrastructure, data-centre support, rack work, connectivity checks, and field preparation in France. Device labels and serial information are obscured where visible.",
    photosTitle: "Field-work photos",
    videosTitle: "Site clips",
  },
  fr: {
    label: "Terrain",
    title: "Interventions terrain en France",
    subtitle:
      "Photos individuelles de travaux reseau, support data centre, racks, controles de connectivite et preparation terrain en France. Les etiquettes et numeros de serie visibles sont masques.",
    photosTitle: "Photos terrain",
    videosTitle: "Clips du site",
  },
} satisfies Record<Language, Record<string, string>>;

const sprite = "/images/work-site/france-fieldwork-2026.jpg";

const photos = [
  {
    title: { en: "Data Centre Rack Work", fr: "Travail sur rack data centre" },
    description: { en: "Hands-on support beside live rack infrastructure.", fr: "Support pratique a proximite d'infrastructures rack en production." },
    col: 0,
    row: 0,
  },
  {
    title: { en: "Data Centre Aisle", fr: "Allee data centre" },
    description: { en: "On-site infrastructure support in a server environment.", fr: "Support infrastructure sur site dans un environnement serveurs." },
    col: 1,
    row: 0,
  },
  {
    title: { en: "Nokia / Infoblox Connectivity", fr: "Connectivite Nokia / Infoblox" },
    description: { en: "ONT/router connectivity and cabling checks with sensitive labels obscured.", fr: "Controles de connectivite et cablage ONT/routeur, etiquettes sensibles masquees." },
    col: 2,
    row: 0,
  },
  {
    title: { en: "Nokia ONT Pair", fr: "Paire d'ONT Nokia" },
    description: { en: "Network device installation and physical connectivity verification.", fr: "Installation d'equipements reseau et verification de la connectivite physique." },
    col: 3,
    row: 0,
  },
  {
    title: { en: "Field Toolkit", fr: "Kit terrain" },
    description: { en: "Cabling, adapters, console leads, test tools, and installation accessories.", fr: "Cablage, adaptateurs, cables console, outils de test et accessoires d'installation." },
    col: 4,
    row: 0,
  },
  {
    title: { en: "Network Installation Tools", fr: "Outils d'installation reseau" },
    description: { en: "Prepared equipment for structured cabling and field intervention.", fr: "Materiel prepare pour cablage structure et intervention terrain." },
    col: 0,
    row: 1,
  },
  {
    title: { en: "Rack PDU & Cabling", fr: "PDU et cablage rack" },
    description: { en: "Rack-mounted power distribution, servers, and managed cable runs.", fr: "Distribution electrique en rack, serveurs et cheminement de cables organise." },
    col: 1,
    row: 1,
  },
  {
    title: { en: "Rack & Server Support", fr: "Support rack et serveurs" },
    description: { en: "Server and network equipment support inside a data-centre rack.", fr: "Support serveurs et equipements reseau dans un rack de data centre." },
    col: 2,
    row: 1,
  },
  {
    title: { en: "Infrastructure Cabinet", fr: "Baie infrastructure" },
    description: { en: "On-site work around densely populated server and network cabinets.", fr: "Intervention sur des baies serveurs et reseau fortement equipees." },
    col: 3,
    row: 1,
  },
  {
    title: { en: "On-site Data Centre Support", fr: "Support data centre sur site" },
    description: { en: "Field engineering support in a secured infrastructure environment.", fr: "Support d'ingenierie terrain dans un environnement d'infrastructure securise." },
    col: 4,
    row: 1,
  },
] as const;

const videos = [
  { src: "/videos/work-site/rack-preparation.mp4", poster: "/images/work-site/rack-panel-prep.jpg", title: { en: "Rack preparation", fr: "Preparation rack" } },
  { src: "/videos/work-site/cabling-installation.mp4", poster: "/images/work-site/wall-cabling-run.jpg", title: { en: "Cabling installation", fr: "Installation cablage" } },
  { src: "/videos/work-site/equipment-check.mp4", poster: "/images/work-site/equipment-kit.jpg", title: { en: "Equipment check", fr: "Verification du materiel" } },
] as const;

export default function WorkSiteGallery() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="py-16 px-6 border-y border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeader label={t.label} title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Camera size={16} className="text-primary" />
          <h3 className="text-sm font-semibold text-text-bright">{t.photosTitle}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.article
              key={`${photo.col}-${photo.row}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.035 }}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div
                role="img"
                aria-label={photo.title[language]}
                className="aspect-[4/3] bg-no-repeat transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${sprite})`,
                  backgroundSize: "500% 200%",
                  backgroundPosition: `${photo.col * 25}% ${photo.row * 100}%`,
                }}
              />
              <div className="p-4">
                <h4 className="text-sm font-semibold text-text-bright">{photo.title[language]}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{photo.description[language]}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-12 mb-5">
          <Play size={16} className="text-primary" />
          <h3 className="text-sm font-semibold text-text-bright">{t.videosTitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <article key={video.src} className="overflow-hidden rounded-xl border border-border bg-card">
              <video controls playsInline preload="metadata" poster={video.poster} className="block aspect-video w-full bg-black object-cover">
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-4 text-sm font-semibold text-text-bright">{video.title[language]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
