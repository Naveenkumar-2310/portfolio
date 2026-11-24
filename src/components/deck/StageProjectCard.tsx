"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { Project } from "@/data/portfolio-data";
import { stageProjectThemes } from "@/styles/interactive-stage.styles";

interface StageProjectCardProps {
  project: Project;
}

export default function StageProjectCard({ project }: StageProjectCardProps) {
  const isSolo = project.id === "dailytracker";
  const themeClass =
    isSolo
      ? stageProjectThemes.solo
      : stageProjectThemes[project.id as keyof typeof stageProjectThemes] ||
        stageProjectThemes.virdhitechofficial;

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 flex flex-col justify-between ${themeClass}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h4 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>{project.title}</span>
            {isSolo && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-400/60 shadow-sm shadow-emerald-500/40">
                100% SOLO PROJECT
              </span>
            )}
          </h4>
          <span
            className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded ${
              isSolo
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-white/10 text-cyan-300"
            } shrink-0`}
          >
            {project.role}
          </span>
        </div>
        <p className="font-sans text-xs text-zinc-300 mb-2.5 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-2.5 pt-2 border-t border-white/10">
        <div className="flex flex-wrap gap-1 font-mono text-[10px] text-zinc-300">
          {project.techStack.slice(0, isSolo ? 6 : 5).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
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
}
