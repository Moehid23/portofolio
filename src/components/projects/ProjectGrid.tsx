"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Web", "Mobile", "Design", "Other"];

export function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.categories.includes(filter)
  );

  const displayedProjects = filter === "All" 
    ? filteredProjects.slice(0, visibleCount) 
    : filteredProjects;

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setVisibleCount(6);
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => handleFilterChange(category)}
            className="min-w-[80px]"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button (Only for 'All' category) */}
      {filter === "All" && visibleCount < filteredProjects.length && (
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="min-w-[200px] h-12 rounded-full border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 transition-all font-medium"
          >
            Load More Projects
          </Button>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
