"use client";

import React from "react";
import { thinkingCardThemes } from "@/styles/interactive-stage.styles";

export interface ThinkingCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  theme: keyof typeof thinkingCardThemes;
}

export default function StageThinkingCard({
  number,
  title,
  description,
  tag,
  theme,
}: ThinkingCardItem) {
  const t = thinkingCardThemes[theme];

  return (
    <div className={t.container}>
      <div className={t.badge}>{number}</div>
      <h4 className={t.title}>{title}</h4>
      <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {description}
      </p>
      <span className={t.tag}>{tag}</span>
    </div>
  );
}
