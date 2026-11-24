"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  Sparkles,
  Zap,
  Brain,
  Code2,
  Cpu,
  Calendar,
  Terminal,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";
import { stageModalStyles } from "@/styles/interactive-stage.styles";
import {
  ProfileChapter,
  SkillsChapter,
  ThinkingChapter,
  ProjectsChapter,
  AIStudioChapter,
  JourneyChapter,
  ContactChapter,
} from "@/components/deck";

const emptySubscribe = () => () => {};

interface InteractiveStageProps {
  isOpen: boolean;
  onClose: () => void;
}

// Short & Sweet chapter titles with dedicated neon color accents
const WORKSTATION_STAGES = [
  {
    id: "overview",
    number: "01",
    name: "Profile",
    icon: Sparkles,
    activeColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "skills",
    number: "02",
    name: "Skills",
    icon: Zap,
    activeColor: "from-amber-400 to-cyan-500",
  },
  {
    id: "thinking",
    number: "03",
    name: "Thinking",
    icon: Brain,
    activeColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "systems",
    number: "04",
    name: "Projects",
    icon: Code2,
    activeColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "aistudio",
    number: "05",
    name: "AI Studio",
    icon: Cpu,
    activeColor: "from-amber-500 to-orange-600",
  },
  {
    id: "trajectory",
    number: "06",
    name: "Journey",
    icon: Calendar,
    activeColor: "from-purple-500 to-pink-600",
  },
  {
    id: "terminal",
    number: "07",
    name: "Contact",
    icon: Terminal,
    activeColor: "from-rose-500 to-cyan-600",
  },
];

export default function InteractiveStageModal({
  isOpen,
  onClose,
}: InteractiveStageProps) {
  const [activeStage, setActiveStage] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const nextStage = () => {
    sound.click();
    setActiveStage((prev) =>
      prev < WORKSTATION_STAGES.length - 1 ? prev + 1 : 0,
    );
  };

  const prevStage = () => {
    sound.click();
    setActiveStage((prev) =>
      prev > 0 ? prev - 1 : WORKSTATION_STAGES.length - 1,
    );
  };

  const selectStage = (idx: number) => {
    sound.click();
    setActiveStage(idx);
  };

  const copyEmail = () => {
    sound.click();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Keyboard navigation and background scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        sound.click();
        setActiveStage((prev) =>
          prev < WORKSTATION_STAGES.length - 1 ? prev + 1 : 0,
        );
      }
      if (e.key === "ArrowLeft") {
        sound.click();
        setActiveStage((prev) =>
          prev > 0 ? prev - 1 : WORKSTATION_STAGES.length - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={stageModalStyles.backdrop} onClick={onClose}>
      {/* Supreme Keynote Workstation Deck Shell */}
      <div
        className={stageModalStyles.shell}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Radial Mesh Lighting Inside Deck */}
        <div className={stageModalStyles.ambientGlowCyan} />
        <div className={stageModalStyles.ambientGlowViolet} />
        <div className={stageModalStyles.ambientGlowCenter} />
        <div className={stageModalStyles.gridOverlay} />

        {/* Top Control Bar: Strictly Single-Lined Across All Devices */}
        <div className={stageModalStyles.header}>
          {/* Left Brand Lockup (Short & Sweet) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/40" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/40" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/40" />
            </div>
            <span className="font-mono text-xs sm:text-sm text-white font-bold tracking-tight whitespace-nowrap">
              Naveen Kumar P
            </span>
            <span className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Deck
            </span>
          </div>

          {/* Center Stage Quick Jumper Tabs */}
          <div className={stageModalStyles.headerTabStrip}>
            {WORKSTATION_STAGES.map((stg, i) => {
              const Icon = stg.icon;
              const isActive = activeStage === i;
              return (
                <button
                  key={stg.id}
                  onClick={() => selectStage(i)}
                  className={`${stageModalStyles.tabButtonBase} ${
                    isActive
                      ? stageModalStyles.tabButtonActive(stg.activeColor)
                      : stageModalStyles.tabButtonInactive
                  }`}
                  title={stg.name}
                >
                  <Icon
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                      isActive ? "text-white" : "text-zinc-400"
                    }`}
                  />
                  <span>{stg.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action & Keyboard Shortcuts */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden xl:inline font-mono text-[10px] text-zinc-400 px-2 py-1 rounded bg-white/5 border border-white/5 whitespace-nowrap">
              ESC Exit
            </span>
            <button
              onClick={() => {
                sound.click();
                onClose();
              }}
              className={stageModalStyles.closeButton}
              aria-label="Exit Stage Mode"
              title="Close Deck (ESC)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Center Dynamic Stage Canvas: Vividly Themed & Resilient Scroll Flow */}
        <div className={stageModalStyles.contentContainer}>
          <div className={stageModalStyles.contentWrapper}>
            {/* Chapter 01: Profile */}
            {activeStage === 0 && <ProfileChapter />}

            {/* Chapter 02: Skills */}
            {activeStage === 1 && <SkillsChapter />}

            {/* Chapter 03: Thinking */}
            {activeStage === 2 && <ThinkingChapter />}

            {/* Chapter 04: Projects */}
            {activeStage === 3 && <ProjectsChapter />}

            {/* Chapter 05: AI Studio */}
            {activeStage === 4 && <AIStudioChapter />}

            {/* Chapter 06: Journey */}
            {activeStage === 5 && <JourneyChapter />}

            {/* Chapter 07: Contact */}
            {activeStage === 6 && (
              <ContactChapter
                onCopyEmail={copyEmail}
                copiedEmail={copiedEmail}
              />
            )}
          </div>
        </div>

        {/* Bottom Navigation & Chapter Progression Bar */}
        <div className={stageModalStyles.footer}>
          <button
            onClick={prevStage}
            className={stageModalStyles.navButtonPrev}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Chapter</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Chapter Progression Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {WORKSTATION_STAGES.map((stg, i) => (
              <button
                key={i}
                onClick={() => selectStage(i)}
                className={`${stageModalStyles.progressDotBase} ${
                  activeStage === i
                    ? stageModalStyles.progressDotActive
                    : stageModalStyles.progressDotInactive
                }`}
                aria-label={`Jump to ${stg.name}`}
                title={stg.name}
              />
            ))}
          </div>

          <button
            onClick={nextStage}
            className={stageModalStyles.navButtonNext}
          >
            <span className="hidden sm:inline">Next Chapter</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
