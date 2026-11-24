"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  Code2,
  Sliders,
} from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PERSONAL_INFO, HERO_MARQUEE_ITEMS } from "@/data/portfolio-data";
import HolographicPortrait from "@/components/HolographicPortrait";
import { sound } from "@/lib/sound";
import { TypewriterName } from "@/components/deck";

export default function HeroSection({
  onOpenStageMode,
}: {
  onOpenStageMode?: () => void;
}) {
  const scrollTo = (id: string) => {
    sound.click();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-8 overflow-hidden z-10 w-full perspective-[1200px]"
    >
      {/* Main Full-Width Hero Container */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 flex-1 flex flex-col justify-center">
        {/* Top Status Indicators (Prioritizing Skills & Architecture) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold text-zinc-200 tracking-wide">
              Software Consultant • Virdhi Tech Lab
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-400 border border-white/10">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>React.js • Next.js • Node.js • Prompt Workflows</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs font-mono text-zinc-400 border border-white/5">
            <span>Chennai, TN, India</span>
          </div>
        </div>

        {/* Hero Grid: Typography Left (7 Cols), 3D Holographic Portrait Right (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Huge Typography */}
          <div className="lg:col-span-7 space-y-6">
            {/* Name strictly on a single line on all screen sizes with animated typewriter effect */}
            <TypewriterName
              as="h1"
              className="font-display text-[clamp(1.85rem,5.2vw,4.75rem)] lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white whitespace-nowrap leading-none overflow-visible select-none inline-flex items-center"
            />

            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-200 leading-tight">
              Software Consultant &amp; Full-Stack AI Engineer
            </p>

            <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-sans font-normal">
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">Naveen Kumar P</span>.
              I specialize in engineering high-velocity{" "}
              <strong className="text-white">React &amp; Next.js</strong>{" "}
              frontends, resilient{" "}
              <strong className="text-white">Node.js microservices</strong>, and
              production-grade{" "}
              <strong className="text-cyan-400">
                generative AI prompt pipelines
              </strong>{" "}
              that convert complex domain workflows into deterministic software.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => scrollTo("skills-3d")}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Zap className="w-4 h-4 text-cyan-200" />
                <span>Explore Technical Skills</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-zinc-200 glass-panel hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Selected Works</span>
              </button>

              {onOpenStageMode && (
                <button
                  onClick={onOpenStageMode}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer"
                  title="Launch Interactive Workstation Deck Mode"
                >
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Deck Mode</span>
                </button>
              )}

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-zinc-300 glass-panel-subtle hover:text-white hover:bg-white/10 transition-all"
                title="View GitHub Profile & Repositories"
              >
                <GitHubIcon className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Skills & Mastery Metric Bar (Prioritizing Skills!) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl font-mono">
              <div className="p-3.5 rounded-2xl glass-panel border border-cyan-500/20 text-center hover:border-cyan-400 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                  95%
                </div>
                <div className="text-[10px] text-zinc-300 uppercase tracking-wider font-semibold">
                  React &amp; Next.js
                </div>
                <div className="text-[9px] text-zinc-500">Frontend Lead</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border border-amber-500/20 text-center hover:border-amber-400 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-amber-300">
                  92%
                </div>
                <div className="text-[10px] text-zinc-300 uppercase tracking-wider font-semibold">
                  Prompt Workflows
                </div>
                <div className="text-[9px] text-zinc-500">GenAI Pipeline</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border border-emerald-500/20 text-center hover:border-emerald-400 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                  90%
                </div>
                <div className="text-[10px] text-zinc-300 uppercase tracking-wider font-semibold">
                  Node &amp; Express
                </div>
                <div className="text-[9px] text-zinc-500">REST APIs</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border border-indigo-500/20 text-center hover:border-indigo-400 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-indigo-400">
                  4+
                </div>
                <div className="text-[10px] text-zinc-300 uppercase tracking-wider font-semibold">
                  Core Systems
                </div>
                <div className="text-[9px] text-zinc-500">Consultant</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Portrait with Satellites */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HolographicPortrait />
          </div>
        </div>
      </div>

      {/* Full-Viewport Kinetic Marquee Strip */}
      <div className="w-full mt-14 py-3.5 border-y border-white/10 bg-black/40 backdrop-blur-md overflow-hidden select-none">
        <div className="animate-marquee font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400 flex items-center gap-6 whitespace-nowrap">
          {HERO_MARQUEE_ITEMS.concat(HERO_MARQUEE_ITEMS).map((text, idx) => (
            <span
              key={idx}
              className={
                text === "•"
                  ? "text-cyan-400 text-base"
                  : "hover:text-cyan-300 transition-colors"
              }
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
