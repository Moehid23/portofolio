import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abdul Muhid Muthado",
  description: "Showcase of industrial systems, web platforms, mobile apps, and machine learning projects by Abdul Muhid Muthado.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <main className="flex-1 pt-28 pb-16">
        <Container>
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-neutral-950">
              Selected Works
            </h1>
            <p className="mx-auto max-w-[680px] text-base md:text-lg text-neutral-500 leading-relaxed">
              Industrial management systems, web applications, mobile utilities, and machine learning analytics built for real-world operations.
            </p>
          </div>
          <ProjectGrid />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
