"use client";

import React, { useState } from "react";
import { 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";

const CATEGORY_ICONS = [Zap, Cpu, Brain, Database];

const CARD_TILTS = [
  { y: 3, x: 2 },
  { y: -3, x: 2 },
  { y: 3, x: -2 },
  { y: -3, x: -2 },
  { y: 2, x: 3 },
  { y: -2, x: 3 },
  { y: 2, x: -3 },
  { y: -2, x: -3 },
];

export default function ThreeDSkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const currentCategory = SKILL_CATEGORIES[activeCategory] || SKILL_CATEGORIES[0];

  return (
    <section id="skills-3d" className="relative py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10 perspective-[1400px]">
      <SectionHeader
        badge={{
          icon: Zap,
          text: "Core Competencies • 3D Spatial Skills",
        }}
        title={
          <>
            Technical <span className="text-gradient-aurora">Arsenal</span> &amp; Mastery
          </>
        }
        description="Primary focus on full-stack web engineering, prompt workflows, and resilient distributed microservices. Explore in interactive 3D space."
      />

      {/* 3D Category Switcher Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[idx] || Zap;
          const isActive = activeCategory === idx;
          return (
            <button
              key={cat.title}
              onClick={() => {
                sound.click();
                setActiveCategory(idx);
              }}
              style={{
                transform: isActive ? "translateZ(25px) scale(1.05)" : "translateZ(0px)",
              }}
              className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl font-mono text-xs font-semibold transition-all duration-300 border [transform-style:preserve-3d] ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-xl shadow-cyan-500/30"
                  : "glass-panel text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Dynamic Floating Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [transform-style:preserve-3d]">
        {currentCategory.skills.map((skill, idx) => {
          const tilt = CARD_TILTS[idx % CARD_TILTS.length];
          const zDepth = skill.highlight ? 30 : 10;

          return (
            <div
              key={skill.name}
              suppressHydrationWarning
              style={{
                transform: `rotateY(${tilt.y}deg) rotateX(${tilt.x}deg) translateZ(${zDepth}px)`,
              }}
              className="group relative rounded-3xl p-6 sm:p-7 bg-[#0e1018]/95 border border-white/20 hover:border-cyan-400/80 transition-all duration-300 shadow-2xl hover:shadow-cyan-950/60 cursor-default [transform-style:preserve-3d]"
            >
              {/* Animated 3D Glow Backlight */}
              <div
                className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none"
              />

              {/* 3D Elevated Header */}
              <div 
                className="flex items-center justify-between mb-4 relative z-10"
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                  SKILL 0{idx + 1}
                </span>
                {skill.highlight && (
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold">
                    Primary
                  </span>
                )}
              </div>

              {/* Skill Name in 3D Depth */}
              <h3 
                className="font-display text-xl sm:text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-cyan-300 transition-colors"
                style={{ transform: "translateZ(35px)" }}
              >
                {skill.name}
              </h3>

              {/* 3D Progress Bar with Spatial Depth */}
              <div 
                className="space-y-2 relative z-10 mb-5"
                style={{ transform: "translateZ(25px)" }}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Mastery Level</span>
                  <span className="font-bold text-white">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-900 border border-white/5 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-1000 shadow-sm shadow-cyan-400/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Bottom Tag / Verification */}
              <div 
                className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10"
                style={{ transform: "translateZ(20px)" }}
              >
                <span>Production Tested</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

