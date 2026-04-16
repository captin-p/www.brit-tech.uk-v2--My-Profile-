import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import ImpactResults from "@/components/home/ImpactResults";
import ExperienceHighlights from "@/components/home/ExperienceHighlights";
import LiveProjectsSection from "@/components/home/LiveProjectsSection";
import FeaturedTeaser from "@/components/home/FeaturedTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import {
  buildJsonLdGraph,
  buildPageMetadata,
  businessJsonLd,
  personJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const pageTitle =
  "Network Infrastructure, CCTV, Web Design & IT Support";
const pageDescription =
  "Bright Konadu delivers network infrastructure, CCTV installation, IT support, systems administration, website design, and graphic design services across France, Ghana, and remote projects.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
  keywords: [
    "network installation services",
    "CCTV installation services",
    "IT technician portfolio",
    "website design services",
  ],
});

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={buildJsonLdGraph([
          websiteJsonLd(),
          personJsonLd(),
          businessJsonLd(),
          webPageJsonLd({
            path: "/",
            name: pageTitle,
            description: pageDescription,
          }),
        ])}
      />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ImpactResults />
      <AboutPreview />
      <ServicesSection />
      <ExperienceHighlights />
      <LiveProjectsSection />
      <FeaturedTeaser />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
