import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: React.ReactNode;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  const Icon = badge.icon;

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8 ${className}`}
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-3">
          <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>{badge.text}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
}

