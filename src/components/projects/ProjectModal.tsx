"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { X, ExternalLink, Github, Calendar, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm transition-all"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-[5%] z-[101] flex h-[90vh] w-full max-w-5xl -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl outline-none md:top-[10%] md:h-[80vh]"
          >
            {/* Header / Image Area */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-80 bg-neutral-900">
               <Image
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
               
               <Button 
                 variant="secondary" 
                 size="icon" 
                 onClick={onClose}
                 className="absolute right-4 top-4 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 border-none"
               >
                 <X className="h-5 w-5" />
               </Button>

               <div className="absolute bottom-6 left-6 right-6 text-white">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                 >
                    <div className="flex items-center gap-3 mb-2">
                       <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm border border-white/10">
                       {project.categories.map((cat, index) => (
                         <span key={index}>
                           {cat}{index < project.categories.length - 1 ? ", " : ""}
                         </span>
                       ))}
                       </span>
                       <span className="flex items-center gap-1 text-xs text-neutral-300">
                         <Calendar className="h-3 w-3" /> {project.date}
                       </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h2>
                 </motion.div>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
               <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
                  <div className="space-y-6">
                     <h3 className="text-xl font-bold text-white">About the Project</h3>
                     <p className="text-lg leading-relaxed text-neutral-400">
                       {project.description}
                     </p>
                     
                     {/* If we had more images, they would go here as a gallery */}
                  </div>

                  <div className="space-y-8">
                     <div>
                        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-400">
                           <Layers className="h-4 w-4" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                     </div>

                     <div className="flex flex-col gap-3">
                        {project.demoUrl && (
                          <Button className="w-full h-12 text-base justify-between group bg-white text-black hover:bg-neutral-200" asChild>
                            <Link href={project.demoUrl} target="_blank">
                              <span>Live Demo</span>
                              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" className="w-full h-12 text-base justify-between group border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <span>Source Code</span>
                              <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                            </Link>
                          </Button>
                        )}
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
