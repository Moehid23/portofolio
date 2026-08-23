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

  const x = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    // Initial time set (WIB / Asia Jakarta)
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muthadoabdul23@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Moehid23" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdul-muhid-muhthado-964b951a3/" },
    { name: "Instagram", url: "https://www.instagram.com/abdullmoehid_/" },
  ];

  return (
    <footer ref={containerRef} className="relative bg-black text-white pt-20 sm:pt-28 pb-12 overflow-hidden border-t border-neutral-800">
       {/* Animated Top Line */}
       <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent origin-left"
       />

       {/* Decorative Giant Background Text */}
       <motion.div 
          style={{ x }}
          className="absolute top-[15%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none"
       >
          <h1 className="text-[10rem] sm:text-[18rem] md:text-[26rem] font-bold tracking-tighter text-center whitespace-nowrap text-white leading-none">
             MUHID.
          </h1>
       </motion.div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 mb-16 sm:mb-24">
           {/* Left Column: CTA */}
           <div className="lg:col-span-7 space-y-8 sm:space-y-10">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
                <div className="flex items-center gap-2 text-emerald-400 font-medium bg-emerald-950/40 w-fit px-3.5 py-1.5 rounded-full text-xs sm:text-sm border border-emerald-800/40 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new opportunities
                </div>

                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white">
                  Let's create something <br/>
                  <span className="text-neutral-500">exceptional together.</span>
                </h2>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="space-y-2"
             >
                <Magnetic>
                  <button 
                    onClick={handleCopyEmail}
                    className="group flex items-center gap-3 sm:gap-4 text-xl sm:text-3xl md:text-4xl font-semibold hover:text-neutral-300 transition-colors w-fit text-left"
                    title="Click to copy email address"
                  >
                    <span className="border-b-2 border-white/80 pb-1 group-hover:border-neutral-300 transition-all break-all">
                      muthadoabdul23@gmail.com
                    </span>
                    <span className={cn(
                      "flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-900 shrink-0 transition-all duration-300 border border-neutral-800",
                      copied ? "bg-emerald-900/60 text-emerald-400 border-emerald-700" : "group-hover:bg-white group-hover:text-black"
                    )}>
                      {copied ? <Check className="h-5 w-5" /> : <Copy className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </span>
                  </button>
                </Magnetic>
                <p className="text-xs sm:text-sm text-neutral-400">
                  {copied ? "✓ Copied to clipboard!" : "Click to copy email address"}
                </p>
             </motion.div>
           </div>

           {/* Right Column: Navigation & Social Links */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-5 flex flex-col justify-start lg:pl-10 lg:pt-8"
           >
              <div className="grid grid-cols-2 gap-8 sm:gap-12">
                 <div className="space-y-4 sm:space-y-6">
                   <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">Navigation</h4>
                   <ul className="space-y-3 sm:space-y-3.5">
                      {navLinks.map((item) => (
                        <li key={item.label}>
                          <a 
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-base sm:text-xl font-medium text-neutral-300 hover:text-white transition-colors block w-fit"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                   </ul>
                 </div>

                 <div className="space-y-4 sm:space-y-6">
                   <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">Socials</h4>
                   <ul className="space-y-3 sm:space-y-3.5">
                      {socialLinks.map((social) => (
                        <li key={social.name}>
                          <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-base sm:text-xl font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 group w-fit"
                          >
                            {social.name} 
                            <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
          transition={{ delay: 0.25 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-neutral-800/80"
        >
          <div className="flex flex-col gap-4">
             <div className="space-y-1.5">
               <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">Muhid.</span>
               <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                 Informatics Engineering &amp; Precision Metrology. Building clean, efficient software architectures and industrial automated solutions.
               </p>
             </div>
             
             <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-neutral-400 font-medium pt-1">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Karawang, Indonesia
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  {time || "--:--"} WIB
                </span>
             </div>

             <p className="text-xs text-neutral-500 pt-1">
               &copy; {currentYear} Abdul Muhid Muthado. All rights reserved.
             </p>
          </div>

          <div className="self-end md:self-auto">
            <Magnetic>
              <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2"
                aria-label="Back to Top"
                title="Back to Top"
              >
                <span className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-neutral-800 bg-neutral-900 group-hover:scale-105 group-hover:border-neutral-700 transition-all duration-300 shadow-xl">
                   <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <span className="text-[11px] font-medium tracking-wider text-neutral-500 uppercase group-hover:text-white transition-colors">
                  Top ↑
                </span>
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
