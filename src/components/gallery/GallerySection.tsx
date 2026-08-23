"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Maximize2,
  Sparkles,
  GraduationCap,
  Layers,
  Award,
  Users,
  Compass
} from "lucide-react";

type FilterCategory = "All" | "Graduation" | "Academic" | "Competition" | "Community" | "Event";

const categoryIcons: Record<FilterCategory, React.ComponentType<{ className?: string }>> = {
  All: Layers,
  Graduation: GraduationCap,
  Academic: Sparkles,
  Competition: Award,
  Community: Users,
  Event: Compass,
};

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: FilterCategory[] = ["All", "Graduation", "Academic", "Competition", "Community", "Event"];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenModal = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((g) => g.id === item.id);
    setSelectedItem(item);
    setCurrentIndex(idx >= 0 ? idx : 0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePrev = useCallback(() => {
    if (galleryItems.length === 0) return;
    const nextIdx = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    setSelectedItem(galleryItems[nextIdx]);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (galleryItems.length === 0) return;
    const nextIdx = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    setSelectedItem(galleryItems[nextIdx]);
  }, [currentIndex]);

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
    <section ref={containerRef} className="pt-16 pb-16 md:py-32 bg-neutral-50/50 relative overflow-hidden" id="gallery">
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-950"
          >
            Gallery &amp; Highlights
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto"
          >
            A collection of moments from my academic milestones, graduation, competitions, and workplace experiences.
          </motion.p>
        </div>

        {/* Pinterest Style Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = selectedCategory === cat;
            const count = cat === "All" ? galleryItems.length : galleryItems.filter((i) => i.category === cat).length;
            
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "group relative flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 shadow-sm border",
                  isActive
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-md scale-105"
                    : "bg-white text-neutral-600 hover:text-neutral-950 border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-100/80"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5 transition-colors", isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-950")} />
                <span>{cat}</span>
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors",
                  isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pinterest Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => handleOpenModal(item)}
                className="group relative break-inside-avoid overflow-hidden rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container with Natural Aspect Ratio */}
                <div className="relative w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={item.aspectRatio === "portrait" ? 1050 : 600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                  />

                  {/* Pinterest-style Dark Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badges (Category & Inspect Button) */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15 shadow-sm">
                      {item.category}
                    </span>
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/90 text-black shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Hover Bottom Information Inside Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.location}
                    </p>
                    <p className="text-sm font-semibold text-neutral-200 line-clamp-2 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Caption (Visible by default, clean Pinterest card style) */}
                <div className="p-4 bg-white border-t border-neutral-100 space-y-1.5">
                  <h3 className="font-bold text-neutral-900 text-sm sm:text-base line-clamp-1 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-400 font-medium border-t border-neutral-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1 truncate max-w-[150px]">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Pop-up Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col md:flex-row w-full max-w-5xl max-h-[92vh] rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3.5 right-3.5 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 shadow-lg transition-all duration-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left/Main: Photo Stage with Prev/Next Chevrons */}
              <div className="relative flex-1 flex items-center justify-center bg-black/60 p-2 sm:p-4 min-h-[280px] sm:min-h-[420px] md:min-h-[520px]">
                <div className="relative w-full h-[38vh] sm:h-[48vh] md:h-[75vh] max-w-full">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority
                  />
                </div>

                {/* Navigation Chevrons */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-200 z-20 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-200 z-20 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Right: Detailed Metadata & Information Panel */}
              <div className="w-full md:w-[360px] lg:w-[400px] flex flex-col justify-between p-5 sm:p-6 md:p-8 bg-neutral-900/90 border-t md:border-t-0 md:border-l border-neutral-800 overflow-y-auto max-h-[45vh] md:max-h-full">
                <div className="space-y-4">
                  {/* Category Pill & Counter */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      <Sparkles className="h-3 w-3" />
                      {selectedItem.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold">
                      {currentIndex + 1} / {galleryItems.length}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs text-neutral-400">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="h-4 w-4 text-neutral-400 shrink-0" />
                      <span>Timeline: <strong className="text-white">{selectedItem.date}</strong></span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Location: <strong className="text-white">{selectedItem.location}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Bottom Thumbnail Strip */}
                <div className="pt-4 mt-4 border-t border-neutral-800">
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    All Highlights
                  </p>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {galleryItems.map((gItem, idx) => (
                      <button
                        key={gItem.id}
                        onClick={() => {
                          setSelectedItem(gItem);
                          setCurrentIndex(idx);
                        }}
                        className={cn(
                          "relative h-12 w-16 shrink-0 rounded-lg overflow-hidden border transition-all duration-200",
                          currentIndex === idx
                            ? "border-white ring-2 ring-emerald-400 scale-105"
                            : "border-neutral-700 opacity-50 hover:opacity-100"
                        )}
                      >
                        <Image
                          src={gItem.src}
                          alt={gItem.alt}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
