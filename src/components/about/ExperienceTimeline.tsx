"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  Gamepad2, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2, 
  Target,
  Trophy,
  Zap,
  Flag
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  // Chronological order from Stage 1 (2020) to Stage 5 (2025 - Present)
  const stages = [...experiences].reverse();
  const [selectedIdx, setSelectedIdx] = useState<number>(stages.length - 1); // Default to current stage
  const currentStage = stages[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-600">
              <Gamepad2 className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
              <span>// Career Level Map • Select Stage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mt-0.5">
              Career Journey &amp; Quest Map
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm sm:text-right">
            Click each game checkpoint on the world map to inspect quest logs and technical milestones.
          </p>
        </div>

        {/* ── Arcade World Map Board Container ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-4 sm:p-6 overflow-hidden">
          
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Arcade HUD Top Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-800/80 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-emerald-400 font-bold text-[11px]">
                <Target className="h-3 w-3 text-emerald-400 animate-spin" />
                STAGE 0{selectedIdx + 1} / 0{stages.length}
              </span>
              <span className="text-neutral-400 hidden sm:inline">
                WORLD: <strong className="text-neutral-200">KARAWANG INDUSTRIAL ZONE</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-[10px] font-bold">
                {currentStage.current ? "BOSS / CURRENT LEVEL" : "CLEARED STAGE"}
              </span>
              <span className="text-neutral-500 text-[11px]">5 MILIESTONES RECORDED</span>
            </div>
          </div>

          {/* ── Interactive Arcade Route Map ── */}
          <div className="relative z-10 mb-6 py-2">
            {/* Connecting Neon Line */}
            <div className="absolute top-1/2 left-6 right-6 h-1 -translate-y-1/2 bg-neutral-800 rounded-full hidden md:block" />
            
            {/* Animated Active Route Glow */}
            <motion.div 
              className="absolute top-1/2 left-6 h-1 -translate-y-1/2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.8)] hidden md:block"
              initial={false}
              animate={{
                width: `${(selectedIdx / (stages.length - 1)) * 90}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* 5 Stage Checkpoint Pins */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
              {stages.map((stg, idx) => {
                const isSelected = selectedIdx === idx;
                const isCurrent = stg.current;
                const year = isCurrent ? "2025" : stg.startDate.split("-")[0];
                const cleanCompany = stg.company.replace("PT. ", "").replace("Perum ", "");

                return (
                  <motion.button
                    key={stg.id}
                    onClick={() => setSelectedIdx(idx)}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    className={cn(
                      "relative p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[90px] cursor-pointer group select-none",
                      isSelected
                        ? "bg-neutral-900 border-emerald-400 shadow-xl shadow-emerald-500/25 ring-1 ring-emerald-400"
                        : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900"
                    )}
                  >
                    {/* Header Row: Stage Tag & Glowing Pin */}
                    <div className="flex items-center justify-between w-full">
                      <span className={cn(
                        "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded",
                        isSelected 
                          ? "bg-emerald-400 text-black font-extrabold" 
                          : "bg-neutral-800 text-neutral-400"
                      )}>
                        LVL 0{idx + 1}
                      </span>

                      {/* Radar Beacon Pin */}
                      <span className="relative flex h-3 w-3">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                        )}
                        <span className={cn(
                          "relative inline-flex rounded-full h-3 w-3 transition-all",
                          isSelected 
                            ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" 
                            : isCurrent ? "bg-emerald-600" : "bg-neutral-600"
                        )} />
                      </span>
                    </div>

                    {/* Company & Year */}
                    <div className="mt-2">
                      <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-400">
                        <span>{year}</span>
                        {isCurrent && <span className="text-emerald-400 text-[9px]">(NOW)</span>}
                      </div>

                      <h4 className={cn(
                        "text-[11px] font-bold leading-snug line-clamp-1 mt-0.5 transition-colors",
                        isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                      )}>
                        {cleanCompany}
                      </h4>
                    </div>

                    {/* Active Selected Player Marker Badge */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeMapIndicator"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-400 text-black text-[8px] font-mono font-extrabold shadow-md flex items-center gap-0.5"
                      >
                        <Zap className="h-2 w-2 fill-current" />
                        ACTIVE
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ── Quest Log & Stage Dossier Card ── */}
          <div className="relative rounded-2xl bg-neutral-900/95 border border-neutral-800/90 p-4 sm:p-5 overflow-hidden backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Stage Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60 text-emerald-400">
                        QUEST CHECKPOINT #0{selectedIdx + 1}
                      </span>
                      {currentStage.current && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Active Quest
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {currentStage.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-medium">
                      <span className="text-neutral-200 font-semibold">{currentStage.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        <MapPin className="h-3 w-3 text-neutral-500" />
                        {currentStage.location}
                      </span>
                    </div>
                  </div>

                  {/* Stage Stepper Navigator */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-mono border border-neutral-700">
                      <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                      {currentStage.startDate.split("-")[0]} - {currentStage.current ? "Present" : currentStage.endDate?.split("-")[0]}
                    </span>

                    <button
                      onClick={handlePrev}
                      className="h-8 w-8 rounded-lg bg-neutral-800 hover:bg-white hover:text-black text-neutral-300 border border-neutral-700 flex items-center justify-center transition-colors"
                      title="Previous Stage"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="h-8 w-8 rounded-lg bg-neutral-800 hover:bg-white hover:text-black text-neutral-300 border border-neutral-700 flex items-center justify-center transition-colors"
                      title="Next Stage"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Quest Clear Achievements List — 100% Content Preserved */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                    <Trophy className="h-3 w-3 text-amber-400" />
                    <span>Unlocked Achievements &amp; Industrial Execution:</span>
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {currentStage.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-300 leading-relaxed hover:border-neutral-700 transition-colors"
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
