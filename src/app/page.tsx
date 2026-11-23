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
      <div className={`fixed ${deckPositionClass} z-40 flex items-center gap-1.5 transition-all duration-300`}>
        <button
          onClick={openStage}
          className="group flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-mono text-xs font-semibold bg-zinc-900/95 text-cyan-300 border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all hover:bg-cyan-950/80 hover:border-cyan-400 cursor-pointer"
          title={`Switch to Interactive Workstation Deck Mode (${isDeckLeft ? "Left" : "Right"})`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <Sliders className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Interactive Deck Mode</span>
          <span className="sm:hidden">Deck Mode</span>
        </button>

        {/* Quick Flip Position Button (Saves directly to localStorage) */}
        <button
          onClick={togglePosition}
          className="p-2 sm:p-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 shadow-xl backdrop-blur-xl transition-all cursor-pointer hover:scale-110 active:scale-95"
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
