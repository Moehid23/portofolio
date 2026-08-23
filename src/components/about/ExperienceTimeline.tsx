"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2, 
  Navigation as NavIcon,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  // experiences array: index 0 is latest (2025 - Present), index 4 is earliest (2020 - 2021)
  // Let's create a chronological roadmap from earliest (2020) to latest (Present)
  const roadmapList = [...experiences].reverse();
  const [activeIdx, setActiveIdx] = useState<number>(roadmapList.length - 1); // Default to current position (latest)
  const activeExp = roadmapList[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : roadmapList.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < roadmapList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              <Compass className="h-3 w-3 text-neutral-500" />
              <span>// Interactive 3D Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mt-0.5">
              Career Roadmap &amp; Milestones
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm sm:text-right">
            Click any milestone node on the roadmap to inspect detailed industrial &amp; software achievements.
          </p>
        </div>

        {/* ── 3D Interactive Roadmap Stage ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-4 sm:p-6 overflow-hidden">
          
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Roadmap Track Bar (Interactive Node Stepper) */}
          <div className="relative mb-6 pt-2 pb-3">
            {/* Background Track Line */}
            <div className="absolute top-1/2 left-4 right-4 h-[2px] -translate-y-1/2 bg-neutral-800 hidden md:block" />
            
            {/* Dynamic Active Progress Glow Line */}
            <motion.div 
              className="absolute top-1/2 left-4 h-[2px] -translate-y-1/2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hidden md:block"
              initial={false}
              animate={{
                width: `${(activeIdx / (roadmapList.length - 1)) * 92}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Milestone Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 relative z-10">
              {roadmapList.map((exp, idx) => {
                const isSelected = activeIdx === idx;
                const isCurrent = exp.current;
                const yearLabel = isCurrent 
                  ? "2025" 
                  : exp.startDate.split("-")[0];

                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveIdx(idx)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "relative p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[82px] cursor-pointer group",
                      isSelected
                        ? "bg-neutral-900 border-emerald-500 shadow-lg shadow-emerald-500/20"
                        : "bg-neutral-900/60 border-neutral-800/90 hover:border-neutral-700 hover:bg-neutral-900"
                    )}
                  >
                    {/* Top Row: Year & Node Dot */}
                    <div className="flex items-center justify-between w-full">
                      <span className={cn(
                        "text-[10px] font-mono font-bold tracking-wider",
                        isSelected ? "text-emerald-400" : "text-neutral-400"
                      )}>
                        {yearLabel}
                      </span>

                      {/* Glowing Pulsing Node Indicator */}
                      <span className="relative flex h-2.5 w-2.5">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span className={cn(
                          "relative inline-flex rounded-full h-2.5 w-2.5 transition-colors",
                          isSelected 
                            ? "bg-emerald-400" 
                            : isCurrent ? "bg-emerald-600" : "bg-neutral-600"
                        )} />
                      </span>
                    </div>

                    {/* Company & Role Name Snippet */}
                    <div className="mt-1">
                      <p className={cn(
                        "text-[10px] font-semibold tracking-tight line-clamp-1 transition-colors",
                        isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                      )}>
                        {exp.company.replace("PT. ", "").replace("Perum ", "")}
                      </p>
                      <p className="text-[9px] text-neutral-500 line-clamp-1 mt-0.5">
                        {exp.title}
                      </p>
                    </div>

                    {/* Active Bottom Highlight Glow Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeRoadmapPill"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ── Active Milestone Legend & Inspector Card ── */}
          <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-5 overflow-hidden backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20, rotateY: 5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -20, rotateY: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Station Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                        MILESTONE 0{activeIdx + 1} / 0{roadmapList.length}
                      </span>
                      {activeExp.current && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {activeExp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-medium">
                      <span className="text-neutral-200 font-semibold">{activeExp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-neutral-500" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge & Station Stepper Navigation */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-800/80 text-neutral-300 text-xs font-mono border border-neutral-700">
                      <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                      {activeExp.startDate.split("-")[0]} - {activeExp.current ? "Present" : activeExp.endDate?.split("-")[0]}
                    </span>

                    <button
                      onClick={handlePrev}
                      className="h-8 w-8 rounded-lg bg-neutral-800 hover:bg-white hover:text-black text-neutral-300 border border-neutral-700 flex items-center justify-center transition-colors"
                      title="Previous Milestone"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="h-8 w-8 rounded-lg bg-neutral-800 hover:bg-white hover:text-black text-neutral-300 border border-neutral-700 flex items-center justify-center transition-colors"
                      title="Next Milestone"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Key Accomplishments & Technical Deliverables */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Execution &amp; Technical Achievements:
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {activeExp.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs text-neutral-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
