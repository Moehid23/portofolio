"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  X,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  year: string;
  fullPeriod: string;
  role: string;
  company: string;
  location: string;
  current: boolean;
  color: string;
  accentBg: string;
  description: string[];
}

export function ExperienceTimeline() {
  // Sort chronologically from earliest to latest so future years can be added seamlessly
  const milestones: Milestone[] = useMemo(() => {
    const palette = [
      { color: "#E11D48", bg: "#FFE4E6" }, // Rose
      { color: "#0D9488", bg: "#CCFBF1" }, // Teal
      { color: "#7C3AED", bg: "#EDE9FE" }, // Violet
      { color: "#EA580C", bg: "#FFEDD5" }, // Amber/Orange
      { color: "#0284C7", bg: "#E0F2FE" }, // Sky
      { color: "#16A34A", bg: "#DCFCE7" }, // Emerald (for future years)
    ];

    return [...experiences].reverse().map((exp, idx) => {
      const year = exp.startDate.split("-")[0];
      const endYear = exp.current ? "Present" : exp.endDate?.split("-")[0] || year;
      const theme = palette[idx % palette.length];

      return {
        id: exp.id,
        year,
        fullPeriod: `${year} — ${endYear}`,
        role: exp.title,
        company: exp.company,
        location: exp.location,
        current: !!exp.current,
        color: theme.color,
        accentBg: theme.bg,
        description: exp.description,
      };
    });
  }, []);

  const [activeItem, setActiveItem] = useState<Milestone | null>(null);

  // Dynamically generate smooth Bezier sine wave path for any number of milestones
  const svgPath = useMemo(() => {
    const count = milestones.length;
    const width = 1000;
    const height = 340;
    const startY = 170;
    const step = width / count;

    let path = `M 0,${startY}`;
    for (let i = 0; i < count; i++) {
      const prevX = i * step;
      const currX = (i + 0.5) * step;
      const nextX = (i + 1) * step;
      const targetY = i % 2 === 0 ? 250 : 90;

      path += ` C ${prevX + step * 0.25},${startY} ${currX - step * 0.25},${targetY} ${currX},${targetY}`;
      if (i < count - 1) {
        path += ` C ${currX + step * 0.25},${targetY} ${nextX - step * 0.25},${startY} ${nextX},${startY}`;
      } else {
        path += ` C ${currX + step * 0.25},${targetY} ${width - step * 0.2},${startY} ${width},${startY}`;
      }
    }
    return path;
  }, [milestones]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const idx = milestones.findIndex((m) => m.id === activeItem.id);
    const prev = idx > 0 ? idx - 1 : milestones.length - 1;
    setActiveItem(milestones[prev]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const idx = milestones.findIndex((m) => m.id === activeItem.id);
    const next = idx < milestones.length - 1 ? idx + 1 : 0;
    setActiveItem(milestones[next]);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              // Career Roadmap &amp; Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Professional Journey
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            Click any checkpoint on the roadmap to inspect detailed engineering milestones and operational achievements.
          </p>
        </div>

        {/* ── Scalable Studio Roadmap Card ── */}
        <div className="relative rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-100/70 p-5 sm:p-8 overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-center">
          
          {/* Subtle Studio Ambient Accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-neutral-100/80 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-neutral-100/80 rounded-full blur-3xl pointer-events-none" />

          {/* Desktop & Tablet Winding Roadmap Canvas */}
          <div className="relative w-full h-[320px] hidden sm:block">
            
            {/* SVG Highway Path */}
            <svg 
              viewBox="0 0 1000 340" 
              className="w-full h-full absolute inset-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="highwayShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* Asphalt Road Body with Edge Rails */}
              <path
                d={svgPath}
                fill="none"
                stroke="#1E293B"
                strokeWidth="24"
                strokeLinecap="round"
                filter="url(#highwayShadow)"
              />

              {/* Highway Edge Borders */}
              <path
                d={svgPath}
                fill="none"
                stroke="#334155"
                strokeWidth="22"
                strokeLinecap="round"
              />

              {/* White Dashed Lane Center Markings */}
              <path
                d={svgPath}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />
            </svg>

            {/* Dynamic Milestone Pins Scaled Along X-axis */}
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0; // Alternates bottom and top
              const step = 100 / milestones.length;
              const xPos = (index + 0.5) * step;
              const yPos = isEven ? 73 : 27;

              return (
                <div
                  key={item.id}
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                >
                  {/* Top Label (for Top Curve Peaks) */}
                  {!isEven && (
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveItem(item)}
                      className="mb-2.5 text-center cursor-pointer select-none max-w-[130px]"
                    >
                      <h4 className="text-xs font-bold text-neutral-900 leading-tight line-clamp-1 hover:text-black transition-colors">
                        {item.role}
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-neutral-400 block mt-0.5">
                        {item.year}
                      </span>
                    </motion.button>
                  )}

                  {/* Teardrop Milestone Pin Button */}
                  <motion.button
                    onClick={() => setActiveItem(item)}
                    whileHover={{ scale: 1.18, y: isEven ? 3 : -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 8px 18px -2px ${item.color}40`,
                    }}
                    className={cn(
                      "relative flex items-center justify-center h-11 w-11 rounded-full cursor-pointer transition-all duration-200 border-2 border-white shadow-md",
                      !isEven ? "rounded-b-none rounded-t-full" : "rounded-t-none rounded-b-full"
                    )}
                    title={`Click to view ${item.company} (${item.year})`}
                  >
                    {/* Inner Core */}
                    <span className="h-5 w-5 rounded-full bg-white shadow-xs flex items-center justify-center">
                      <span 
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </span>

                    {/* Active Present Role Radar Pulse */}
                    {item.current && (
                      <span 
                        className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white animate-ping"
                      />
                    )}
                  </motion.button>

                  {/* Bottom Label (for Bottom Curve Valleys) */}
                  {isEven && (
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveItem(item)}
                      className="mt-2.5 text-center cursor-pointer select-none max-w-[130px]"
                    >
                      <span className="text-[11px] font-mono font-bold text-neutral-400 block">
                        {item.year}
                      </span>
                      <h4 className="text-xs font-bold text-neutral-900 leading-tight line-clamp-1 hover:text-black transition-colors mt-0.5">
                        {item.role}
                      </h4>
                    </motion.button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Fluid Road Map View (under 640px) */}
          <div className="relative w-full space-y-3 sm:hidden z-10 py-1">
            <div className="relative pl-6 space-y-4 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-1 before:bg-neutral-800 before:rounded-full">
              {milestones.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  whileTap={{ scale: 0.98 }}
                  className="relative p-3.5 rounded-2xl bg-neutral-50/90 border border-neutral-200/90 shadow-2xs cursor-pointer hover:bg-white hover:border-neutral-400 transition-all space-y-1.5"
                >
                  {/* Left Timeline Dot */}
                  <div 
                    style={{ backgroundColor: item.color }}
                    className="absolute -left-[19px] top-4.5 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm"
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-900">
                      {item.year}
                    </span>
                    {item.current && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Current
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-neutral-950">{item.role}</h4>
                    <p className="text-[11px] text-neutral-500 truncate">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── Interactive Detail Inspector Modal ── */}
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
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white border border-neutral-200 shadow-2xl p-6 sm:p-7 space-y-4 text-neutral-900 overflow-hidden"
            >
              {/* Header Top Theme Accent */}
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

              {/* Milestone Details */}
              <div className="space-y-1.5 pt-1 pr-8">
                <div className="flex items-center gap-2">
                  <span 
                    style={{ backgroundColor: activeItem.accentBg, color: activeItem.color }}
                    className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full"
                  >
                    {activeItem.fullPeriod}
                  </span>
                  {activeItem.current && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Active Role
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
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

              {/* Responsibilities & Impact Achievements */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                  Responsibilities &amp; Technical Execution:
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

              {/* Previous / Next Navigator Buttons */}
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
