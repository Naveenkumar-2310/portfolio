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

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skillsUsed: string[];
}

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

export const PROJECTS: Project[] = [
  {
    id: "dailytracker",
    title: "Daily Tracker",
    subtitle: "100% Personal Productivity & Habit Analytics Engine",
    category: "Personal Open-Source Project",
    role: "Creator & Solo Architect",
    description: "An independent, 100% solo-engineered productivity platform designed to track daily habits, task execution velocity, and personal performance metrics with rich analytics.",
    longDescription: "Architected and built 100% independently from the ground up as Naveen's core personal project. Designed clean state management, modular component architecture, habit streak tracking, and local persistence with responsive data visualization.",
    highlights: [
      "100% independent solo architecture built from scratch with clean modular code.",
      "Designed daily streak algorithms, milestone rewards, and habit consistency scoring.",
      "Engineered responsive dashboard with smooth interactive controls and local data synchronization.",
      "Publicly open-sourced on GitHub demonstrating clean commit history and architectural discipline."
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "State Management", "Git & GitHub", "Analytics UI"],
    metrics: [
      { label: "Authorship", value: "100% Solo" },
      { label: "Project Class", value: "Personal" },
      { label: "Codebase", value: "Open Source" }
    ],
    featured: true,
    accentColor: "from-cyan-400 to-emerald-500",
    githubUrl: "https://github.com/Naveenkumar-2310/daily-tracker"
  },
  {
    id: "zenmarks",
    title: "Zenmarks.ai",
    subtitle: "AI-Powered Educational Content & Learning Platform",
    category: "Full Stack & Generative AI",
    role: "Full Stack Developer & Prompt Engineer",
    description: "An intelligent educational platform that generates textbook explanations, exam-oriented questions, and interactive learning journeys using tailored AI prompt pipelines.",
    longDescription: "Engineered scalable frontend and backend product modules using React.js and Node.js. Designed and implemented structured AI prompt workflows for automated textbook breakdown, topic feedback engines, and real-time online classes with student refer-and-earn incentive mechanics.",
    highlights: [
      "Engineered automated prompt workflows for structured textbook explanations and exam-tailored synthesis.",
      "Developed high-conversion 'Refer & Earn' viral incentive mechanics with real-time payout tracking.",
      "Built multi-tier feedback loops: User Feedback, Topic-level ratings, and interactive Online Class portals.",
      "Integrated resilient backend services in Node.js for smooth handling of asynchronous AI generation requests."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Prompt Engineering", "REST APIs", "MySQL", "Tailwind CSS"],
    metrics: [
      { label: "AI Content Speed", value: "<1.2s" },
      { label: "Prompt Architecture", value: "Multi-step" },
      { label: "Core Focus", value: "EdTech AI" }
    ],
    featured: true,
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "zensecure",
    title: "ZenSecure",
    subtitle: "Enterprise Security Agency Operations Management",
    category: "Enterprise Systems",
    role: "Frontend Developer",
    description: "A mission-critical management platform for security agencies enabling personnel tracking, real-time shift allocation, ad-hoc dispatch, and administrative compliance.",
    longDescription: "Architected modern React.js interfaces backed by secure REST APIs for security agency operations. Designed complex operational workflows allowing dispatchers to monitor guard deployments, automate weekly shift rosters, handle incident triggers, and manage client facilities in real time.",
    highlights: [
      "Implemented comprehensive personnel tracking dashboards and real-time attendance verification.",
      "Created dynamic shift allocation algorithms with conflict detection and automated substitution.",
      "Configured ad-hoc emergency triggers and administrative dispatch notifications.",
      "Optimized enterprise UI responsiveness and data-table virtual rendering for large guard rosters."
    ],
    techStack: ["React.js", "JavaScript", "REST APIs", "State Management", "Tailwind CSS", "Enterprise UI"],
    metrics: [
      { label: "Shift Efficiency", value: "+40%" },
      { label: "Platform Role", value: "Ops Hub" },
      { label: "Real-time", value: "REST / Webhooks" }
    ],
    featured: true,
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "parenting",
    title: "Parenting — Kids Soft Skills",
    subtitle: "Child Development & Interactive Behavioral Guidance",
    category: "EdTech & Interactive UI",
    role: "Frontend Developer",
    description: "An intuitive web platform tailored to parents and educators, delivering interactive exercises and gamified assessments to nurture children's emotional intelligence and soft skills.",
    longDescription: "Developed accessible, friendly, and vibrant React.js website interfaces designed to facilitate interactive learning between parents and children. Implemented engaging soft-skill assessments, visual progress tracking, and multimedia content delivery.",
    highlights: [
      "Designed kid-friendly, playful yet modern interfaces optimized for both mobile and desktop screens.",
      "Built interactive assessment workflows measuring communication, problem-solving, and emotional resilience.",
      "Implemented visual progress trackers and milestone badges for motivating continuous child engagement."
    ],
    techStack: ["React.js", "JavaScript", "CSS Modules / Tailwind", "Interactive UI", "Component Architecture"],
    metrics: [
      { label: "User Experience", value: "Kid-Friendly" },
      { label: "Assessment Flow", value: "Gamified" },
      { label: "Responsive", value: "100%" }
    ],
    featured: false,
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: "virdhitechofficial",
    title: "Virdhi Tech Lab",
    subtitle: "Official Corporate Engineering & Innovation Portal",
    category: "Corporate Web Architecture",
    role: "Frontend Developer",
    description: "The primary digital presence of Virdhi Tech Lab showcasing technological capabilities, enterprise consultancy services, case studies, and engineering team highlights.",
    longDescription: "Led the development of responsive website components and clean UI layouts for the company's official corporate platform. Emphasized performance optimization, brand consistency, structured typography, and fluid cross-device compatibility.",
    highlights: [
      "Developed modular, reusable component libraries adhering to strict brand aesthetic guidelines.",
      "Engineered fluid responsive layouts delivering sub-second load times and high Core Web Vitals.",
      "Integrated dynamic contact inquiries and service showcase sections."
    ],
    techStack: ["React.js", "Next.js", "JavaScript", "Responsive Design", "Modern CSS"],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Device Support", value: "Cross-Platform" },
      { label: "Architecture", value: "Modular" }
    ],
    featured: false,
    accentColor: "from-purple-500 to-indigo-600"
  }
];

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
      { name: "HTML5 / Modern CSS", level: 95 }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express.js", level: 88, highlight: true },
      { name: "REST API Integration", level: 92, highlight: true },
      { name: "Knex.js", level: 82 },
      { name: "Objection.js", level: 80 },
      { name: "Authentication / JWT", level: 85 }
    ]
  },
  {
    title: "AI & Prompt Engineering",
    skills: [
      { name: "Prompt Engineering", level: 92, highlight: true },
      { name: "AI Content Generation", level: 90, highlight: true },
      { name: "Structured LLM Workflows", level: 88, highlight: true },
      { name: "EdTech AI Synthesis", level: 85 }
    ]
  },
  {
    title: "Databases & Deploy",
    skills: [
      { name: "MySQL", level: 85, highlight: true },
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "GitLab", level: 85 },
      { name: "Portainer", level: 80 },
      { name: "CI / CD Pipelines", level: 82 },
      { name: "Application Deployment", level: 85 }
    ]
  }
];

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
      "Pioneer structured AI prompt engineering pipelines for textbook-based educational content generation and automated curriculum summarization."
    ],
    skillsUsed: ["React.js", "Next.js", "Node.js", "Express.js", "Prompt Engineering", "MySQL", "GitLab", "Portainer"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2020 – 2024",
    degree: "Bachelor of Engineering (B.E.) – Mechanical Engineering",
    institution: "Sengunthar Engineering College",
    location: "Namakkal, TN",
    grade: "CGPA: 9.10 / 10.0 (Distinction)",
    achievements: [
      "Graduated with exceptional academic standing (9.10 CGPA), showcasing strong analytical, mathematical, and algorithmic foundations.",
      "Transitioned deep computational problem-solving and systems thinking into modern full-stack web and generative AI engineering."
    ]
  }
];

export const AI_DEMO_TOPICS = [
  {
    topic: "Physics: Quantum Entanglement & Superposition",
    grade: "Grade 12 / Advanced Physics",
    subject: "Physics",
    promptPreview: "Deconstruct quantum state vectors, generate real-world non-locality analogy, derive Bell State equation, and synthesize 3 exam questions.",
    rawSystemPrompt: `You are Zenmarks Pedagogical Architect Engine v2.4.
Your objective: Synthesize textbook curriculum into structured, deterministic mental models.

INPUT DIRECTIVES:
- Target Subject: Physics
- Standard: Grade 12 / Advanced Mechanics
- Core Concept: Quantum Entanglement & Superposition

PIPELINE CONSTRAINTS:
1. Deconstruct the physical phenomenon into first principles.
2. Produce an intuitive, non-jargon everyday analogy suitable for high school students.
3. Formulate the canonical mathematical equation in strict LaTeX notation.
4. Synthesize 3 Bloom's Taxonomy assessment questions (Recall, Analytical, Synthesis).
5. Output MUST conform strictly to the JSON Schema:
{
  "concept": "string",
  "analogy": "string",
  "keyFormula": "latex_string",
  "examQuestions": ["string", "string", "string"]
}`,
    response: {
      concept: "Quantum Entanglement describes a quantum mechanical phenomenon where pairs of particles interact in ways such that the quantum state of each particle cannot be described independently of the state of the others, even when the particles are separated by vast cosmic distances.",
      analogy: "Imagine a single pair of magic shoes placed in two identical sealed boxes, one on Earth and one on Mars. Opening Box A to observe a left shoe instantly and deterministically collapses Box B to contain the right shoe — without any physical signal needing to travel across space.",
      keyFormula: "\\Psi = \\frac{1}{\\sqrt{2}} \\left( |00\\rangle + |11\\rangle \\right)",
      examQuestions: [
        "Explain the Einstein-Podolsky-Rosen (EPR) Paradox and how Bell's Inequality experimentally ruled out local hidden variables.",
        "Under what conditions does quantum decoherence destroy entangled state superposition?",
        "Differentiate classical statistical correlation from quantum entanglement using spin measurement measurements."
      ]
    }
  },
  {
    topic: "Computer Science: Distributed Consensus & Raft Protocol",
    grade: "Undergraduate / Systems Engineering",
    subject: "Computer Science",
    promptPreview: "Explain leader election, log replication, split-brain resolution, and compute quorum safety invariants in distributed nodes.",
    rawSystemPrompt: `You are Zenmarks Pedagogical Architect Engine v2.4.
Your objective: Synthesize textbook curriculum into structured, deterministic mental models.

INPUT DIRECTIVES:
- Target Subject: Computer Science / Distributed Systems
- Standard: Undergraduate / Systems Engineering
- Core Concept: Distributed Consensus & Raft Protocol

PIPELINE CONSTRAINTS:
1. Deconstruct the distributed consensus problem (FLP impossibility context).
2. Generate an intuitive political/committee analogy for understanding leader election.
3. Output the exact mathematical majority quorum invariant in LaTeX.
4. Produce 3 technical interview / exam questions testing partition tolerance and linearizability.
5. Adhere to strict JSON output contract without conversational preambles.`,
    response: {
      concept: "Raft is a distributed consensus algorithm designed for understandability, ensuring state machine replication across a cluster of independent nodes despite network delays or machine crashes through a strong elected leader.",
      analogy: "Picture a parliamentary council where members elect a single speaker via randomized timed ballots. Only the elected speaker accepts legislation, duplicates certified copies to all members, and commits laws once a verified majority signs off.",
      keyFormula: "\\text{Quorum} = \\left\\lfloor \\frac{N}{2} \\right\\rfloor + 1",
      examQuestions: [
        "Explain how randomized election timeouts prevent split-vote deadlocks during leader elections in Raft.",
        "Under what condition does a Raft leader consider a log entry committed, and how is the state machine safety invariant preserved?",
        "How does Raft maintain consistency and prevent split-brain during a network partition where two subsets form?"
      ]
    }
  },
  {
    topic: "Mathematics: Continuous Fourier Transform",
    grade: "Engineering Mathematics / Signal Processing",
    subject: "Mathematics",
    promptPreview: "Decompose continuous time signals into orthogonal sinusoidal frequency components with visual spectral metaphor.",
    rawSystemPrompt: `You are Zenmarks Pedagogical Architect Engine v2.4.
Your objective: Synthesize textbook curriculum into structured, deterministic mental models.

INPUT DIRECTIVES:
- Target Subject: Engineering Mathematics
- Standard: Advanced Undergraduate
- Core Concept: Continuous Fourier Transform

PIPELINE CONSTRAINTS:
1. Deconstruct time-domain to frequency-domain transformation using orthogonal basis functions.
2. Provide an optical or musical analogy that makes frequency spectrum analysis instantly visual.
3. Formulate the continuous forward Fourier transform integral in pristine LaTeX.
4. Formulate 3 rigorous engineering examination questions.`,
    response: {
      concept: "The Continuous Fourier Transform is an integral transform that decomposes any continuous time-varying signal into its constituent orthogonal sinusoidal frequency components, converting temporal amplitude into spectral density.",
      analogy: "Like passing sunlight through an optical glass prism to disperse it into individual rainbow wavelengths, or listening to an orchestral symphony and isolating the exact acoustic frequencies produced by every violin and cello.",
      keyFormula: "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(t) \\, e^{-2\\pi i t \\xi} \\, dt",
      examQuestions: [
        "State and prove the Time-Shift property of the Continuous Fourier Transform and explain its impact on phase spectrum.",
        "Using the Fourier Transform, derive the frequency response of a linear time-invariant (LTI) system with impulse response h(t).",
        "Explain how the Dirac delta function acts as the Fourier transform pair of an infinite continuous DC signal."
      ]
    }
  },
  {
    topic: "AI & Deep Learning: Multi-Head Scaled Dot-Product Attention",
    grade: "Machine Learning / Graduate AI",
    subject: "Artificial Intelligence",
    promptPreview: "Deconstruct Transformer attention mechanism: Query, Key, Value dot-products, scaling factor, and softmax distributions.",
    rawSystemPrompt: `You are Zenmarks Pedagogical Architect Engine v2.4.
Your objective: Synthesize textbook curriculum into structured, deterministic mental models.

INPUT DIRECTIVES:
- Target Subject: Deep Learning / NLP
- Standard: Advanced AI Engineering
- Core Concept: Scaled Dot-Product Multi-Head Attention

PIPELINE CONSTRAINTS:
1. Explain how attention maps input representations without recurrent sequential bottlenecks.
2. Provide a library retrieval / database lookup analogy.
3. Formulate the canonical Scaled Dot-Product Attention equation in LaTeX with scaling denominator.
4. Synthesize 3 technical AI interview questions on computational complexity and gradient flow.`,
    response: {
      concept: "Scaled Dot-Product Attention is the foundational routing mechanism of Transformer architectures that dynamically weights the contextual relevance of all tokens relative to one another through projections of Queries, Keys, and Values.",
      analogy: "Imagine an automated researcher in an archive with a specific question (Query). They scan the index labels (Keys) of every book on the shelves, calculate similarity scores, and synthesize the relevant excerpts (Values) proportional to relevance.",
      keyFormula: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V",
      examQuestions: [
        "Why is the dot-product divided by the square root of the key dimension (\\sqrt{d_k}) before applying softmax?",
        "Compare the computational complexity of self-attention O(n^2) against RNNs O(n) regarding sequence length n and hidden dimension d.",
        "Explain how Multi-Head Attention allows the model to simultaneously attend to information from different representation subspaces."
      ]
    }
  }
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

export const PIPELINE_ARCHITECTURE_STAGES = [
  {
    stage: "STAGE 01",
    title: "Syllabus Ingestion",
    description: "Parses target curriculum, academic standard, and pedagogical intent.",
    border: "border-cyan-500/40",
    color: "text-cyan-400",
  },
  {
    stage: "STAGE 02",
    title: "Analogy Synthesis",
    description: "Forces zero-jargon real-world metaphors to anchor core mental models.",
    border: "border-blue-500/40",
    color: "text-blue-400",
  },
  {
    stage: "STAGE 03",
    title: "LaTeX Compiler",
    description: "Validates mathematical notation against KaTeX parser without hallucinations.",
    border: "border-amber-500/40",
    color: "text-amber-400",
  },
  {
    stage: "STAGE 04",
    title: "Bloom's Taxonomy",
    description: "Generates multi-tier exam questions targeting comprehension and synthesis.",
    border: "border-emerald-500/40",
    color: "text-emerald-400",
  },
];

export const PIPELINE_BENCHMARKS = [
  "Mean Response Latency: 1.14s on Node.js / Express backend with streaming connection",
  "Output Compliance: 100% strict JSON Schema validation with fallback retry logic",
  "EdTech Deployment: Active in Zenmarks.ai educational content synthesis workflows",
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
      "Transitioned engineering first-principles and thermodynamic equilibrium systems into software state machines, concurrency, and high-performance algorithms."
    ],
    skills: ["Analytical Modeling", "Algorithms", "Mathematics", "Systems Engineering"]
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
      "Manage end-to-end containerized deployments using Docker, Portainer, and GitLab CI/CD pipelines."
    ],
    skills: ["React.js", "Next.js", "Node.js", "Prompt Engineering", "MySQL", "GitLab CI/CD", "Portainer"]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: "first-principles",
    title: "First-Principles Decomposition",
    subtitle: "Mechanical Rigor Meets Algorithmic Architecture",
    iconName: "Cpu",
    accent: "from-cyan-500 to-blue-600",
    quote: "Don't reason by analogy. Deconstruct every system to its irreducible physical and logical truths, then assemble upwards.",
    details: [
      "Inherited from an intensive Mechanical Engineering foundation (9.10 CGPA Distinction).",
      "Systems thinking: analyzing stress, thermodynamic loads, and mechanical equilibria maps directly into software bottlenecks, memory pressure, and distributed concurrency.",
      "Ensures software solutions are never bloated — only minimal, mathematically sound abstractions."
    ],
    codeSnippet: `// Mental Model: System Decomposition
type System<T> = {
  axioms: readonly Immutable<T>[];
  invariants: ((state: T) => boolean)[];
  transition: (prev: T, action: Action) => Result<T, SystemError>;
};
// Result: Zero unexpected side effects, deterministic runtime.`
  },
  {
    id: "reactive-determinism",
    title: "Reactive State & UI Determinism",
    subtitle: "Unidirectional Data Flow & Zero-Latency UX",
    iconName: "Workflow",
    accent: "from-blue-500 to-indigo-600",
    quote: "A modern interface is a pure function of its state: UI = f(State). If state is modeled cleanly, UI bugs simply cannot exist.",
    details: [
      "Crafting reusable React.js and Next.js design systems with modular component separation.",
      "Eliminating prop drilling and race conditions with strict unidirectional data flow and deterministic caches.",
      "Designing high-throughput Node.js & Express REST APIs with idempotent endpoint contracts."
    ],
    codeSnippet: `// Pure Functional UI Contract
const UI = useMemo(() => renderView(state), [state]);
// Node.js Idempotent API Contract:
POST /api/v1/shifts/allocate -> headers: { 'Idempotency-Key': uuid }
// Result: Flawless synchronization across multi-user sessions.`
  },
  {
    id: "generative-cognition",
    title: "Generative AI Prompt Architecture",
    subtitle: "Structured Multi-Turn Reasoning Workflows",
    iconName: "Sparkles",
    accent: "from-amber-500 to-rose-600",
    quote: "Prompt engineering is not chatting with a model; it is compiling natural language logic into structured, reproducible JSON pipelines.",
    details: [
      "Pioneered structured prompt pipelines for Zenmarks.ai to convert dense textbook chapters into tailored pedagogy.",
      "Multi-step orchestration: context scaffolding -> intuitive metaphor generation -> LaTeX formula validation -> exam question generation.",
      "Guaranteed schema compliance using constrained decoding and multi-tiered fallback validation."
    ],
    codeSnippet: `// Zenmarks.ai Structured Pipeline
const promptEngine = new Pipeline([
  CurriculumScaffolder,
  MetaphorSynthesizer,
  FormulaDeriver,
  BloomsTaxonomyAssessor
]);
// Yields 100% structured educational content under 1.2s.`
  },
  {
    id: "operational-resilience",
    title: "Operational Resilience & Velocity",
    subtitle: "Self-Healing Infrastructure & Continuous Delivery",
    iconName: "ShieldCheck",
    accent: "from-emerald-500 to-teal-600",
    quote: "Code that does not deploy predictably does not exist. Reliability is a non-negotiable feature.",
    details: [
      "End-to-end containerized deployments using Docker, Portainer, and GitLab CI/CD pipelines.",
      "Designed operational workflows in ZenSecure for live security personnel tracking and ad-hoc dispatch.",
      "Zero-downtime rolling releases and robust error isolation preventing cascade failures."
    ],
    codeSnippet: `// CI/CD Pipeline & Portainer Containerization
stages: [lint, typecheck, test, build-image, deploy-portainer]
healthcheck: 
  interval: 10s
  retries: 3
  test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]`
  }
];

export const WORKSTATION_STAGE_TABS = [
  { id: "overview", name: "01. Executive Overview" },
  { id: "thinking", name: "02. Cognitive Architecture" },
  { id: "systems", name: "03. Production Systems" },
  { id: "aistudio", name: "04. AI Prompt Engine" },
  { id: "trajectory", name: "05. Journey & 9.10 CGPA" },
  { id: "terminal", name: "06. Interactive Shell" },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available: 'thinking', 'skills', 'projects', 'github', 'contact', 'edu', 'hire', 'clear'",
  thinking: "Core Philosophy: First-principles decomposition, deterministic UI=f(State), and multi-stage prompt engineering.",
  skills: "React.js, Next.js, Node.js, Express.js, Prompt Engineering, Knex.js, MySQL, GitLab, Portainer",
  projects: "1. Daily Tracker (100% Solo Personal Project) | 2. Zenmarks.ai (EdTech AI) | 3. ZenSecure (Security Ops) | 4. Parenting Platform",
  github: "GitHub: https://github.com/Naveenkumar-2310 | Featured Solo: Daily Tracker (100% Independent Personal Project)",
  contact: `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}`,
  edu: "B.E. Mechanical Engineering (9.10 CGPA Distinction) - Sengunthar Engineering College",
  hire: "Consultancy Line: +91 8220349415. Ready to architect high-impact systems!",
};

