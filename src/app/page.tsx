"use client";

import React, { useState } from "react";
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
import { Sliders } from "lucide-react";
import { sound } from "@/lib/sound";
import { UI_CONFIG } from "@/data/portfolio-data";

export default function Home() {
  const [isStageOpen, setIsStageOpen] = useState(false);

  const openStage = () => {
    sound.chime();
    setIsStageOpen(true);
  };

  const isDeckLeft = UI_CONFIG.deckModeButtonPosition === "left";
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

      {/* Floating Interactive Deck Mode Trigger (Configurable Position: Left or Right) */}
      <div className={`fixed ${deckPositionClass} z-40 transition-all duration-300`}>
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
      </div>

      {/* Fullscreen Interactive Presentation Stage */}
      <InteractiveStageModal
        isOpen={isStageOpen}
        onClose={() => setIsStageOpen(false)}
      />
    </main>
  );
}
