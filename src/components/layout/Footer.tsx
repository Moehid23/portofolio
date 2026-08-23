"use client";

import { Container } from "./Container";
import { ArrowUp, ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Jakarta",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
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
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Moehid23" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdul-muhid-muhthado-964b951a3/" },
    { name: "Instagram", url: "https://www.instagram.com/abdullmoehid_/" },
  ];

  return (
    <footer className="relative bg-neutral-950 text-white pt-16 sm:pt-20 pb-10 border-t border-neutral-800/80 overflow-hidden">
      <Container className="relative z-10">
        
        {/* Main CTA & Email Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-neutral-800/80">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Opportunities
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build something <br className="hidden sm:block" />
              <span className="text-neutral-400">extraordinary together.</span>
            </h2>
          </div>

          {/* Interactive Direct Contact Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href="mailto:muthadoabdul23@gmail.com"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-md"
            >
              <Mail className="h-4 w-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
                copied
                  ? "bg-emerald-950/80 border-emerald-700 text-emerald-400"
                  : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700"
              )}
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Middle Navigation & Socials Bar */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start border-b border-neutral-800/80">
          {/* Quick Links */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Quick Navigation
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm sm:text-base font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Connect
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Location & Real-Time Clock */}
          <div className="lg:col-span-3 space-y-3 lg:text-right">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Location &amp; Time
            </span>
            <div className="space-y-1">
              <p className="text-sm font-medium text-neutral-200">
                Karawang, West Java, ID
              </p>
              <p className="text-xs font-mono text-emerald-400">
                {time ? `${time} WIB (GMT+7)` : "WIB"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">Muhid.</span>
            <span>—</span>
            <span>&copy; {currentYear} Abdul Muhid Muthado. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </Container>
    </footer>
  );
}
