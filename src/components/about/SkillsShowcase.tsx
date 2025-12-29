"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

// Helper to get icon slug
const getIconSlug = (name: string): string | null => {
  const map: Record<string, string> = {
    "Next.js": "nextdotjs",
    "React.js": "react",
    "Flutter": "flutter",
    "Tailwind CSS": "tailwindcss",
    "A-Frame (VR)": "aframe",
    "Framer Motion": "framermotion",
    "Vue.js": "vuedotjs",
    "Inertia.js": "inertia",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "HTML": "html5",
    "CSS": "css3",
    "Node.js": "nodedotjs",
    "Laravel": "laravel",
    "Express.js": "express",
    "Firebase": "firebase",
    "Supabase": "supabase",
    "PostgreSQL": "postgresql",
    "Sequelize": "sequelize",
    "Git": "git",
    "Figma": "figma",
    "Stripe": "stripe",
    "VS Code": "visualstudiocode",
    "Gemini AI": "googlegemini",
    "Trello": "trello",
    "Notion": "notion",
    "EsLint": "eslint",
    "REST APIs": "postman",
    "Microservices": "docker",
  };
  return map[name] || null;
};

export function SkillsShowcase() {
  const cards = [
    {
      title: "Frontend",
      items: ["Next.js", "React.js", "Tailwind CSS", "Vue.js"],
      all: skills.filter(s => s.category === "Frontend")
    },
    {
      title: "Mobile & VR",
      items: ["Flutter", "A-Frame (VR)", "Inertia.js", "React.js"],
      all: skills.filter(s => ["Flutter", "A-Frame (VR)", "Inertia.js"].includes(s.name))
    },
    {
      title: "Backend",
      items: ["Laravel", "Node.js", "Express.js", "Supabase"],
      all: skills.filter(s => s.category === "Backend")
    },
    {
      title: "Tools & Design",
      items: ["Git", "Figma", "Stripe", "Gemini AI"],
      all: [...skills.filter(s => s.category === "Tools"), ...skills.filter(s => s.category === "Design")]
    }
  ];

  return (
    <section className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Outlined Circles (Top-Left & Bottom-Right) */}
      <div className="absolute -left-[100px] top-32 md:-left-[200px] md:top-20 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full border border-black bg-transparent z-0" />
      <div className="absolute -right-[100px] bottom-10 md:-right-[200px] md:bottom-20 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full border border-black bg-transparent z-0" />

      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-16 text-center relative z-10"
      >
        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-6">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-black mx-auto mb-6" />
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
           My preferred weapons of choice.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-[1400px] mx-auto px-6 relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col items-center rounded-[2rem] bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-neutral-100"
          >
            {/* Heading */}
            <h3 className="mb-8 text-xl font-bold text-neutral-900 group-hover:text-black transition-colors">{card.title}</h3>

            {/* Icon Grid (2x2) */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {card.items.slice(0, 4).map((itemName) => {
                 const slug = getIconSlug(itemName);
                 return (
                   <div 
                     key={itemName} 
                     className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm border border-neutral-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-white"
                     title={itemName}
                   >
                     {slug ? (
                       <img 
                         src={`https://cdn.simpleicons.org/${slug}`}
                         alt={itemName}
                         className="h-8 w-8 transition-transform duration-300"
                         loading="lazy"
                       />
                     ) : (
                       <div className="h-3 w-3 rounded-full bg-neutral-300" />
                     )}
                   </div>
                 );
              })}
            </div>

            {/* Text List */}
            <div className="mt-auto">
              <p className="text-sm font-medium leading-relaxed text-neutral-500 group-hover:text-neutral-800 transition-colors">
                {card.items.join(", ")}
              </p>
            </div>
            
            {/* Hover Decoration */}
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-b from-transparent to-neutral-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
