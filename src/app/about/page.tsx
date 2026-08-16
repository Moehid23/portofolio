import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ProfileSection } from "@/components/about/ProfileSection";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { SkillsShowcase } from "@/components/about/SkillsShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Abdul Muhid Muthado",
  description: "Background, work history, and engineering expertise of Abdul Muhid Muthado, bridging Informatics Engineering with Industrial Precision Metrology.",
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
