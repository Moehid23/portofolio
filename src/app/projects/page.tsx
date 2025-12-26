import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Modern Personal Website",
  description: "Showcase of my latest projects and works.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <Container>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
              My Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              A collection of my recent work, side projects, and experiments.
            </p>
          </div>
          <ProjectGrid />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
