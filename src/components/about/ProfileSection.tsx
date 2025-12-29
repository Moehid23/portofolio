"use client";

import Image from "next/image";
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
                Anak Agung Ngurah Aditya Wirayudha
             </h3>
             <div className="h-1 w-20 bg-black" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>
              I am a <strong className="text-black font-semibold">Computer Science / Informatics Engineering student</strong> at Brawijaya University (GPA 3.7/4.0) specializing in <strong className="text-black font-semibold">Next.js</strong>, <strong className="text-black font-semibold">React</strong>, and <strong className="text-black font-semibold">Flutter</strong>. With experience as a Fullstack Developer at Semeton Corp and Mobile Developer at RAION, I focus on building scalable web and mobile solutions.
            </p>
            <p>
              My journey includes achievements like "Best Case Study Team" at COMPFEST17. I am currently seeking internship opportunities to bring my technical expertise and collaborative spirit to a professional team.
            </p>
          </div>

          <div className="pt-4 flex gap-8">
             <div>
                <span className="block text-4xl font-bold text-black">2+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Years Exp.</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-black">10+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Projects</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-black">3.7</span>
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
                href="https://drive.google.com/file/d/14uWvtdsYicnBA093HfSpe2cJtZP9GW8g/view?usp=sharing" 
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
          className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-2xl bg-neutral-100"
        >
          <Image
            src="/formal-picture.jpg"
            alt="Aditya Wirayudha"
            fill
            className="object-cover object-[center_55%] scale-125 grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-2 border-black bg-transparent z-10 hidden md:block" />
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-neutral-100 mix-blend-multiply z-0 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
