/**
 * Navigation Links & Section IDs Constants
 * Location: src/constants/navigation.constants.ts
 */

import React from "react";
import { Zap, Brain } from "lucide-react";

export interface NavLinkItem {
  name: string;
  href: string;
  id: string;
  icon?: React.ElementType;
  highlight?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Overview", href: "#hero", id: "hero" },
  { name: "Skills", href: "#skills-3d", id: "skills-3d", icon: Zap },
  { name: "Thinking Architecture", href: "#philosophy", id: "philosophy", icon: Brain },
  { name: "Selected Works", href: "#projects", id: "projects" },
  { name: "AI Prompt Lab", href: "#aistudio", id: "aistudio", highlight: true },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const WORKSTATION_STAGE_TABS = [
  { id: "overview", name: "01. Executive Overview" },
  { id: "thinking", name: "02. Cognitive Architecture" },
  { id: "systems", name: "03. Production Systems" },
  { id: "aistudio", name: "04. AI Prompt Engine" },
  { id: "trajectory", name: "05. Journey & 9.10 CGPA" },
  { id: "terminal", name: "06. Interactive Shell" },
];

