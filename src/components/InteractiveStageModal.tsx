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
  ExternalLink,
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

const emptySubscribe = () => () => {};

interface InteractiveStageProps {
  isOpen: boolean;
  onClose: () => void;
}

// Short & Sweet chapter titles with dedicated neon color accents
const WORKSTATION_STAGES = [
  { id: "overview", number: "01", name: "Profile", icon: Sparkles, activeColor: "from-cyan-500 to-blue-600", activeText: "text-cyan-300" },
  { id: "thinking", number: "02", name: "Thinking", icon: Brain, activeColor: "from-blue-500 to-indigo-600", activeText: "text-blue-300" },
  { id: "systems", number: "03", name: "Projects", icon: Code2, activeColor: "from-emerald-500 to-teal-600", activeText: "text-emerald-300" },
  { id: "aistudio", number: "04", name: "AI Studio", icon: Cpu, activeColor: "from-amber-500 to-orange-600", activeText: "text-amber-300" },
  { id: "trajectory", number: "05", name: "Journey", icon: Calendar, activeColor: "from-purple-500 to-pink-600", activeText: "text-purple-300" },
  { id: "terminal", number: "06", name: "Contact", icon: Terminal, activeColor: "from-rose-500 to-cyan-600", activeText: "text-rose-300" },
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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-3xl p-2 sm:p-5 md:p-8 animate-in fade-in duration-300 select-none"
      onClick={onClose}
    >
      {/* Supreme Keynote Workstation Deck Shell */}
      <div
        className="relative w-full max-w-[1550px] h-[96vh] sm:h-[92vh] bg-[#090b12]/95 rounded-2xl sm:rounded-4xl border border-cyan-500/30 shadow-[0_0_80px_rgba(56,189,248,0.25)] overflow-hidden flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Radial Mesh Lighting Inside Deck */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-neural-grid opacity-25 pointer-events-none" />

        {/* Top Control Bar: Strictly Single-Lined Across All Devices */}
        <div className="relative z-10 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap shrink-0 overflow-x-auto no-scrollbar backdrop-blur-xl">
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

          {/* Center Stage Quick Jumper Tabs (Short, Sweet & Color-Coded) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5 font-mono text-xs overflow-x-auto no-scrollbar shrink-0">
            {WORKSTATION_STAGES.map((stg, i) => {
              const Icon = stg.icon;
              const isActive = activeStage === i;
              return (
                <button
                  key={stg.id}
                  onClick={() => selectStage(i)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `bg-gradient-to-r ${stg.activeColor} text-white shadow-md shadow-cyan-500/30 scale-105`
                      : "text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                  title={stg.name}
                >
                  <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? "text-white" : "text-zinc-400"}`} />
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
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 text-zinc-300 hover:text-rose-300 hover:border-rose-500/30 border border-transparent transition-colors cursor-pointer shrink-0"
              aria-label="Exit Stage Mode"
              title="Close Deck (ESC)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Center Dynamic Stage Canvas: Vividly Themed & Colorful */}
        <div className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 flex items-center justify-center">
          {/* Chapter 01: Profile */}
          {activeStage === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-6xl animate-in fade-in zoom-in-95 duration-300">
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-cyan-300 bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-indigo-950/60 border border-cyan-400/40 shadow-sm shadow-cyan-500/20">
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

                {/* Vividly Themed Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-amber-900/10 to-black border border-amber-500/40 shadow-lg shadow-amber-950/30">
                    <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block font-bold">Academic Rigor</span>
                    <span className="font-display text-2xl font-black text-amber-300">9.10 CGPA</span>
                    <span className="font-sans text-[11px] text-amber-200/80 block mt-0.5">First Class with Distinction</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-900/10 to-black border border-cyan-500/40 shadow-lg shadow-cyan-950/30">
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block font-bold">Current Position</span>
                    <span className="font-display text-2xl font-black text-cyan-300">Consultant</span>
                    <span className="font-sans text-[11px] text-cyan-200/80 block mt-0.5">Virdhi Tech Lab (02/2025–Present)</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-teal-900/10 to-black border border-emerald-500/40 shadow-lg shadow-emerald-950/30">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">Featured Solo</span>
                    <span className="font-display text-2xl font-black text-emerald-300">Daily Tracker</span>
                    <span className="font-sans text-[11px] text-emerald-200/80 block mt-0.5">100% Solo Personal Project</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <HolographicPortrait />
              </div>
            </div>
          )}

          {/* Chapter 02: Thinking (4 Vivid Neon Pillars) */}
          {activeStage === 1 && (
            <div className="w-full max-w-5xl space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-blue-300 bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-400/40 mb-3 shadow-sm shadow-blue-500/20">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Pillar 1: Neon Cyan */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-cyan-950/35 via-zinc-950 to-black border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-950/20">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-3 font-mono font-bold text-sm shadow-md shadow-cyan-500/30">
                    01
                  </div>
                  <h4 className="font-display text-lg font-bold text-cyan-200 mb-1.5">First-Principles Axioms</h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Break down complex systems into fundamental logical truths before writing a single line of code. Applied directly from mechanical engineering rigor (9.10 CGPA).
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 font-mono text-[10px] text-cyan-300">
                    Mechanical Equilibrium → Software Concurrency
                  </span>
                </div>

                {/* Pillar 2: Neon Blue */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-950/35 via-zinc-950 to-black border border-blue-500/40 hover:border-blue-400 transition-all shadow-lg shadow-blue-950/20">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 mb-3 font-mono font-bold text-sm shadow-md shadow-blue-500/30">
                    02
                  </div>
                  <h4 className="font-display text-lg font-bold text-blue-200 mb-1.5">Reactive UI = f(State)</h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    UI is a deterministic mathematical projection of application state. Zero side effects in render cycles, unidirectional data flow, and idempotent backend contracts.
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 font-mono text-[10px] text-blue-300">
                    Pure Functional UI + Idempotent REST
                  </span>
                </div>

                {/* Pillar 3: Neon Amber */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-950/35 via-zinc-950 to-black border border-amber-500/40 hover:border-amber-400 transition-all shadow-lg shadow-amber-950/20">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 mb-3 font-mono font-bold text-sm shadow-md shadow-amber-500/30">
                    03
                  </div>
                  <h4 className="font-display text-lg font-bold text-amber-200 mb-1.5">Structured AI Prompt Pipelines</h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Prompt engineering is compiling natural language into reproducible, schema-validated JSON outputs. Engineered multi-tier context scaffolding in Zenmarks.ai.
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono text-[10px] text-amber-300">
                    Zero-Hallucination JSON Pipelines
                  </span>
                </div>

                {/* Pillar 4: Neon Emerald */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-950/35 via-zinc-950 to-black border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-lg shadow-emerald-950/20">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-3 font-mono font-bold text-sm shadow-md shadow-emerald-500/30">
                    04
                  </div>
                  <h4 className="font-display text-lg font-bold text-emerald-200 mb-1.5">Operational Resilience</h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Code that cannot deploy reliably does not exist. Continuous delivery via Docker, Portainer, and GitLab CI/CD with health probes and fail-safe recovery.
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-300">
                    Docker • Portainer • Self-Healing
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Chapter 03: Projects (Vividly Themed & Spotlighted Solo Project) */}
          {activeStage === 2 && (
            <div className="w-full max-w-5xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-emerald-300 bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-400/40 mb-2 shadow-sm shadow-emerald-500/20">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chapter 03 // Production Systems</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                  Engineered <span className="text-gradient-cyan">Platforms</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {PROJECTS.map((p) => {
                  const isSolo = p.id === "dailytracker";
                  return (
                    <div
                      key={p.id}
                      className={`p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                        isSolo
                          ? "bg-gradient-to-br from-emerald-950/60 via-cyan-950/40 to-black border-2 border-emerald-400/80 shadow-2xl shadow-emerald-950/60 hover:scale-[1.01]"
                          : p.id === "zenmarks"
                          ? "bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-black border border-cyan-500/50 hover:border-cyan-400"
                          : p.id === "zensecure"
                          ? "bg-gradient-to-br from-teal-950/40 via-emerald-950/20 to-black border border-teal-500/50 hover:border-teal-400"
                          : "bg-gradient-to-br from-purple-950/40 via-pink-950/20 to-black border border-purple-500/50 hover:border-purple-400"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                            <span>{p.title}</span>
                            {isSolo && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-400/60 shadow-sm shadow-emerald-500/40">
                                100% SOLO PROJECT
                              </span>
                            )}
                          </h4>
                          <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded ${
                            isSolo ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-white/10 text-cyan-300"
                          } shrink-0`}>
                            {p.role}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-zinc-300 mb-3 leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-white/10">
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-300">
                          {p.techStack.slice(0, 5).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-200">
                              {t}
                            </span>
                          ))}
                        </div>
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold text-cyan-200 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-500/20 transition-colors shadow-sm"
                          >
                            <GitHubIcon className="w-3.5 h-3.5 text-white" />
                            <span>View Source on GitHub</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chapter 04: AI Studio (Vibrant Cognitive Pipeline Terminal) */}
          {activeStage === 3 && (
            <div className="w-full max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-amber-300 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-400/40 mb-2 shadow-sm shadow-amber-500/20">
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

          {/* Chapter 05: Journey & 9.10 CGPA (Royal Purple & Gold + Emerald) */}
          {activeStage === 4 && (
            <div className="w-full max-w-4xl space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-purple-300 bg-gradient-to-r from-purple-950/60 to-pink-950/60 border border-purple-400/40 mb-2 shadow-sm shadow-purple-500/20">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>Chapter 05 // Trajectory &amp; Foundation</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                  Experience &amp; <span className="text-gradient-aurora">Distinction</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Current Role Card: Cyan & Emerald */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-emerald-950/20 to-black border border-cyan-500/50 space-y-3 hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-950/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-300 font-bold">02/2025 – Present</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">Software Consultant</h4>
                  <p className="font-mono text-xs text-cyan-400 font-semibold">Virdhi Tech Lab P Ltd • Chennai, TN</p>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Engineering core web platforms using React.js and Next.js, building high-throughput Node.js REST services, and designing automated prompt workflows for client EdTech and security systems.
                  </p>
                </div>

                {/* Academic Distinction: Royal Purple & Amber Gold */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/50 via-amber-950/30 to-black border-2 border-amber-400/60 space-y-3 hover:border-amber-300 transition-colors shadow-xl shadow-amber-950/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-amber-300 font-bold">2020 – 2024</span>
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">B.E. Mechanical Engineering</h4>
                  <p className="font-mono text-xs text-purple-300 font-semibold">Sengunthar Engineering College • Namakkal</p>
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 font-mono text-xs font-bold text-amber-300 flex items-center justify-between shadow-inner">
                    <span>Final Cumulative Grade:</span>
                    <span className="text-amber-200 font-display text-base font-extrabold">9.10 CGPA (Distinction)</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                    Analytical problem decomposition, finite element mathematical thinking, and first-principles mental models applied to software systems.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Chapter 06: Contact (Vibrant Direct Transmission Hub) */}
          {activeStage === 5 && (
            <div className="w-full max-w-3xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold text-rose-300 bg-gradient-to-r from-rose-950/60 to-cyan-950/60 border border-rose-400/40 mb-2 shadow-sm shadow-rose-500/20">
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
                    <span className="text-cyan-200 font-semibold truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card (Emerald) */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 hover:border-emerald-400 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-200 font-semibold">{PERSONAL_INFO.phone}</span>
                  </div>
                  <span className="text-[11px] text-emerald-300 font-bold">Call / WhatsApp</span>
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

        {/* Bottom Navigation & Chapter Progression Bar */}
        <div className="relative z-10 px-4 sm:px-6 py-3 sm:py-4 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between shrink-0 backdrop-blur-xl">
          <button
            onClick={prevStage}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
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
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStage === i
                    ? "w-7 sm:w-10 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to ${stg.name}`}
                title={stg.name}
              />
            ))}
          </div>

          <button
            onClick={nextStage}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
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
