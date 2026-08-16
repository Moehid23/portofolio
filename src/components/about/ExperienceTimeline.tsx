"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar, ScrollText, Sparkles } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-neutral-100 via-stone-50 to-neutral-200/70 text-neutral-900 -mx-6 px-6 md:px-0 rounded-3xl overflow-hidden my-12 border border-neutral-200 shadow-sm">
      
      {/* ── Subtle Ambient Gradient Accents ── */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-neutral-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-3 border border-neutral-200 shadow-sm">
            <Briefcase className="h-3.5 w-3.5 text-neutral-600" />
            <span>Career Path</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-neutral-950">
            Work Experience
          </h2>
          <p className="mt-3 text-sm text-neutral-600 max-w-lg mx-auto flex items-center justify-center gap-1.5 font-medium">
            <ScrollText className="h-4 w-4 text-neutral-500" />
            <span>{experiences.length} career milestones recorded • Scroll to explore</span>
          </p>
        </motion.div>

        {/* Scrollable Timeline Container */}
        <div className="relative rounded-2xl bg-white/85 backdrop-blur-md border border-neutral-200/90 shadow-md overflow-hidden">
          
          {/* Top fade gradient */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-20" />

          {/* Scrollable Box */}
          <div 
            className="max-h-[520px] overflow-y-auto px-6 py-8 md:px-10 md:py-10 space-y-8"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#cbd5e1 #f1f5f9",
            }}
          >
            <div className="relative border-l-2 border-neutral-200 ml-2 md:ml-4 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-6 md:pl-10 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-white bg-neutral-900 shadow-sm group-hover:scale-125 group-hover:bg-black transition-transform" />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-5 md:p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-300 space-y-3.5 shadow-sm">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-snug">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-neutral-600 font-medium mt-1">
                          <span className="font-semibold text-neutral-800">{exp.company}</span>
                          <span className="text-neutral-300">•</span>
                          <span className="flex items-center gap-1 text-neutral-500">
                            <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Date Badge */}
                      <span className={`self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                        exp.current
                          ? "bg-neutral-900 text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                      }`}>
                        <Calendar className="h-3 w-3" />
                        {exp.startDate.split("-")[0]} - {exp.current ? "Present" : exp.endDate?.split("-")[0]}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-neutral-600 leading-relaxed">
                          <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 group-hover:bg-neutral-900 transition-colors" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom fade gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}
