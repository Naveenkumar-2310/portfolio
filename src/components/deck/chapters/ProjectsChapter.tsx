"use client";

import React from "react";
import { Code2 } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";
import { StageProjectCard } from "@/components/deck";
import { PROJECTS } from "@/data/portfolio-data";

export default function ProjectsChapter() {
  return (
    <div className="w-full space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Code2 className="w-3.5 h-3.5 text-emerald-400" />}
        badgeText="Chapter 03 // Production Systems"
        badgeStyle="text-emerald-300 bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-400/40 mb-1.5 shadow-sm shadow-emerald-500/20"
        title={
          <>
            Engineered <span className="text-gradient-cyan">Platforms</span>
          </>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {PROJECTS.map((project) => (
          <StageProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
