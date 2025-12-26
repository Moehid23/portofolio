"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Code, Figma, Globe, Sparkles, MoveRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const marqueeVariants = {
  animate: {
    x: ["0%", "-25%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 15,
        ease: "linear" as const,
      },
    },
  },
};

const floatingIcons = [
  { icon: Code, top: "15%", left: "10%", delay: 0 },
  { icon: Figma, top: "25%", right: "15%", delay: 1 },
  { icon: Globe, bottom: "25%", left: "20%", delay: 2 },
  { icon: Sparkles, bottom: "15%", right: "10%", delay: 3 },
];

// Staggered Text Animation
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

const text = "Building Digital Value.";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  
  // Parallax for Scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const xMove = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const yMove = useTransform(springY, [-0.5, 0.5], [-50, 50]);
  const xMoveReverse = useTransform(springX, [-0.5, 0.5], [50, -50]);
  const yMoveReverse = useTransform(springY, [-0.5, 0.5], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 bg-neutral-950 text-white"
    >
      {/* Background Container */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Fallback Image / Final State */}
        <div className="absolute inset-0 z-0">
           <img 
              src="/background-herosection.png" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
           />
           {/* Dark Overlay for Readability */}
           <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Intro Video */}
        {!videoEnded && (
           <div className="absolute inset-0 z-10">
              <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setVideoEnded(true)}
              >
                <source src="/video-herosection.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/70" />
           </div>
        )}
      </div>

      {/* Texture Noise Overlay - Kept for consistency */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
         <svg className="h-full w-full">
            <filter id="noise">
               <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
         </svg>
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* REMOVED AVAILABLE FOR FREELANCE BADGE */}
        
        <div className="relative max-w-5xl mt-12">
          <h1 className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-2 text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
            {text.split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="flex">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    custom={wordIndex * 5 + charIndex}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className={wordIndex === 1 ? "text-neutral-400" : "text-white"}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 max-w-2xl text-xl text-neutral-400 sm:text-2xl leading-relaxed font-medium"
        >
          I build personal portfolio websites that stand out.
          <span className="text-white font-bold relative inline-block mx-2">
             Modern & Minimalist.
             <motion.span 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ delay: 1.2, duration: 0.6 }}
               className="absolute bottom-0 left-0 w-full h-3 bg-neutral-800 -z-10 origin-left mix-blend-screen"
             />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="h-16 rounded-full px-10 text-lg shadow-xl shadow-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all bg-white text-black hover:bg-neutral-200" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                View My Work <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Button size="lg" variant="ghost" className="h-16 rounded-full px-10 text-lg text-white hover:bg-white/10 border-2 border-transparent hover:border-white/20" asChild>
               <Link href="/contact" className="group">
                 Get in Touch 
                 <MoveRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
               </Link>
             </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Floating Abstract Elements - Kept for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute p-5 rounded-3xl bg-neutral-900/40 border border-white/10 shadow-2xl text-white backdrop-blur-sm"
            style={{ 
               top: item.top, 
               left: item.left, 
               right: item.right, 
               bottom: item.bottom,
               x: i % 2 === 0 ? xMove : xMoveReverse,
               y: i % 2 === 0 ? yMove : yMoveReverse,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5 + (i * 0.1),
              type: "spring"
            }}
          >
            <item.icon className="h-10 w-10" strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* Infinite Marquee - Dark Mode */}
      <div className="absolute bottom-0 w-full border-t border-neutral-800 bg-neutral-950/80 backdrop-blur-md py-6 overflow-hidden z-20">
        <div className="relative flex w-full overflow-hidden mask-linear-fade">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {["User Interface", "User Experience", "Web Development", "Mobile Apps", "System Design", "Prototyping"].map((text) => (
                   <div key={text} className="flex items-center">
                      <span className="mx-8 text-sm font-bold tracking-[0.2em] text-white uppercase">{text}</span>
                      <span className="mx-4 h-1 w-1 rounded-full bg-neutral-600" />
                   </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
