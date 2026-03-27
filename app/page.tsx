import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import ExperienceHighlights from "@/components/home/ExperienceHighlights";
import FeaturedTeaser from "@/components/home/FeaturedTeaser";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <ExperienceHighlights />
      <FeaturedTeaser />
      <CTABanner />
      <Footer />
    </main>
  );
}
