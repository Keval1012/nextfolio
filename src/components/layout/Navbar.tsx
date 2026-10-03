"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll for sticky blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    const sections = navLinks.map((link) => link.href.substring(1));
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking/tapping outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0A0A0A]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-1"
          aria-label="Keval Trivedi Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-800 text-cyan-400 border border-zinc-700/60 flex items-center justify-center font-bold text-xs group-hover:border-cyan-400 transition-colors shadow-sm">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="flex items-center">
            <span className="text-zinc-900 dark:text-zinc-100 font-bold">
              {portfolioData.personal.name.split(" ")[0]}
            </span>
            <span className="text-cyan-500 dark:text-cyan-400 ml-1 font-mono font-medium">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-zinc-100/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          >
            <FileDown className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-zinc-200 dark:border-zinc-800/80 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
