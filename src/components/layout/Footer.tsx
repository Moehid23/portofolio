"use client";

import { Container } from "./Container";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Copy, Check, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Initial time set
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative bg-black text-white pt-32 pb-12 overflow-hidden">
       {/* Animated Border Top */}
       <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 w-full h-[1px] bg-neutral-800 origin-left"
       />

       {/* Decorative Giant Text - Parallax Effect */}
       <motion.div 
          style={{ x }}
          className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.05]"
       >
          <h1 className="text-[20rem] md:text-[30rem] font-bold tracking-tighter text-center whitespace-nowrap text-white select-none leading-none">
             NAME.
          </h1>
       </motion.div>

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 mb-32">
           {/* Left Column: CTA - Spans 7 columns */}
           <div className="lg:col-span-7 space-y-12">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="flex items-center gap-2 text-green-400 font-medium bg-green-950/30 w-fit px-4 py-2 rounded-full text-sm border border-green-900/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Available for new projects
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                  Let's make something <br/>
                  <span className="text-neutral-500">amazing together.</span>
                </h2>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex flex-col gap-2"
             >
                <Magnetic>
                  <button 
                    onClick={handleCopyEmail}
                    className="group flex items-center gap-4 text-2xl md:text-4xl font-medium hover:text-neutral-400 transition-colors w-fit"
                  >
                    <span className="border-b-2 border-white pb-1 group-hover:border-neutral-400 transition-all">
                      your.email@example.com
                    </span>
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-neutral-900 transition-all duration-300",
                      copied ? "bg-green-900/50 text-green-400" : "group-hover:bg-white group-hover:text-black"
                    )}>
                      {copied ? <Check className="h-6 w-6" /> : <Copy className="h-5 w-5 md:h-6 md:w-6" />}
                    </div>
                  </button>
                </Magnetic>
                <p className="text-sm text-neutral-500 ml-1">
                  {copied ? "Copied to clipboard!" : "Click to copy email address"}
                </p>
             </motion.div>
           </div>

           {/* Right Column: Links - Spans 5 columns */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col justify-between lg:justify-start gap-12 lg:pl-12 lg:pt-20"
           >
              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                 <div className="space-y-6">
                   <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Menu</h4>
                   <ul className="space-y-4">
                      {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                          <Link 
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                            className="text-xl md:text-2xl font-medium hover:text-neutral-400 transition-colors block w-fit"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                   </ul>
                 </div>

                 <div className="space-y-6">
                   <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Socials</h4>
                   <ul className="space-y-4">
                      {[
                        { name: "GitHub", url: "https://github.com/yourusername" },
                        { name: "LinkedIn", url: "https://www.linkedin.com/in/yourusername/" },
                        { name: "Instagram", url: "https://www.instagram.com/yourusername/" }
                      ].map((social) => (
                        <li key={social.name}>
                          <a 
                            href={social.url} 
                            target="_blank" 
                            className="text-xl md:text-2xl font-medium hover:text-neutral-400 transition-colors flex items-center gap-2 group w-fit"
                          >
                            {social.name} 
                            <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </a>
                        </li>
                      ))}
                   </ul>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col gap-4">
             <div className="flex flex-col gap-1">
               <span className="text-3xl font-bold tracking-tighter">Name.</span>
               <p className="text-sm text-neutral-500 max-w-xs">
                 [Your personal tagline or short description goes here.]
               </p>
             </div>
             
             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500 font-medium mt-2">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  City, Country
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neutral-700" />
                  {time || "--:-- --"} WIB
                </span>
             </div>
             <p className="text-xs text-neutral-600 mt-2">
               &copy; {currentYear} Your Full Name Here. All rights reserved.
             </p>
          </div>

          <Magnetic>
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2"
            >
              <div className="relative flex items-center justify-center h-20 w-20 rounded-full border border-neutral-800 bg-neutral-900 group-hover:scale-110 transition-transform duration-500">
                 <ArrowUp className="h-8 w-8 text-white group-hover:-translate-y-1 transition-transform duration-300" />
                 
                 {/* Circular Text */}
                 <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
                   <path
                     id="circlePath"
                     d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                     fill="none"
                   />
                   <text className="text-[10px] uppercase font-bold tracking-widest fill-white">
                     <textPath href="#circlePath" startOffset="0%">
                       Back to Top • Back to Top • Back to Top •
                     </textPath>
                   </text>
                 </svg>
              </div>
            </button>
          </Magnetic>
        </motion.div>
      </Container>
    </footer>
  );
}