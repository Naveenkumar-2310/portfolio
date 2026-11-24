/**
 * Projects Constants & Interfaces
 * Location: src/constants/projects.constants.ts
 * Strictly obeys AGENTS.md Rule 2: Daily Tracker is 100% Solo Personal Project.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  role: string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "dailytracker",
    title: "Daily Tracker",
    subtitle: "100% Personal Productivity & Habit Analytics Engine",
    category: "Personal Open-Source Project",
    role: "Creator & Solo Architect",
    description:
      "An independent, 100% solo-engineered productivity platform designed to track daily habits, task execution velocity, and personal performance metrics with rich analytics.",
    longDescription:
      "Architected and built 100% independently from the ground up as Naveen's core personal project. Designed clean state management, modular component architecture, habit streak tracking, and local persistence with responsive data visualization.",
    highlights: [
      "100% independent solo architecture built from scratch with clean modular code.",
      "Designed daily streak algorithms, milestone rewards, and habit consistency scoring.",
      "Engineered responsive dashboard with smooth interactive controls and local data synchronization.",
      "Publicly open-sourced on GitHub demonstrating clean commit history and architectural discipline.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "State Management",
      "Git & GitHub",
      "Analytics UI",
    ],
    metrics: [
      { label: "Authorship", value: "100% Solo" },
      { label: "Project Class", value: "Personal" },
      { label: "Codebase", value: "Open Source" },
    ],
    featured: true,
    accentColor: "from-cyan-400 to-emerald-500",
    githubUrl: "https://github.com/Naveenkumar-2310/daily-tracker",
  },
  {
    id: "zenmarks",
    title: "Zenmarks.ai",
    subtitle: "AI-Powered Educational Content & Learning Platform",
    category: "Full Stack & Generative AI",
    role: "Full Stack Developer & Prompt Engineer",
    description:
      "An intelligent educational platform that generates textbook explanations, exam-oriented questions, and interactive learning journeys using tailored AI prompt pipelines.",
    longDescription:
      "Engineered scalable frontend and backend product modules using React.js and Node.js. Designed and implemented structured AI prompt workflows for automated textbook breakdown, topic feedback engines, and real-time online classes with student refer-and-earn incentive mechanics.",
    highlights: [
      "Engineered automated prompt workflows for structured textbook explanations and exam-tailored synthesis.",
      "Developed high-conversion 'Refer & Earn' viral incentive mechanics with real-time payout tracking.",
      "Built multi-tier feedback loops: User Feedback, Topic-level ratings, and interactive Online Class portals.",
      "Integrated resilient backend services in Node.js for smooth handling of asynchronous AI generation requests.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Prompt Engineering",
      "REST APIs",
      "MySQL",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "AI Content Speed", value: "<1.2s" },
      { label: "Prompt Architecture", value: "Multi-step" },
      { label: "Core Focus", value: "EdTech AI" },
    ],
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "zensecure",
    title: "ZenSecure",
    subtitle: "Enterprise Security Agency Operations Management",
    category: "Enterprise Systems",
    role: "Frontend Developer",
    description:
      "A mission-critical management platform for security agencies enabling personnel tracking, real-time shift allocation, ad-hoc dispatch, and administrative compliance.",
    longDescription:
      "Architected modern React.js interfaces backed by secure REST APIs for security agency operations. Designed complex operational workflows allowing dispatchers to monitor guard deployments, automate weekly shift rosters, handle incident triggers, and manage client facilities in real time.",
    highlights: [
      "Implemented comprehensive personnel tracking dashboards and real-time attendance verification.",
      "Created dynamic shift allocation algorithms with conflict detection and automated substitution.",
      "Configured ad-hoc emergency triggers and administrative dispatch notifications.",
      "Optimized enterprise UI responsiveness and data-table virtual rendering for large guard rosters.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "State Management",
      "Tailwind CSS",
      "Enterprise UI",
    ],
    metrics: [
      { label: "Shift Efficiency", value: "+40%" },
      { label: "Platform Role", value: "Ops Hub" },
      { label: "Real-time", value: "REST / Webhooks" },
    ],
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "parenting",
    title: "Parenting — Kids Soft Skills",
    subtitle: "Child Development & Interactive Behavioral Guidance",
    category: "EdTech & Interactive UI",
    role: "Frontend Developer",
    description:
      "An intuitive web platform tailored to parents and educators, delivering interactive exercises and gamified assessments to nurture children's emotional intelligence and soft skills.",
    longDescription:
      "Developed accessible, friendly, and vibrant React.js website interfaces designed to facilitate interactive learning between parents and children. Implemented engaging soft-skill assessments, visual progress tracking, and multimedia content delivery.",
    highlights: [
      "Designed kid-friendly, playful yet modern interfaces optimized for both mobile and desktop screens.",
      "Built interactive assessment workflows measuring communication, problem-solving, and emotional resilience.",
      "Implemented visual progress trackers and milestone badges for motivating continuous child engagement.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "CSS Modules / Tailwind",
      "Interactive UI",
      "Component Architecture",
    ],
    metrics: [
      { label: "User Experience", value: "Kid-Friendly" },
      { label: "Assessment Flow", value: "Gamified" },
      { label: "Responsive", value: "100%" },
    ],
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: "virdhitechofficial",
    title: "Virdhi Tech Lab",
    subtitle: "Official Corporate Engineering & Innovation Portal",
    category: "Corporate Web Architecture",
    role: "Frontend Developer",
    description:
      "The primary digital presence of Virdhi Tech Lab showcasing technological capabilities, enterprise consultancy services, case studies, and engineering team highlights.",
    longDescription:
      "Led the development of responsive website components and clean UI layouts for the company's official corporate platform. Emphasized performance optimization, brand consistency, structured typography, and fluid cross-device compatibility.",
    highlights: [
      "Developed modular, reusable component libraries adhering to strict brand aesthetic guidelines.",
      "Engineered fluid responsive layouts delivering sub-second load times and high Core Web Vitals.",
      "Integrated dynamic contact inquiries and service showcase sections.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Responsive Design",
      "Modern CSS",
    ],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Device Support", value: "Cross-Platform" },
      { label: "Architecture", value: "Modular" },
    ],
    featured: false,
    accentColor: "from-purple-500 to-indigo-600",
  },
];

