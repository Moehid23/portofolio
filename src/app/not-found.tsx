"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, FileQuestion } from "lucide-react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const glitchVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
    hover: {
      textShadow: [
        "2px 0px 0px rgba(255,0,0,0.5), -2px 0px 0px rgba(0,0,255,0.5)",
        "-2px 0px 0px rgba(255,0,0,0.5), 2px 0px 0px rgba(0,0,255,0.5)",
        "2px 0px 0px rgba(255,0,0,0.5), -2px 0px 0px rgba(0,0,255,0.5)"
      ],
      x: [0, -2, 2, -1, 0],
      transition: {
        repeat: Infinity,
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white p-4 overflow-hidden font-sans selection:bg-white/20">
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 z-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        <motion.div
           initial="hidden"
           animate="visible"
           whileHover="hover"
           className="relative mb-2 select-none cursor-default"
        >
           {/* Glitchy 404 */}
           <motion.h1 
             variants={glitchVariants}
             className="text-[12rem] sm:text-[16rem] font-bold leading-none tracking-tighter text-white/5 mix-blend-overlay absolute inset-0 select-none pointer-events-none blur-sm"
           >
             404
           </motion.h1>
           <motion.h1 
             variants={glitchVariants}
             className="text-[12rem] sm:text-[16rem] font-bold leading-none tracking-tighter text-white relative z-10"
           >
             404
           </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="space-y-8 backdrop-blur-sm bg-neutral-900/10 p-8 rounded-3xl border border-white/5 shadow-2xl"
        >
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">
               <span className="text-xs font-mono text-neutral-400">SYSTEM_ERROR: PAGE_NOT_FOUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Lost in Digital Space?
            </h2>
            <p className="text-neutral-400 text-lg max-w-md mx-auto leading-relaxed">
              The page you requested seems to have vanished into the void. It might have been moved, deleted, or never existed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="h-14 px-8 rounded-full bg-white text-black hover:bg-neutral-200 font-bold tracking-wide transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Return to Base
              </Link>
            </Button>
            
            <Button 
               variant="ghost" 
               className="h-14 px-8 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center gap-2"
               onClick={() => router.push("/?section=contact")}
            >
                <FileQuestion className="w-5 h-5" />
                Report a Glitch
            </Button>
          </div>
        </motion.div>
      </div>

       {/* Floating footer text */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="absolute bottom-8 left-0 right-0 text-center"
       >
         <span className="text-neutral-700 text-xs font-mono tracking-[0.2em] uppercase">
            // End of Line
         </span>
       </motion.div>
    </div>
  );
}
