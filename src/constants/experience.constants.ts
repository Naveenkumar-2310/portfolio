/**
 * Experience Constants & History
 * Location: src/constants/experience.constants.ts
 */

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skillsUsed: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "02/2025 – Present",
    role: "Software Consultant",
    company: "Virdhi Tech Lab P Ltd",
    location: "Chennai, TN",
    description: [
      "Develop high-performance responsive web applications using React.js and Next.js with reusable, testable UI component libraries.",
      "Build robust backend services and microservices using Node.js and Express.js with secure REST API architectures and database integrations.",
      "Implement critical product features including automated feedback engines, referral/incentive mechanisms, and user support infrastructure.",
      "Pioneer structured AI prompt engineering pipelines for textbook-based educational content generation and automated curriculum summarization.",
    ],
    skillsUsed: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Prompt Engineering",
      "MySQL",
      "GitLab",
      "Portainer",
    ],
  },
];

