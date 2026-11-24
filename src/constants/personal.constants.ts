/**
 * Personal & Academic Information Constants
 * Location: src/constants/personal.constants.ts
 */

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: "Naveen Kumar P",
  title: "Software Consultant & Full-Stack AI Engineer",
  tagline: "Architecting Next-Gen Web Applications & Intelligent AI Workflows",
  bio: "Software Consultant with proven expertise in frontend and full-stack web development, responsive architectures, API integration, and AI-based educational content generation. Specialized in React.js, Next.js, Node.js, and prompt engineering pipelines.",
  email: "pnaveenkumar.prasanna@gmail.com",
  phone: "+91 8220349415",
  location: "Chennai, TN, India",
  linkedin: "https://linkedin.com/in/naveenkumar-prasanna",
  github: "https://github.com/Naveenkumar-2310",
  status: "Available for Consulting & High-Impact Engineering",
  resumePath: "/Naveen_Kumar_Resume.pdf",
};

export const EDUCATION: EducationItem[] = [
  {
    period: "2020 – 2024",
    degree: "Bachelor of Engineering (B.E.) – Mechanical Engineering",
    institution: "Sengunthar Engineering College",
    location: "Namakkal, TN",
    grade: "CGPA: 9.10 / 10.0 (Distinction)",
    achievements: [
      "Graduated with exceptional academic standing (9.10 CGPA), showcasing strong analytical, mathematical, and algorithmic foundations.",
      "Transitioned deep computational problem-solving and systems thinking into modern full-stack web and generative AI engineering.",
    ],
  },
];

export const CAREER_MILESTONES = [
  {
    id: "education",
    step: "01",
    status: "COMPLETED (9.10 CGPA)",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    period: "2020 – 2024",
    role: "Bachelor of Engineering (B.E.) – Mechanical Engineering",
    institution: "Sengunthar Engineering College",
    location: "Namakkal, Tamil Nadu",
    highlight: "Graduated with 9.10 CGPA (First Class with Distinction)",
    description: [
      "Built deep analytical problem-solving, structural mathematics, and computational modeling discipline.",
      "Transitioned engineering first-principles and thermodynamic equilibrium systems into software state machines, concurrency, and high-performance algorithms.",
    ],
    skills: [
      "Analytical Modeling",
      "Algorithms",
      "Mathematics",
      "Systems Engineering",
    ],
  },
  {
    id: "consultant",
    step: "02",
    status: "CURRENT • ACTIVE CONSULTANT",
    statusColor: "text-cyan-300 bg-cyan-500/20 border-cyan-400/40",
    period: "02/2025 – Present",
    role: "Software Consultant",
    institution: "Virdhi Tech Lab P Ltd",
    location: "Chennai, Tamil Nadu",
    highlight: "Full-Stack Web Engineering & Generative AI Prompt Workflows",
    description: [
      "Develop high-performance responsive web applications using React.js and Next.js with modular, reusable UI components.",
      "Build scalable backend services using Node.js and Express.js with secure REST API architecture and MySQL database integration.",
      "Implement core product features including referral/incentive mechanisms, multi-tier user feedback systems, and online class portals.",
      "Design structured multi-turn AI prompt pipelines for educational curriculum decomposition and interactive assessment generation.",
      "Manage end-to-end containerized deployments using Docker, Portainer, and GitLab CI/CD pipelines.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Prompt Engineering",
      "MySQL",
      "GitLab CI/CD",
      "Portainer",
    ],
  },
];

export const HERO_MARQUEE_ITEMS = [
  "REACT.JS 19 & NEXT.JS 15",
  "•",
  "STRUCTURED AI PROMPT PIPELINES",
  "•",
  "NODE.JS & EXPRESS REST APIS",
  "•",
  "MODULAR REUSABLE UI ARCHITECTURE",
  "•",
  "ENTERPRISE OPERATIONS SYSTEMS",
  "•",
  "ZENMARKS.AI & ZENSECURE",
  "•",
  "MYSQL & KNEX.JS",
  "•",
  "GITLAB CI/CD & PORTAINER",
  "•",
  "FIRST-PRINCIPLES SYSTEM THINKING",
  "•",
];

