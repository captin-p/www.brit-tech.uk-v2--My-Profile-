import type { Language } from "@/lib/i18n";

export type PortfolioCategory =
  | "all"
  | "book-covers"
  | "graphic-design"
  | "social-media"
  | "branding"
  | "print-marketing"
  | "web-design";

type PortfolioCategoryOption = {
  label: string;
  value: PortfolioCategory;
};

type PortfolioCaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  description: string;
  tools: string[];
  image: string;
  url?: string;
  featured?: boolean;
  caseStudy?: PortfolioCaseStudy;
};

type PortfolioData = {
  categories: PortfolioCategoryOption[];
  items: PortfolioItem[];
};

const portfolioDataByLanguage: Record<Language, PortfolioData> = {
  en: {
    categories: [
      { label: "All Work", value: "all" },
      { label: "Book Covers", value: "book-covers" },
      { label: "Graphic Design", value: "graphic-design" },
      { label: "Social Media", value: "social-media" },
      { label: "Branding", value: "branding" },
      { label: "Print & Marketing", value: "print-marketing" },
      { label: "Websites", value: "web-design" },
    ],
    items: [
      {
        id: "prowifeta-website",
        title: "ProWIFETA Association Website",
        category: "web-design",
        description:
          "A responsive association website for ProWIFETA, presenting its mission, leadership, gallery, events, membership call-to-action, and blog updates.",
        tools: ["React", "Responsive Design", "SEO Setup"],
        image: "/images/portfolio/prowifeta-website.jpg",
        url: "https://www.prowifeta.com",
        featured: true,
        caseStudy: {
          problem:
            "The association needed a credible digital home that could explain its mission, showcase leadership, archive events, and guide potential members to the application process.",
          approach:
            "Built a structured landing experience with fixed navigation, mission sections, interactive gallery, leadership profiles, event pages, and a clear membership path.",
          outcome:
            "Delivered a polished live website that presents the organization professionally and gives visitors a clear path to learn, connect, and join.",
        },
      },
      {
        id: "copy-doctor-book-cover-series",
        title: "Copy Doctor Book Cover Series",
        category: "book-covers",
        description:
          "A broad set of academic and professional book-cover layouts for Copy Doctor, spanning education, business, science, media, and technical subjects.",
        tools: ["Adobe Photoshop", "PDF Layout"],
        image: "/images/portfolio/copy-doctor-book-cover-series.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Copy Doctor needed a repeatable cover style that could adapt to many subjects while keeping every publication clear, credible, and print-ready.",
          approach:
            "Created subject-specific visual treatments while maintaining strong title hierarchy, clean back-cover space, and consistent print composition across the series.",
          outcome:
            "Delivered a flexible catalogue of academic covers that gave each title its own identity without losing the professional publishing feel.",
        },
      },
      {
        id: "marketing-lecture-notes",
        title: "Introduction to Marketing Lecture Notes",
        category: "book-covers",
        description:
          "A polished lecture-notes cover and print layout designed for an introduction to marketing learning resource.",
        tools: ["Adobe Photoshop", "PDF Layout"],
        image: "/images/portfolio/marketing-lecture-notes.jpg",
        featured: false,
      },
      {
        id: "iwopp-prayer-fest",
        title: "IWOPP Prayer Fest Conference Flyer",
        category: "graphic-design",
        description:
          "A vibrant event flyer for the IWOPP 4th Quarter Conference, balancing speaker photography, programme details, and online meeting information.",
        tools: ["Adobe Photoshop", "Event Flyer"],
        image: "/images/portfolio/iwopp-prayer-fest.jpg",
        featured: true,
        caseStudy: {
          problem:
            "The event needed a single visual that could communicate the speaker, theme, date, time zones, and Zoom access details without feeling cluttered.",
          approach:
            "Used a strong blue visual system, large theme typography, and clear information grouping so the flyer could work across social sharing and print.",
          outcome:
            "Created a complete promotional design that makes the event details easy to scan while keeping the conference identity visually memorable.",
        },
      },
      {
        id: "pentecost-worship-royal-celebration",
        title: "Pentecost Worship & Royal Celebration Flyer",
        category: "graphic-design",
        description:
          "A dark blue and gold event flyer for The Church of Pentecost France, combining worship imagery, Christmas accents, and venue details.",
        tools: ["Adobe Photoshop", "Event Flyer"],
        image: "/images/portfolio/pentecost-worship-royal-celebration.jpg",
        featured: false,
      },
      {
        id: "pentecost-countdown-social-pack",
        title: "Pentecost Countdown Social Pack",
        category: "social-media",
        description:
          "A coordinated countdown set for event promotion, using repeated photo frames, day markers, and consistent church branding.",
        tools: ["Adobe Photoshop", "Social Media"],
        image: "/images/portfolio/pentecost-countdown-social-pack.jpg",
        featured: false,
      },
      {
        id: "speed-nettoyage-blue-card",
        title: "Speed Nettoyage Blue Business Card",
        category: "branding",
        description:
          "A clean blue front-and-back business card concept for Speed Nettoyage, using wave lines and soft shapes to suggest speed and service.",
        tools: ["Adobe Photoshop", "Brand Layout"],
        image: "/images/portfolio/speed-nettoyage-blue-card.jpg",
        featured: true,
        caseStudy: {
          problem:
            "The client needed a simple printed identity piece with contact details that still felt modern, professional, and easy to recognise.",
          approach:
            "Created a calm blue visual language, paired thin-line typography with motion-inspired curves, and separated brand-facing and contact-facing sides.",
          outcome:
            "Produced a polished business-card direction that gives the cleaning service a more credible, memorable client touchpoint.",
        },
      },
      {
        id: "speed-nettoyage-light-card",
        title: "Speed Nettoyage Light Business Card",
        category: "branding",
        description:
          "A lighter business-card variation with playful service iconography, soft pattern work, and a bright blue-and-yellow accent system.",
        tools: ["Adobe Photoshop", "Business Card"],
        image: "/images/portfolio/speed-nettoyage-light-card.jpg",
        featured: false,
      },
      {
        id: "pentecost-tract-giveout",
        title: "Pentecost Tract & Giveout Layouts",
        category: "print-marketing",
        description:
          "Bilingual church tract and giveout layouts prepared for print, combining long-form copy, ministry branding, and clear contact details.",
        tools: ["Adobe Photoshop", "Print Layout"],
        image: "/images/portfolio/pentecost-tract-giveout.jpg",
        featured: false,
      },
      {
        id: "pentecost-thank-you-cards",
        title: "Pentecost Thank You Card Set",
        category: "print-marketing",
        description:
          "A set of English and French thank-you cards using event photography, soft framing, and warm community-focused messaging.",
        tools: ["Adobe Photoshop", "Print Card"],
        image: "/images/portfolio/pentecost-thank-you-cards.jpg",
        featured: false,
      },
      {
        id: "pentecost-fasting-flyer",
        title: "14 Days Fasting & Prayers Flyer",
        category: "graphic-design",
        description:
          "A minimal prayer programme flyer with a muted photographic treatment, clear dates, Zoom information, and evening schedule details.",
        tools: ["Adobe Photoshop", "Flyer"],
        image: "/images/portfolio/pentecost-fasting-flyer.jpg",
        featured: false,
      },
    ],
  },
  fr: {
    categories: [
      { label: "Tous les projets", value: "all" },
      { label: "Couvertures", value: "book-covers" },
      { label: "Design graphique", value: "graphic-design" },
      { label: "Reseaux sociaux", value: "social-media" },
      { label: "Branding", value: "branding" },
      { label: "Print & marketing", value: "print-marketing" },
      { label: "Sites web", value: "web-design" },
    ],
    items: [
      {
        id: "prowifeta-website",
        title: "Site web association ProWIFETA",
        category: "web-design",
        description:
          "Un site responsive pour ProWIFETA, presentant la mission, l'equipe, la galerie, les evenements, l'appel a adhesion et les actualites.",
        tools: ["React", "Design responsive", "SEO"],
        image: "/images/portfolio/prowifeta-website.jpg",
        url: "https://www.prowifeta.com",
        featured: true,
        caseStudy: {
          problem:
            "L'association avait besoin d'une presence digitale credible pour expliquer sa mission, presenter les leaders, archiver les evenements et guider les nouvelles membres.",
          approach:
            "Creation d'une experience structuree avec navigation fixe, sections mission, galerie interactive, profils de leadership, pages evenementielles et parcours d'adhesion clair.",
          outcome:
            "Livraison d'un site en ligne soigne, qui presente l'organisation avec professionnalisme et aide les visiteurs a decouvrir, se connecter et rejoindre la communaute.",
        },
      },
      {
        id: "copy-doctor-book-cover-series",
        title: "Serie de couvertures Copy Doctor",
        category: "book-covers",
        description:
          "Une large serie de couvertures academiques et professionnelles pour Copy Doctor, couvrant education, business, sciences, medias et sujets techniques.",
        tools: ["Adobe Photoshop", "Mise en page PDF"],
        image: "/images/portfolio/copy-doctor-book-cover-series.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Copy Doctor avait besoin d'un style de couverture adaptable a plusieurs matieres tout en gardant chaque publication claire, credible et prete pour l'impression.",
          approach:
            "Creation de traitements visuels propres a chaque sujet, avec une hierarchie de titre forte, des espaces propres pour les versos et une composition coherente.",
          outcome:
            "Livraison d'un catalogue flexible de couvertures academiques, donnant a chaque titre son identite sans perdre le ton professionnel.",
        },
      },
      {
        id: "marketing-lecture-notes",
        title: "Support de cours Introduction au marketing",
        category: "book-covers",
        description:
          "Une couverture et une mise en page imprimee soignees pour un support d'apprentissage consacre aux bases du marketing.",
        tools: ["Adobe Photoshop", "Mise en page PDF"],
        image: "/images/portfolio/marketing-lecture-notes.jpg",
        featured: false,
      },
      {
        id: "iwopp-prayer-fest",
        title: "Flyer conference IWOPP Prayer Fest",
        category: "graphic-design",
        description:
          "Un flyer evenementiel dynamique pour la conference trimestrielle IWOPP, combinant photo intervenante, programme et informations Zoom.",
        tools: ["Adobe Photoshop", "Flyer evenementiel"],
        image: "/images/portfolio/iwopp-prayer-fest.jpg",
        featured: true,
        caseStudy: {
          problem:
            "L'evenement avait besoin d'un visuel unique capable de presenter l'intervenante, le theme, la date, les fuseaux horaires et les acces Zoom sans surcharge.",
          approach:
            "Utilisation d'un systeme visuel bleu, d'une typographie forte pour le theme et d'un regroupement clair des informations pratiques.",
          outcome:
            "Creation d'un support promotionnel complet, facile a lire et suffisamment distinctif pour le partage social comme l'impression.",
        },
      },
      {
        id: "pentecost-worship-royal-celebration",
        title: "Flyer Worship & Royal Celebration",
        category: "graphic-design",
        description:
          "Un flyer bleu nuit et or pour The Church of Pentecost France, associant ambiance de louange, details de Noel et informations de lieu.",
        tools: ["Adobe Photoshop", "Flyer evenementiel"],
        image: "/images/portfolio/pentecost-worship-royal-celebration.jpg",
        featured: false,
      },
      {
        id: "pentecost-countdown-social-pack",
        title: "Pack social countdown Pentecost",
        category: "social-media",
        description:
          "Une serie coordonnee de posts countdown pour la promotion d'evenement, avec cadres photo, marqueurs de jours et branding coherent.",
        tools: ["Adobe Photoshop", "Reseaux sociaux"],
        image: "/images/portfolio/pentecost-countdown-social-pack.jpg",
        featured: false,
      },
      {
        id: "speed-nettoyage-blue-card",
        title: "Carte de visite bleue Speed Nettoyage",
        category: "branding",
        description:
          "Un concept de carte de visite recto-verso pour Speed Nettoyage, avec lignes fluides et formes douces pour evoquer rapidite et service.",
        tools: ["Adobe Photoshop", "Brand layout"],
        image: "/images/portfolio/speed-nettoyage-blue-card.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Le client avait besoin d'un support imprime simple avec ses coordonnees, tout en gardant une apparence moderne, professionnelle et reconnaissable.",
          approach:
            "Mise en place d'un univers bleu calme, d'une typographie fine, de courbes inspirees du mouvement et d'une separation claire entre face marque et face contact.",
          outcome:
            "Production d'une direction de carte de visite soignee qui renforce la credibilite et la memorisation du service.",
        },
      },
      {
        id: "speed-nettoyage-light-card",
        title: "Carte de visite claire Speed Nettoyage",
        category: "branding",
        description:
          "Une variation plus lumineuse avec iconographie de service, motifs doux et accents bleu-jaune pour une identite plus accessible.",
        tools: ["Adobe Photoshop", "Carte de visite"],
        image: "/images/portfolio/speed-nettoyage-light-card.jpg",
        featured: false,
      },
      {
        id: "pentecost-tract-giveout",
        title: "Tracts et giveouts Pentecost",
        category: "print-marketing",
        description:
          "Des tracts bilingues et supports giveout prepares pour l'impression, avec texte long, branding ministeriel et coordonnees claires.",
        tools: ["Adobe Photoshop", "Mise en page print"],
        image: "/images/portfolio/pentecost-tract-giveout.jpg",
        featured: false,
      },
      {
        id: "pentecost-thank-you-cards",
        title: "Cartes de remerciement Pentecost",
        category: "print-marketing",
        description:
          "Une serie de cartes en anglais et en francais avec photos d'evenement, cadrage doux et message communautaire chaleureux.",
        tools: ["Adobe Photoshop", "Carte imprimee"],
        image: "/images/portfolio/pentecost-thank-you-cards.jpg",
        featured: false,
      },
      {
        id: "pentecost-fasting-flyer",
        title: "Flyer 14 Days Fasting & Prayers",
        category: "graphic-design",
        description:
          "Un flyer minimal pour programme de priere, avec photo sobre, dates lisibles, informations Zoom et horaires du soir.",
        tools: ["Adobe Photoshop", "Flyer"],
        image: "/images/portfolio/pentecost-fasting-flyer.jpg",
        featured: false,
      },
    ],
  },
};

export function getPortfolioData(language: Language) {
  return portfolioDataByLanguage[language];
}
