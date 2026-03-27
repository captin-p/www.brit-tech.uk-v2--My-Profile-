import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import GraphicsHero from "@/components/graphics/GraphicsHero";
import PortfolioGrid from "@/components/graphics/PortfolioGrid";
import FeaturedCaseStudies from "@/components/graphics/FeaturedCaseStudies";
import WebDesignStrip from "@/components/graphics/WebDesignStrip";

export default function GraphicsPage() {
  return (
    <main>
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
