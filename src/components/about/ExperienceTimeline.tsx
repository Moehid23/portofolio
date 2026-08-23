"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  Navigation, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  X,
  Compass,
  Layers,
  Sparkles,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MapCheckpoint {
  id: string;
  year: string;
  fullPeriod: string;
  role: string;
  company: string;
  category: string;
  location: string;
  current: boolean;
  pinColor: string;
  xPercent: number; // percentage in the 2D map canvas
  yPercent: number;
  description: string[];
}

export function ExperienceTimeline() {
  // Chronological checkpoints placed organically across the 2D map terrain
  const checkpoints: MapCheckpoint[] = useMemo(() => [
    {
      id: "5",
      year: "2020",
      fullPeriod: "2020 — 2021",
      role: "Machining Operator",
      company: "PT. Honda Precision Parts Manufacturing",
      category: "Automotive Precision Machining",
      location: "Kawasan Industri KIIC, Karawang",
      current: false,
      pinColor: "#EA4335", // Google Red
      xPercent: 14,
      yPercent: 68,
      description: experiences[4].description,
    },
    {
      id: "4",
      year: "2021",
      fullPeriod: "2021 — 2022",
      role: "Assembly Operator",
      company: "PT. JTEKT Indonesia",
      category: "Automotive Power Steering Assembly",
      location: "Kawasan Industri Suryacipta, Karawang",
      current: false,
      pinColor: "#FBBC04", // Google Yellow/Amber
      xPercent: 32,
      yPercent: 24,
      description: experiences[3].description,
    },
    {
      id: "3",
      year: "2023",
      fullPeriod: "2023 — 2024",
      role: "Quality Inspector",
      company: "PT. Daihatsu Drivetrain Manufacturing",
      category: "Drivetrain Metrology & Inspection",
      location: "Kawasan Industri KIIC, Karawang",
      current: false,
      pinColor: "#4285F4", // Google Blue
      xPercent: 54,
      yPercent: 72,
      description: experiences[2].description,
    },
    {
      id: "2",
      year: "2024",
      fullPeriod: "2024 — 2025",
      role: "Intern (Money Production & Electrical)",
      company: "Perum Percetakan Uang Republik Indonesia",
      category: "Industrial Automation & ML Prediction",
      location: "Kawasan Peruri, Karawang",
      current: false,
      pinColor: "#34A853", // Google Green
      xPercent: 72,
      yPercent: 26,
      description: experiences[1].description,
    },
    {
      id: "1",
      year: "2025",
      fullPeriod: "2025 — Present",
      role: "Warehouse Staff (Planning & Utilities)",
      company: "Perum Percetakan Uang Republik Indonesia",
      category: "SAP ERP & Predictive Maintenance",
      location: "Kawasan Peruri, Karawang",
      current: true,
      pinColor: "#9333EA", // Google Purple Starred Destination
      xPercent: 90,
      yPercent: 62,
      description: experiences[0].description,
    },
  ], []);

  const [activeItem, setActiveItem] = useState<MapCheckpoint | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const idx = checkpoints.findIndex((m) => m.id === activeItem.id);
    const prev = idx > 0 ? idx - 1 : checkpoints.length - 1;
    setActiveItem(checkpoints[prev]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const idx = checkpoints.findIndex((m) => m.id === activeItem.id);
    const next = idx < checkpoints.length - 1 ? idx + 1 : 0;
    setActiveItem(checkpoints[next]);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              <Compass className="h-3.5 w-3.5 text-blue-600 animate-spin" />
              <span>// Google Maps Career Navigation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Career Journey Map
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            Click any Google Maps location pin on the terrain map to open the place dossier and inspect technical achievements.
          </p>
        </div>

        {/* ── Google Maps Terrain Canvas Frame ── */}
        <div className="relative rounded-3xl bg-[#F8FAFC] border border-neutral-200 shadow-xl p-4 sm:p-6 overflow-hidden min-h-[420px] sm:min-h-[480px]">
          
          {/* Authentic Vector City & Topographic Map Background Texture */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Soft Green Park Areas */}
            <div className="absolute top-[8%] left-[10%] w-48 h-36 bg-[#EBF7EE] rounded-3xl opacity-80 rotate-6" />
            <div className="absolute bottom-[10%] right-[12%] w-56 h-40 bg-[#EBF7EE] rounded-3xl opacity-80 -rotate-12" />
            <div className="absolute top-[35%] right-[28%] w-36 h-28 bg-[#EBF7EE] rounded-2xl opacity-60 rotate-45" />

            {/* Soft Water River Stream */}
            <svg className="absolute inset-0 w-full h-full opacity-45" preserveAspectRatio="none" viewBox="0 0 1000 500">
              <path 
                d="M -20,280 Q 200,240 380,360 T 700,220 T 1020,380" 
                fill="none" 
                stroke="#DCEAFE" 
                strokeWidth="42" 
                strokeLinecap="round"
              />
            </svg>

            {/* City Street Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] bg-[size:144px_144px] opacity-80" />

            {/* Road Label Text Accents */}
            <span className="absolute top-[18%] left-[28%] text-[9px] font-mono text-neutral-300 font-bold uppercase tracking-widest rotate-12">
              Jl. Tol Jakarta — Cikampek
            </span>
            <span className="absolute bottom-[22%] left-[45%] text-[9px] font-mono text-neutral-300 font-bold uppercase tracking-widest -rotate-6">
              Kawasan Industri Karawang
            </span>
          </div>

          {/* Google Maps UI Top Control Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-neutral-200/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span>GPS Route: 5 Checkpoints</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                West Java, ID
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
              <Layers className="h-3.5 w-3.5 text-neutral-400" />
              <span>Interactive Terrain View</span>
            </div>
          </div>

          {/* Desktop & Tablet Meandering Road Canvas */}
          <div className="relative w-full h-[320px] sm:h-[370px] hidden sm:block">
            
            {/* SVG Dynamic Meandering GPS Road Path */}
            <svg 
              viewBox="0 0 1000 370" 
              className="w-full h-full absolute inset-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="gpsShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.18" />
                </filter>
              </defs>

              {/* Asphalt Road Bed (Dark Slate) */}
              <path
                d="M 60,280 C 140,250 160,80 320,90 C 440,100 420,290 540,270 C 640,250 620,90 720,100 C 820,110 820,240 930,230"
                fill="none"
                stroke="#1E293B"
                strokeWidth="22"
                strokeLinecap="round"
                filter="url(#gpsShadow)"
              />

              {/* Highway Shoulders / Road Edge Linings */}
              <path
                d="M 60,280 C 140,250 160,80 320,90 C 440,100 420,290 540,270 C 640,250 620,90 720,100 C 820,110 820,240 930,230"
                fill="none"
                stroke="#475569"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* White Dashed Lane Centerlines */}
              <path
                d="M 60,280 C 140,250 160,80 320,90 C 440,100 420,290 540,270 C 640,250 620,90 720,100 C 820,110 820,240 930,230"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>

            {/* Authentic Google Maps Location Pins & Floating Tooltips */}
            {checkpoints.map((item, idx) => {
              const isTop = idx % 2 === 1;

              return (
                <div
                  key={item.id}
                  style={{
                    left: `${item.xPercent}%`,
                    top: `${item.yPercent}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center"
                >
                  {/* Floating Micro Location Badge on Hover / Display */}
                  <motion.button
                    onClick={() => setActiveItem(item)}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={cn(
                      "mb-1 px-2.5 py-1 rounded-lg bg-white/95 border border-neutral-200/90 shadow-md backdrop-blur-sm text-center cursor-pointer select-none max-w-[130px] transition-all",
                      isTop ? "order-1 mb-0 mt-1" : "order-none mb-1"
                    )}
                  >
                    <span className="text-[10px] font-mono font-bold text-neutral-900 block leading-tight">
                      {item.year}
                    </span>
                    <h4 className="text-[11px] font-semibold text-neutral-700 truncate leading-tight mt-0.5">
                      {item.company.replace("PT. ", "").replace("Perum ", "")}
                    </h4>
                  </motion.button>

                  {/* Authentic Google Maps Marker Pin */}
                  <motion.button
                    onClick={() => setActiveItem(item)}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-transform duration-200 focus:outline-none"
                    title={`View ${item.company} (${item.year})`}
                  >
                    {/* Google Maps Teardrop Pin SVG */}
                    <svg
                      width="34"
                      height="44"
                      viewBox="0 0 384 512"
                      className="drop-shadow-lg transition-transform"
                    >
                      <path
                        fill={item.pinColor}
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"
                      />
                      {/* Inner White Cutout Circle */}
                      <circle cx="192" cy="192" r="82" fill="#FFFFFF" />
                      {/* Center Dot */}
                      <circle cx="192" cy="192" r="42" fill={item.pinColor} />
                    </svg>

                    {/* Active GPS Beacon Ring for Current Role */}
                    {item.current && (
                      <span className="absolute top-2.5 left-2 h-4 w-4 rounded-full bg-purple-500 opacity-75 animate-ping pointer-events-none" />
                    )}

                    {/* Ground Drop Shadow */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-neutral-900/30 rounded-full blur-[1px] pointer-events-none" />
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Mobile Fluid Road Map View (under 640px) */}
          <div className="relative w-full space-y-2.5 sm:hidden z-20 py-2">
            {checkpoints.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveItem(item)}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 border border-neutral-200 shadow-sm cursor-pointer hover:border-neutral-400 transition-all"
              >
                {/* Google Maps Marker SVG */}
                <div className="shrink-0">
                  <svg width="24" height="30" viewBox="0 0 384 512">
                    <path
                      fill={item.pinColor}
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"
                    />
                    <circle cx="192" cy="192" r="82" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-900">{item.year}</span>
                    {item.current && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-neutral-950 truncate mt-0.5">{item.role}</h4>
                  <p className="text-[11px] text-neutral-500 truncate">{item.company}</p>
                </div>

                <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ── Authentic Google Maps Place Details Card Modal ── */}
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
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white border border-neutral-200 shadow-2xl overflow-hidden text-neutral-900"
            >
              {/* Top Accent Strip */}
              <div 
                style={{ backgroundColor: activeItem.pinColor }}
                className="h-2.5 w-full"
              />

              <div className="p-6 sm:p-7 space-y-4">
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Google Maps Location Place Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2">
                    <span 
                      style={{ color: activeItem.pinColor }}
                      className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200"
                    >
                      {activeItem.fullPeriod}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {activeItem.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                    {activeItem.role}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-neutral-600 pt-1">
                    <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeItem.pinColor }} />
                      {activeItem.company}
                    </p>
                    <p className="flex items-center gap-1 text-neutral-500">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                      {activeItem.location}
                    </p>
                  </div>
                </div>

                {/* Key Technical Execution Achievements */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                    Execution &amp; Key Responsibilities:
                  </span>

                  <div className="space-y-2">
                    {activeItem.description.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs sm:text-[13px] text-neutral-700 leading-relaxed"
                      >
                        <CheckCircle2 
                          style={{ color: activeItem.pinColor }}
                          className="h-4 w-4 shrink-0 mt-0.5" 
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Maps Bottom Navigators */}
                <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> Previous Stop
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    Next Stop <ChevronRight className="h-3.5 w-3.5" />
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
