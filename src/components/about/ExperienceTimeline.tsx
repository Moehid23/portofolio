"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ExperienceTimeline() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="py-20 bg-neutral-50/50 -mx-6 px-6 md:px-0">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Career Path</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
        </motion.div>

        <div className="relative border-l border-neutral-200 ml-3 md:ml-6 space-y-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0 } }} // Instant removal
                transition={{ duration: 0.5, delay: showAll ? index * 0.1 : 0 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Icon */}
                <div className="absolute -left-[9px] md:-left-[11px] top-0 h-5 w-5 md:h-6 md:w-6 rounded-full border-4 border-white bg-black shadow-sm" />
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                   {/* Date - Desktop: Left side visual, Mobile: Top */}
                   <div className="md:w-32 shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-xs font-bold tracking-wider">
                         {exp.startDate.split("-")[0]} - {exp.current ? "Now" : exp.endDate?.split("-")[0]}
                      </span>
                   </div>

                   {/* Content */}
                   <div className="flex-1 space-y-4">
                      <div>
                         <h3 className="text-2xl font-bold">{exp.title}</h3>
                         <div className="flex items-center gap-2 text-neutral-500 mt-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                         </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-neutral-600 leading-relaxed">
                            <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="group gap-2 rounded-full px-8"
          >
            {showAll ? "See Less" : "See More"}
            {showAll ? (
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
