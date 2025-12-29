"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="h-full flex flex-col gap-4">
        {/* Image Container with Hover Effect */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          
          <div className="absolute top-4 right-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
             <div className="bg-white rounded-full p-2 shadow-sm">
                <ArrowUpRight className="w-4 h-4 text-black" />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
              {project.categories[0]}
            </span>
          </div>
          
          <p className="text-sm text-neutral-500 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4 flex items-center gap-3">
             {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium flex items-center gap-1 hover:text-neutral-900 text-neutral-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                   <ExternalLink className="w-3 h-3" /> Demo
                </a>
             )}
             {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium flex items-center gap-1 hover:text-neutral-900 text-neutral-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                   <Github className="w-3 h-3" /> Code
                </a>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
