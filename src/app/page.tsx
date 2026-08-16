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
        <section id="about" className="scroll-mt-32">
          <Container>
            <ProfileSection />
            <ExperienceTimeline />
          </Container>
          <SkillsShowcase />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-neutral-50/50 scroll-mt-32">
          <Container>
            <div className="mb-16 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Portfolio</span>
              <h2 className="mt-2 text-4xl font-bold tracking-tighter md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 mx-auto max-w-[700px] text-lg text-neutral-500">
                A collection of my recent work, side projects, and experiments.
              </p>
            </div>
            <ProjectGrid />
          </Container>
        </section>

        <GallerySection />

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-32">
          <Container>
            <div className="mb-16 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Get in Touch</span>
              <h2 className="mt-2 text-4xl font-bold tracking-tighter md:text-5xl">
                Contact Me
              </h2>
              <p className="mt-4 mx-auto max-w-[700px] text-lg text-neutral-500">
                Have a project in mind or want to collaborate? Send me a message.
              </p>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}
