/**
 * Deck Mode Workstation Constants
 * Location: src/constants/deck.constants.ts
 */

import React from "react";
import {
  Sparkles,
  Zap,
  Brain,
  Code2,
  Cpu,
  Calendar,
  Terminal,
} from "lucide-react";

export interface WorkstationStageItem {
  id: string;
  number: string;
  name: string;
  icon: React.ElementType;
  activeColor: string;
}

export const WORKSTATION_STAGES: WorkstationStageItem[] = [
  {
    id: "overview",
    number: "01",
    name: "Profile",
    icon: Sparkles,
    activeColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "skills",
    number: "02",
    name: "Skills",
    icon: Zap,
    activeColor: "from-amber-400 to-cyan-500",
  },
  {
    id: "thinking",
    number: "03",
    name: "Thinking",
    icon: Brain,
    activeColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "systems",
    number: "04",
    name: "Projects",
    icon: Code2,
    activeColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "aistudio",
    number: "05",
    name: "AI Studio",
    icon: Cpu,
    activeColor: "from-amber-500 to-orange-600",
  },
  {
    id: "trajectory",
    number: "06",
    name: "Journey",
    icon: Calendar,
    activeColor: "from-purple-500 to-pink-600",
  },
  {
    id: "terminal",
    number: "07",
    name: "Contact",
    icon: Terminal,
    activeColor: "from-rose-500 to-cyan-600",
  },
];

export const PROFILE_STATS_DATA = [
  {
    id: "academics",
    label: "Academic Rigor",
    value: "9.10 CGPA",
    subtext: "First Class with Distinction",
    theme: "amber" as const,
  },
  {
    id: "consulting",
    label: "Current Position",
    value: "Consultant",
    subtext: "Virdhi Tech Lab (02/2025–Present)",
    theme: "cyan" as const,
  },
  {
    id: "solo-project",
    label: "Featured Solo",
    value: "Daily Tracker",
    subtext: "100% Solo Personal Project",
    theme: "emerald" as const,
  },
];
