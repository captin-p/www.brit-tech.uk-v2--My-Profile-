import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ContactPageContent from "@/components/contact/ContactPageContent";
import JsonLd from "@/components/JsonLd";
import {
  buildJsonLdGraph,
  buildPageMetadata,
  businessJsonLd,
  personJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Contact";
const pageDescription =
  "Contact Bright Konadu for network installation, CCTV, IT support, systems administration, website design, and graphic design projects.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/contact",
  keywords: [
    "contact Bright Konadu",
    "network installation quote",
    "CCTV installation quote",
    "IT support contact",
    "website design enquiry",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={buildJsonLdGraph([
          personJsonLd(),
          businessJsonLd(),
          {
            ...webPageJsonLd({
              path: "/contact",
              name: pageTitle,
              description: pageDescription,
            }),
            "@type": "ContactPage",
          },
        ])}
      />
      <Navbar />
      <ContactPageContent />
      <CTABanner />
      <Footer />
    </main>
  );
}
