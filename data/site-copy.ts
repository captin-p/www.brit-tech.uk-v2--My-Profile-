import type { Language } from "@/lib/i18n";

const siteCopyByLanguage = {
  en: {
    nav: {
      links: [
        { href: "/", label: "Home" },
        { href: "/profile", label: "Profile" },
        { href: "/services", label: "Services" },
        { href: "/graphics", label: "Graphics" },
        { href: "/contact", label: "Contact" },
      ],
      contact: "Email",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
    },
    footer: {
      description:
        "IT infrastructure, network support, systems administration, field engineering, and digital project delivery.",
      navigation: "Navigation",
      getInTouch: "Get In Touch",
      linkedInProfile: "LinkedIn Profile",
      githubProfile: "GitHub Profile",
      rights: "All rights reserved.",
    },
    ctaBanners: {
      default: {
        title: "Ready to work together?",
        subtitle:
          "Whether you need reliable network deployment, systems support, field engineering, CCTV installation, or a digital solution, let's discuss how I can help.",
        primaryLabel: "Send a message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "View Profile",
        secondaryHref: "/profile",
      },
      profile: {
        title: "Let's discuss your project",
        subtitle:
          "Whether you need network infrastructure, systems support, field engineering, or a digital platform, I bring hands-on technical delivery and clear documentation.",
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
        ccnaBadge: "CCNA Training",
        designBadge: "Graphic Designer",
        headingStart: "Building Reliable Networks,",
        headingMiddle: "Secure Systems",
        headingConnector: "and",
        headingEnd: "Scalable IT Solutions",
        summary:
          "Bright Konadu is an IT Infrastructure & Network Support Engineer based in Paris with 5+ years of professional experience across network infrastructure, Windows Server, Active Directory, Wi-Fi, structured cabling, field engineering, CCTV, and technical support.",
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
          "End-to-end project delivery from scoping through live deployment and handover.",
          "5+ years of professional IT experience across education, healthcare, commercial, and field-engineering environments.",
          "Hands-on Cisco, Ubiquiti, Windows Server, Active Directory, LAN/WAN, Wi-Fi, and structured-cabling experience.",
          "Founder and builder of TouteGestion, a multi-product SaaS platform for operational management.",
          "Technical depth combined with web, product, and creative design capability.",
          "Strong communicator who documents work clearly and collaborates effectively with remote engineering teams.",
        ],
      },
      services: {
        label: "Core Services",
        title: "What I Deliver",
        subtitle:
          "From infrastructure planning and field implementation to systems support and digital products, I bring technical depth and practical execution to every engagement.",
      },
      experienceHighlights: {
        label: "Featured Experience",
        title: "Work That Defines My Track Record",
        subtitle:
          "Selected infrastructure and field-engineering work across universities, hospitals, schools, commercial clients, and assignments in France.",
        profileCta: "Full profile",
        highlights: [
          {
            sector: "University",
            company: "USTED",
            title: "Campus Infrastructure & Wireless Deployment",
            description:
              "Deployed 30+ Ubiquiti access points, 5 M5 point-to-point links, and LAN/Wi-Fi infrastructure for a 1,500-seat lecture block while supporting infrastructure serving 500+ staff and 40,000+ students.",
            tags: ["Ubiquiti UniFi", "Windows Server", "Active Directory"],
          },
          {
            sector: "Healthcare",
            company: "Church of Christ Mission Hospital",
            title: "Hospital LAN & Wi-Fi Support",
            description:
              "Designed and supported hospital LAN/Wi-Fi infrastructure, structured cabling, Windows Server, endpoint connectivity, and healthcare-system users.",
            tags: ["LAN Design", "Structured Cabling", "Healthcare IT"],
          },
          {
            sector: "Education (Multi-Site)",
            company: "Self-employed",
            title: "CCTV & Network Deployments",
            description:
              "Delivered end-to-end CCTV, Wi-Fi, and LAN solutions for multiple schools, including 64+ CCTV cameras across two Kwasi Oppong Schools locations.",
            tags: ["CCTV", "Network Design", "Project Delivery"],
          },
          {
            sector: "France Field Engineering",
            company: "Self-employed",
            title: "On-Site Infrastructure & Remote Hands",
            description:
              "Delivered rack-and-stack, server hardware replacement, network-device installation, structured cabling, labeling, connectivity checks, desktop support, and remote-hands assignments in France.",
            tags: ["Rack & Stack", "Remote Hands", "Field Engineering"],
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
              "Explore the complete career timeline, technical skills, training, education, current projects, field-work media, and key achievements.",
            cta: "View Profile",
          },
          {
            key: "services",
            label: "Services",
            href: "/services",
            title: "Services For Real Projects",
            description:
              "See network installation, field engineering, CCTV, IT support, systems administration, web, and digital project services.",
            cta: "View Services",
          },
          {
            key: "graphics",
            label: "Graphics",
            href: "/graphics",
            title: "Design Portfolio",
            description:
              "Browse graphic design, branding, print marketing, and web-design work created through an ongoing freelance practice since 2017.",
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
          "A curated selection of graphic design, branding, print marketing, and web-design projects. From book covers and event collateral to website concepts and brand identity work, this portfolio reflects an active freelance creative practice since 2017 using Adobe Photoshop and Canva.",
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
          "Beyond print and branding, I design web experiences for small businesses, schools, associations, and service providers - clean, accessible, and purpose-built.",
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
              "Clean layouts with strong spacing, typography, and component structure ready for implementation.",
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
        { href: "/services", label: "Services" },
        { href: "/graphics", label: "Design" },
        { href: "/contact", label: "Contact" },
      ],
      contact: "Email",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      mainNavigation: "Navigation principale",
    },
    footer: {
      description:
        "Infrastructure IT, support reseau, administration systeme, field engineering et livraison de projets digitaux.",
      navigation: "Navigation",
      getInTouch: "Restons en contact",
      linkedInProfile: "Profil LinkedIn",
      githubProfile: "Profil GitHub",
      rights: "Tous droits reserves.",
    },
    ctaBanners: {
      default: {
        title: "Pret a travailler ensemble ?",
        subtitle:
          "Que vous ayez besoin d'un deploiement reseau fiable, de support systeme, de field engineering, d'une installation CCTV ou d'une solution digitale, parlons de la meilleure facon de vous aider.",
        primaryLabel: "Envoyer un message",
        primaryHref: "mailto:konadubright024@gmail.com",
        secondaryLabel: "Voir le profil",
        secondaryHref: "/profile",
      },
      profile: {
        title: "Parlons de votre projet",
        subtitle:
          "Infrastructure reseau, support systeme, field engineering ou plateforme digitale : j'apporte une execution technique pratique et une documentation claire.",
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
        ccnaBadge: "Formation CCNA",
        designBadge: "Graphiste",
        headingStart: "Des reseaux fiables,",
        headingMiddle: "des systemes securises",
        headingConnector: "et",
        headingEnd: "des solutions IT evolutives",
        summary:
          "Bright Konadu est ingenieur infrastructure IT et support reseau base a Paris, avec plus de 5 ans d'experience professionnelle en infrastructure reseau, Windows Server, Active Directory, Wi-Fi, cablage structure, field engineering, CCTV et support technique.",
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
          "Livraison de projets de bout en bout, du cadrage a la mise en production et a la remise.",
          "Plus de 5 ans d'experience professionnelle IT dans l'education, la sante, le secteur prive et le field engineering.",
          "Experience pratique Cisco, Ubiquiti, Windows Server, Active Directory, LAN/WAN, Wi-Fi et cablage structure.",
          "Fondateur et createur de TouteGestion, une plateforme SaaS multi-produit pour la gestion operationnelle.",
          "Profondeur technique combinee a des competences web, produit et design creatif.",
          "Communication claire, documentation soignee et collaboration efficace avec des equipes techniques distantes.",
        ],
      },
      services: {
        label: "Services cles",
        title: "Ce que je livre",
        subtitle:
          "De la planification d'infrastructure et des interventions terrain au support systeme et aux produits digitaux, j'apporte profondeur technique et execution concrete.",
      },
      experienceHighlights: {
        label: "Experience marquee",
        title: "Des projets qui definissent mon parcours",
        subtitle:
          "Selection de projets infrastructure et field engineering realises dans des universites, hopitaux, ecoles, entreprises et lors de missions en France.",
        profileCta: "Profil complet",
        highlights: [
          {
            sector: "Universite",
            company: "USTED",
            title: "Infrastructure campus et deploiement Wi-Fi",
            description:
              "Deploiement de plus de 30 points d'acces Ubiquiti, 5 liaisons M5 point-a-point et d'une infrastructure LAN/Wi-Fi pour un amphitheatre de 1 500 places, avec support d'une infrastructure desservant 500+ membres du personnel et 40 000+ etudiants.",
            tags: ["Ubiquiti UniFi", "Windows Server", "Active Directory"],
          },
          {
            sector: "Sante",
            company: "Church of Christ Mission Hospital",
            title: "Support LAN et Wi-Fi hospitalier",
            description:
              "Conception et support de l'infrastructure LAN/Wi-Fi de l'hopital, du cablage structure, de Windows Server, de la connectivite des postes et des utilisateurs des systemes de sante.",
            tags: ["Conception LAN", "Cablage structure", "IT sante"],
          },
          {
            sector: "Education multi-site",
            company: "Independant",
            title: "Deploiements CCTV et reseau",
            description:
              "Livraison de solutions CCTV, Wi-Fi et LAN de bout en bout pour plusieurs ecoles, dont 64+ cameras CCTV sur deux sites de Kwasi Oppong Schools.",
            tags: ["CCTV", "Conception reseau", "Gestion de projet"],
          },
          {
            sector: "Field Engineering France",
            company: "Independant",
            title: "Infrastructure sur site & Remote Hands",
            description:
              "Missions de rack-and-stack, remplacement materiel serveur, installation d'equipements reseau, cablage structure, etiquetage, controles de connectivite, support desktop et remote hands en France.",
            tags: ["Rack & Stack", "Remote Hands", "Field Engineering"],
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
              "Consultez le parcours, les competences techniques, les formations, les etudes, les projets actuels, les medias terrain et les realisations cles.",
            cta: "Voir le profil",
          },
          {
            key: "services",
            label: "Services",
            href: "/services",
            title: "Services pour projets reels",
            description:
              "Decouvrez les services reseau, field engineering, CCTV, support IT, administration systeme, web et projets digitaux.",
            cta: "Voir les services",
          },
          {
            key: "graphics",
            label: "Design",
            href: "/graphics",
            title: "Portfolio design",
            description:
              "Decouvrez des projets de design graphique, branding, print marketing et web design issus d'une pratique freelance active depuis 2017.",
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
          "Une selection de projets en design graphique, branding, print marketing et web design. Des couvertures de livres aux supports d'evenement, concepts de site et identites de marque, ce portfolio reflete une pratique freelance active depuis 2017 avec Adobe Photoshop et Canva.",
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
          "Au-dela du print et du branding, je conçois des experiences web pour les petites entreprises, les ecoles, les associations et les prestataires de services - propres, accessibles et utiles.",
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
              "Des layouts propres avec une bonne gestion des espaces, de la typographie et des composants, prets pour l'implementation.",
          },
        ],
      },
    },
  },
} as const;

export function getSiteCopy(language: Language) {
  return siteCopyByLanguage[language];
}
