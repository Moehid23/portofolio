"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { 
  Navigation, 
  MapPin, 
  Compass, 
  Layers, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Briefcase,
  Share2,
  Bookmark,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AppleMapWaypoint {
  id: string;
  year: string;
  fullPeriod: string;
  role: string;
  company: string;
  category: string;
  address: string;
  current: boolean;
  themeColor: string;
  badgeBg: string;
  xPercent: number; // percentage in the canvas
  yPercent: number;
  description: string[];
}

export function ExperienceTimeline() {
  const waypoints: AppleMapWaypoint[] = useMemo(() => [
    {
      id: "5",
      year: "2020",
      fullPeriod: "2020 — 2021",
      role: "Machining Operator",
      company: "PT. Honda Precision Parts Manufacturing",
      category: "Industrial Precision Machining",
      address: "Kawasan Industri KIIC, Jl. Maligi I, Karawang",
      current: false,
      themeColor: "#FF2D55", // Apple Rose
      badgeBg: "rgba(255, 45, 85, 0.12)",
      xPercent: 14,
      yPercent: 70,
      description: experiences[4].description,
    },
    {
      id: "4",
      year: "2021",
      fullPeriod: "2021 — 2022",
      role: "Assembly Operator",
      company: "PT. JTEKT Indonesia",
      category: "Power Steering Automotive Assembly",
      address: "Kawasan Industri Suryacipta, Karawang",
      current: false,
      themeColor: "#FF9500", // Apple Orange
      badgeBg: "rgba(255, 149, 0, 0.12)",
      xPercent: 32,
      yPercent: 26,
      description: experiences[3].description,
    },
    {
      id: "3",
      year: "2023",
      fullPeriod: "2023 — 2024",
      role: "Quality Inspector",
      company: "PT. Daihatsu Drivetrain Manufacturing",
      category: "Drivetrain Metrology & CMM Inspection",
      address: "Kawasan Industri KIIC, Lot C-1, Karawang",
      current: false,
      themeColor: "#5856D6", // Apple Purple
      badgeBg: "rgba(88, 86, 214, 0.12)",
      xPercent: 53,
      yPercent: 74,
      description: experiences[2].description,
    },
    {
      id: "2",
      year: "2024",
      fullPeriod: "2024 — 2025",
      role: "Intern (Money Production & Electrical)",
      company: "Perum Percetakan Uang Republik Indonesia",
      category: "Digital Maintenance & Python Automation",
      address: "Kawasan Percetakan Uang RI, Karawang",
      current: false,
      themeColor: "#34C759", // Apple Green
      badgeBg: "rgba(52, 199, 89, 0.12)",
      xPercent: 71,
      yPercent: 28,
      description: experiences[1].description,
    },
    {
      id: "1",
      year: "2025",
      fullPeriod: "2025 — Present",
      role: "Warehouse Staff (Planning & Utilities)",
      company: "Perum Percetakan Uang Republik Indonesia",
      category: "SAP ERP & Machine Learning Analytics",
      address: "Kawasan Percetakan Uang RI, Karawang",
      current: true,
      themeColor: "#007AFF", // Iconic Apple Blue
      badgeBg: "rgba(0, 122, 255, 0.12)",
      xPercent: 89,
      yPercent: 64,
      description: experiences[0].description,
    },
  ], []);

  const [activeWaypoint, setActiveWaypoint] = useState<AppleMapWaypoint | null>(null);

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
        
        {/* Apple Maps Style Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-[#007AFF] uppercase font-bold">
              <Navigation className="h-3.5 w-3.5 fill-[#007AFF]" />
              <span>// Apple Maps Navigation Route</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Career Journey Map
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            Explore 5 engineering stations across the industrial corridor. Tap any place pin to inspect full achievements.
          </p>
        </div>

        {/* ── Apple Maps Canvas Frame ── */}
        <div className="relative rounded-3xl bg-[#F4F5F8] border border-neutral-200/90 shadow-xl overflow-hidden min-h-[420px] sm:min-h-[480px]">
          
          {/* Authentic Apple Maps Vector Background Texture */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            {/* Apple Maps Serene Green Park Zones */}
            <div className="absolute top-[6%] left-[8%] w-52 h-40 bg-[#E3F4E8] rounded-3xl opacity-85 rotate-3" />
            <div className="absolute bottom-[8%] right-[10%] w-60 h-44 bg-[#E3F4E8] rounded-3xl opacity-85 -rotate-6" />
            <div className="absolute top-[38%] right-[25%] w-40 h-32 bg-[#E3F4E8] rounded-2xl opacity-75 rotate-12" />

            {/* Apple Maps Water Body Curve (River / Canal) */}
            <svg className="absolute inset-0 w-full h-full opacity-65" preserveAspectRatio="none" viewBox="0 0 1000 500">
              <path 
                d="M -30,270 Q 220,230 400,350 T 720,210 T 1030,370" 
                fill="none" 
                stroke="#CDE7FE" 
                strokeWidth="48" 
                strokeLinecap="round"
              />
            </svg>

            {/* Apple Maps City Block Lines & Secondary Arteries */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:52px_52px] opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1D5DB_1px,transparent_1px),linear-gradient(to_bottom,#D1D5DB_1px,transparent_1px)] bg-[size:156px_156px] opacity-70" />

            {/* Apple Maps Road Label Typographies */}
            <span className="absolute top-[16%] left-[24%] text-[9px] font-sans font-bold text-neutral-400/80 uppercase tracking-wider rotate-6">
              Jalan Tol Jakarta — Cikampek
            </span>
            <span className="absolute bottom-[20%] left-[44%] text-[9px] font-sans font-bold text-neutral-400/80 uppercase tracking-wider -rotate-3">
              Kawasan Industri Karawang Barat
            </span>
          </div>

          {/* Apple Maps Top Floating HUD Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 p-4 sm:p-5">
            {/* Search / Route Capsule */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm text-xs font-semibold text-neutral-800">
              <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF] animate-pulse" />
              <span>5 Stations • Karawang Route</span>
            </div>

            {/* Apple Maps Segmented Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm text-xs text-neutral-600 font-medium">
              <Compass className="h-3.5 w-3.5 text-[#007AFF]" />
              <span>Explore Mode</span>
            </div>
          </div>

          {/* Desktop & Tablet Meandering Apple Maps Road Canvas */}
          <div className="relative w-full h-[320px] sm:h-[360px] hidden sm:block">
            
            {/* SVG Apple Maps Winding Gradient Road Route */}
            <svg 
              viewBox="0 0 1000 360" 
              className="w-full h-full absolute inset-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="appleRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="50%" stopColor="#30B0C7" />
                  <stop offset="100%" stopColor="#34C759" />
                </linearGradient>

                <filter id="appleRouteShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#007AFF" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Highway Base Shadow & Body */}
              <path
                d="M 60,270 C 140,240 160,80 320,90 C 440,100 420,280 530,260 C 640,240 620,90 710,100 C 810,110 820,230 920,220"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="20"
                strokeLinecap="round"
                className="drop-shadow-sm"
              />

              {/* Apple Maps Gradient Route Path */}
              <path
                d="M 60,270 C 140,240 160,80 320,90 C 440,100 420,280 530,260 C 640,240 620,90 710,100 C 810,110 820,230 920,220"
                fill="none"
                stroke="url(#appleRouteGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#appleRouteShadow)"
              />

              {/* White Dashed Inner Markings */}
              <path
                d="M 60,270 C 140,240 160,80 320,90 C 440,100 420,280 530,260 C 640,240 620,90 710,100 C 810,110 820,230 920,220"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>

            {/* Apple Maps Iconic Location Pins with Glass Badges */}
            {waypoints.map((item, idx) => {
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
                  {/* Apple Maps Floating Glass Capsule Label */}
                  <motion.button
                    onClick={() => setActiveWaypoint(item)}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={cn(
                      "px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md text-center cursor-pointer select-none max-w-[135px] transition-all",
                      isTop ? "order-1 mt-1.5" : "order-none mb-1.5"
                    )}
                  >
                    <span className="text-[10px] font-mono font-bold text-neutral-900 block leading-tight">
                      {item.year}
                    </span>
                    <h4 className="text-[11px] font-semibold text-neutral-700 truncate leading-tight mt-0.5">
                      {item.company.replace("PT. ", "").replace("Perum Percetakan Uang Republik Indonesia", "Perum Peruri")}
                    </h4>
                  </motion.button>

                  {/* Iconic Apple Maps Pin Marker */}
                  <motion.button
                    onClick={() => setActiveWaypoint(item)}
                    whileHover={{ scale: 1.22 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-transform duration-200 focus:outline-none flex flex-col items-center"
                    title={`View ${item.company} (${item.year})`}
                  >
                    {/* Circular Bubble Icon */}
                    <div 
                      style={{ 
                        backgroundColor: item.themeColor,
                        boxShadow: `0 8px 18px -2px ${item.themeColor}55`
                      }}
                      className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg text-white"
                    >
                      <Briefcase className="h-4 w-4 stroke-[2.5]" />
                    </div>

                    {/* Downward Pointer Stem */}
                    <div 
                      style={{ borderTopColor: item.themeColor }}
                      className="w-0 h-0 border-x-4 border-x-transparent border-t-6 -mt-[1px]"
                    />

                    {/* Active GPS Beacon Pulse for Current Role */}
                    {item.current && (
                      <span className="absolute top-1 left-1 h-8 w-8 rounded-full bg-[#007AFF] opacity-40 animate-ping pointer-events-none" />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* ── Mobile Apple Maps View (Cards & Compact Pins) ── */}
          <div className="relative w-full space-y-2.5 sm:hidden z-20 p-4 pt-0">
            {waypoints.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveWaypoint(item)}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xs cursor-pointer hover:border-[#007AFF] transition-all"
              >
                {/* Apple Maps Pin Bubble */}
                <div 
                  style={{ backgroundColor: item.themeColor }}
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white border-2 border-white shadow-sm"
                >
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-900">{item.year}</span>
                    {item.current && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#007AFF] border border-blue-200">
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

      {/* ── Apple Maps Place Details Card (iOS Half-Sheet / Studio Modal) ── */}
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

              <div className="p-5 sm:p-7 space-y-4 overflow-y-auto flex-1">
                {/* Close Button */}
                <button
                  onClick={() => setActiveWaypoint(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Apple Place Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="flex items-center gap-2">
                    <span 
                      style={{ color: activeWaypoint.themeColor, backgroundColor: activeWaypoint.badgeBg }}
                      className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                    >
                      {activeWaypoint.fullPeriod}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {activeWaypoint.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                    {activeWaypoint.role}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-neutral-600 pt-1">
                    <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeWaypoint.themeColor }} />
                      {activeWaypoint.company}
                    </p>
                    <p className="flex items-center gap-1 text-neutral-500">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                      {activeWaypoint.address}
                    </p>
                  </div>
                </div>

                {/* Apple Maps Style Action Bar */}
                <div className="flex items-center gap-2 pt-1 pb-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#007AFF] text-xs font-semibold border border-blue-200/70">
                    <Navigation className="h-3.5 w-3.5 fill-[#007AFF]" />
                    <span>Verified Milestone</span>
                  </span>
                </div>

                {/* Key Technical Execution Achievements (100% Preserved) */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                    Execution &amp; Key Responsibilities:
                  </span>

                  <div className="space-y-2">
                    {activeWaypoint.description.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-neutral-50/80 border border-neutral-100 text-xs sm:text-[13px] text-neutral-700 leading-relaxed"
                      >
                        <CheckCircle2 
                          style={{ color: activeWaypoint.themeColor }}
                          className="h-4 w-4 shrink-0 mt-0.5" 
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apple Maps Bottom Navigators */}
                <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> Previous Station
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    Next Station <ChevronRight className="h-3.5 w-3.5" />
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
