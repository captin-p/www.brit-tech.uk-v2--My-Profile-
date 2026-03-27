import type { Language } from "@/lib/i18n";

const siteCopyByLanguage = {
  en: {
    nav: {
      links: [
        { href: "/", label: "Home" },
        { href: "/profile", label: "Profile" },
        { href: "/graphics", label: "Graphics" },
      ],
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
    },
    footer: {
      description:
        "Network infrastructure, systems support, and creative design delivering reliable solutions across sectors.",
      navigation: "Navigation",
      getInTouch: "Get In Touch",
      linkedInProfile: "LinkedIn Profile",
      rights: "All rights reserved.",
    },
    ctaBanners: {
      default: {
        title: "Ready to work together?",
        subtitle:
          "Whether you need reliable network deployment, systems support, CCTV installation, or creative design work, let's discuss how I can help.",
        primaryLabel: "Send a message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "View Profile",
        secondaryHref: "/profile",
      },
      profile: {
        title: "Let's discuss your project",
        subtitle:
          "Whether you need network infrastructure, systems support, or creative design, I bring expertise and execution.",
        primaryLabel: "Send a message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "View Graphics",
        secondaryHref: "/graphics",
      },
      graphics: {
        title: "Need design work?",
        subtitle:
          "Book covers, event banners, social media sets, branding, or website design - let's create something you are proud to share.",
        primaryLabel: "Discuss a project",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "View Profile",
        secondaryHref: "/profile",
      },
    },
    home: {
      hero: {
        ccnaBadge: "CCNA Certified",
        designBadge: "Graphic Designer",
        headingStart: "Building Reliable Networks,",
        headingMiddle: "Secure Systems",
        headingConnector: "and",
        headingEnd: "Scalable IT Solutions",
        summary:
          "Bright Konadu is a network infrastructure specialist with 6+ years of experience deploying enterprise networks, server environments, CCTV systems, and wireless infrastructure across education, healthcare, and commercial sectors.",
        profileCta: "View Profile",
        portfolioCta: "View Portfolio",
        contactCta: "Contact",
        scroll: "Scroll",
      },
      about: {
        label: "About",
        title: "Infrastructure Specialist. Founder. Creative.",
        profileCta: "Full profile",
        strengthsLabel: "Key Strengths",
        strengths: [
          "End-to-end project delivery from scoping through live deployment.",
          "6+ years across education, healthcare, and commercial sectors.",
          "CCNA certified with strong Cisco and Ubiquiti experience.",
          "Founder with proven client management and business ownership.",
          "Technical depth combined with creative design capability.",
          "Strong communicator who explains technical concepts clearly.",
        ],
      },
      services: {
        label: "Core Services",
        title: "What I Deliver",
        subtitle:
          "From infrastructure planning to creative design, I bring technical depth and practical execution to every engagement.",
      },
      experienceHighlights: {
        label: "Featured Experience",
        title: "Work That Defines My Track Record",
        subtitle:
          "Key projects and deployments from 6+ years across universities, hospitals, and commercial clients.",
        profileCta: "Full profile",
        highlights: [
          {
            sector: "University",
            company: "AAMUSTED",
            title: "Campus-Wide Infrastructure Overhaul",
            description:
              "Deployed 30+ Ubiquiti access points, 5 M5 point-to-point links, and a LAN/Wi-Fi network for a 1,500-seat lecture block. Managed infrastructure for 500+ users with 99.5% uptime.",
            tags: ["Ubiquiti UniFi", "Windows Server", "Active Directory"],
          },
          {
            sector: "Healthcare",
            company: "Church of Christ Mission Hospital",
            title: "Hospital LAN & Wi-Fi Build",
            description:
              "Designed and implemented a complete hospital network from scratch, including structured cabling, Wi-Fi, and core network equipment for critical care operations.",
            tags: ["LAN Design", "Structured Cabling", "Healthcare IT"],
          },
          {
            sector: "Education (Multi-Site)",
            company: "Bright Ko Technology",
            title: "CCTV & Network Deployments",
            description:
              "Delivered end-to-end CCTV, Wi-Fi, and LAN solutions for multiple schools, including a 32-camera security system serving 500+ students and staff.",
            tags: ["CCTV", "Network Design", "Project Delivery"],
          },
          {
            sector: "Business",
            company: "Seneps Data Solutions",
            title: "SME IT & Network Support",
            description:
              "Improved system performance by 40% through LAN design, network configuration, firewall management, and IT security support for SME clients.",
            tags: ["LAN Infrastructure", "Firewall", "IT Security"],
          },
        ],
      },
      featuredTeaser: {
        cards: [
          {
            key: "profile",
            label: "Profile",
            href: "/profile",
            title: "Full Professional Profile",
            description:
              "Explore the complete career timeline, skills breakdown, certifications, education, and key achievements.",
            cta: "View Profile",
          },
          {
            key: "graphics",
            label: "Graphics",
            href: "/graphics",
            title: "Design Portfolio",
            description:
              "Browse graphic design, branding, print marketing, and web design projects spanning 8+ years of creative work.",
            cta: "View Portfolio",
          },
        ],
      },
    },
    graphics: {
      hero: {
        label: "Design Portfolio",
        title: "Graphic Design & Creative Work",
        summary:
          "A curated selection of graphic design, branding, print marketing, and web design projects. From book covers and event collateral to website concepts and brand identity work, this portfolio reflects 8+ years of freelance creative practice using Adobe Photoshop and Canva.",
      },
      portfolio: {
        categoryAriaLabel: "Portfolio categories",
        caseStudyToggle: "View case study",
        problemLabel: "Problem",
        approachLabel: "Approach",
        outcomeLabel: "Outcome",
      },
      featuredCaseStudies: {
        label: "Deep Dives",
        title: "Featured Case Studies",
        subtitle:
          "A closer look at selected projects from brief through delivered outcome.",
        caseStudyLabel: "Case Study",
        problemLabel: "The Problem",
        approachLabel: "The Approach",
        outcomeLabel: "The Outcome",
      },
      webDesign: {
        label: "Web Design",
        title: "I also create websites & digital layouts",
        subtitle:
          "Beyond print and branding, I design web experiences for small businesses, schools, and service providers - clean, accessible, and purpose-built.",
        features: [
          {
            title: "Responsive Layouts",
            description:
              "Designs built mobile-first and optimised for all screen sizes, from phones through large desktop displays.",
          },
          {
            title: "Conversion-Focused",
            description:
              "Landing pages and business websites structured to guide visitors toward clear calls to action.",
          },
          {
            title: "Developer-Ready",
            description:
              "Clean mockups with strong spacing, typography, and component structure ready for development handoff.",
          },
        ],
      },
    },
  },
  fr: {
    nav: {
      links: [
        { href: "/", label: "Accueil" },
        { href: "/profile", label: "Profil" },
        { href: "/graphics", label: "Design" },
      ],
      contact: "Contact",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      mainNavigation: "Navigation principale",
    },
    footer: {
      description:
        "Infrastructure reseau, support systeme et design creatif au service de solutions fiables pour plusieurs secteurs.",
      navigation: "Navigation",
      getInTouch: "Restons en contact",
      linkedInProfile: "Profil LinkedIn",
      rights: "Tous droits reserves.",
    },
    ctaBanners: {
      default: {
        title: "Pret a travailler ensemble ?",
        subtitle:
          "Que vous ayez besoin d'un deploiement reseau fiable, de support systeme, d'une installation CCTV ou d'un travail creatif, parlons de la meilleure facon de vous aider.",
        primaryLabel: "Envoyer un message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "Voir le profil",
        secondaryHref: "/profile",
      },
      profile: {
        title: "Parlons de votre projet",
        subtitle:
          "Que vous ayez besoin d'infrastructure reseau, de support systeme ou de design creatif, j'apporte expertise et execution.",
        primaryLabel: "Envoyer un message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "Voir le design",
        secondaryHref: "/graphics",
      },
      graphics: {
        title: "Besoin d'un designer ?",
        subtitle:
          "Couvertures de livres, bannieres, packs reseaux sociaux, branding ou web design - creons ensemble un resultat dont vous serez fier.",
        primaryLabel: "Parler du projet",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "Voir le profil",
        secondaryHref: "/profile",
      },
    },
    home: {
      hero: {
        ccnaBadge: "Certifie CCNA",
        designBadge: "Graphiste",
        headingStart: "Des reseaux fiables,",
        headingMiddle: "des systemes securises",
        headingConnector: "et",
        headingEnd: "des solutions IT evolutives",
        summary:
          "Bright Konadu est un specialiste en infrastructure reseau avec plus de 6 ans d'experience dans le deploiement de reseaux d'entreprise, d'environnements serveurs, de systemes CCTV et d'infrastructures sans fil pour l'education, la sante et les entreprises.",
        profileCta: "Voir le profil",
        portfolioCta: "Voir le portfolio",
        contactCta: "Contact",
        scroll: "Defiler",
      },
      about: {
        label: "A propos",
        title: "Infrastructure. Entrepreneuriat. Creation.",
        profileCta: "Profil complet",
        strengthsLabel: "Points forts",
        strengths: [
          "Livraison de projets de bout en bout, du cadrage a la mise en production.",
          "Plus de 6 ans d'experience dans l'education, la sante et le secteur prive.",
          "Certification CCNA avec forte experience Cisco et Ubiquiti.",
          "Fondateur avec une vraie experience en relation client et gestion d'activite.",
          "Profondeur technique combinee a une capacite creative solide.",
          "Tres bon communicant, capable d'expliquer clairement les sujets techniques.",
        ],
      },
      services: {
        label: "Services cles",
        title: "Ce que je livre",
        subtitle:
          "De la planification d'infrastructure au design creatif, j'apporte profondeur technique et execution concrete a chaque mission.",
      },
      experienceHighlights: {
        label: "Experience marquee",
        title: "Des projets qui definissent mon parcours",
        subtitle:
          "Des deploiements et projets cles issus de plus de 6 ans d'experience entre universites, hopitaux et clients professionnels.",
        profileCta: "Profil complet",
        highlights: [
          {
            sector: "Universite",
            company: "AAMUSTED",
            title: "Refonte d'infrastructure a l'echelle du campus",
            description:
              "Deploiement de plus de 30 points d'acces Ubiquiti, 5 liaisons M5 point a point et d'un reseau LAN/Wi-Fi pour un amphitheatre de 1 500 places. Gestion d'infrastructure pour plus de 500 utilisateurs avec 99,5 % de disponibilite.",
            tags: ["Ubiquiti UniFi", "Windows Server", "Active Directory"],
          },
          {
            sector: "Sante",
            company: "Church of Christ Mission Hospital",
            title: "Construction du LAN et du Wi-Fi de l'hopital",
            description:
              "Conception et mise en oeuvre complete du reseau de l'hopital, incluant cablage structure, Wi-Fi et equipements reseau pour les activites de soins critiques.",
            tags: ["Conception LAN", "Cablage structure", "IT sante"],
          },
          {
            sector: "Education multi-site",
            company: "Bright Ko Technology",
            title: "Deploiements CCTV et reseau",
            description:
              "Livraison de solutions CCTV, Wi-Fi et LAN de bout en bout pour plusieurs ecoles, dont un systeme de securite de 32 cameras au service de plus de 500 eleves et collaborateurs.",
            tags: ["CCTV", "Conception reseau", "Gestion de projet"],
          },
          {
            sector: "Entreprise",
            company: "Seneps Data Solutions",
            title: "Support IT et reseau pour PME",
            description:
              "Amelioration des performances systeme de 40 % grace a la conception LAN, la configuration reseau, la gestion firewall et le support securite pour des PME.",
            tags: ["Infrastructure LAN", "Firewall", "Securite IT"],
          },
        ],
      },
      featuredTeaser: {
        cards: [
          {
            key: "profile",
            label: "Profil",
            href: "/profile",
            title: "Profil professionnel complet",
            description:
              "Consultez tout le parcours, les competences, les certifications, la formation et les realisations cles.",
            cta: "Voir le profil",
          },
          {
            key: "graphics",
            label: "Design",
            href: "/graphics",
            title: "Portfolio design",
            description:
              "Decouvrez des projets de design graphique, branding, print marketing et web design couvrant plus de 8 ans de pratique creative.",
            cta: "Voir le portfolio",
          },
        ],
      },
    },
    graphics: {
      hero: {
        label: "Portfolio design",
        title: "Design graphique et travail creatif",
        summary:
          "Une selection de projets en design graphique, branding, print marketing et web design. Des couvertures de livres et supports d'evenement jusqu'aux concepts de site et aux identites de marque, ce portfolio reflete plus de 8 ans de pratique freelance avec Adobe Photoshop et Canva.",
      },
      portfolio: {
        categoryAriaLabel: "Categories du portfolio",
        caseStudyToggle: "Voir l'etude de cas",
        problemLabel: "Probleme",
        approachLabel: "Approche",
        outcomeLabel: "Resultat",
      },
      featuredCaseStudies: {
        label: "Analyses",
        title: "Etudes de cas mises en avant",
        subtitle:
          "Un regard plus detaille sur une selection de projets, du brief au resultat final.",
        caseStudyLabel: "Etude de cas",
        problemLabel: "Le probleme",
        approachLabel: "L'approche",
        outcomeLabel: "Le resultat",
      },
      webDesign: {
        label: "Web design",
        title: "Je cree aussi des sites et interfaces digitales",
        subtitle:
          "Au-dela du print et du branding, je conçois des experiences web pour les petites entreprises, les ecoles et les prestataires de services - propres, accessibles et utiles.",
        features: [
          {
            title: "Layouts responsives",
            description:
              "Des designs penses mobile-first et optimises pour tous les formats d'ecran, du smartphone au grand desktop.",
          },
          {
            title: "Oriente conversion",
            description:
              "Des landing pages et sites business structures pour guider les visiteurs vers des appels a l'action clairs.",
          },
          {
            title: "Pret pour les developpeurs",
            description:
              "Des maquettes propres avec une bonne gestion des espaces, de la typographie et des composants, pretes pour la phase de developpement.",
          },
        ],
      },
    },
  },
} as const;

export function getSiteCopy(language: Language) {
  return siteCopyByLanguage[language];
}
