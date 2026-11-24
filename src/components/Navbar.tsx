"use client";

import React, { useState, useEffect } from "react";
import { 
  Download, 
  Menu, 
  X, 
  Sparkles, 
  Sliders, 
  Volume2, 
  VolumeX 
} from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/constants";
import { sound } from "@/lib/sound";
import { navbarStyles } from "@/styles/navbar.styles";

interface NavbarProps {
  onOpenStageMode?: () => void;
}

export default function Navbar({ onOpenStageMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    // 1. Immediate URL Hash Synchronization (Persists across refresh at any scroll position)
    const syncFromHash = () => {
      if (typeof window === "undefined") return false;
      const rawHash = window.location.hash.replace("#", "");
      if (rawHash) {
        const normalized = rawHash === "skills" ? "skills-3d" : rawHash;
        const matched = NAV_LINKS.find(
          (l) => l.id === normalized || l.href === `#${rawHash}` || l.href === `#${normalized}`
        );
        if (matched) {
          setActiveSection(matched.id);
          return true;
        }
      }
      return false;
    };

    // 2. Viewport-based detection using exact getBoundingClientRect
    const syncFromViewport = () => {
      if (typeof window === "undefined") return;

      // When at the very top of document
      if (window.scrollY < 120) {
        if (!window.location.hash || window.location.hash === "#hero") {
          setActiveSection("hero");
        }
        return;
      }

      // When at the very bottom of document
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = [
        "hero",
        "skills-3d",
        "philosophy",
        "projects",
        "aistudio",
        "experience",
        "contact",
      ];

      // Primary inspection focus line (35% from the top of the viewport)
      const focusLine = windowHeight * 0.35;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focusLine && rect.bottom >= focusLine) {
            setActiveSection(section);
            return;
          }
        }
      }

      // Fallback: find the section closest to the viewport top
      let bestSection = "";
      let minDistance = Infinity;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - 100);
          if (dist < minDistance && rect.bottom > 100) {
            minDistance = dist;
            bestSection = section;
          }
        }
      }

      if (bestSection && (window.scrollY >= 120 || bestSection === "hero")) {
        setActiveSection(bestSection);
      }
    };

    // Master sync handler: checks hash first, then falls back to viewport
    const runSync = () => {
      const hasValidHash = syncFromHash();
      if (!hasValidHash) {
        syncFromViewport();
      }
    };

    // Run asynchronously via requestAnimationFrame to respect React 19 rules
    const frameId = requestAnimationFrame(runSync);

    // Staged intervals to capture asynchronous browser scroll restoration upon refresh
    const t1 = setTimeout(runSync, 100);
    const t2 = setTimeout(runSync, 300);
    const t3 = setTimeout(runSync, 600);
    const t4 = setTimeout(runSync, 1200);

    // 3. Native IntersectionObserver to catch browser scroll restoration without user scroll event
    let observer: IntersectionObserver | null = null;
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.id) {
              const matched = NAV_LINKS.find((l) => l.id === entry.target.id);
              if (matched) {
                setActiveSection(matched.id);
              }
            }
          });
        },
        {
          rootMargin: "-25% 0px -45% 0px",
          threshold: [0, 0.25],
        }
      );

      const sectionIds = ["hero", "skills-3d", "philosophy", "projects", "aistudio", "experience", "contact"];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && observer) observer.observe(el);
      });
    }

    window.addEventListener("scroll", syncFromViewport, { passive: true });
    window.addEventListener("hashchange", runSync);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", syncFromViewport);
      window.removeEventListener("hashchange", runSync);
    };
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    sound.enabled = next;
    if (next) sound.chime();
  };

  const scrollTo = (href: string) => {
    sound.click();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", href);
        const sectionId = href.replace("#", "");
        setActiveSection(sectionId === "skills" ? "skills-3d" : sectionId);
      }
    }
  };

  return (
    <>
      <header className={navbarStyles.header}>
        <div className={navbarStyles.container}>
          {/* Brand Monogram & Status */}
          <button
            onClick={() => scrollTo("#hero")}
            className={navbarStyles.brandButton}
          >
            <div className={navbarStyles.brandMonogram}>
              <span className="font-display text-xs font-bold text-white tracking-wider">NK</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-tight text-white block leading-tight">
                Naveen Kumar P
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase block">
                Software Consultant
              </span>
            </div>
          </button>

          {/* Desktop Nav Pills */}
          <nav className={navbarStyles.desktopNav}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1 rounded-full text-xs font-medium font-mono transition-all relative ${
                    isActive
                      ? "text-white font-semibold bg-white/10 shadow-inner"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                  } ${link.highlight ? "text-cyan-400" : ""}`}
                >
                  <span className="flex items-center gap-1.5">
                    {Icon && <Icon className="w-3.5 h-3.5 text-cyan-400" />}
                    {link.highlight && <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />}
                    {link.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Stage Mode Switcher, Audio, Resume */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Interactive Workstation Stage Mode Switcher */}
            {onOpenStageMode && (
              <button
                onClick={() => {
                  sound.chime();
                  onOpenStageMode();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-xs font-semibold bg-cyan-500/15 border border-cyan-400/40 hover:bg-cyan-500/25 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title="Launch Interactive Workstation Stage Mode"
              >
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Deck Mode</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-full glass-panel text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title={soundActive ? "Mute Tactile Audio" : "Unmute Tactile Audio"}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Naveen_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                sound.click();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-full glass-panel text-zinc-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl lg:hidden flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300 select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                <span className="font-display text-xs font-bold text-white">NK</span>
              </div>
              <span className="font-display font-bold text-white text-sm">
                Naveen Kumar P
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full glass-panel text-zinc-400 hover:text-white border border-white/10"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 py-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-left font-mono text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white/10 text-white border border-cyan-400/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {Icon ? <Icon className="w-4 h-4 text-cyan-400" /> : <span className="w-4 h-4" />}
                    {link.name}
                  </span>
                  {link.highlight && (
                    <span className="text-[10px] uppercase font-bold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                      Core Engine
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            {onOpenStageMode && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStageMode();
                }}
                className="w-full py-3.5 rounded-2xl font-mono text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Launch Workstation Deck</span>
              </button>
            )}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Naveen_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
