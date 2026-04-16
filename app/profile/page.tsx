import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ExperienceTimeline from "@/components/profile/ExperienceTimeline";
import WorkSiteGallery from "@/components/profile/WorkSiteGallery";
import LiveProjectsSection from "@/components/home/LiveProjectsSection";
import SkillsSection from "@/components/profile/SkillsSection";
import CertificationsSection from "@/components/profile/CertificationsSection";
import AchievementsSection from "@/components/profile/AchievementsSection";
import {
  buildJsonLdGraph,
  buildPageMetadata,
  personJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Professional Profile";
const pageDescription =
  "Explore Bright Konadu's professional profile, experience, technical skills, certifications, live projects, work-site media, and achievements in IT infrastructure and design.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/profile",
  keywords: [
    "Bright Konadu CV",
    "network engineer profile",
    "IT technician experience",
    "CCNA certifications",
    "Ubiquiti technician",
  ],
});

export default function ProfilePage() {
  return (
    <main>
      <JsonLd
        data={buildJsonLdGraph([
          personJsonLd(),
          {
            ...webPageJsonLd({
              path: "/profile",
              name: pageTitle,
              description: pageDescription,
            }),
            "@type": "ProfilePage",
            mainEntity: {
              "@id": "https://brit-tech.uk/#bright-konadu",
            },
          },
        ])}
      />
      <Navbar />
      <ProfileHeader />
      <ExperienceTimeline />
      <WorkSiteGallery />
      <LiveProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <AchievementsSection />
      <CTABanner variant="profile" />
      <Footer />
    </main>
  );
}
