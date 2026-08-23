"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Compass, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Terminal,
  Activity,
  Workflow
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
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keyActivities: string[];
  deliverables: string;
  tools: string[];
  color: string;
  accentBg: string;
}

const processPhases: ProcessPhase[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & System Architecture",
    subtitle: "Turning complex requirements into resilient technical blueprints.",
    description: "I begin by deeply analyzing the business logic, industrial calibration constraints, and user personas. I structure clean data models, system schemas, and intuitive UI wireframes before writing code.",
    icon: Compass,
    keyActivities: [
      "User Journey & Requirements Analysis",
      "Relational & Time-Series Data Modeling",
      "API Contract & System Flow Architecture",
      "Precision Metrology Calibration Specs"
    ],
    deliverables: "Architecture Diagram, Schema Specs & Interactive Wireframes",
    tools: ["Figma", "PostgreSQL", "TypeScript", "Git"],
    color: "from-blue-500/20 to-indigo-500/20",
    accentBg: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    id: "development",
    step: "02",
    title: "Precision Engineering & Full-Stack Build",
    subtitle: "Building responsive, modular, and high-performance software solutions.",
    description: "I transform system designs into production-ready web and mobile applications with clean architecture, accessible components, and optimized database queries.",
    icon: Code2,
    keyActivities: [
      "Modular Frontend Component Engineering",
      "Robust REST & Microservice API Development",
      "Cross-Platform Native Mobile Development",
      "Performance & SEO Optimization"
    ],
    deliverables: "Production Web Apps, Mobile Apps & Microservices",
    tools: ["Next.js", "React.js", "Flutter", "Laravel", "Tailwind CSS", "Node.js"],
    color: "from-emerald-500/20 to-teal-500/20",
    accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
  },
  {
    id: "intelligence",
    step: "03",
    title: "Data Intelligence & Predictive Analytics",
    subtitle: "Extracting actionable insights and building machine learning models.",
    description: "Leveraging data science to solve real-world industrial and operational bottlenecks—such as inventory forecasting using Random Forest to prevent overstock and stockouts.",
    icon: BrainCircuit,
    keyActivities: [
      "Data Cleansing & Exploratory Data Analysis (EDA)",
      "Supervised Machine Learning & Model Evaluation",
      "Predictive Inventory & Demand Modeling",
      "Executive Business Intelligence Dashboards"
    ],
    deliverables: "Trained Predictive ML Models & Executive BI Dashboards",
    tools: ["Python", "Pandas", "Scikit-Learn", "Tableau", "Power BI", "SQL"],
    color: "from-amber-500/20 to-orange-500/20",
    accentBg: "bg-amber-500/10 text-amber-600 border-amber-200"
  },
  {
    id: "deployment",
    step: "04",
    title: "Verification, Quality & Deployment",
    subtitle: "Ensuring zero-defect precision, CI/CD automation, and cloud reliability.",
    description: "Drawing from my Metrology background, I apply strict measurement calibration and automated testing to ensure software reliability, followed by automated continuous deployment.",
    icon: ShieldCheck,
    keyActivities: [
      "End-to-End & Integration Testing",
      "Metrology Dimensional & Precision Verification",
      "Docker Containerization & Environment Parity",
      "Automated CI/CD Pipelines & Cloud Hosting"
    ],
    deliverables: "Zero-Downtime Deployment, Test Coverage & Quality Logs",
    tools: ["Docker", "Vercel", "Git", "Linux"],
    color: "from-purple-500/20 to-pink-500/20",
    accentBg: "bg-purple-500/10 text-purple-600 border-purple-200"
  }
];

export function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activePhase = processPhases[activeTab];

  return (
    <section className="pt-16 pb-16 md:py-32 relative w-full overflow-hidden bg-neutral-50/70" id="skills">
      {/* Subtle Background Radial & Grid Accent */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-bold uppercase tracking-widest text-neutral-800">
            <Workflow className="h-3.5 w-3.5 text-emerald-600" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-950">
            How I Build &amp; Execute
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            A systematic engineering process bridging software architecture, precision testing, machine learning, and scalable deployment.
          </p>
        </motion.div>

        {/* Interactive Step Navigator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          {processPhases.map((phase, idx) => {
            const Icon = phase.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={phase.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "relative flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 group",
                  isActive
                    ? "bg-white border-neutral-950 shadow-xl shadow-neutral-200/60 scale-[1.02] z-10"
                    : "bg-white/80 border-neutral-200/80 hover:border-neutral-300 hover:bg-white hover:shadow-md"
                )}
              >
                {/* Active Top Bar Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessTab"
                    className="absolute top-0 left-4 right-4 h-1 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between w-full mb-3">
                  <span className={cn(
                    "text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-colors",
                    isActive ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-500 group-hover:text-black"
                  )}>
                    Phase {phase.step}
                  </span>
                  <div className={cn(
                    "p-2 rounded-xl transition-all duration-300",
                    isActive ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-600 group-hover:scale-110"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className={cn(
                  "text-xs sm:text-sm font-bold tracking-tight line-clamp-2 transition-colors",
                  isActive ? "text-neutral-950" : "text-neutral-600 group-hover:text-neutral-950"
                )}>
                  {phase.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card (Interactive Spotlight) */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 md:p-10 shadow-xl shadow-neutral-100/80 overflow-hidden relative"
            >
              {/* Background Ambient Gradient */}
              <div className={cn(
                "absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-60 bg-gradient-to-br",
                activePhase.color
              )} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Col: Phase Description & Activities */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                        Phase {activePhase.step} of 04
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">Standard Operating Workflow</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                      {activePhase.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 font-medium leading-snug">
                      {activePhase.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed border-l-2 border-neutral-200 pl-4 italic">
                    &ldquo;{activePhase.description}&rdquo;
                  </p>

                  {/* Core Activities Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-emerald-600" />
                      Key Engineering Steps:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activePhase.keyActivities.map((act, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Banner */}
                  <div className="p-3.5 rounded-xl bg-neutral-950 text-white flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                      <span><strong>Key Outcome:</strong> {activePhase.deliverables}</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Integrated Tools & Technology Stack */}
                <div className="lg:col-span-5 bg-neutral-50/80 rounded-2xl border border-neutral-200/80 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5 text-neutral-500" />
                      Technologies Applied
                    </h4>
                    <span className="text-[11px] font-semibold text-neutral-400">
                      {activePhase.tools.length} Tools
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {activePhase.tools.map((toolName) => {
                      const iconData = getIconData(toolName);
                      return (
                        <div
                          key={toolName}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 hover:scale-105 transition-all duration-200"
                        >
                          <div className="h-8 w-8 rounded-lg bg-neutral-50 flex items-center justify-center border border-neutral-100 shrink-0">
                            {iconData ? (
                              <img
                                src={["Tableau", "Power BI"].includes(toolName) ? `/${iconData.slug}.svg` : `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color}`}
                                alt={toolName}
                                className="h-4 w-4"
                                loading="lazy"
                              />
                            ) : (
                              <Cpu className="h-4 w-4 text-neutral-600" />
                            )}
                          </div>
                          <span className="text-xs font-bold text-neutral-800 truncate">
                            {toolName}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-neutral-200 text-center">
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Every tool is deliberately selected to maximize reliability, performance, and precision.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Process Grid Overview (All 4 Phases at a Glance) */}
        <div className="mt-14 pt-12 border-t border-neutral-200/80">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
              End-to-End Pipeline Summary
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              Click any phase above to inspect its granular workflows and toolchains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {processPhases.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className="group relative rounded-2xl bg-white p-5 border border-neutral-200/80 hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {p.step}
                    </span>
                    <div className="p-2 rounded-lg bg-neutral-50 group-hover:bg-black group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-black">
                    {p.title}
                  </h4>

                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {p.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tools.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tools.length > 3 && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400">
                        +{p.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
