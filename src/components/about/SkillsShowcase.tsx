"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Compass, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  ArrowUpRight,
  Terminal,
  Cpu
} from "lucide-react";

// Local SVG icon paths (100% offline, zero external CDN dependency)
const localIconMap: Record<string, string> = {
  "Next.js": "/icons/nextjs.svg",
  "React.js": "/icons/react.svg",
  "Flutter": "/icons/flutter.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Vue.js": "/icons/vue.svg",
  "TypeScript": "/icons/typescript.svg",
  "JavaScript": "/icons/javascript.svg",
  "Node.js": "/icons/nodejs.svg",
  "Laravel": "/icons/laravel.svg",
  "Python": "/icons/python.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "Git": "/icons/git.svg",
  "Docker": "/icons/docker.svg",
  "Kotlin": "/icons/kotlin.svg",
  "Figma": "/icons/figma.svg",
  "Stitch": "/icons/stitch.svg",
  "Tableau": "/icons/tableau.svg",
  "Power BI": "/icons/powerbi.svg",
  "Vercel": "/icons/vercel.svg",
  "Linux": "/icons/linux.svg",
  "Scikit-Learn": "/icons/scikitlearn.svg",
  "Pandas": "/icons/pandas.svg"
};

interface PhaseData {
  number: string;
  name: string;
  category: string;
  summary: string;
  mindset: string;
  milestones: string[];
  tools: string[];
  deliverable: string;
  icon: React.ComponentType<{ className?: string }>;
}

const phases: PhaseData[] = [
  {
    number: "01",
    name: "Architecture & Data Modeling",
    category: "System Blueprint",
    summary: "Translating ambiguous problem statements and metrology tolerances into structured data schemas and resilient API contracts before writing code.",
    mindset: "Measure twice, architect once.",
    milestones: [
      "User flows & relational schema design (PostgreSQL)",
      "API contracts & error handling specifications",
      "Interactive UI wireframing & prototyping in Figma & Stitch",
      "Industrial calibration & dimensional tolerance constraints"
    ],
    tools: ["Figma", "Stitch", "PostgreSQL", "TypeScript"],
    deliverable: "System Schema & Interactive Prototype",
    icon: Compass
  },
  {
    number: "02",
    name: "Full-Stack & Interface Engineering",
    category: "Core Build",
    summary: "Crafting accessible frontend interfaces and performant backend services with strict type safety, modular design, and optimized database queries.",
    mindset: "Clean code with zero unnecessary dependencies.",
    milestones: [
      "Modular Next.js / React component architecture",
      "Cross-platform mobile applications (Flutter / Kotlin)",
      "Secure REST APIs & authentication services",
      "Core Web Vitals & responsive viewport optimization"
    ],
    tools: ["Next.js", "React.js", "Flutter", "Laravel", "Tailwind CSS", "Node.js"],
    deliverable: "Production-Ready Web & Mobile Systems",
    icon: Code2
  },
  {
    number: "03",
    name: "Machine Learning & Analytics",
    category: "Intelligent Systems",
    summary: "Developing predictive data models and interactive BI dashboards to eliminate industrial operational bottlenecks such as inventory stockouts.",
    mindset: "Extracting actionable truth from raw data.",
    milestones: [
      "Exploratory data analysis & feature engineering",
      "Random Forest modeling for spare part demand forecasting",
      "Model evaluation, hyperparameter tuning & metric validation",
      "Interactive BI reporting & KPI dashboards"
    ],
    tools: ["Python", "Pandas", "Scikit-Learn", "Tableau", "Power BI"],
    deliverable: "Trained Predictive Model & Executive Dashboards",
    icon: BrainCircuit
  },
  {
    number: "04",
    name: "Metrology Testing & Deployment",
    category: "Quality & Delivery",
    summary: "Applying precision metrology standards to quality assurance, containerizing applications with Docker, and setting up automated zero-downtime deployment.",
    mindset: "Precision without compromise.",
    milestones: [
      "Unit, integration, and manual edge-case testing",
      "Dimensional inspection & physical calibration verification",
      "Docker containerization for environment parity",
      "Automated CI/CD deployment on Vercel"
    ],
    tools: ["Docker", "Vercel", "Git", "Linux"],
    deliverable: "Zero-Downtime Live Production Deployment",
    icon: ShieldCheck
  }
];

export function SkillsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = phases[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <section className="py-8 sm:py-10 md:py-12 relative w-full overflow-hidden bg-neutral-50/50" id="skills">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              // Methodology &amp; Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mt-1">
              How I Build &amp; Solve Problems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            A disciplined engineering process bridging software development, precision metrology, and machine learning.
          </p>
        </div>

        {/* Phase Timeline Navigation Bar */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
          {phases.map((p, idx) => {
            const isSelected = activeIdx === idx;
            const Icon = p.icon;

            return (
              <button
                key={p.number}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "relative text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 group flex flex-col justify-between min-h-[76px]",
                  isSelected
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={cn(
                    "text-[10px] font-mono font-bold tracking-wider",
                    isSelected ? "text-emerald-400" : "text-neutral-400"
                  )}>
                    {p.number}
                  </span>
                  <Icon className={cn(
                    "h-3.5 w-3.5 transition-colors",
                    isSelected ? "text-white" : "text-neutral-400 group-hover:text-neutral-900"
                  )} />
                </div>

                <div className="mt-1">
                  <p className={cn(
                    "text-[10px] font-semibold uppercase tracking-wider line-clamp-1",
                    isSelected ? "text-neutral-300" : "text-neutral-400"
                  )}>
                    {p.category}
                  </p>
                  <h3 className={cn(
                    "text-xs font-bold leading-tight line-clamp-1",
                    isSelected ? "text-white" : "text-neutral-900"
                  )}>
                    {p.name}
                  </h3>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeTimelinePill"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Phase Inspector Workspace (Compact & Human Crafted) */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-4 sm:p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start"
            >
              {/* Left Column: Context & Milestones (7 Cols) */}
              <div className="md:col-span-7 space-y-3.5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                      STEP {current.number} / 04
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400">
                      {current.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 flex items-center gap-2">
                    <CurrentIcon className="h-4 w-4 text-neutral-800 shrink-0" />
                    {current.name}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mt-1">
                    {current.summary}
                  </p>
                </div>

                {/* Key Milestones List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Execution Milestones
                  </span>
                  <div className="space-y-1.5">
                    {current.milestones.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="text-neutral-400 font-mono text-[10px] mt-0.5 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mindset Quote */}
                <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-[11px] text-neutral-500 italic">
                  <span className="h-1 w-1 rounded-full bg-neutral-400" />
                  <span>&ldquo;{current.mindset}&rdquo;</span>
                </div>
              </div>

              {/* Right Column: Local Toolchain & Final Deliverable (5 Cols) */}
              <div className="md:col-span-5 flex flex-col justify-between h-full bg-neutral-50 rounded-xl p-3.5 sm:p-4 border border-neutral-200/80 space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold flex items-center gap-1.5">
                      <Terminal className="h-3 w-3" />
                      Applied Toolchain
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {current.tools.length} Tools
                    </span>
                  </div>

                  {/* Local SVG Icons Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {current.tools.map((tool) => {
                      const iconSrc = localIconMap[tool];
                      return (
                        <div
                          key={tool}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-800 hover:border-neutral-300 transition-colors shadow-2xs"
                        >
                          <div className="h-5 w-5 flex items-center justify-center shrink-0">
                            {iconSrc ? (
                              <img
                                src={iconSrc}
                                alt={tool}
                                width={16}
                                height={16}
                                className="h-3.5 w-3.5 object-contain"
                              />
                            ) : (
                              <Cpu className="h-3.5 w-3.5 text-neutral-500" />
                            )}
                          </div>
                          <span className="text-[11px] truncate">{tool}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-2 border-t border-neutral-200/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    Primary Output
                  </span>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900 text-white text-[11px] font-medium">
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{current.deliverable}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
