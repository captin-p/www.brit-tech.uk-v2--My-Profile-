import type { Language } from "@/lib/i18n";

const extraProjects = {
  en: [
    {
      title: "TouteGestion",
      type: "Multi-product SaaS Platform",
      description:
        "A multi-tenant business management platform bringing together school management, accounting, HR & payroll, hospitality, salon/services, documents, payments and central platform administration. Built for organisations in Ghana, France and wider international markets.",
      repoUrl: "",
      liveUrl: "https://toutegestion.fr",
      stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "Multi-tenant SaaS"],
    },
    {
      title: "TouteGestion School Management",
      type: "Education SaaS",
      description:
        "A production school-management application for multiple independent school tenants, covering students, teachers, assessments, fees, accounting integration, HR links, inventory, reporting, help/support and organisation-level access controls.",
      repoUrl: "",
      liveUrl: "https://sms.toutegestion.fr",
      stack: ["Next.js", "Supabase", "Multi-tenant", "School ERP", "Reporting"],
    },
    {
      title: "TouteGestion Accounting",
      type: "Financial Management SaaS",
      description:
        "An international-ready accounting application covering journals, cash books, funding-source allocation, bills and claims, treasury, reconciliation, financial reporting, imprest, student credits, role separation and audit-focused workflows.",
      repoUrl: "",
      stack: ["Accounting", "RBAC", "Audit", "Multi-currency", "SaaS"],
    },
    {
      title: "TouteGestion HR & Payroll",
      type: "HR & Payroll SaaS",
      description:
        "A standalone HR and payroll product for employee records, payroll processing, loans, configurable pay setup, country/currency rules, statutory updates, bank advice and role-based organisational workflows.",
      repoUrl: "",
      stack: ["HRIS", "Payroll", "RBAC", "Multi-country", "Reporting"],
    },
    {
      title: "Ghana Youth United France",
      type: "Community Platform",
      description:
        "A digital platform for Ghana Youth United France with community information, events, cultural updates, membership communication and public-facing resources for Ghanaians living in France.",
      repoUrl: "",
      liveUrl: "https://ghanayouthunited.fr",
      stack: ["Next.js", "Community", "Events", "Responsive UI"],
    },
    {
      title: "BritTech Professional Profile",
      type: "Portfolio & Career Site",
      description:
        "My professional portfolio for IT infrastructure, network engineering and field support, featuring bilingual profile content, work-site media, project showcases, services and downloadable CV/profile documents.",
      repoUrl: "https://github.com/captin-p/www.brit-tech.uk-v2--My-Profile-",
      liveUrl: "https://brit-tech.uk",
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "ProWIFETA Website",
      type: "Association Website",
      description:
        "A responsive website for a women-in-fashion education and training association, with mission content, leadership, gallery, events, membership calls-to-action and public updates.",
      repoUrl: "https://github.com/captin-p/prowifeta",
      liveUrl: "https://www.prowifeta.com",
      stack: ["React", "JavaScript", "Responsive UI", "SEO"],
    },
    {
      title: "TouteGestion Hospitality",
      type: "Hospitality Operations SaaS",
      description:
        "An operations platform for hospitality teams, including spreadsheet-driven data import, room/cleaning workflows, assignment management and operational reporting within the wider TouteGestion ecosystem.",
      repoUrl: "",
      stack: ["Hospitality", "Operations", "Workflow", "SaaS"],
    },
    {
      title: "TouteGestion Salon & Services",
      type: "Local Services Marketplace",
      description:
        "A salon and local-services product evolving from appointment and customer management into a broader marketplace for beauty, wellness and other local service providers.",
      repoUrl: "",
      stack: ["Marketplace", "Appointments", "Services", "SaaS"],
    },
  ],
  fr: [
    {
      title: "TouteGestion",
      type: "Plateforme SaaS multi-produit",
      description:
        "Plateforme de gestion multi-tenant reunissant gestion scolaire, comptabilite, RH & paie, hotellerie, salons/services, documents, paiements et administration centrale. Pensee pour les organisations au Ghana, en France et sur d'autres marches internationaux.",
      repoUrl: "",
      liveUrl: "https://toutegestion.fr",
      stack: ["TypeScript", "Next.js", "Supabase", "Vercel", "SaaS multi-tenant"],
    },
    {
      title: "TouteGestion School Management",
      type: "SaaS education",
      description:
        "Application de gestion scolaire en production pour plusieurs ecoles independantes, couvrant eleves, enseignants, evaluations, frais, integration comptable, RH, stock, rapports, aide/support et controle des acces par organisation.",
      repoUrl: "",
      liveUrl: "https://sms.toutegestion.fr",
      stack: ["Next.js", "Supabase", "Multi-tenant", "ERP scolaire", "Reporting"],
    },
    {
      title: "TouteGestion Accounting",
      type: "SaaS de gestion financiere",
      description:
        "Application comptable concue pour un usage international avec journaux, livres de caisse, allocation des sources de financement, factures et demandes, tresorerie, rapprochement, reporting financier, imprest, credits eleves, separation des roles et piste d'audit.",
      repoUrl: "",
      stack: ["Comptabilite", "RBAC", "Audit", "Multi-devise", "SaaS"],
    },
    {
      title: "TouteGestion HR & Payroll",
      type: "SaaS RH & paie",
      description:
        "Produit RH et paie autonome pour dossiers employes, traitement de la paie, prets, parametrage flexible, regles pays/devise, mises a jour legales, bank advice et workflows organisationnels bases sur les roles.",
      repoUrl: "",
      stack: ["HRIS", "Paie", "RBAC", "Multi-pays", "Reporting"],
    },
    {
      title: "Ghana Youth United France",
      type: "Plateforme communautaire",
      description:
        "Plateforme digitale de Ghana Youth United France avec informations communautaires, evenements, actualites culturelles, communication membres et ressources publiques pour les Ghaneens vivant en France.",
      repoUrl: "",
      liveUrl: "https://ghanayouthunited.fr",
      stack: ["Next.js", "Communaute", "Evenements", "UI responsive"],
    },
    {
      title: "Profil professionnel BritTech",
      type: "Portfolio & carriere",
      description:
        "Mon portfolio professionnel axe infrastructure IT, reseau et support terrain, avec contenu bilingue, medias d'intervention, projets, services et CV/profil telechargeable.",
      repoUrl: "https://github.com/captin-p/www.brit-tech.uk-v2--My-Profile-",
      liveUrl: "https://brit-tech.uk",
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Site ProWIFETA",
      type: "Site d'association",
      description:
        "Site responsive pour une association de femmes dans l'education et la formation en mode, avec mission, leadership, galerie, evenements, adhesion et actualites publiques.",
      repoUrl: "https://github.com/captin-p/prowifeta",
      liveUrl: "https://www.prowifeta.com",
      stack: ["React", "JavaScript", "UI responsive", "SEO"],
    },
    {
      title: "TouteGestion Hospitality",
      type: "SaaS operations hotellerie",
      description:
        "Plateforme d'operations pour equipes hotellerie avec import de donnees Excel, workflows chambres/nettoyage, gestion des affectations et reporting operationnel dans l'ecosysteme TouteGestion.",
      repoUrl: "",
      stack: ["Hotellerie", "Operations", "Workflow", "SaaS"],
    },
    {
      title: "TouteGestion Salon & Services",
      type: "Marketplace de services locaux",
      description:
        "Produit salon et services locaux evoluant de la prise de rendez-vous et gestion clients vers une marketplace plus large pour beaute, bien-etre et autres prestataires locaux.",
      repoUrl: "",
      stack: ["Marketplace", "Rendez-vous", "Services", "SaaS"],
    },
  ],
} as const;

export function getExtraProjects(language: Language) {
  return extraProjects[language];
}
