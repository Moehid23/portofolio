"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",             // English
  "Selamat Datang",    // Indonesian
  "Wilujeng Sumping",  // Sundanese (local Karawang touch!)
  "ようこそ",           // Japanese (Yōkoso)
  "Bienvenue",         // French
  "مرحباً",            // Arabic (Marhaban)
  "환영합니다",         // Korean
  "Willkommen",        // German
  "Bienvenido",        // Spanish
  "欢迎",              // Chinese (Huānyíng)
  "Muhid."             // Brand finish!
];

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      // Hold the final "Muhid." brand greeting a bit longer before sliding out
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 350 : 220); // First word displays slightly longer, then cycles fast

    return () => clearTimeout(interval);
  }, [index, onComplete]);

  // Slide up transition for the entire screen overlay on exit
  const slideUp = {
    initial: {
      y: 0
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }
    }
  };

  // Text transition for smooth entering and exiting of greetings
  const textOpacity = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const }
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.22, ease: "easeIn" as const }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950 font-sans text-white overflow-hidden"
    >
      {/* Noise Texture Overlay for Premium feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
         <svg className="h-full w-full">
            <filter id="noise-preloader">
               <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-preloader)" />
         </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Greetings Display */}
        <div className="h-[80px] sm:h-[120px] flex items-center justify-center overflow-hidden">
          <motion.h1
            key={index}
            variants={textOpacity}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            {greetings[index]}
          </motion.h1>
        </div>

        {/* Dynamic growing line underneath the greetings */}
        <div className="mt-8 h-[2px] w-[120px] bg-neutral-800 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((index + 1) / greetings.length) * 100}%` 
            }}
            transition={{ duration: 0.2, ease: "easeInOut" as const }}
          />
        </div>
      </div>
    </motion.div>
  );
}
