"use client";

import React from "react";
import { Cpu } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";

export default function AIStudioChapter() {
  return (
    <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Cpu className="w-3.5 h-3.5 text-amber-400" />}
        badgeText="Chapter 04 // AI Prompt Engineering Engine"
        badgeStyle="text-amber-300 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-400/40 mb-2 shadow-sm shadow-amber-500/20"
        title={
          <>
            Zenmarks.ai{" "}
            <span className="text-gradient-neural">Cognitive Pipeline</span>
          </>
        }
        description="Transforms raw textbook chapters into tailored pedagogy, formulas, and Bloom's Taxonomy exam evaluations via multi-stage prompt engineering."
      />

      {/* Colorful Terminal Simulation */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-2 border-amber-500/40 font-mono text-xs text-zinc-200 space-y-3.5 shadow-2xl shadow-amber-950/30 cyber-scanline">
        <div className="flex items-center justify-between text-amber-300 pb-2 border-b border-white/10">
          <span className="font-bold">
            &gt; EXEC_PIPELINE(concept: &quot;Distributed Consensus / Raft&quot;)
          </span>
          <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
            TELEMETRY: ACTIVE
          </span>
        </div>
        <div className="text-zinc-300 pl-4 border-l-2 border-amber-400/60 space-y-2 leading-relaxed">
          <div className="text-cyan-300">
            <strong className="text-white">1. Scaffolding:</strong> Decompose
            distributed state replication across N active nodes.
          </div>
          <div className="text-violet-300">
            <strong className="text-white">2. Intuitive Metaphor:</strong>{" "}
            Parliamentary speaker voting committee.
          </div>
          <div className="text-amber-300">
            <strong className="text-white">3. Mathematical Anchor:</strong> Quorum
            = floor(N / 2) + 1.
          </div>
          <div className="text-rose-300">
            <strong className="text-white">4. Exam Question:</strong> Under what
            failure scenario is a log entry considered committed?
          </div>
        </div>
        <div className="pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <span className="text-emerald-400 font-bold">
            ✓ Generation Latency: 1.14s
          </span>
          <span className="text-cyan-300 font-semibold">
            Schema Compliance: 100% JSON Guaranteed
          </span>
          <span className="text-purple-300 font-medium">
            Model: Gemini / Claude Hybrid
          </span>
        </div>
      </div>
    </div>
  );
}
