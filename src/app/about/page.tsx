import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ProfileSection } from "@/components/about/ProfileSection";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { SkillsShowcase } from "@/components/about/SkillsShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Modern Personal Website",
  description: "Learn more about my background, experience, and skills.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Container>
          <ProfileSection />
          <ExperienceTimeline />
          <SkillsShowcase />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
