"use client";

import React from "react";
import { stageModalStyles } from "@/styles/interactive-stage.styles";

export interface StageChapterHeaderProps {
  badgeIcon: React.ReactNode;
  badgeText: string;
  badgeStyle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable Chapter Header for Interactive Workstation Deck chapters
 * Encapsulates the chapter badge, animated gradients, and contextual subheadings.
 */
export default function StageChapterHeader({
  badgeIcon,
  badgeText,
  badgeStyle,
  title,
  description,
  align = "left",
  className = "",
}: StageChapterHeaderProps) {
  const isCenter = align === "center";
  const defaultBadgeClass =
    badgeStyle ||
    "text-cyan-300 bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-indigo-950/60 border border-cyan-400/40 shadow-sm shadow-cyan-500/20";

  return (
    <div
      className={`${
        isCenter ? "text-center max-w-xl mx-auto" : "text-left"
      } ${className}`}
    >
      <div className={stageModalStyles.chapterBadge(defaultBadgeClass)}>
        {badgeIcon}
        <span>{badgeText}</span>
      </div>
      <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1.5 sm:mt-2 leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`font-sans text-xs sm:text-sm text-zinc-300 mt-1.5 sm:mt-2 leading-relaxed ${
            isCenter ? "max-w-md mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

