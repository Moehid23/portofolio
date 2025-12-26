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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
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
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
