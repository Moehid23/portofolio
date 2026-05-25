"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function ProfileSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
             <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
               Who I Am
             </h2>
             <h3 className="text-xl md:text-2xl font-medium text-neutral-800">
                Your Full Name Here
             </h3>
             <div className="h-1 w-20 bg-black" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>
              I am a <strong className="text-black font-semibold">[Your Degree / Field of Study]</strong> at [Your University] specializing in <strong className="text-black font-semibold">[Skill 1]</strong>, <strong className="text-black font-semibold">[Skill 2]</strong>, and <strong className="text-black font-semibold">[Skill 3]</strong>. With experience as a [Role] at [Company] and [Role] at [Organization], I focus on [what you do].
            </p>
            <p>
              [Your achievements or notable experience here. Describe what makes you unique and what kind of opportunities you are looking for.]
            </p>
          </div>

          <div className="pt-4 flex gap-8">
             <div>
                <span className="block text-4xl font-bold text-black">N+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Years Exp.</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-black">N+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Projects</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-black">X.XX</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">GPA</span>
             </div>
          </div>

          <div className="pt-4">
            <Button
              variant="default"
              className="rounded-full px-8 h-12 gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-2xl bg-neutral-200"
        >
          {/* Placeholder: Replace with your photo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium tracking-wider uppercase">Your Photo Here</span>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-2 border-black bg-transparent z-10 hidden md:block" />
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-neutral-100 mix-blend-multiply z-0 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
