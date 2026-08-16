"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCcw,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Reset state when opening new project
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsZoomOpen(false);
      setZoomScale(1);
    }
  }, [isOpen, project]);

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

  const images = (
    project?.images && project.images.length > 0 
      ? project.images 
      : (project?.image ? [project.image] : [])
  ).filter((img): img is string => Boolean(img && typeof img === "string" && img.trim() !== ""));

  const activeImage = images[currentIndex] || images[0] || null;

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoomScale(1);
  }, [images.length]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoomScale(1);
  }, [images.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        if (isZoomOpen) {
          setIsZoomOpen(false);
          setZoomScale(1);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isZoomOpen, onClose, handlePrev, handleNext]);

  if (!mounted || !project) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md transition-all"
            />
            
            {/* Main Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-[3%] z-[101] flex h-[94vh] w-full max-w-5xl -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl outline-none"
            >
              {/* Header / Interactive Image Slider */}
              <div className="relative h-72 w-full shrink-0 overflow-hidden md:h-96 bg-black group/modalSlider">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      if (activeImage) {
                        setIsZoomOpen(true);
                        setZoomScale(1);
                      }
                    }}
                    className="relative w-full h-full cursor-zoom-in"
                  >
                    {activeImage ? (
                      <Image
                        src={activeImage}
                        alt={`${project.title} - screenshot ${currentIndex + 1}`}
                        fill
                        className="object-contain bg-black"
                      />
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/40 pointer-events-none" />
                
                {/* Top Action Buttons */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-30">
                  {/* Zoom Button */}
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => {
                      setIsZoomOpen(true);
                      setZoomScale(1);
                    }}
                    className="rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 px-3 h-9 gap-1.5 shadow-lg text-xs"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Zoom Fullscreen</span>
                  </Button>

                  {/* Close Modal Button */}
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    onClick={onClose}
                    className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 shadow-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Screenshot Counter Badge */}
                <div className="absolute left-6 top-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 z-30 flex items-center gap-1.5">
                  <span>{currentIndex + 1} of {images.length} Screenshots</span>
                  <span className="text-neutral-400">• Click image to zoom</span>
                </div>

                {/* Slider Arrow Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 z-30 border border-white/20 shadow-xl"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 z-30 border border-white/20 shadow-xl"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Project Title Overlay at bottom of slider */}
                <div className="absolute bottom-4 left-6 right-6 text-white z-20 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold backdrop-blur-md border border-white/20">
                        {project.categories.join(", ")}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-300">
                        <Calendar className="h-3 w-3" /> {project.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl drop-shadow-md">{project.title}</h2>
                  </motion.div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 px-6 py-2.5 bg-neutral-900 border-b border-neutral-800 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx);
                        setZoomScale(1);
                      }}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentIndex
                          ? "border-white scale-105 shadow-md"
                          : "border-neutral-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
                  
                  {/* Left Column: Description & Screenshots Gallery */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">About the Project</h3>
                      <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Screenshots Gallery Section */}
                    {images.length > 0 && (
                      <div className="space-y-4 pt-4 border-t border-neutral-800">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                            <span>Project Screenshots</span>
                            <span className="bg-neutral-800 text-neutral-300 text-xs px-2 py-0.5 rounded-full font-normal">
                              {images.length} images
                            </span>
                          </h4>
                          <span className="text-xs text-neutral-400">Click any image to view &amp; zoom</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {images.map((img, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setCurrentIndex(idx);
                                setIsZoomOpen(true);
                                setZoomScale(1);
                              }}
                              className={`group relative aspect-video overflow-hidden rounded-xl bg-neutral-900 border-2 cursor-pointer transition-all duration-200 ${
                                idx === currentIndex
                                  ? "border-white ring-2 ring-white/20 scale-[1.02]"
                                  : "border-neutral-800 hover:border-neutral-500 opacity-80 hover:opacity-100"
                              }`}
                            >
                              <Image
                                src={img}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <Maximize2 className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                              </div>
                              <span className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded font-medium">
                                #{idx + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Tech Stack & Actions */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-400">
                        <Layers className="h-4 w-4" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-neutral-700 bg-neutral-800/90 px-3 py-1.5 text-xs font-semibold text-neutral-200 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Project Information
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-neutral-800">
                          <span className="text-neutral-500">Category</span>
                          <span className="text-white font-medium">{project.categories.join(", ")}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-neutral-800">
                          <span className="text-neutral-500">Year / Date</span>
                          <span className="text-white font-medium">{project.date}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-neutral-500">Total Screenshots</span>
                          <span className="text-white font-medium">{images.length} files</span>
                        </div>
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
      </AnimatePresence>

      {/* ── Fullscreen Lightbox Zoom Modal (Higher Z-Index: 200) ── */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col bg-black/95 backdrop-blur-xl select-none"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-black/50 z-30">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-sm md:text-base">{project.title}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400 text-xs md:text-sm">
                  {currentIndex + 1} of {images.length}
                </span>
                <span className="hidden sm:inline-block text-neutral-600 text-xs">
                  (Use Arrow Keys to navigate, Esc to close)
                </span>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.max(0.5, prev - 0.25))}
                  className="h-9 w-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>

                <span className="text-xs text-neutral-300 font-mono px-2">
                  {Math.round(zoomScale * 100)}%
                </span>

                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.min(3, prev + 0.25))}
                  className="h-9 w-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  className="h-9 w-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
                  title="Reset Zoom (100%)"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <div className="h-5 w-[1px] bg-neutral-800 mx-1" />

                <button
                  type="button"
                  onClick={() => {
                    setIsZoomOpen(false);
                    setZoomScale(1);
                  }}
                  className="h-9 w-9 rounded-lg bg-neutral-800 hover:bg-red-950/80 hover:text-red-400 hover:border-red-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
                  title="Close Fullscreen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Interactive Zoom Stage */}
            <div 
              className="relative flex-1 overflow-auto flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsZoomOpen(false);
                  setZoomScale(1);
                }
              }}
            >
              {/* Left Arrow */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="fixed left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 z-30 border border-white/20 shadow-2xl"
                  title="Previous Image (Left Arrow)"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
              )}

              {/* Zoomable Image Container */}
              <motion.div
                animate={{ scale: zoomScale }}
                transition={{ type: "spring", damping: 30, stiffness: 350 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                style={{
                  width: "90vw",
                  height: "80vh",
                }}
              >
                {activeImage ? (
                  <Image
                    src={activeImage}
                    alt={`${project.title} zoom view ${currentIndex + 1}`}
                    fill
                    className="object-contain select-none pointer-events-none drop-shadow-2xl"
                  />
                ) : null}
              </motion.div>

              {/* Right Arrow */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="fixed right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 z-30 border border-white/20 shadow-2xl"
                  title="Next Image (Right Arrow)"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Navigation in Fullscreen */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2.5 py-3.5 px-6 bg-black/70 border-t border-neutral-900 overflow-x-auto z-30">
                {images.map((img, idx) => (
                  img && typeof img === "string" && img.trim() !== "" ? (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx);
                        setZoomScale(1);
                      }}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentIndex
                          ? "border-white scale-110 shadow-lg ring-2 ring-white/30"
                          : "border-neutral-800 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Zoom thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ) : null
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

