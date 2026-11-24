"use client";

import React, { useState, useEffect } from "react";
import { 
  Download, 
  Menu, 
  X, 
  Sparkles, 
  Brain, 
  Sliders, 
  Volume2, 
  VolumeX, 
  Zap 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";
import { navbarStyles } from "@/styles/navbar.styles";

interface NavbarProps {
  onOpenStageMode?: () => void;
}

const NAV_LINKS = [
  { name: "Overview", href: "#hero", id: "hero" },
  { name: "Skills", href: "#skills-3d", id: "skills-3d", icon: Zap },
  { name: "Thinking Architecture", href: "#philosophy", id: "philosophy", icon: Brain },
  { name: "Selected Works", href: "#projects", id: "projects" },
  { name: "AI Prompt Lab", href: "#aistudio", id: "aistudio", highlight: true },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ onOpenStageMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    const updateActiveSection = () => {
      // 1. If a hash is present in URL on initial mount before scroll stabilizes
      const rawHash = window.location.hash.replace("#", "");
      if (rawHash && window.scrollY < 120) {
        const normalized = rawHash === "skills" ? "skills-3d" : rawHash;
        const matched = NAV_LINKS.find(
          (l) => l.id === normalized || l.href === `#${rawHash}` || l.href === `#${normalized}`
        );
        if (matched) {
          setActiveSection(matched.id);
          return;
        }
      }

      // 2. If at very top of the document
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. If at very bottom of the document
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // 3. Scan sections by viewport bounding client rect
      const sections = [
        "hero",
        "skills-3d",
        "philosophy",
        "projects",
        "aistudio",
        "experience",
        "contact",
      ];

      // Primary inspection focus line is 35% from top of viewport
      const focusLine = windowHeight * 0.35;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focusLine && rect.bottom >= focusLine) {
            setActiveSection(section);
            return;
          }
        }
      }

      // 4. Fallback: find section with nearest top boundary
      let closestSection = "hero";
      let minDistance = Infinity;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - 120);
          if (dist < minDistance && rect.bottom > 120) {
            minDistance = dist;
            closestSection = section;
          }
        }
      }
      setActiveSection(closestSection);
    };

    // Schedule initial check asynchronously to comply with React 19 set-state-in-effect rule
    const frameId = requestAnimationFrame(updateActiveSection);
    const timer1 = setTimeout(updateActiveSection, 150);
    const timer2 = setTimeout(updateActiveSection, 450);

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
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
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-xs font-semibold bg-cyan-500/15 border border-cyan-400/40 hover:bg-cyan-500/25 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all hover:scale-105 active:scale-95"
                title="Launch Interactive Workstation Stage Mode"
              >
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Deck Mode</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-full glass-panel text-zinc-400 hover:text-white border border-white/10 transition-colors"
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full glass-panel text-zinc-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-center items-center px-6 lg:hidden animate-in fade-in duration-200">
          <div className="w-full max-w-sm flex flex-col gap-3 text-center">
            <div className="mb-4">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">Portfolio Navigation</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">Naveen Kumar P</h3>
            </div>

            {onOpenStageMode && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStageMode();
                }}
                className="w-full py-3 px-4 rounded-xl font-mono text-sm font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-2 mb-2"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive Deck Mode</span>
              </button>
            )}

            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className="w-full py-3 px-5 rounded-2xl text-base font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/10 transition-colors flex items-center justify-between font-mono"
              >
                <span>{link.name}</span>
                {link.highlight && <Sparkles className="w-4 h-4 text-cyan-400" />}
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-zinc-800">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Naveen_Kumar_Resume.pdf"
                className="w-full py-3.5 rounded-2xl font-mono text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
