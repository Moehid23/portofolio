"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { 
  Navigation, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Briefcase,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RealMapWaypoint {
  id: string;
  year: string;
  fullPeriod: string;
  role: string;
  company: string;
  estateZone: string;
  address: string;
  current: boolean;
  themeColor: string;
  badgeBg: string;
  xPercent: number; // Real position percentage on the Karawang map
  yPercent: number;
  description: string[];
}

export function ExperienceTimeline() {
  const waypoints: RealMapWaypoint[] = useMemo(() => [
    {
      id: "5",
      year: "2020",
      fullPeriod: "2020 — 2021",
      role: "Machining Operator",
      company: "PT. Honda Precision Parts Manufacturing",
      estateZone: "Kawasan Industri KIIC",
      address: "Jl. Maligi I Lot A1-4, Telukjambe Barat, Karawang",
      current: false,
      themeColor: "#FF2D55", // Apple Rose
      badgeBg: "rgba(255, 45, 85, 0.12)",
      xPercent: 54,
      yPercent: 30,
      description: experiences[4].description,
    },
    {
      id: "4",
      year: "2021",
      fullPeriod: "2021 — 2022",
      role: "Assembly Operator",
      company: "PT. JTEKT Indonesia",
      estateZone: "Kawasan Industri Suryacipta",
      address: "Jl. Surya Utama Kav. 1-25A, Ciampel, Karawang",
      current: false,
      themeColor: "#FF9500", // Apple Orange
      badgeBg: "rgba(255, 149, 0, 0.12)",
      xPercent: 56,
      yPercent: 72,
      description: experiences[3].description,
    },
    {
      id: "3",
      year: "2023",
      fullPeriod: "2023 — 2024",
      role: "Quality Inspector",
      company: "PT. Daihatsu Drivetrain Manufacturing",
      estateZone: "Kawasan Industri KIIC",
      address: "Kawasan Industri KIIC, Lot C-1, Telukjambe, Karawang",
      current: false,
      themeColor: "#5856D6", // Apple Purple
      badgeBg: "rgba(88, 86, 214, 0.12)",
      xPercent: 68,
      yPercent: 36,
      description: experiences[2].description,
    },
    {
      id: "2",
      year: "2024",
      fullPeriod: "2024 — 2025",
      role: "Intern (Money Production & Electrical)",
      company: "Perum Percetakan Uang Republik Indonesia",
      estateZone: "Kawasan Produksi Peruri",
      address: "Jl. Tarum Barat, Telukjambe Timur, Karawang",
      current: false,
      themeColor: "#34C759", // Apple Green
      badgeBg: "rgba(52, 199, 89, 0.12)",
      xPercent: 33,
      yPercent: 55,
      description: experiences[1].description,
    },
    {
      id: "1",
      year: "2025",
      fullPeriod: "2025 — Present",
      role: "Warehouse Staff (Planning & Utilities)",
      company: "Perum Percetakan Uang Republik Indonesia",
      estateZone: "Kawasan Sentral Peruri",
      address: "Jl. Tarum Barat, Telukjambe Timur, Karawang",
      current: true,
      themeColor: "#007AFF", // Iconic Apple Blue
      badgeBg: "rgba(0, 122, 255, 0.12)",
      xPercent: 38,
      yPercent: 42,
      description: experiences[0].description,
    },
  ], []);

  const [activeWaypoint, setActiveWaypoint] = useState<RealMapWaypoint | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeWaypoint) return;
    const idx = waypoints.findIndex((w) => w.id === activeWaypoint.id);
    const prev = idx > 0 ? idx - 1 : waypoints.length - 1;
    setActiveWaypoint(waypoints[prev]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeWaypoint) return;
    const idx = waypoints.findIndex((w) => w.id === activeWaypoint.id);
    const next = idx < waypoints.length - 1 ? idx + 1 : 0;
    setActiveWaypoint(waypoints[next]);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-[#007AFF] uppercase font-bold">
              <Navigation className="h-3.5 w-3.5 fill-[#007AFF]" />
              <span>// Real Coordinates • Karawang Industrial Corridor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Career Journey Map
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            Real geographic industrial route across KIIC, Suryacipta, and Peruri. Tap any pin to inspect work achievements.
          </p>
        </div>

        {/* ── Real Karawang Industrial Map Canvas ── */}
        <div className="relative rounded-3xl bg-neutral-100 border border-neutral-200/90 shadow-2xl overflow-hidden min-h-[460px] sm:min-h-[520px] select-none">
          
          {/* Authentic Real Karawang Industrial Map Background (Local WebP Asset) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/karawang-map.webp"
              alt="Real Karawang Industrial Corridor Map - KIIC, Suryacipta & Peruri"
              fill
              className="object-cover object-center opacity-90 brightness-[1.02] contrast-[1.04]"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
            {/* Subtle Map Gradient Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 pointer-events-none" />
          </div>

          {/* Top Apple Maps Floating HUD Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 p-3.5 sm:p-5">
            {/* Route Status Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md text-xs font-semibold text-neutral-800">
              <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF] animate-pulse" />
              <span>5 Stations • Karawang Industrial Corridor</span>
            </div>

            {/* Industrial Districts Legend */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md text-[11px] text-neutral-600 font-medium font-mono">
              <span>KIIC</span>
              <span>•</span>
              <span>Suryacipta</span>
              <span>•</span>
              <span>Peruri</span>
            </div>
          </div>

          {/* ── Real GPS Navigation Road Track SVG ── */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <svg 
              viewBox="0 0 1000 520" 
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="realGpsRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF2D55" />
                  <stop offset="30%" stopColor="#FF9500" />
                  <stop offset="60%" stopColor="#5856D6" />
                  <stop offset="85%" stopColor="#34C759" />
                  <stop offset="100%" stopColor="#007AFF" />
                </linearGradient>

                <filter id="realGpsShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#007AFF" floodOpacity="0.35" />
                </filter>
              </defs>

              {/* Realistic Highway Route Border */}
              <path
                d="M 540,156 Q 530,260 560,374 Q 630,300 680,187 Q 520,220 330,286 Q 340,240 380,218"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* GPS Navigation Gradient Path */}
              <path
                d="M 540,156 Q 530,260 560,374 Q 630,300 680,187 Q 520,220 330,286 Q 340,240 380,218"
                fill="none"
                stroke="url(#realGpsRouteGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#realGpsShadow)"
              />

              {/* White Dashed Markings */}
              <path
                d="M 540,156 Q 530,260 560,374 Q 630,300 680,187 Q 520,220 330,286 Q 340,240 380,218"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ── Real Waypoint Location Pins ── */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {waypoints.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    left: `${item.xPercent}%`,
                    top: `${item.yPercent}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-full pointer-events-auto flex flex-col items-center"
                >
                  {/* Floating Glass Label */}
                  <motion.button
                    onClick={() => setActiveWaypoint(item)}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="mb-1 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md text-center cursor-pointer select-none max-w-[125px] sm:max-w-[140px] transition-all"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-[10px] font-mono font-black text-neutral-900 leading-tight">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                      )}
                    </div>
                    <h4 className="text-[10px] sm:text-[11px] font-bold text-neutral-800 truncate leading-tight mt-0.5">
                      {item.company.replace("PT. ", "").replace("Perum Percetakan Uang Republik Indonesia", "Perum Peruri")}
                    </h4>
                  </motion.button>

                  {/* Iconic Apple Maps Pin Marker */}
                  <motion.button
                    onClick={() => setActiveWaypoint(item)}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer focus:outline-none flex flex-col items-center"
                    title={`View ${item.company} (${item.year})`}
                  >
                    <div 
                      style={{ 
                        backgroundColor: item.themeColor,
                        boxShadow: `0 8px 18px -2px ${item.themeColor}65`
                      }}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg text-white"
                    >
                      <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </div>
                    <div 
                      style={{ borderTopColor: item.themeColor }}
                      className="w-0 h-0 border-x-4 border-x-transparent border-t-6 -mt-[1px]"
                    />
                    {item.current && (
                      <span className="absolute top-0.5 left-0.5 h-8 w-8 rounded-full bg-[#007AFF] opacity-40 animate-ping pointer-events-none" />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ── Apple Maps Place Details Card (iOS Half-Sheet Modal) ── */}
      <AnimatePresence>
        {activeWaypoint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveWaypoint(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border border-neutral-200/90 shadow-2xl overflow-hidden text-neutral-900 max-h-[85vh] flex flex-col"
            >
              {/* iOS Mobile Drag Handle */}
              <div className="sm:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-neutral-300" />
              </div>

              {/* Top Accent Strip */}
              <div 
                style={{ backgroundColor: activeWaypoint.themeColor }}
                className="h-2 w-full hidden sm:block"
              />

              <div className="p-4 sm:p-7 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1">
                {/* Close Button */}
                <button
                  onClick={() => setActiveWaypoint(null)}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Location Place Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span 
                      style={{ color: activeWaypoint.themeColor, backgroundColor: activeWaypoint.badgeBg }}
                      className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                    >
                      {activeWaypoint.fullPeriod}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-neutral-400">
                      {activeWaypoint.estateZone}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
                    {activeWaypoint.role}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-neutral-600 pt-0.5">
                    <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: activeWaypoint.themeColor }} />
                      <span>{activeWaypoint.company}</span>
                    </p>
                    <p className="flex items-start gap-1 text-neutral-500 text-[11px] sm:text-xs">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{activeWaypoint.address}</span>
                    </p>
                  </div>
                </div>

                {/* Key Technical Execution Achievements */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                    Execution &amp; Key Responsibilities:
                  </span>

                  <div className="space-y-2">
                    {activeWaypoint.description.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neutral-50/90 border border-neutral-100 text-xs sm:text-[13px] text-neutral-700 leading-relaxed"
                      >
                        <CheckCircle2 
                          style={{ color: activeWaypoint.themeColor }}
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" 
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigators */}
                <div className="pt-2 sm:pt-3 flex items-center justify-between border-t border-neutral-100 gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    Next <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
