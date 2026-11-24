"use client";

import React, { useState } from "react";
import { Zap, Cpu, Brain, Database, CheckCircle2, Sparkles } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";

const CATEGORY_ICONS = [Zap, Cpu, Brain, Database];

const CATEGORY_THEMES = [
  {
    border: "border-cyan-500/40",
    activeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/20",
    barColor: "from-cyan-500 to-blue-500",
    badgeText: "text-cyan-300 bg-cyan-950/60 border-cyan-500/30",
  },
  {
    border: "border-blue-500/40",
    activeBg: "bg-blue-500/20 text-blue-300 border-blue-400/50 shadow-blue-500/20",
    barColor: "from-blue-500 to-indigo-500",
    badgeText: "text-blue-300 bg-blue-950/60 border-blue-500/30",
  },
  {
    border: "border-amber-500/40",
    activeBg: "bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-amber-500/20",
    barColor: "from-amber-500 to-orange-500",
    badgeText: "text-amber-300 bg-amber-950/60 border-amber-500/30",
  },
  {
    border: "border-emerald-500/40",
    activeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/20",
    barColor: "from-emerald-500 to-teal-500",
    badgeText: "text-emerald-300 bg-emerald-950/60 border-emerald-500/30",
  },
];

export default function SkillsChapter() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const currentCategory = SKILL_CATEGORIES[activeCategory] || SKILL_CATEGORIES[0];
  const theme = CATEGORY_THEMES[activeCategory] || CATEGORY_THEMES[0];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Zap className="w-3.5 h-3.5 text-amber-400" />}
        badgeText="Chapter 02 // Core Competencies & Arsenal"
        badgeStyle="text-amber-300 bg-gradient-to-r from-amber-950/60 to-cyan-950/60 border border-amber-400/40 mb-2 shadow-sm shadow-amber-500/20"
        title={
          <>
            Technical <span className="text-gradient-aurora">Arsenal</span> &amp; Capabilities
          </>
        }
        description="Specialized in full-stack React & Next.js architectures, high-concurrency Node.js services, structured AI prompt pipelines, and production containerization."
      />

      {/* Interactive Category Selector Pills */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[idx] || Zap;
          const isActive = activeCategory === idx;
          const catTheme = CATEGORY_THEMES[idx] || CATEGORY_THEMES[0];

          return (
            <button
              key={cat.title}
              onClick={() => {
                sound.click();
                setActiveCategory(idx);
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                isActive
                  ? `${catTheme.activeBg} shadow-lg scale-[1.02]`
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 text-zinc-400 ml-1">
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Skills for Active Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {currentCategory.skills.map((skill) => (
          <div
            key={skill.name}
            className={`glass-panel p-4 rounded-2xl border ${theme.border} bg-gradient-to-br from-white/5 to-transparent hover:scale-[1.01] transition-all flex flex-col justify-between space-y-3`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{skill.name}</span>
              </span>

              {skill.highlight ? (
                <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border ${theme.badgeText} shrink-0`}>
                  Core Stack
                </span>
              ) : (
                <span className="font-mono text-[10px] text-zinc-500 shrink-0">
                  Proficient
                </span>
              )}
            </div>

            {/* Proficiency Meter */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Mastery</span>
                <span className="font-bold text-zinc-200">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${theme.barColor} transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Guarantee Footer Banner */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-2 text-cyan-300">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Next.js 16 (Turbopack) • React 19 • Node.js Microservices • Docker</span>
        </div>
        <span className="text-zinc-500">First-Principles Deconstructed</span>
      </div>
    </div>
  );
}

