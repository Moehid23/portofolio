"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const images = (
    project.images && project.images.length > 0 
      ? project.images 
      : (project.image ? [project.image] : [])
  ).filter((img): img is string => Boolean(img && typeof img === "string" && img.trim() !== ""));

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSrc = images[currentIndex] || images[0] || (project.image && project.image.trim() !== "" ? project.image : null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

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
      <div className="h-full flex flex-col gap-4 rounded-2xl p-3 bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-400 transition-all duration-300">
        
        {/* Image Slider Container */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200/80 group/slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              {activeSrc ? (
                <Image
                  src={activeSrc}
                  alt={`${project.title} - screenshot ${currentIndex + 1}`}
                  fill
                  className="object-contain bg-neutral-950/90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500">
                  <ImageIcon className="h-8 w-8" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/slider:bg-black/10 pointer-events-none" />

          {/* Image count badge */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 z-10 border border-white/10 shadow-sm pointer-events-none">
              <ImageIcon className="h-3 w-3" />
              <span>{currentIndex + 1} / {images.length}</span>
            </div>
          )}

          {/* View detail trigger */}
          <div className="absolute top-3 right-3 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10">
            <div className="bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Slider Controls (Left and Right Arrows) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-0 group-hover/slider:opacity-100 hover:scale-110 z-20 border border-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-0 group-hover/slider:opacity-100 hover:scale-110 z-20 border border-white/20"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Slider Dots Indicator */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleDotClick(e, idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 px-1 pb-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-black transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
              {project.categories[0]}
            </span>
          </div>
          
          <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {project.shortDescription || project.description}
          </p>

          <div className="mt-auto pt-3 flex items-center justify-between border-t border-neutral-100">
            <div className="flex items-center gap-1.5 flex-wrap">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[11px] font-medium bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[11px] text-neutral-400">+{project.technologies.length - 3}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
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
              <span className="text-xs font-semibold text-neutral-900 group-hover:underline flex items-center gap-0.5 ml-1">
                Detail <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

