/**
 * Skills & Technical Competencies Constants
 * Location: src/constants/skills.constants.ts
 */

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 90, highlight: true },
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "TypeScript", level: 85, highlight: true },
      { name: "Tailwind CSS", level: 92, highlight: true },
      { name: "Angular.js", level: 75 },
      { name: "Bootstrap", level: 88 },
      { name: "HTML5 / Modern CSS", level: 95 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express.js", level: 88, highlight: true },
      { name: "REST API Integration", level: 92, highlight: true },
      { name: "Knex.js", level: 82 },
      { name: "Objection.js", level: 80 },
      { name: "Authentication / JWT", level: 85 },
    ],
  },
  {
    title: "AI & Prompt Engineering",
    skills: [
      { name: "Prompt Engineering", level: 92, highlight: true },
      { name: "AI Content Generation", level: 90, highlight: true },
      { name: "Structured LLM Workflows", level: 88, highlight: true },
      { name: "EdTech AI Synthesis", level: 85 },
    ],
  },
  {
    title: "Databases & Deploy",
    skills: [
      { name: "MySQL", level: 85, highlight: true },
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "GitLab", level: 85 },
      { name: "Portainer", level: 80 },
      { name: "CI / CD Pipelines", level: 82 },
      { name: "Application Deployment", level: 85 },
    ],
  },
];

