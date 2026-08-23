"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { ProfileSection } from "@/components/about/ProfileSection";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { SkillsShowcase } from "@/components/about/SkillsShowcase";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          {/* Home Section */}
          <section id="home">
            <Hero startAnimation={!isLoading} />
          </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-14 py-12 sm:py-16 md:py-20">
          <Container>
            <ProfileSection />
            <ExperienceTimeline />
          </Container>
          <SkillsShowcase />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-14 py-12 sm:py-16 md:py-20 bg-neutral-50/50 border-t border-neutral-100">
          <Container>
            <div className="mb-10 sm:mb-12 text-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">Portfolio</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-neutral-950">
                Featured Projects
              </h2>
              <p className="mt-2.5 mx-auto max-w-[700px] text-xs sm:text-sm md:text-base text-neutral-500">
                A collection of web applications, industrial systems, and machine learning projects.
              </p>
            </div>
            <ProjectGrid />
          </Container>
        </section>

        <GallerySection />

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-14 py-12 sm:py-16 md:py-20 bg-neutral-50/40 border-t border-neutral-100">
          <Container>
            <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto space-y-1.5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
                Contact Me
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
                Feel free to reach out for collaborations, job opportunities, or engineering inquiries.
              </p>
            </div>
            
            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}
