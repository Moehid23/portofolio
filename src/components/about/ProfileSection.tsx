"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

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
    // Keep it briefly or fade out
    setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-10">
      <div className="w-full grid gap-10 lg:grid-cols-12 lg:items-center">

        {/* ── Left: Text Content (7 Cols for more space) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 order-2 lg:order-1 lg:col-span-7"
        >
          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                About Me
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span className="text-xs font-semibold text-neutral-500">
                Informatics &amp; Metrology Engineering
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight text-neutral-950">
              Who I Am
            </h2>
            <h3 className="text-base md:text-lg font-medium text-neutral-700">
              Abdul Muhid Muthado.
            </h3>
            <div className="h-[2px] w-12 bg-black" />
          </div>

          {/* Body text — humanistic, professional, clear work history */}
          <div className="space-y-3.5 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
            <p className="text-neutral-800 font-medium leading-relaxed">
              I am an <strong className="text-black">Informatics Engineering graduate</strong> from{" "}
              <strong className="text-black">Universitas Buana Perjuangan Karawang</strong> (GPA 3.80).
              My background uniquely bridges hands-on industrial precision metrology with modern software engineering—giving
              me a disciplined eye for accuracy, edge cases, and dependable architecture.
            </p>

            <p>
              In production and manufacturing environments, I worked directly with <strong className="text-black">SAP ERP</strong> databases,
              built <strong className="text-black">RPA</strong> automation workflows, and handled high-precision
              coordinate measuring machines (<strong className="text-black">CMM</strong>). That field experience taught me how real systems operate and where operational bottlenecks happen.
            </p>

            {/* Bachelor Thesis Spotlight */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Undergraduate Thesis Research</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-700 italic font-medium leading-snug">
                &ldquo;Penerapan Random Forest untuk Prediksi Pemesanan Spare Part dalam Pencegahan Overstock dan Understock&rdquo;
              </p>
              <p className="text-xs text-neutral-500 leading-normal">
                Engineered a predictive machine learning pipeline using Random Forest algorithms to accurately forecast inventory demand, reducing costly surplus storage while eliminating critical production downtime.
              </p>
            </div>

            <p>
              Today, I develop clean, resilient web applications using <strong className="text-black">Laravel 11/12</strong>,{" "}
              <strong className="text-black">Node.js</strong>, and <strong className="text-black">Flask / Next.js</strong>, while turning complex datasets into interactive executive dashboards with <strong className="text-black">Tableau</strong> and <strong className="text-black">Power BI</strong>.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-1">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "15+", label: "Completed Projects" },
              { value: "3.80", label: "Final GPA" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl font-bold text-black">{stat.value}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 pt-1">
            <Button
              variant="default"
              className="rounded-full px-7 h-10 gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105 text-sm bg-neutral-950 hover:bg-neutral-800 text-white"
              asChild
            >
              <a 
                href="/CV/CV_ATS_ABDUL%20MUHID%20MUTHADO.pdf" 
                download="CV_ATS_ABDUL_MUHID_MUTHADO.pdf"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* ── Right: Photo with Tight Decorative Frame & Interactive Radius Reveal (5 Cols) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-5 py-4"
        >
          {/* Outer Frame Wrapper with tight padding */}
          <div className="relative p-2.5 sm:p-3">
            {/* Decorative vertical bar — Left */}
            <div className="absolute left-0 top-[12%] bottom-[12%] w-[1px] bg-neutral-300 hidden sm:block" />
            <div className="absolute left-[-1px] top-[38%] h-12 w-[3px] bg-black rounded-full hidden sm:block" />

            {/* Decorative vertical bar — Right */}
            <div className="absolute right-0 top-[12%] bottom-[12%] w-[1px] bg-neutral-300 hidden sm:block" />
            <div className="absolute right-[-1px] bottom-[38%] h-12 w-[3px] bg-black rounded-full hidden sm:block" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-black hidden sm:block" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-black hidden sm:block" />

            {/* Photo Container with Interactive Cursor & Touch Spotlight */}
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
                height: "min(calc(100vh - 260px), 540px)",
                aspectRatio: "1023 / 1537",
              }}
            >
              {/* Base Primary Image: ubpPortofolio.png */}
              <Image
                src="/ubpPortofolio.webp"
                alt="Abdul Muhid Muthado - UBP"
                fill
                className="object-cover object-center pointer-events-none transition-transform duration-300"
                sizes="(max-width: 768px) 80vw, 35vw"
                priority
              />

              {/* Overlaid Secondary Image: peruri.png revealed inside cursor radius */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHovered ? 1 : 0,
                  clipPath: isHovered
                    ? `circle(125px at ${mousePos.x}px ${mousePos.y}px)`
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

              {/* Dynamic Glowing White Lens Ring around cursor on hover */}
              {isHovered && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-white transition-transform duration-75"
                  style={{
                    width: "250px",
                    height: "250px",
                    left: `${mousePos.x - 125}px`,
                    top: `${mousePos.y - 125}px`,
                    boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.8), inset 0 0 15px 2px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3)",
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
