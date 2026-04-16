import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import GraphicsHero from "@/components/graphics/GraphicsHero";
import PortfolioGrid from "@/components/graphics/PortfolioGrid";
import FeaturedCaseStudies from "@/components/graphics/FeaturedCaseStudies";
import WebDesignStrip from "@/components/graphics/WebDesignStrip";
import {
  buildJsonLdGraph,
  buildPageMetadata,
  portfolioJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Graphics & Website Portfolio";
const pageDescription =
  "Browse Bright Konadu's graphic design, branding, book cover, business card, event flyer, social media, print marketing, and website portfolio.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/graphics",
  keywords: [
    "graphic design portfolio",
    "website portfolio",
    "book cover design",
    "business card design",
    "event flyer design",
    "branding portfolio",
  ],
});

export default function GraphicsPage() {
  return (
    <main>
      <JsonLd
        data={buildJsonLdGraph([
          webPageJsonLd({
            path: "/graphics",
            name: pageTitle,
            description: pageDescription,
          }),
          portfolioJsonLd(),
        ])}
      />
      <Navbar />
      <GraphicsHero />
      <PortfolioGrid />
      <FeaturedCaseStudies />
      <WebDesignStrip />
      <CTABanner variant="graphics" />
      <Footer />
    </main>
  );
}
