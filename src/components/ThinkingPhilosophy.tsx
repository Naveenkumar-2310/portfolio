"use client";

import React, { useState } from "react";
import { Brain, Cpu, Workflow, ShieldCheck, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PHILOSOPHY_PILLARS } from "@/data/portfolio-data";

const PILLAR_ICONS: Record<string, React.ElementType> = {
  Cpu,
  Workflow,
  Sparkles,
  ShieldCheck,
};

export default function ThinkingPhilosophy() {
  const [activePillar, setActivePillar] = useState(0);

  const current = PHILOSOPHY_PILLARS[activePillar] || PHILOSOPHY_PILLARS[0];
  const Icon = PILLAR_ICONS[current.iconName] || Brain;

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10">
      <SectionHeader
        badge={{
          icon: Brain,
          text: "Thinking Theme • Architectural Philosophy",
        }}
        title={
          <>
            How I <span className="text-gradient-aurora">Think</span> &amp; Build
          </>
        }
        description="Engineering is not merely writing syntax; it is the deliberate application of mental models, cognitive frameworks, and deterministic execution to solve real human problems."
      />

      {/* Main Grid: Pillar Selectors on Left, Deep Dive Visual on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 4 Pillar Selector Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const PillarIcon = PILLAR_ICONS[pillar.iconName] || Brain;
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 border flex items-start gap-4 ${
                  isSelected
                    ? "glass-panel border-cyan-500/40 shadow-xl shadow-cyan-950/30 scale-[1.01]"
                    : "glass-panel-subtle border-white/5 hover:border-white/20 hover:bg-white/5 opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform ${
                    isSelected
                      ? "bg-gradient-to-tr " + pillar.accent + " text-white shadow-lg"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  <PillarIcon className="w-5 h-5" />
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                      Pillar 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                        Active Inspection
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white mt-0.5 truncate">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-1 line-clamp-1">
                    {pillar.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Interactive Deep-Dive Canvas / Terminal (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl sm:rounded-4xl border border-white/10 relative overflow-hidden">
          {/* Ambient Corner Glow */}
          <div
            className={`absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br ${current.accent} opacity-20 rounded-full blur-3xl pointer-events-none transition-all duration-500`}
          />

          {/* Header of Active Inspection */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${current.accent} flex items-center justify-center text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                  Cognitive Framework • Pillar 0{activePillar + 1}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {current.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Quote Banner */}
          <blockquote className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base text-zinc-200 font-sans italic leading-relaxed mb-6">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Key Principles Checklist */}
          <div className="space-y-3 mb-6">
            <h5 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Architectural Translation & Impact
            </h5>
            {current.details.map((detail, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-sans">{detail}</span>
              </div>
            ))}
          </div>

          {/* Code & Architectural Blueprint Snippet */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>ARCHITECTURAL_BLUEPRINT.ts</span>
              </span>
              <span className="text-[10px] text-emerald-400">Verified System Logic</span>
            </div>
            <pre className="p-4 sm:p-5 rounded-2xl bg-black/75 border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed selection:bg-cyan-500/30">
              <code>{current.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

