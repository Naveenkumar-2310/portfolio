"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import HolographicPortrait from "@/components/HolographicPortrait";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PROJECTS } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";

interface InteractiveStageProps {
  isOpen: boolean;
  onClose: () => void;
}

const WORKSTATION_STAGES = [
  { id: "overview", name: "01. Executive Overview", icon: Sparkles },
  { id: "thinking", name: "02. Cognitive Architecture", icon: Brain },
  { id: "systems", name: "03. Production Systems", icon: Code2 },
  { id: "aistudio", name: "04. AI Prompt Engine", icon: Cpu },
  { id: "trajectory", name: "05. Journey & 9.10 CGPA", icon: Calendar },
  { id: "terminal", name: "06. Interactive Shell", icon: Terminal },
];

export default function InteractiveStageModal({
  isOpen,
  onClose,
}: InteractiveStageProps) {
  const [activeStage, setActiveStage] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-2 sm:p-6 md:p-8 animate-in fade-in duration-300">
      {/* Fullscreen Stage Shell */}
      <div className="relative w-full max-w-[1500px] h-[95vh] sm:h-[92vh] glass-panel rounded-2xl sm:rounded-4xl border border-white/15 shadow-2xl overflow-hidden flex flex-col justify-between">
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-zinc-900/80 border-b border-white/10 flex items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-white font-semibold truncate">
              NAVEEN_KUMAR_P // WORKSTATION_STAGE
            </span>
            <span className="hidden md:inline font-mono text-[11px] text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 shrink-0">
              Interactive Deck Mode
            </span>
          </div>

          {/* Stage Quick Jumper Buttons */}
          <div className="hidden lg:flex items-center gap-1.5 font-mono text-xs">
            {WORKSTATION_STAGES.map((stg, i) => (
              <button
                key={stg.id}
                onClick={() => selectStage(i)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeStage === i
                    ? "bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/25"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {stg.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Close Action */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline font-mono text-[10px] text-zinc-400">
              [ESC or close]
            </span>
            <button
              onClick={() => {
                sound.click();
                onClose();
              }}
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Exit Stage Mode"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Dynamic Stage Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 flex items-center justify-center">
          {/* Stage 0: Executive Overview */}
          {activeStage === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-6xl animate-in fade-in zoom-in-95 duration-300">
              <div className="lg:col-span-7 space-y-5">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                  Stage 01 // Executive Profile
                </span>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight">
                  Naveen <span className="text-gradient-aurora">Kumar P</span>
                </h2>
                <p className="font-display text-xl sm:text-2xl text-zinc-200">
                  Software Consultant • Virdhi Tech Lab
                </p>
                <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Specialized in modern responsive React.js and Next.js
                  platforms, high-throughput Node.js micro-backends, and
                  automated AI prompt generation workflows.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-zinc-300 space-y-1">
                  <div>
                    • Academic Rigor:{" "}
                    <strong className="text-cyan-300">
                      9.10 CGPA First Class with Distinction
                    </strong>
                  </div>
                  <div>
                    • Industry Impact:{" "}
                    <strong className="text-white">
                      Zenmarks.ai, ZenSecure, Parenting &amp; Corporate Portals
                    </strong>
                  </div>
                  <div>
                    • Core Stack:{" "}
                    <strong className="text-amber-300">
                      React 19, Next.js 15, Node.js, Knex, MySQL, GitLab
                    </strong>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <HolographicPortrait />
              </div>
            </div>
          )}

          {/* Stage 1: Thinking Architecture */}
          {activeStage === 1 && (
            <div className="w-full max-w-5xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                Stage 02 // Cognitive Architecture
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                How I <span className="text-gradient-aurora">Think</span> &amp;
                Build
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    01. First Principles
                  </h4>
                  <p className="font-sans text-xs text-zinc-400">
                    Deconstruct complex systems to physical &amp; logical axioms
                    before writing code. Mechanical engineering discipline (9.10
                    CGPA).
                  </p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    02. Reactive UI = f(State)
                  </h4>
                  <p className="font-sans text-xs text-zinc-400">
                    Deterministic state machines, unidirectional data flow in
                    Next.js, and strictly idempotent Node.js REST services.
                  </p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    03. Generative AI Prompt Loops
                  </h4>
                  <p className="font-sans text-xs text-zinc-400">
                    Multi-turn structured JSON prompt pipelines for educational
                    curriculum decomposition and exam synthesis.
                  </p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    04. Operational Resilience
                  </h4>
                  <p className="font-sans text-xs text-zinc-400">
                    Containerized Portainer deployments, GitLab CI/CD, and
                    robust error isolation preventing cascading faults.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Stage 2: Production Systems */}
          {activeStage === 2 && (
            <div className="w-full max-w-5xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                Stage 03 // Production Systems Portfolio
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Engineered <span className="text-gradient-cyan">Platforms</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display text-lg font-bold text-white">
                        {p.title}
                      </h4>
                      <span className="font-mono text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-white/5">
                        {p.role}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400 mb-3">
                      {p.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-300">
                        {p.techStack.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-500/20"
                        >
                          <GitHubIcon className="w-3 h-3 text-white" />
                          <span>Repo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stage 3: AI Prompt Engine */}
          {activeStage === 3 && (
            <div className="w-full max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block">
                Stage 04 // Interactive AI Studio
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Zenmarks.ai{" "}
                <span className="text-gradient-neural">Cognitive Pipeline</span>
              </h2>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                Transforms syllabus chapters into mental models, formulas, and
                Bloom&apos;s Taxonomy exam questions using structured
                multi-stage prompt engineering.
              </p>
              <div className="p-6 rounded-3xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300 space-y-3">
                <div className="text-cyan-400 font-bold">
                  &gt; EXEC_PIPELINE(concept: &quot;Distributed Consensus /
                  Raft&quot;)
                </div>
                <div className="text-zinc-400 pl-4 border-l border-cyan-500/30">
                  <div>
                    1. Scaffolding: Distributed state replication across N nodes
                  </div>
                  <div>2. Analogy: Parliamentary speaker voting committee</div>
                  <div>3. Formula: Quorum = floor(N / 2) + 1</div>
                  <div>
                    4. Exam Question: Under what condition is a log entry
                    committed?
                  </div>
                </div>
                <div className="text-emerald-400 pt-2 border-t border-white/5">
                  ✓ Pipeline Latency: 1.14s | Zero Hallucination Validation
                </div>
              </div>
            </div>
          )}

          {/* Stage 4: Trajectory & 9.10 CGPA */}
          {activeStage === 4 && (
            <div className="w-full max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block">
                Stage 05 // Trajectory &amp; Foundation
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Experience &amp;{" "}
                <span className="text-gradient-aurora">Distinction</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                  <span className="font-mono text-xs text-cyan-400">
                    02/2025 – Present
                  </span>
                  <h4 className="font-display text-xl font-bold text-white">
                    Software Consultant
                  </h4>
                  <p className="font-mono text-xs text-zinc-400">
                    Virdhi Tech Lab P Ltd • Chennai, TN
                  </p>
                  <p className="font-sans text-xs text-zinc-300">
                    Architecting reusable React/Next.js components, REST APIs in
                    Node.js, and automated textbook prompt workflows.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                  <span className="font-mono text-xs text-violet-400">
                    2020 – 2024
                  </span>
                  <h4 className="font-display text-xl font-bold text-white">
                    B.E. Mechanical Engineering
                  </h4>
                  <p className="font-mono text-xs text-zinc-400">
                    Sengunthar Engineering College • Namakkal
                  </p>
                  <div className="inline-block px-3 py-1 rounded-xl bg-violet-950/40 border border-violet-500/30 font-mono text-xs font-bold text-violet-300">
                    CGPA: 9.10 / 10.0 (First Class Distinction)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stage 5: Terminal Hub */}
          {activeStage === 5 && (
            <div className="w-full max-w-3xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                Stage 06 // Direct Transmission
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Initiate{" "}
                <span className="text-gradient-aurora">Consultation</span>
              </h2>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 font-mono text-sm space-y-3 max-w-lg mx-auto text-left">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:pnaveenkumar.prasanna@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    pnaveenkumar.prasanna@gmail.com
                  </a>
                </div>
                <div>
                  Phone:{" "}
                  <a
                    href="tel:+918220349415"
                    className="text-emerald-400 hover:underline"
                  >
                    +91 8220349415
                  </a>
                </div>
                <div>
                  Location:{" "}
                  <span className="text-white">Chennai, Tamil Nadu, India</span>
                </div>
                <div>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/naveenkumar-prasanna"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    linkedin.com/in/naveenkumar-prasanna
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Pagination Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-zinc-900/90 border-t border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={prevStage}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Chapter</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Progress Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {WORKSTATION_STAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => selectStage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStage === i
                    ? "w-6 sm:w-8 bg-cyan-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to stage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextStage}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <span className="hidden sm:inline">Next Chapter</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
