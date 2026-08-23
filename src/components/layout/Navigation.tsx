"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section logic
      const sections = navItems.map(item => item.href.substring(1));
      
      // Find the current section
      // We check which section is taking up the most viewport space or is currently at the top
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is within the viewport (with some offset)
          // or if the section covers the middle of the screen
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break; 
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      // If on sub-page, navigate back to homepage with hash
      window.location.href = `/${href}`;
    }
  };

  const isTransparent = !scrolled && activeSection === "home";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200 py-3"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")} 
            className={cn(
              "text-2xl font-bold tracking-tighter z-50 transition-colors",
              isTransparent ? "text-white" : "text-black"
            )}
          >
            Muhid.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  isTransparent 
                    ? (activeSection === item.href.substring(1) ? "text-white" : "text-neutral-400 hover:text-white")
                    : (activeSection === item.href.substring(1) ? "text-black" : "text-neutral-500 hover:text-black")
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className={cn(
                      "absolute left-0 top-full block h-[1px] w-full",
                      isTransparent ? "bg-white" : "bg-black"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <Button 
              asChild 
              variant={isTransparent ? "outline" : "default"} 
              size="sm" 
              className={cn(
                "ml-4 rounded-full px-6 transition-all",
                isTransparent 
                  ? "bg-white text-black hover:bg-neutral-200 border-none" // FIXED: Solid white bg with black text for Hero
                  : "bg-black text-white hover:bg-neutral-800"
              )}
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={cn("h-6 w-6", isOpen ? "text-black" : (isTransparent ? "text-white" : "text-black"))} />
              ) : (
                <Menu className={cn("h-6 w-6", isTransparent ? "text-white" : "text-black")} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white border-b shadow-lg md:hidden pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-black",
                    activeSection === item.href.substring(1)
                      ? "text-black"
                      : "text-neutral-500"
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="w-full max-w-xs mt-4 rounded-full">
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Let's Talk</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
