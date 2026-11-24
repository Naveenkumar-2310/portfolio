"use client";

import React from "react";
import { Brain } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";
import { StageThinkingCard, ThinkingCardItem } from "@/components/deck";

export const THINKING_PILLARS_DATA: ThinkingCardItem[] = [
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

export default function ThinkingChapter() {
  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Brain className="w-3.5 h-3.5 text-blue-400" />}
        badgeText="Chapter 02 // Cognitive Architecture"
        badgeStyle="text-blue-300 bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-400/40 mb-3 shadow-sm shadow-blue-500/20"
        title={
          <>
            How I <span className="text-gradient-aurora">Think</span>,
            Deconstruct &amp; Build
          </>
        }
        description="First-principles engineering decomposes mechanical equilibrium into software concurrency, deterministic state, and zero-bloat modular systems."
      />

      {/* Clean Component Mapping for all 4 Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {THINKING_PILLARS_DATA.map((item) => (
          <StageThinkingCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
