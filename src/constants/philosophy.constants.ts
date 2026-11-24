/**
 * Architectural Thinking & Cognitive Philosophy Constants
 * Location: src/constants/philosophy.constants.ts
 */

export interface PhilosophyPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accent: string;
  quote: string;
  details: string[];
  codeSnippet: string;
}

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: "first-principles",
    title: "First-Principles Decomposition",
    subtitle: "Mechanical Rigor Meets Algorithmic Architecture",
    iconName: "Cpu",
    accent: "from-cyan-500 to-blue-600",
    quote:
      "Don't reason by analogy. Deconstruct every system to its irreducible physical and logical truths, then assemble upwards.",
    details: [
      "Inherited from an intensive Mechanical Engineering foundation (9.10 CGPA Distinction).",
      "Systems thinking: analyzing stress, thermodynamic loads, and mechanical equilibria maps directly into software bottlenecks, memory pressure, and distributed concurrency.",
      "Ensures software solutions are never bloated — only minimal, mathematically sound abstractions.",
    ],
    codeSnippet: `// Mental Model: System Decomposition
type System<T> = {
  axioms: readonly Immutable<T>[];
  invariants: ((state: T) => boolean)[];
  transition: (prev: T, action: Action) => Result<T, SystemError>;
};
// Result: Zero unexpected side effects, deterministic runtime.`,
  },
  {
    id: "reactive-determinism",
    title: "Reactive State & UI Determinism",
    subtitle: "Unidirectional Data Flow & Zero-Latency UX",
    iconName: "Workflow",
    accent: "from-blue-500 to-indigo-600",
    quote:
      "A modern interface is a pure function of its state: UI = f(State). If state is modeled cleanly, UI bugs simply cannot exist.",
    details: [
      "Crafting reusable React.js and Next.js design systems with modular component separation.",
      "Eliminating prop drilling and race conditions with strict unidirectional data flow and deterministic caches.",
      "Designing high-throughput Node.js & Express REST APIs with idempotent endpoint contracts.",
    ],
    codeSnippet: `// Pure Functional UI Contract
const UI = useMemo(() => renderView(state), [state]);
// Node.js Idempotent API Contract:
POST /api/v1/shifts/allocate -> headers: { 'Idempotency-Key': uuid }
// Result: Flawless synchronization across multi-user sessions.`,
  },
  {
    id: "generative-cognition",
    title: "Generative AI Prompt Architecture",
    subtitle: "Structured Multi-Turn Reasoning Workflows",
    iconName: "Sparkles",
    accent: "from-amber-500 to-rose-600",
    quote:
      "Prompt engineering is not chatting with a model; it is compiling natural language logic into structured, reproducible JSON pipelines.",
    details: [
      "Pioneered structured prompt pipelines for Zenmarks.ai to convert dense textbook chapters into tailored pedagogy.",
      "Multi-step orchestration: context scaffolding -> intuitive metaphor generation -> LaTeX formula validation -> exam question generation.",
      "Guaranteed schema compliance using constrained decoding and multi-tiered fallback validation.",
    ],
    codeSnippet: `// Zenmarks.ai Structured Pipeline
const promptEngine = new Pipeline([
  CurriculumScaffolder,
  MetaphorSynthesizer,
  FormulaDeriver,
  BloomsTaxonomyAssessor
]);
// Yields 100% structured educational content under 1.2s.`,
  },
  {
    id: "operational-resilience",
    title: "Operational Resilience & Velocity",
    subtitle: "Self-Healing Infrastructure & Continuous Delivery",
    iconName: "ShieldCheck",
    accent: "from-emerald-500 to-teal-600",
    quote:
      "Code that does not deploy predictably does not exist. Reliability is a non-negotiable feature.",
    details: [
      "End-to-end containerized deployments using Docker, Portainer, and GitLab CI/CD pipelines.",
      "Designed operational workflows in ZenSecure for live security personnel tracking and ad-hoc dispatch.",
      "Zero-downtime rolling releases and robust error isolation preventing cascade failures.",
    ],
    codeSnippet: `// CI/CD Pipeline & Portainer Containerization
stages: [lint, typecheck, test, build-image, deploy-portainer]
healthcheck: 
  interval: 10s
  retries: 3
  test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]`,
  },
];

