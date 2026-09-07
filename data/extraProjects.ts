import type { Language } from "@/lib/i18n";

const extraProjects = {
  en: [
    {
      title: "TouteGestion",
      type: "Business Management Platform",
      description:
        "My multi-product business platform for schools, accounting, HR & payroll, salons, hospitality, documents, payments, and platform administration, designed for organisations in Ghana, France, and beyond.",
      repoUrl: "https://github.com/captin-p/toutegestion",
      liveUrl: "https://toutegestion.fr",
      stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "Multi-tenant SaaS"],
    },
  ],
  fr: [
    {
      title: "TouteGestion",
      type: "Plateforme de gestion d'entreprise",
      description:
        "Ma plateforme multi-produit pour ecoles, comptabilite, RH & paie, salons, hotellerie, documents, paiements et administration centrale, concue pour des organisations au Ghana, en France et au-dela.",
      repoUrl: "https://github.com/captin-p/toutegestion",
      liveUrl: "https://toutegestion.fr",
      stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "SaaS multi-tenant"],
    },
  ],
} as const;

export function getExtraProjects(language: Language) {
  return extraProjects[language];
}
