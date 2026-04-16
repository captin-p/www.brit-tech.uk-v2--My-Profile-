import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import {
  buildJsonLdGraph,
  buildPageMetadata,
  businessJsonLd,
  servicesJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Services";
const pageDescription =
  "Network installation, CCTV installation, website design, graphic design, IT support, and systems administration services by Bright Konadu and Brit Tech.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services",
  keywords: [
    "network installation",
    "CCTV installation",
    "IT support services",
    "systems administration",
    "website design",
    "graphic design services",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={buildJsonLdGraph([
          businessJsonLd(),
          webPageJsonLd({
            path: "/services",
            name: pageTitle,
            description: pageDescription,
          }),
          ...servicesJsonLd(),
        ])}
      />
      <Navbar />
      <ServicesPageContent />
      <CTABanner />
      <Footer />
    </main>
  );
}
