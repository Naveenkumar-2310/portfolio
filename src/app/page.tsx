"use client";

import React, { useState, useSyncExternalStore } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThreeDSkillsShowcase from "@/components/ThreeDSkillsShowcase";
import ThinkingPhilosophy from "@/components/ThinkingPhilosophy";
import ProjectsSection from "@/components/ProjectsSection";
import AIStudioSection from "@/components/AIStudioSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveStageModal from "@/components/InteractiveStageModal";
import { Sliders, ArrowLeftRight } from "lucide-react";
import { sound } from "@/lib/sound";
import { UI_CONFIG } from "@/data/portfolio-data";

const LOCAL_STORAGE_KEY = "portfolio_deck_position";

function subscribePosition(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("deck-position-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("deck-position-change", callback);
  };
}

function getPositionSnapshot(): "left" | "right" {
  if (typeof window === "undefined") return UI_CONFIG.deckModeButtonPosition;
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved === "left" || saved === "right") return saved;
  } catch {
    // Ignore error in restricted storage
  }
  return UI_CONFIG.deckModeButtonPosition;
}

function getServerPositionSnapshot(): "left" | "right" {
  return UI_CONFIG.deckModeButtonPosition;
}

export default function Home() {
  const [isStageOpen, setIsStageOpen] = useState(false);
  const position = useSyncExternalStore(
    subscribePosition,
    getPositionSnapshot,
    getServerPositionSnapshot
  );

  const openStage = () => {
    sound.chime();
    setIsStageOpen(true);
  };

  const togglePosition = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.click();
    const nextPos: "left" | "right" = position === "left" ? "right" : "left";
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, nextPos);
    } catch {
      // Ignore error in restricted storage
    }
    window.dispatchEvent(new Event("deck-position-change"));
  };

  const isDeckLeft = position === "left";
  const deckPositionClass = isDeckLeft
    ? "bottom-4 left-4 sm:bottom-6 sm:left-6"
    : "bottom-4 right-4 sm:bottom-6 sm:right-6";

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenStageMode={openStage} />
      <HeroSection onOpenStageMode={openStage} />
      <ThreeDSkillsShowcase />
      <ThinkingPhilosophy />
      <ProjectsSection />
      <AIStudioSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />

      {/* Floating Interactive Deck Mode Trigger with LocalStorage Persistence */}
      <div className={`fixed ${deckPositionClass} z-40 flex items-center gap-2 transition-all duration-300`}>
        <div className="relative group p-[1px] rounded-full overflow-hidden bg-gradient-to-r from-cyan-500/50 via-indigo-500/50 to-emerald-500/50 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[borderBeamRotate_3s_linear_infinite]" />
          <button
            onClick={openStage}
            className="relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-mono text-xs font-semibold bg-[#0b0e17]/95 text-cyan-300 backdrop-blur-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            title={`Switch to Interactive Workstation Deck Mode (${isDeckLeft ? "Left" : "Right"})`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Sliders className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
            <span className="hidden sm:inline font-bold tracking-wide">Interactive Deck Mode</span>
            <span className="sm:hidden font-bold">Deck Mode</span>
          </button>
        </div>

        {/* Quick Flip Position Button (Saves directly to localStorage) */}
        <button
          onClick={togglePosition}
          className="p-2 sm:p-2.5 rounded-full bg-[#0b0e17]/90 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-300 border border-white/15 hover:border-cyan-500/50 shadow-xl backdrop-blur-xl transition-all cursor-pointer hover:scale-110 active:scale-95"
          title={`Move button to ${isDeckLeft ? "Right" : "Left"} and save preference in LocalStorage`}
          aria-label="Toggle Deck Mode Button Position"
        >
          <ArrowLeftRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Fullscreen Interactive Presentation Stage */}
      <InteractiveStageModal
        isOpen={isStageOpen}
        onClose={() => setIsStageOpen(false)}
      />
    </main>
  );
}
