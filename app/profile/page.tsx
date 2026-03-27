import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ExperienceTimeline from "@/components/profile/ExperienceTimeline";
import SkillsSection from "@/components/profile/SkillsSection";
import CertificationsSection from "@/components/profile/CertificationsSection";
import AchievementsSection from "@/components/profile/AchievementsSection";

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <ProfileHeader />
      <ExperienceTimeline />
      <SkillsSection />
      <CertificationsSection />
      <AchievementsSection />
      <CTABanner variant="profile" />
      <Footer />
    </main>
  );
}
