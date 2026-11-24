/**
 * Interactive Terminal & Shell Commands Constants
 * Location: src/constants/terminal.constants.ts
 */

import { PERSONAL_INFO } from "./personal.constants";

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available: 'thinking', 'skills', 'projects', 'github', 'contact', 'edu', 'hire', 'clear'",
  thinking:
    "Core Philosophy: First-principles decomposition, deterministic UI=f(State), and multi-stage prompt engineering.",
  skills:
    "React.js, Next.js, Node.js, Express.js, Prompt Engineering, Knex.js, MySQL, GitLab, Portainer",
  projects:
    "1. Daily Tracker (100% Solo Personal Project) | 2. Zenmarks.ai (EdTech AI) | 3. ZenSecure (Security Ops) | 4. Parenting Platform",
  github:
    "GitHub: https://github.com/Naveenkumar-2310 | Featured Solo: Daily Tracker (100% Independent Personal Project)",
  contact: `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}`,
  edu: "B.E. Mechanical Engineering (9.10 CGPA Distinction) - Sengunthar Engineering College",
  hire: "Consultancy Line: +91 8220349415. Ready to architect high-impact systems!",
};

