"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// 100% Local SVG Icon Map (Offline, Zero CDN)
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
  "Excel": "/icons/excel.svg",
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
    tools: ["Figma", "Stitch", "PostgreSQL", "TypeScript", "Git"],
    deliverable: "System Schema & Interactive Prototype"
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
    deliverable: "Production-Ready Web & Mobile Systems"
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
    tools: ["Python", "Pandas", "Scikit-Learn", "Tableau", "Power BI", "Excel"],
    deliverable: "Trained Predictive Model & Executive Dashboards"
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
    deliverable: "Zero-Downtime Live Production Deployment"
  }
];

export function SkillsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = phases[activeIdx];

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

        {/* ── macOS MacBook Window Card ── */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-neutral-300/80 shadow-2xl shadow-neutral-200/60 overflow-hidden">
          
          {/* macOS Titlebar with 3 Traffic Light Circles */}
          <div className="bg-neutral-100/90 border-b border-neutral-200/90 px-4 sm:px-5 py-3 flex items-center justify-between select-none">
            {/* 3 MacBook Traffic Light Buttons */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-2xs hover:opacity-80 transition-opacity cursor-pointer" title="Close" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-2xs hover:opacity-80 transition-opacity cursor-pointer" title="Minimize" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-2xs hover:opacity-80 transition-opacity cursor-pointer" title="Expand" />
            </div>

            {/* macOS Window Title */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600 shadow-2xs">
              <span className="text-neutral-400">workspace:</span>
              <span className="font-semibold text-neutral-900">~/muhid/engineering-process</span>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">Active Terminal</span>
            </div>
          </div>

          {/* macOS Window Body */}
          <div className="p-4 sm:p-5 space-y-4">
            
            {/* Phase Timeline Navigation Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
              {phases.map((p, idx) => {
                const isSelected = activeIdx === idx;

                return (
                  <button
                    key={p.number}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "relative text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-200 group flex flex-col justify-between min-h-[70px]",
                      isSelected
                        ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                        : "bg-neutral-50/70 text-neutral-700 border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-100/70"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={cn(
                        "text-[10px] font-mono font-bold tracking-wider",
                        isSelected ? "text-emerald-400" : "text-neutral-400"
                      )}>
                        PHASE {p.number}
                      </span>
                      <span className={cn(
                        "text-[10px] font-mono",
                        isSelected ? "text-neutral-400" : "text-neutral-400"
                      )}>
                        0{idx + 1}/04
                      </span>
                    </div>

                    <div className="mt-1">
                      <p className={cn(
                        "text-[9px] font-semibold uppercase tracking-wider line-clamp-1",
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
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Phase Inspector Workspace */}
            <div className="rounded-xl bg-neutral-50/90 border border-neutral-200/90 p-4 sm:p-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start"
                >
                  {/* Left Column: Context & Milestones (7 Cols) */}
                  <div className="md:col-span-7 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-neutral-700 border border-neutral-200">
                          PHASE {current.number} / 04
                        </span>
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                          {current.category}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                        {current.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed mt-0.5">
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
                            <span className="leading-snug text-[11px] sm:text-xs">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mindset Quote */}
                    <div className="pt-2 border-t border-neutral-200/60 flex items-center gap-2 text-[11px] text-neutral-500 italic">
                      <span className="h-1 w-1 rounded-full bg-neutral-400" />
                      <span>&ldquo;{current.mindset}&rdquo;</span>
                    </div>
                  </div>

                  {/* Right Column: Local Tool Logos & Final Deliverable (5 Cols) */}
                  <div className="md:col-span-5 flex flex-col justify-between h-full bg-white rounded-xl p-3.5 sm:p-4 border border-neutral-200/80 space-y-3 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                          Applied Toolchain
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {current.tools.length} Tools
                        </span>
                      </div>

                      {/* Local Tool Badges with Local SVGs */}
                      <div className="flex flex-wrap gap-1.5">
                        {current.tools.map((tool) => {
                          const iconSrc = localIconMap[tool];
                          return (
                            <div
                              key={tool}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-neutral-400 hover:bg-white transition-colors shadow-2xs"
                            >
                              {iconSrc && (
                                <img
                                  src={iconSrc}
                                  alt={tool}
                                  width={16}
                                  height={16}
                                  className="h-3.5 w-3.5 object-contain shrink-0"
                                />
                              )}
                              <span className="text-[11px]">{tool}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Deliverable Badge */}
                    <div className="pt-2 border-t border-neutral-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                        Primary Output
                      </span>
                      <div className="p-2 rounded-lg bg-neutral-950 text-white text-[11px] font-mono font-medium">
                        {current.deliverable}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
