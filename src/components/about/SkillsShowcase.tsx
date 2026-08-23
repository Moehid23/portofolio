"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Compass, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Workflow,
  ChevronRight
} from "lucide-react";

// Helper to get official SimpleIcons SVG and colors
const getIconData = (name: string): { slug: string; color: string } | null => {
  const map: Record<string, { slug: string; color: string }> = {
    "Next.js": { slug: "nextdotjs", color: "000000" },
    "React.js": { slug: "react", color: "61DAFB" },
    "Flutter": { slug: "flutter", color: "02569B" },
    "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
    "Vue.js": { slug: "vuedotjs", color: "4FC08D" },
    "TypeScript": { slug: "typescript", color: "3178C6" },
    "JavaScript": { slug: "javascript", color: "F7DF1E" },
    "Node.js": { slug: "nodedotjs", color: "339933" },
    "Laravel": { slug: "laravel", color: "FF2D20" },
    "Python": { slug: "python", color: "3776AB" },
    "SQL": { slug: "postgresql", color: "4169E1" },
    "Git": { slug: "git", color: "F05032" },
    "Docker": { slug: "docker", color: "2496ED" },
    "Kotlin": { slug: "kotlin", color: "7F52FF" },
    "Figma": { slug: "figma", color: "F24E1E" },
    "Tableau": { slug: "tableau", color: "E15759" },
    "Power BI": { slug: "powerbi", color: "F2C811" },
    "PostgreSQL": { slug: "postgresql", color: "4169E1" },
    "Vercel": { slug: "vercel", color: "000000" },
    "Linux": { slug: "linux", color: "FCC624" },
    "Flask": { slug: "flask", color: "000000" },
    "Scikit-Learn": { slug: "scikitlearn", color: "F7931E" },
    "Pandas": { slug: "pandas", color: "150458" }
  };
  return map[name] || null;
};

interface ProcessPhase {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keyActivities: string[];
  deliverables: string;
  tools: string[];
}

const processPhases: ProcessPhase[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & Architecture",
    tagline: "Requirements, schema & blueprints",
    description: "Analyzing user flows, data schemas, API contracts, and precision metrology calibration specs before writing code.",
    icon: Compass,
    keyActivities: [
      "User Journey & System Modeling",
      "Relational & Time-Series Schemas",
      "API & System Architecture",
      "Precision Metrology Specifications"
    ],
    deliverables: "Architecture Diagram & UI Wireframes",
    tools: ["Figma", "PostgreSQL", "TypeScript", "Git"]
  },
  {
    id: "development",
    step: "02",
    title: "Precision Full-Stack Build",
    tagline: "Scalable web and mobile apps",
    description: "Developing clean-architecture software with responsive interfaces, robust REST APIs, and optimized query execution.",
    icon: Code2,
    keyActivities: [
      "Modular Component Engineering",
      "Robust REST & Microservice APIs",
      "Cross-Platform Native Mobile Apps",
      "Performance & SEO Optimization"
    ],
    deliverables: "Production Web & Mobile Apps",
    tools: ["Next.js", "React.js", "Flutter", "Laravel", "Tailwind CSS", "Node.js"]
  },
  {
    id: "intelligence",
    step: "03",
    title: "Data & Machine Learning",
    tagline: "Predictive ML & BI analytics",
    description: "Applying data science to eliminate operational bottlenecks, including Random Forest modeling for inventory forecasting.",
    icon: BrainCircuit,
    keyActivities: [
      "Data Cleansing & Exploratory EDA",
      "Random Forest ML Forecasting",
      "Inventory Demand Modeling",
      "Executive BI Dashboards"
    ],
    deliverables: "Trained ML Models & Dashboards",
    tools: ["Python", "Pandas", "Scikit-Learn", "Tableau", "Power BI", "SQL"]
  },
  {
    id: "deployment",
    step: "04",
    title: "Testing & Cloud Deployment",
    tagline: "Metrology testing & CI/CD",
    description: "Enforcing zero-defect precision through metrology calibration, automated testing, containerization, and cloud delivery.",
    icon: ShieldCheck,
    keyActivities: [
      "End-to-End & Integration Testing",
      "Metrology Dimensional Verification",
      "Docker Containerization & Parity",
      "Automated CI/CD Cloud Hosting"
    ],
    deliverables: "Zero-Downtime Cloud Deployment",
    tools: ["Docker", "Vercel", "Git", "Linux"]
  }
];

export function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activePhase = processPhases[activeTab];
  const ActiveIcon = activePhase.icon;

  return (
    <section className="py-6 sm:py-8 md:py-10 relative w-full overflow-hidden bg-neutral-50/60" id="skills">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (Ultra Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 shadow-xs text-[10px] font-bold uppercase tracking-widest text-neutral-800">
            <Workflow className="h-3 w-3 text-emerald-600" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
            How I Build &amp; Execute
          </h2>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
            A systematic engineering process bridging software architecture, precision testing, and cloud deployment.
          </p>
        </div>

        {/* Compact Single-View Dashboard (Zero Unnecessary Scroll) */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/90 shadow-lg shadow-neutral-100/60 p-3 sm:p-4 md:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
            
            {/* Left: 4-Phase Step List */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-1.5 sm:space-y-2">
              {processPhases.map((phase, idx) => {
                const Icon = phase.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={phase.id}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 group",
                      isActive
                        ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                        : "bg-neutral-50/70 hover:bg-neutral-100 text-neutral-800 border-neutral-200/70 hover:border-neutral-300"
                    )}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors",
                        isActive ? "bg-white/20 text-white" : "bg-white border border-neutral-200 text-neutral-700 shadow-xs"
                      )}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            "text-[9px] font-mono font-bold uppercase tracking-wider",
                            isActive ? "text-emerald-400" : "text-neutral-400"
                          )}>
                            Phase {phase.step}
                          </span>
                        </div>
                        <h3 className={cn(
                          "text-xs sm:text-sm font-bold tracking-tight line-clamp-1",
                          isActive ? "text-white" : "text-neutral-900"
                        )}>
                          {phase.title}
                        </h3>
                        <p className={cn(
                          "text-[10px] line-clamp-1 hidden sm:block",
                          isActive ? "text-neutral-300" : "text-neutral-500"
                        )}>
                          {phase.tagline}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={cn(
                      "h-3.5 w-3.5 shrink-0 transition-transform",
                      isActive ? "text-emerald-400 translate-x-0.5" : "text-neutral-400 group-hover:translate-x-0.5"
                    )} />
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Interactive Inspector */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-neutral-50/90 border border-neutral-200/80 p-3.5 sm:p-4 md:p-5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 sm:space-y-3.5"
                >
                  {/* Phase Title & Description */}
                  <div className="space-y-1 border-b border-neutral-200/80 pb-2.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                        Phase {activePhase.step} Breakdown
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-400">
                        {activeTab + 1} of {processPhases.length}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight flex items-center gap-2">
                      <ActiveIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                      {activePhase.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                      {activePhase.description}
                    </p>
                  </div>

                  {/* 4 Core Activities */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                      Key Execution Activities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {activePhase.keyActivities.map((act, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-white border border-neutral-200/70 text-[11px] text-neutral-800 font-medium shadow-2xs"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applied Technologies */}
                  <div className="space-y-1.5 pt-0.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1">
                      <Terminal className="h-3 w-3 text-neutral-500" />
                      Tools &amp; Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activePhase.tools.map((toolName) => {
                        const iconData = getIconData(toolName);
                        return (
                          <div
                            key={toolName}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-neutral-200 shadow-2xs text-[11px] font-semibold text-neutral-800 hover:border-neutral-400 transition-colors"
                          >
                            {iconData ? (
                              <img
                                src={["Tableau", "Power BI"].includes(toolName) ? `/${iconData.slug}.svg` : `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color}`}
                                alt={toolName}
                                className="h-3 w-3 shrink-0"
                                loading="lazy"
                              />
                            ) : (
                              <Cpu className="h-3 w-3 text-neutral-600 shrink-0" />
                            )}
                            <span>{toolName}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Deliverable */}
                  <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 text-white flex items-center gap-2 text-[11px]">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span><strong>Key Outcome:</strong> {activePhase.deliverables}</span>
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
