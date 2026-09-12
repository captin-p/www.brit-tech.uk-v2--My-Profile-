import type { Metadata } from "next";

export const siteUrl = "https://brit-tech.uk";
export const siteName = "Brit Tech";
export const defaultOgImage = "/og-image.jpg";

const baseKeywords = [
  "Bright Konadu",
  "Brit Tech",
  "IT Infrastructure Engineer",
  "Network Support Engineer",
  "Network Engineer",
  "Systems Administrator",
  "Field Network Engineer",
  "Cybersecurity Management",
  "IT Support",
  "Remote Hands",
  "Cisco networking",
  "Ubiquiti UniFi",
  "Windows Server",
  "Active Directory",
  "Structured Cabling",
  "CCTV installation",
  "Next.js",
  "Supabase",
  "TouteGestion",
  "Paris France",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Bright Konadu - IT infrastructure, network support, field engineering, and technology projects.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

const personId = `${siteUrl}/#bright-konadu`;
const businessId = `${siteUrl}/#brit-tech`;

export function buildJsonLdGraph(items: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": personId,
    name: "Bright Konadu",
    jobTitle: "IT Infrastructure & Network Support Engineer",
    url: siteUrl,
    image: `${siteUrl}/images/profile/bright-konadu.jpg`,
    email: "konadubright024@gmail.com",
    telephone: "+33759507877",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Ile-de-France",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/in/bright-konadu",
      "https://github.com/captin-p",
    ],
    knowsAbout: [
      "IT infrastructure",
      "Network engineering",
      "LAN and WAN design",
      "Cisco routing and switching",
      "Ubiquiti UniFi",
      "Windows Server",
      "Active Directory",
      "Structured cabling",
      "Rack and stack",
      "Remote hands",
      "CCTV installation",
      "IT support",
      "Cybersecurity management",
      "Next.js",
      "Supabase",
      "Multi-tenant SaaS",
    ],
  };
}

export function businessJsonLd() {
  return {
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteName,
    url: siteUrl,
    founder: {
      "@id": personId,
    },
    areaServed: ["France", "Ghana"],
    serviceType: [
      "Network installation",
      "Field engineering and remote hands",
      "IT support",
      "Systems administration",
      "Structured cabling",
      "CCTV installation",
      "Website and SaaS development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/bright-konadu",
      "https://github.com/captin-p",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": businessId,
    },
    inLanguage: ["en", "fr"],
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": personId,
    },
  };
}

export function servicesJsonLd() {
  return [
    "Network installation",
    "Field engineering and remote hands",
    "IT support",
    "Systems administration",
    "Structured cabling",
    "CCTV installation",
    "Website and SaaS development",
  ].map((name) => ({
    "@type": "Service",
    name,
    provider: {
      "@id": businessId,
    },
    areaServed: ["France", "Ghana"],
  }));
}

export function portfolioJsonLd() {
  return {
    "@type": "CollectionPage",
    "@id": `${siteUrl}/graphics#webpage`,
    url: `${siteUrl}/graphics`,
    name: "Graphics and Website Portfolio",
    description:
      "Graphic design, branding, print marketing, website work, and selected technology projects by Bright Konadu.",
    creator: {
      "@id": personId,
    },
  };
}
