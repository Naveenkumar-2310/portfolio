"use client";

import React from "react";

interface StageJourneyCardProps {
  period: string;
  roleOrDegree: string;
  organization: string;
  description: string;
  statusBadge?: string;
  highlightBadge?: {
    label: string;
    text: string;
  };
  icon?: React.ReactNode;
  theme: "cyan" | "amber";
}

export default function StageJourneyCard({
  period,
  roleOrDegree,
  organization,
  description,
  statusBadge,
  highlightBadge,
  icon,
  theme,
}: StageJourneyCardProps) {
  const isCyan = theme === "cyan";

  return (
    <div
      className={`p-6 rounded-3xl space-y-3 transition-colors ${
        isCyan
          ? "bg-gradient-to-br from-cyan-950/40 via-emerald-950/20 to-black border border-cyan-500/50 hover:border-cyan-400 shadow-lg shadow-cyan-950/30"
          : "bg-gradient-to-br from-purple-950/50 via-amber-950/30 to-black border-2 border-amber-400/60 hover:border-amber-300 shadow-xl shadow-amber-950/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs font-bold ${
            isCyan ? "text-cyan-300" : "text-amber-300"
          }`}
        >
          {period}
        </span>
        {statusBadge && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20">
            {statusBadge}
          </span>
        )}
        {icon}
      </div>
      <h4 className="font-display text-xl font-bold text-white">
        {roleOrDegree}
      </h4>
      <p
        className={`font-mono text-xs font-semibold ${
          isCyan ? "text-cyan-400" : "text-purple-300"
        }`}
      >
        {organization}
      </p>

      {highlightBadge && (
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 font-mono text-xs font-bold text-amber-300 flex items-center justify-between shadow-inner">
          <span>{highlightBadge.label}</span>
          <span className="text-amber-200 font-display text-base font-extrabold">
            {highlightBadge.text}
          </span>
        </div>
      )}

      <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

