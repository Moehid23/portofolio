"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Calendar, 
  MapPin, 
  Maximize2,
  Sparkles
} from "lucide-react";
import { createPortal } from "react-dom";

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validItems = galleryItems.filter((item) => Boolean(item.src && item.src.trim() !== ""));

  const handleOpenModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setZoomScale(1);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setZoomScale(1);
  };

  const handlePrev = useCallback(() => {
    if (validItems.length === 0) return;
    const nextIdx = currentIndex === 0 ? validItems.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    setSelectedItem(validItems[nextIdx]);
    setZoomScale(1);
  }, [currentIndex, validItems]);

  const handleNext = useCallback(() => {
    if (validItems.length === 0) return;
    const nextIdx = currentIndex === validItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    setSelectedItem(validItems[nextIdx]);
    setZoomScale(1);
  }, [currentIndex, validItems]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, handlePrev, handleNext]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden" id="gallery">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900"
            >
              Visual Chronicles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-500 leading-relaxed"
            >
              A curated collection of milestone moments, academic achievements, and leadership explorations that define my journey.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {validItems.length} Milestone Moments Captured
            </span>
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {validItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => handleOpenModal(item, i)}
              className="relative flex-shrink-0 w-[85vw] h-[420px] snap-center rounded-2xl bg-neutral-900 overflow-hidden cursor-pointer shadow-lg border border-neutral-200 group"
            >
              <Image
                src={item.src}
                alt={item.alt || "Gallery image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="85vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full p-2 text-white">
                <Maximize2 className="h-4 w-4" />
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  {item.category}
                </p>
                <p className="text-xl font-bold text-white mb-2 leading-tight">
                  {item.alt}
                </p>
                <span className="text-xs text-neutral-300 underline underline-offset-4">
                  Tap to view full story &amp; zoom ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 auto-rows-[250px]">
          {validItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => handleOpenModal(item, i)}
              className={cn(
                "relative group overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200/80",
                item.span || "col-span-1 row-span-1"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt || "Gallery image"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white border border-white/10 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                <div className="bg-white rounded-full p-2.5 shadow-lg text-black hover:scale-110 transition-transform">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white z-10 transition-all duration-300">
                <p className="text-base lg:text-lg font-bold text-white drop-shadow-md line-clamp-2 leading-snug mb-1">
                  {item.alt}
                </p>
                <div className="flex items-center justify-between text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                  <span>{item.date || "2024"} • {item.location || "View Story"}</span>
                  <span className="font-semibold text-white underline underline-offset-2">Detail ↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Pop-Up Detail Lightbox Modal ── */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex flex-col bg-black/95 backdrop-blur-xl select-none"
            >
              {/* Top Bar Controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-black/60 z-30">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold text-sm md:text-base">{selectedItem.alt}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400 text-xs md:text-sm">
                    {currentIndex + 1} of {validItems.length}
                  </span>
                  <span className="hidden sm:inline-block text-neutral-500 text-xs">
                    (Use Arrow Keys to navigate, Esc to close)
                  </span>
                </div>

                {/* Controls */}
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
                    onClick={handleCloseModal}
                    className="h-9 w-9 rounded-lg bg-neutral-800 hover:bg-red-950/80 hover:text-red-400 hover:border-red-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                
                {/* Left: Interactive Zoomable Image Stage */}
                <div 
                  className="relative flex-1 overflow-auto flex items-center justify-center p-4 cursor-grab active:cursor-grabbing bg-black/40"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) handleCloseModal();
                  }}
                >
                  {/* Left Arrow */}
                  {validItems.length > 1 && (
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
                      width: "80vw",
                      height: "65vh",
                    }}
                  >
                    {selectedItem.src ? (
                      <Image
                        src={selectedItem.src}
                        alt={selectedItem.alt}
                        fill
                        className="object-contain select-none pointer-events-none drop-shadow-2xl"
                      />
                    ) : null}
                  </motion.div>

                  {/* Right Arrow */}
                  {validItems.length > 1 && (
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

                {/* Right / Bottom Info Panel */}
                <div className="w-full lg:w-96 p-6 border-t lg:border-t-0 lg:border-l border-neutral-800 bg-neutral-950 flex flex-col justify-between overflow-y-auto space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/10">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                      {selectedItem.category}
                    </div>

                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {selectedItem.alt}
                    </h3>

                    {selectedItem.description && (
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    )}

                    <div className="pt-4 border-t border-neutral-800 space-y-2.5 text-xs text-neutral-400">
                      {selectedItem.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-neutral-500" />
                          <span>Year / Timeline: <strong className="text-white">{selectedItem.date}</strong></span>
                        </div>
                      )}
                      {selectedItem.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-neutral-500" />
                          <span>Location: <strong className="text-white">{selectedItem.location}</strong></span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-neutral-500 pt-4 border-t border-neutral-800 flex justify-between items-center">
                    <span>Photo {currentIndex + 1} of {validItems.length}</span>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="text-white hover:underline text-xs font-semibold"
                    >
                      Close Viewer (Esc)
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Thumbnail Strip */}
              {validItems.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 py-3 px-6 bg-black/80 border-t border-neutral-900 overflow-x-auto z-30">
                  {validItems.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx);
                        setSelectedItem(item);
                        setZoomScale(1);
                      }}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentIndex
                          ? "border-white scale-110 shadow-lg ring-2 ring-white/30"
                          : "border-neutral-800 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
