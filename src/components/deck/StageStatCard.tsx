"use client";

import React from "react";
import { statCardThemes } from "@/styles/interactive-stage.styles";

interface StageStatCardProps {
  label: string;
  value: string;
  subtext: string;
  theme: keyof typeof statCardThemes;
}

export default function StageStatCard({
  label,
  value,
  subtext,
  theme,
}: StageStatCardProps) {
  const t = statCardThemes[theme];

  return (
    <div className={t.container}>
      <span className={t.label}>{label}</span>
      <span className={t.value}>{value}</span>
      <span className={t.subtext}>{subtext}</span>
    </div>
  );
}

