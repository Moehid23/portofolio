"use client";

import { motion, useInView, animate } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Robust Framer-Motion Animated Number Counter
function AnimatedCounter({ 
  value, 
  suffix = "", 
  decimals = 0 
}: { 
  value: number; 
  suffix?: string; 
  decimals?: number 
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { margin: "-20px 0px -20px 0px", once: false });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (!isInView) {
      node.textContent = (decimals > 0 ? (0).toFixed(decimals) : "0") + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate(latest) {
        node.textContent = latest.toFixed(decimals) + suffix;
      }
    });

    return () => controls.stop();
  }, [isInView, value, decimals, suffix]);

  return (
    <span 
      ref={nodeRef} 
      className="font-bold text-black font-mono inline-block tracking-tight"
    >
      {(decimals > 0 ? (0).toFixed(decimals) : "0") + suffix}
    </span>
  );
}

export function ProfileSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!photoRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = photoRef.current.getBoundingClientRect();
    setIsHovered(true);
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!photoRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = photoRef.current.getBoundingClientRect();
    setIsHovered(true);
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 flex items-center">
      <div className="w-full grid gap-6 lg:grid-cols-12 lg:gap-8 items-center">

        {/* ── Left: Text Content (7 Cols) ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3.5 order-2 lg:order-1 lg:col-span-7"
        >
          {/* Heading */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                About Me
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500">
                Informatics &amp; Metrology Engineering
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
                Who I Am
              </h2>
              <span className="text-sm sm:text-base font-semibold text-neutral-600">
                — Abdul Muhid Muthado.
              </span>
            </div>
          </div>

          {/* Body Text — 100% Preserved Content */}
          <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
            <p className="text-neutral-900 font-medium">
              I am an <strong className="text-black">Informatics Engineering graduate</strong> from{" "}
              <strong className="text-black">Universitas Buana Perjuangan Karawang</strong> (GPA 3.80).
              My experience in industrial precision metrology and software engineering helps me build reliable, well-structured, and efficient applications.
            </p>

            <p>
              In manufacturing and production environments, I have worked with <strong className="text-black">SAP ERP</strong> systems,
              built <strong className="text-black">RPA</strong> automation workflows, and operated precision
              measuring instruments like <strong className="text-black">CMM</strong>. This hands-on background gives me practical insight into how industrial processes work and how software can solve real operational problems.
            </p>

            {/* Bachelor Thesis Spotlight */}
            <div className="rounded-xl border border-neutral-200/90 bg-neutral-50/80 p-3 space-y-1 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                <BookOpen className="h-3 w-3 text-neutral-600" />
                <span>Undergraduate Thesis</span>
              </div>
              <p className="text-xs text-neutral-800 italic font-medium leading-snug">
                &ldquo;Penerapan Random Forest untuk Prediksi Pemesanan Spare Part dalam Pencegahan Overstock dan Understock&rdquo;
              </p>
              <p className="text-[11px] text-neutral-500 leading-normal">
                Built a machine learning model using Random Forest to forecast spare part demand, helping prevent excess inventory and reduce production downtime.
              </p>
            </div>

            <p>
              Today, I build web applications with <strong className="text-black">Laravel</strong>,{" "}
              <strong className="text-black">Next.js</strong>, and <strong className="text-black">Node.js</strong>, and create clear data visualizations using <strong className="text-black">Python</strong>, <strong className="text-black">Tableau</strong>, and <strong className="text-black">Power BI</strong>.
            </p>
          </div>

          {/* Stats with Live Animated Counting Effect & Download CV */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100">
            <div className="flex items-center gap-6 sm:gap-8">
              <div>
                <span className="block text-xl sm:text-2xl">
                  <AnimatedCounter value={5} suffix="+" />
                </span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Years Experience
                </span>
              </div>

              <div className="h-8 w-[1px] bg-neutral-200" />

              <div>
                <span className="block text-xl sm:text-2xl">
                  <AnimatedCounter value={15} suffix="+" />
                </span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Completed Projects
                </span>
              </div>

              <div className="h-8 w-[1px] bg-neutral-200" />

              <div>
                <span className="block text-xl sm:text-2xl">
                  <AnimatedCounter value={3.80} decimals={2} />
                </span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Final GPA
                </span>
              </div>
            </div>

            {/* Download CV CTA */}
            <Button
              variant="default"
              className="rounded-full px-5 h-9 gap-1.5 shadow-sm hover:shadow-md transition-all hover:scale-105 text-xs bg-neutral-950 hover:bg-neutral-800 text-white"
              asChild
            >
              <a 
                href="/CV/CV_ATS_ABDUL%20MUHID%20MUTHADO.pdf" 
                download="CV_ATS_ABDUL_MUHID_MUTHADO.pdf"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <Download className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* ── Right: Photo with Spotlight & Frame (5 Cols) ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative p-2 sm:p-2.5">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black hidden sm:block" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black hidden sm:block" />

            {/* Photo Container */}
            <motion.div
              ref={photoRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative overflow-hidden rounded-xl cursor-crosshair select-none bg-neutral-900 shadow-xl touch-none"
              style={{
                height: "min(calc(100vh - 220px), 460px)",
                aspectRatio: "1023 / 1537",
              }}
            >
              {/* Primary Photo */}
              <Image
                src="/ubpPortofolio.webp"
                alt="Abdul Muhid Muthado - UBP"
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-width: 768px) 80vw, 35vw"
                priority
              />

              {/* Reveal Secondary Photo on Cursor / Touch */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHovered ? 1 : 0,
                  clipPath: isHovered
                    ? `circle(115px at ${mousePos.x}px ${mousePos.y}px)`
                    : `circle(0px at 50% 50%)`,
                }}
              >
                <Image
                  src="/peruri.webp"
                  alt="Abdul Muhid Muthado - Peruri"
                  fill
                  className="object-cover object-center pointer-events-none"
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>

              {/* Glowing Lens Ring on Hover */}
              {isHovered && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-white transition-transform duration-75"
                  style={{
                    width: "230px",
                    height: "230px",
                    left: `${mousePos.x - 115}px`,
                    top: `${mousePos.y - 115}px`,
                    boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.8), inset 0 0 15px 2px rgba(255, 255, 255, 0.5)",
                  }}
                />
              )}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
