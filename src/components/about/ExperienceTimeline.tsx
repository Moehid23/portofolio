"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  X,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MilestonePin {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  isCurrent: boolean;
  color: string;
  glowColor: string;
  position: "top" | "bottom";
  xPercent: number; // percentage along the road (0 to 100)
  yPercent: number; // vertical curve percentage
  description: string[];
}

export function ExperienceTimeline() {
  // Chronological order: Honda (2020), JTEKT (2021), Daihatsu (2023), Peruri Intern (2024), Peruri Planning (2025)
  const roadmapData: MilestonePin[] = [
    {
      id: "5",
      year: "2020",
      role: "Machining Operator",
      company: "PT. Honda Precision Parts Manufacturing",
      location: "Karawang, Indonesia",
      isCurrent: false,
      color: "#EC4899", // Rose / Pink
      glowColor: "rgba(236, 72, 153, 0.4)",
      position: "bottom",
      xPercent: 12,
      yPercent: 70,
      description: experiences[4].description,
    },
    {
      id: "4",
      year: "2021",
      role: "Assembly Operator",
      company: "PT. JTEKT Indonesia",
      location: "Karawang, Indonesia",
      isCurrent: false,
      color: "#10B981", // Teal / Emerald
      glowColor: "rgba(16, 185, 129, 0.4)",
      position: "top",
      xPercent: 31,
      yPercent: 30,
      description: experiences[3].description,
    },
    {
      id: "3",
      year: "2023",
      role: "Quality Inspector",
      company: "PT. Daihatsu Drivetrain",
      location: "Karawang, Indonesia",
      isCurrent: false,
      color: "#8B5CF6", // Purple / Indigo
      glowColor: "rgba(139, 92, 246, 0.4)",
      position: "bottom",
      xPercent: 50,
      yPercent: 70,
      description: experiences[2].description,
    },
    {
      id: "2",
      year: "2024",
      role: "Intern (Money Production)",
      company: "Perum Peruri",
      location: "Karawang, Indonesia",
      isCurrent: false,
      color: "#F97316", // Orange
      glowColor: "rgba(249, 115, 22, 0.4)",
      position: "top",
      xPercent: 69,
      yPercent: 30,
      description: experiences[1].description,
    },
    {
      id: "1",
      year: "2025",
      role: "Warehouse Staff",
      company: "Perum Peruri",
      location: "Karawang, Indonesia",
      isCurrent: true,
      color: "#0EA5E9", // Sky Blue
      glowColor: "rgba(14, 165, 233, 0.4)",
      position: "bottom",
      xPercent: 88,
      yPercent: 70,
      description: experiences[0].description,
    },
  ];

  const [activeItem, setActiveItem] = useState<MilestonePin | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIdx = roadmapData.findIndex((m) => m.id === activeItem.id);
    const prevIdx = currentIdx > 0 ? currentIdx - 1 : roadmapData.length - 1;
    setActiveItem(roadmapData[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIdx = roadmapData.findIndex((m) => m.id === activeItem.id);
    const nextIdx = currentIdx < roadmapData.length - 1 ? currentIdx + 1 : 0;
    setActiveItem(roadmapData[nextIdx]);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header matching user illustration */}
        <div className="text-center space-y-1.5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-sans">
            Career Path Timeline
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
            Click any checkpoint pin on the road map to view role details &amp; achievements.
          </p>
        </div>

        {/* ── Main Road Map Canvas Card (Clean Light Mode) ── */}
        <div className="relative rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-100/80 p-4 sm:p-8 overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
          
          {/* Soft Pastel Ambient Background Glows */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Desktop & Tablet Curved Road Track View (Hidden on very small mobile) */}
          <div className="relative w-full h-[320px] sm:h-[360px] hidden sm:block">
            
            {/* SVG Winding Road Track */}
            <svg 
              viewBox="0 0 1000 360" 
              className="w-full h-full absolute inset-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="roadShadow" x="-5%" y="-5%" width="110%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Asphalt Road Outer Path with Soft Shadow */}
              <path
                d="M 0,180 C 60,180 80,260 140,260 C 200,260 260,100 325,100 C 390,100 440,260 500,260 C 560,260 625,100 690,100 C 755,100 810,260 870,260 C 930,260 950,180 1000,180"
                fill="none"
                stroke="#18181B"
                strokeWidth="24"
                strokeLinecap="round"
                filter="url(#roadShadow)"
              />

              {/* White Dashed Lane Centerline */}
              <path
                d="M 0,180 C 60,180 80,260 140,260 C 200,260 260,100 325,100 C 390,100 440,260 500,260 C 560,260 625,100 690,100 C 755,100 810,260 870,260 C 930,260 950,180 1000,180"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>

            {/* 5 Milestone Teardrop Pins & Labels Positioned Along the Curves */}
            {roadmapData.map((item) => {
              const isTop = item.position === "top";

              return (
                <div
                  key={item.id}
                  style={{
                    left: `${item.xPercent}%`,
                    top: isTop ? "26%" : "74%",
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                >
                  {/* Top Label (for Peak Milestones) */}
                  {isTop && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveItem(item)}
                      className="mb-2 text-center cursor-pointer select-none group"
                    >
                      <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-tight group-hover:text-black transition-colors max-w-[130px]">
                        {item.role}
                      </h4>
                      <span className="text-xs sm:text-sm font-black text-neutral-900 block mt-0.5">
                        {item.year}
                      </span>
                    </motion.div>
                  )}

                  {/* Teardrop Pin Marker Button */}
                  <motion.button
                    onClick={() => setActiveItem(item)}
                    whileHover={{ scale: 1.2, y: isTop ? -3 : 3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 8px 20px -2px ${item.glowColor}`,
                    }}
                    className={cn(
                      "relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full cursor-pointer transition-transform duration-200 border-2 border-white shadow-lg",
                      isTop ? "rounded-b-none rounded-t-full" : "rounded-t-none rounded-b-full"
                    )}
                    title={`Click to inspect ${item.company} (${item.year})`}
                  >
                    {/* Inner White Circle */}
                    <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white shadow-inner flex items-center justify-center">
                      <span 
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </span>

                    {/* Pulsing indicator for current active role */}
                    {item.isCurrent && (
                      <span 
                        className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white animate-ping"
                      />
                    )}
                  </motion.button>

                  {/* Bottom Label (for Valley Milestones) */}
                  {!isTop && (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveItem(item)}
                      className="mt-2 text-center cursor-pointer select-none group"
                    >
                      <span className="text-xs sm:text-sm font-black text-neutral-900 block">
                        {item.year}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-tight group-hover:text-black transition-colors max-w-[130px] mt-0.5">
                        {item.role}
                      </h4>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Road Path View (Under 640px) */}
          <div className="relative w-full space-y-3 sm:hidden z-10 py-2">
            {roadmapData.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveItem(item)}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-neutral-200 shadow-sm cursor-pointer hover:border-neutral-400 transition-all"
              >
                {/* Colored Pin */}
                <div 
                  style={{ backgroundColor: item.color }}
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-md"
                >
                  <div className="h-4 w-4 rounded-full bg-white" />
                </div>

                {/* Role Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-neutral-900">{item.year}</span>
                    {item.isCurrent && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-neutral-900 truncate mt-0.5">{item.role}</h4>
                  <p className="text-[11px] text-neutral-500 truncate">{item.company}</p>
                </div>

                <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ── Interactive Pop-Up / Modal Detail Inspector ── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white border border-neutral-200/90 shadow-2xl p-6 sm:p-7 space-y-4 overflow-hidden text-neutral-900"
            >
              {/* Colored Top Accent Bar */}
              <div 
                style={{ backgroundColor: activeItem.color }}
                className="absolute top-0 left-0 right-0 h-2"
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="space-y-1.5 pt-1 pr-8">
                <div className="flex items-center gap-2">
                  <span 
                    style={{ backgroundColor: `${activeItem.color}18`, color: activeItem.color }}
                    className="text-xs font-black px-2.5 py-0.5 rounded-full font-mono"
                  >
                    {activeItem.year} {activeItem.isCurrent && "• CURRENT"}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400">
                    Career Checkpoint
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-950">
                  {activeItem.role}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2.5 text-xs text-neutral-600 font-medium">
                  <span className="font-bold text-neutral-900">{activeItem.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-neutral-500">
                    <MapPin className="h-3 w-3" />
                    {activeItem.location}
                  </span>
                </div>
              </div>

              {/* Description & Technical Achievements */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                  Responsibilities &amp; Achievements:
                </span>

                <div className="space-y-2">
                  {activeItem.description.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs sm:text-[13px] text-neutral-700 leading-relaxed"
                    >
                      <CheckCircle2 
                        style={{ color: activeItem.color }}
                        className="h-4 w-4 shrink-0 mt-0.5" 
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigators */}
              <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                >
                  <ChevronLeft className="h-3.5 w-3.5" /> Previous
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                >
                  Next <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
