"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import HolographicPortrait from "@/components/HolographicPortrait";
import { StageStatCard } from "@/components/deck";
import TypewriterName from "../TypewriterName";
import { stageModalStyles } from "@/styles/interactive-stage.styles";

export const PROFILE_STATS_DATA = [
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

export default function ProfileChapter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full animate-in fade-in zoom-in-95 duration-300">
      <div className="lg:col-span-7 space-y-5 sm:space-y-6">
        <div
          className={stageModalStyles.chapterBadge(
            "text-cyan-300 bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-indigo-950/60 border border-cyan-400/40 shadow-sm shadow-cyan-500/20",
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Chapter 01 // Executive Profile</span>
        </div>

        <div className="space-y-2">
          {/* Animated Typewriter Name strictly obeying single line constraint */}
          <TypewriterName />
          <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-200">
            Software Consultant &amp; Full-Stack AI Engineer
          </p>
        </div>

        <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
          Decomposing complex real-world requirements into deterministic,
          high-throughput software architectures. Specialized in modern modular
          React.js and Next.js applications, robust Node.js microservices, and
          multi-turn generative AI prompt engineering pipelines.
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
  );
}

