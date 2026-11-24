"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Brain,
  Code2,
  Cpu,
  Terminal,
  Calendar,
  Mail,
  Phone,
  Copy,
  Check,
  Award,
} from "lucide-react";
import HolographicPortrait from "@/components/HolographicPortrait";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";
import { stageModalStyles } from "@/styles/interactive-stage.styles";
import {
  StageStatCard,
  StageThinkingCard,
  ThinkingCardItem,
  StageProjectCard,
  StageJourneyCard,
} from "@/components/deck";

const emptySubscribe = () => () => {};

interface InteractiveStageProps {
  isOpen: boolean;
  onClose: () => void;
}

// Short & Sweet chapter titles with dedicated neon color accents
const WORKSTATION_STAGES = [
  { id: "overview", number: "01", name: "Profile", icon: Sparkles, activeColor: "from-cyan-500 to-blue-600" },
  { id: "thinking", number: "02", name: "Thinking", icon: Brain, activeColor: "from-blue-500 to-indigo-600" },
  { id: "systems", number: "03", name: "Projects", icon: Code2, activeColor: "from-emerald-500 to-teal-600" },
  { id: "aistudio", number: "04", name: "AI Studio", icon: Cpu, activeColor: "from-amber-500 to-orange-600" },
  { id: "trajectory", number: "05", name: "Journey", icon: Calendar, activeColor: "from-purple-500 to-pink-600" },
  { id: "terminal", number: "06", name: "Contact", icon: Terminal, activeColor: "from-rose-500 to-cyan-600" },
];

const PROFILE_STATS_DATA = [
  {
    id: "academics",
    label: "Academic Rigor",
    value: "9.10 CGPA",
    subtext: "First Class with Distinction",
    theme: "amber" as const,
  },
  {
    id: "consulting",
    label: "Current Position",
    value: "Consultant",
    subtext: "Virdhi Tech Lab (02/2025–Present)",
    theme: "cyan" as const,
  },
  {
    id: "solo-project",
    label: "Featured Solo",
    value: "Daily Tracker",
    subtext: "100% Solo Personal Project",
    theme: "emerald" as const,
  },
];

const THINKING_PILLARS_DATA: ThinkingCardItem[] = [
  {
    id: "first-principles",
    number: "01",
    title: "First-Principles Axioms",
    description:
      "Break down complex systems into fundamental logical truths before writing a single line of code. Applied directly from mechanical engineering rigor (9.10 CGPA).",
    tag: "Mechanical Equilibrium → Software Concurrency",
    theme: "cyan",
  },
  {
    id: "reactive-state",
    number: "02",
    title: "Reactive UI = f(State)",
    description:
      "UI is a deterministic mathematical projection of application state. Zero side effects in render cycles, unidirectional data flow, and idempotent backend contracts.",
    tag: "Pure Functional UI + Idempotent REST",
    theme: "blue",
  },
  {
    id: "prompt-pipelines",
    number: "03",
    title: "Structured AI Prompt Pipelines",
    description:
      "Prompt engineering is compiling natural language into reproducible, schema-validated JSON outputs. Engineered multi-tier context scaffolding in Zenmarks.ai.",
    tag: "Zero-Hallucination JSON Pipelines",
    theme: "amber",
  },
  {
    id: "resilience",
    number: "04",
    title: "Operational Resilience",
    description:
      "Code that cannot deploy reliably does not exist. Continuous delivery via Docker, Portainer, and GitLab CI/CD with health probes and fail-safe recovery.",
    tag: "Docker • Portainer • Self-Healing",
    theme: "emerald",
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
    () => false
  );

  const nextStage = () => {
    sound.click();
    setActiveStage((prev) => (prev < WORKSTATION_STAGES.length - 1 ? prev + 1 : 0));
  };

  const prevStage = () => {
    sound.click();
    setActiveStage((prev) => (prev > 0 ? prev - 1 : WORKSTATION_STAGES.length - 1));
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
        setActiveStage((prev) => (prev < WORKSTATION_STAGES.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        sound.click();
        setActiveStage((prev) => (prev > 0 ? prev - 1 : WORKSTATION_STAGES.length - 1));
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
            {activeStage === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full animate-in fade-in zoom-in-95 duration-300">
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-cyan-300 bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-indigo-950/60 border border-cyan-400/40 shadow-sm shadow-cyan-500/20"
                    )}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Chapter 01 // Executive Profile</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap">
                      Naveen <span className="text-gradient-aurora">Kumar P</span>
                    </h2>
                    <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-200">
                      Software Consultant &amp; Full-Stack AI Engineer
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                    Decomposing complex real-world requirements into deterministic, high-throughput software architectures.
                    Specialized in modern modular React.js and Next.js applications, robust Node.js microservices, and multi-turn generative AI prompt engineering pipelines.
                  </p>

                  {/* Clean Reusable Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {PROFILE_STATS_DATA.map((item) => (
                      <StageStatCard
                        key={item.id}
                        label={item.label}
                        value={item.value}
                        subtext={item.subtext}
                        theme={item.theme}
                      />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <HolographicPortrait />
                </div>
              </div>
            )}

            {/* Chapter 02: Thinking (Clean Mapped Thinking Pillars) */}
            {activeStage === 1 && (
              <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-blue-300 bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-400/40 mb-3 shadow-sm shadow-blue-500/20"
                    )}
                  >
                    <Brain className="w-3.5 h-3.5 text-blue-400" />
                    <span>Chapter 02 // Cognitive Architecture</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                    How I <span className="text-gradient-aurora">Think</span>, Deconstruct &amp; Build
                  </h2>
                  <p className="font-sans text-sm text-zinc-300 mt-2">
                    First-principles engineering decomposes mechanical equilibrium into software concurrency, deterministic state, and zero-bloat modular systems.
                  </p>
                </div>

                {/* Clean Component Mapping for all 4 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {THINKING_PILLARS_DATA.map((item) => (
                    <StageThinkingCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            )}

            {/* Chapter 03: Projects (Clean Reusable Project Cards) */}
            {activeStage === 2 && (
              <div className="w-full space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-emerald-300 bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-400/40 mb-1.5 shadow-sm shadow-emerald-500/20"
                    )}
                  >
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chapter 03 // Production Systems</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                    Engineered <span className="text-gradient-cyan">Platforms</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {PROJECTS.map((project) => (
                    <StageProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {/* Chapter 04: AI Studio (Cognitive Pipeline Console) */}
            {activeStage === 3 && (
              <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-amber-300 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-400/40 mb-2 shadow-sm shadow-amber-500/20"
                    )}
                  >
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    <span>Chapter 04 // AI Prompt Engineering Engine</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                    Zenmarks.ai <span className="text-gradient-neural">Cognitive Pipeline</span>
                  </h2>
                  <p className="font-sans text-sm text-zinc-300 mt-1">
                    Transforms raw textbook chapters into tailored pedagogy, formulas, and Bloom&apos;s Taxonomy exam evaluations via multi-stage prompt engineering.
                  </p>
                </div>

                {/* Colorful Terminal Simulation */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-2 border-amber-500/40 font-mono text-xs text-zinc-200 space-y-3.5 shadow-2xl shadow-amber-950/30 cyber-scanline">
                  <div className="flex items-center justify-between text-amber-300 pb-2 border-b border-white/10">
                    <span className="font-bold">&gt; EXEC_PIPELINE(concept: &quot;Distributed Consensus / Raft&quot;)</span>
                    <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      TELEMETRY: ACTIVE
                    </span>
                  </div>
                  <div className="text-zinc-300 pl-4 border-l-2 border-amber-400/60 space-y-2 leading-relaxed">
                    <div className="text-cyan-300">
                      <strong className="text-white">1. Scaffolding:</strong> Decompose distributed state replication across N active nodes.
                    </div>
                    <div className="text-violet-300">
                      <strong className="text-white">2. Intuitive Metaphor:</strong> Parliamentary speaker voting committee.
                    </div>
                    <div className="text-amber-300">
                      <strong className="text-white">3. Mathematical Anchor:</strong> Quorum = floor(N / 2) + 1.
                    </div>
                    <div className="text-rose-300">
                      <strong className="text-white">4. Exam Question:</strong> Under what failure scenario is a log entry considered committed?
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="text-emerald-400 font-bold">✓ Generation Latency: 1.14s</span>
                    <span className="text-cyan-300 font-semibold">Schema Compliance: 100% JSON Guaranteed</span>
                    <span className="text-purple-300 font-medium">Model: Gemini / Claude Hybrid</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chapter 05: Journey (Clean Reusable Journey Cards) */}
            {activeStage === 4 && (
              <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-purple-300 bg-gradient-to-r from-purple-950/60 to-pink-950/60 border border-purple-400/40 mb-2 shadow-sm shadow-purple-500/20"
                    )}
                  >
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Chapter 05 // Trajectory &amp; Foundation</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                    Experience &amp; <span className="text-gradient-aurora">Distinction</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Current Consulting Role */}
                  <StageJourneyCard
                    period="02/2025 – Present"
                    roleOrDegree="Software Consultant"
                    organization="Virdhi Tech Lab P Ltd • Chennai, TN"
                    statusBadge="Active"
                    description="Engineering core web platforms using React.js and Next.js, building high-throughput Node.js REST services, and designing automated prompt workflows for client EdTech and security systems."
                    theme="cyan"
                  />

                  {/* Academic Distinction */}
                  <StageJourneyCard
                    period="2020 – 2024"
                    roleOrDegree="B.E. Mechanical Engineering"
                    organization="Sengunthar Engineering College • Namakkal"
                    icon={<Award className="w-5 h-5 text-amber-400" />}
                    highlightBadge={{
                      label: "Final Cumulative Grade:",
                      text: "9.10 CGPA (Distinction)",
                    }}
                    description="Analytical problem decomposition, finite element mathematical thinking, and first-principles mental models applied to software systems."
                    theme="amber"
                  />
                </div>
              </div>
            )}

            {/* Chapter 06: Contact (Direct Transmission Hub) */}
            {activeStage === 5 && (
              <div className="w-full space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div
                    className={stageModalStyles.chapterBadge(
                      "text-rose-300 bg-gradient-to-r from-rose-950/60 to-cyan-950/60 border border-rose-400/40 mb-2 shadow-sm shadow-rose-500/20"
                    )}
                  >
                    <Terminal className="w-3.5 h-3.5 text-rose-400" />
                    <span>Chapter 06 // Direct Transmission</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                    Initiate <span className="text-gradient-aurora">Consultation</span>
                  </h2>
                  <p className="font-sans text-sm text-zinc-300 max-w-md mx-auto mt-2">
                    Available for software architecture, full-stack web initiatives, and structured AI prompt engineering engagements.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-cyan-500/40 font-mono text-xs sm:text-sm space-y-4 max-w-lg mx-auto text-left shadow-2xl">
                  {/* Email Card (Cyan) */}
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 hover:border-cyan-400 transition-colors">
                    <div className="flex items-center gap-2.5 truncate">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-cyan-200 font-semibold truncate">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors cursor-pointer shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Card (Emerald) */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 hover:border-emerald-400 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-emerald-200 font-semibold">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-300 font-bold">
                      Call / WhatsApp
                    </span>
                  </a>

                  {/* LinkedIn & GitHub Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-500/15 border border-blue-500/40 text-blue-300 hover:bg-blue-500/25 transition-colors font-semibold"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors font-semibold"
                    >
                      <GitHubIcon className="w-4 h-4 text-white" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation & Chapter Progression Bar */}
        <div className={stageModalStyles.footer}>
          <button onClick={prevStage} className={stageModalStyles.navButtonPrev}>
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

          <button onClick={nextStage} className={stageModalStyles.navButtonNext}>
            <span className="hidden sm:inline">Next Chapter</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
