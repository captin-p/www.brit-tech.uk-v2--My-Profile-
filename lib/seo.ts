import type { Metadata } from "next";

export const siteUrl = "https://brit-tech.uk";
export const siteName = "Brit Tech";
export const defaultOgImage = "/og-image.jpg";

const baseKeywords = [
  "Bright Konadu",
  "Brit Tech",
  "Network Infrastructure Specialist",
  "IT Support Engineer",
  "Cybersecurity Management",
  "IT Support",
  "CCTV installation",
  "Cisco networking",
  "Ubiquiti UniFi",
  "Windows Server",
  "GNS3",
  "TryHackMe",
  "Web design",
  "Graphic design",
  "Dijon France",
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
          alt: "Bright Konadu - network infrastructure, IT support, CCTV, web, and design services.",
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
    jobTitle: "Network Infrastructure Specialist and IT Support Engineer",
    url: siteUrl,
    image: `${siteUrl}/images/profile/bright-konadu.jpg`,
    email: "konadubright024@gmail.com",
    telephone: "+33759507877",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dijon",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/in/bright-konadu",
      "https://github.com/captin-p",
    ],
    knowsAbout: [
      "Network infrastructure",
      "LAN and WAN design",
      "Cisco routing and switching",
      "Ubiquiti UniFi",
      "Windows Server",
      "Active Directory",
      "CCTV installation",
      "IT support",
      "Cybersecurity management",
      "Threat management",
      "GNS3",
      "TryHackMe",
      "Web design",
      "Graphic design",
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
    areaServed: ["France", "Ghana", "United Kingdom"],
    serviceType: [
      "Network installation",
      "CCTV installation",
      "IT support",
      "Systems administration",
      "Website design",
      "Graphic design",
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
    "CCTV installation",
    "Website design",
    "Graphic design",
    "IT support",
    "Systems administration",
  ].map((name) => ({
    "@type": "Service",
    name,
    provider: {
      "@id": businessId,
    },
    areaServed: ["France", "Ghana", "United Kingdom"],
  }));
}

export function portfolioJsonLd() {
  return {
    "@type": "CollectionPage",
    "@id": `${siteUrl}/graphics#webpage`,
    url: `${siteUrl}/graphics`,
    name: "Graphics and Website Portfolio",
    description:
      "Graphic design, branding, print marketing, and website work by Bright Konadu.",
    creator: {
      "@id": personId,
    },
  };
}
