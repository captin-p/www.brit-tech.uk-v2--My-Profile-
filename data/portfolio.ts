import type { Language } from "@/lib/i18n";

export type PortfolioCategory =
  | "all"
  | "graphic-design"
  | "branding"
  | "print-marketing"
  | "web-design";

const portfolioDataByLanguage = {
  en: {
    categories: [
      { label: "All Work", value: "all" },
      { label: "Graphic Design", value: "graphic-design" },
      { label: "Web Design", value: "web-design" },
      { label: "Branding", value: "branding" },
      { label: "Print & Marketing", value: "print-marketing" },
    ],
    items: [
      {
        id: "book-cover-doctor",
        title: "Copy Doctor - Book Cover Series",
        category: "print-marketing",
        description:
          "A series of professional book covers designed for Copy Doctor Publications, combining editorial typography with strong visual layouts.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/book-cover.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Copy Doctor Publications needed cohesive and professional cover designs that would stand out in a competitive publishing market while matching the academic tone of the content.",
          approach:
            "Developed a consistent visual language across the series using strong typographic hierarchy, complementary colour palettes, and custom image compositing in Photoshop.",
          outcome:
            "Delivered a polished series of covers used for print and digital distribution. The final work was praised for its clarity and professional finish.",
        },
      },
      {
        id: "event-banner",
        title: "Corporate Event Banner",
        category: "print-marketing",
        description:
          "Large-format pull-up and roll banner designs for corporate events, conferences, and educational exhibitions.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/event-banner.jpg",
        featured: false,
      },
      {
        id: "social-media-promo",
        title: "Social Media Promo Set",
        category: "graphic-design",
        description:
          "A coordinated set of social media graphics for Instagram, Facebook, and LinkedIn designed for engagement and brand consistency.",
        tools: ["Canva", "Adobe Photoshop"],
        image: "/images/portfolio/social-media.jpg",
        featured: false,
      },
      {
        id: "school-website",
        title: "School Website Concept",
        category: "web-design",
        description:
          "A clean and accessible website concept for a primary school with clear navigation for parents, students, and staff.",
        tools: ["Figma", "Canva"],
        image: "/images/portfolio/school-website.jpg",
        featured: true,
        caseStudy: {
          problem:
            "An independent school needed a modern web presence that communicated trust, community, and academic quality to prospective parents.",
          approach:
            "Designed a warm and professional layout using clear visual hierarchy, accessible typography, and consistent brand colours across desktop and mobile breakpoints.",
          outcome:
            "Delivered a complete website mockup ready for developer handoff, clearly improving the visual quality of the previous outdated site.",
        },
      },
      {
        id: "it-service-flyer",
        title: "IT Service & CCTV Flyer",
        category: "print-marketing",
        description:
          "Marketing flyers for Bright Ko Technology promoting IT infrastructure services and CCTV installation to schools and business clients.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/it-flyer.jpg",
        featured: false,
      },
      {
        id: "business-landing-page",
        title: "Business Landing Page",
        category: "web-design",
        description:
          "A conversion-focused landing page design for a small business, built to create trust and drive enquiries through clear calls to action.",
        tools: ["Figma", "Canva"],
        image: "/images/portfolio/landing-page.jpg",
        featured: true,
        caseStudy: {
          problem:
            "A small business lacked a digital presence and was losing leads to competitors with modern websites.",
          approach:
            "Created a focused single-page design with a hero section, service overview, social proof, and a clear contact CTA, optimised for mobile users.",
          outcome:
            "The finished mockup gave the client a professional asset to share with developers and immediately improved their perceived credibility.",
        },
      },
      {
        id: "corporate-brochure",
        title: "Corporate Profile Brochure",
        category: "branding",
        description:
          "A multi-page corporate profile brochure for an organisation that needed a formal printed document for presentations and official submissions.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/brochure.jpg",
        featured: false,
      },
      {
        id: "brand-identity",
        title: "Tech Brand Identity",
        category: "branding",
        description:
          "Logo, colour system, and brand guidelines developed for a technology services company entering a new market segment.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/brand-identity.jpg",
        featured: false,
      },
    ],
  },
  fr: {
    categories: [
      { label: "Tous les projets", value: "all" },
      { label: "Design graphique", value: "graphic-design" },
      { label: "Web design", value: "web-design" },
      { label: "Branding", value: "branding" },
      { label: "Print & marketing", value: "print-marketing" },
    ],
    items: [
      {
        id: "book-cover-doctor",
        title: "Copy Doctor - Serie de couvertures",
        category: "print-marketing",
        description:
          "Une serie de couvertures de livres professionnelles realisees pour Copy Doctor Publications, combinant typographie editoriale et mises en page visuelles fortes.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/book-cover.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Copy Doctor Publications avait besoin de couvertures coherentes et professionnelles capables de se distinguer dans un marche concurrentiel tout en respectant le ton academique du contenu.",
          approach:
            "Mise en place d'un langage visuel coherent sur l'ensemble de la serie grace a une hierarchie typographique forte, des palettes complementaires et un travail de composition sous Photoshop.",
          outcome:
            "Livraison d'une serie de couvertures soignee utilisee en diffusion imprimee et numerique. Le resultat final a ete remarque pour sa clarte et sa finition professionnelle.",
        },
      },
      {
        id: "event-banner",
        title: "Banniere evenementielle corporate",
        category: "print-marketing",
        description:
          "Conception de bannieres grand format pour des evenements d'entreprise, des conferences et des expositions educatives.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/event-banner.jpg",
        featured: false,
      },
      {
        id: "social-media-promo",
        title: "Kit promotionnel reseaux sociaux",
        category: "graphic-design",
        description:
          "Un ensemble coordonne de visuels pour Instagram, Facebook et LinkedIn, pense pour l'engagement et la coherence de marque.",
        tools: ["Canva", "Adobe Photoshop"],
        image: "/images/portfolio/social-media.jpg",
        featured: false,
      },
      {
        id: "school-website",
        title: "Concept de site web pour ecole",
        category: "web-design",
        description:
          "Un concept de site propre et accessible pour une ecole primaire, avec une navigation claire pour les parents, les eleves et le personnel.",
        tools: ["Figma", "Canva"],
        image: "/images/portfolio/school-website.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Une ecole independante avait besoin d'une presence web moderne capable de transmettre confiance, esprit de communaute et qualite academique aux futurs parents.",
          approach:
            "Conception d'une interface chaleureuse et professionnelle avec une hierarchie visuelle claire, une typographie accessible et des couleurs de marque coherentes sur mobile comme sur desktop.",
          outcome:
            "Livraison d'une maquette complete prete pour le developpement, avec un net gain de qualite visuelle par rapport a l'ancien site devenu obsolete.",
        },
      },
      {
        id: "it-service-flyer",
        title: "Flyer services IT et CCTV",
        category: "print-marketing",
        description:
          "Flyers marketing pour Bright Ko Technology afin de promouvoir les services d'infrastructure IT et l'installation CCTV aupres des ecoles et des entreprises.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/it-flyer.jpg",
        featured: false,
      },
      {
        id: "business-landing-page",
        title: "Landing page entreprise",
        category: "web-design",
        description:
          "Une landing page orientee conversion pour une petite entreprise, pensee pour inspirer confiance et generer des demandes grace a des CTA clairs.",
        tools: ["Figma", "Canva"],
        image: "/images/portfolio/landing-page.jpg",
        featured: true,
        caseStudy: {
          problem:
            "Une petite entreprise n'avait pas de presence numerique et perdait des opportunites face a des concurrents disposant de sites modernes.",
          approach:
            "Creation d'une page unique ciblee avec hero section, presentation des services, preuves sociales et CTA de contact clair, le tout optimise pour le mobile.",
          outcome:
            "La maquette finale a fourni au client un support professionnel a partager avec les developpeurs et a immediatement renforce sa credibilite percue.",
        },
      },
      {
        id: "corporate-brochure",
        title: "Brochure corporate",
        category: "branding",
        description:
          "Une brochure corporate multi-pages pour une organisation ayant besoin d'un document imprime formel pour les presentations clients et les soumissions officielles.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/brochure.jpg",
        featured: false,
      },
      {
        id: "brand-identity",
        title: "Identite de marque tech",
        category: "branding",
        description:
          "Logo, systeme de couleurs et guide de marque developpes pour une entreprise de services technologiques entrant sur un nouveau segment de marche.",
        tools: ["Adobe Photoshop", "Canva"],
        image: "/images/portfolio/brand-identity.jpg",
        featured: false,
      },
    ],
  },
} as const;

export function getPortfolioData(language: Language) {
  return portfolioDataByLanguage[language];
}
