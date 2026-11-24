/**
 * AI Studio & Prompt Pipelines Constants
 * Location: src/constants/ai-studio.constants.ts
 */

export interface AIDemoTopic {
  topic: string;
  grade: string;
  subject: string;
  promptPreview: string;
  rawSystemPrompt: string;
  response: {
    concept: string;
    analogy: string;
    keyFormula: string;
    examQuestions: string[];
  };
}

export const AI_DEMO_TOPICS: AIDemoTopic[] = [
  {
    topic: "Physics: Quantum Entanglement & Superposition",
    grade: "Grade 12 / Advanced Physics",
    subject: "Physics",
    promptPreview:
      "Deconstruct quantum state vectors, generate real-world non-locality analogy, derive Bell State equation, and synthesize 3 exam questions.",
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
      concept:
        "Quantum Entanglement describes a quantum mechanical phenomenon where pairs of particles interact in ways such that the quantum state of each particle cannot be described independently of the state of the others, even when the particles are separated by vast cosmic distances.",
      analogy:
        "Imagine a single pair of magic shoes placed in two identical sealed boxes, one on Earth and one on Mars. Opening Box A to observe a left shoe instantly and deterministically collapses Box B to contain the right shoe — without any physical signal needing to travel across space.",
      keyFormula:
        "\\Psi = \\frac{1}{\\sqrt{2}} \\left( |00\\rangle + |11\\rangle \\right)",
      examQuestions: [
        "Explain the Einstein-Podolsky-Rosen (EPR) Paradox and how Bell's Inequality experimentally ruled out local hidden variables.",
        "Under what conditions does quantum decoherence destroy entangled state superposition?",
        "Differentiate classical statistical correlation from quantum entanglement using spin measurement measurements.",
      ],
    },
  },
  {
    topic: "Computer Science: Distributed Consensus & Raft Protocol",
    grade: "Undergraduate / Systems Engineering",
    subject: "Computer Science",
    promptPreview:
      "Explain leader election, log replication, split-brain resolution, and compute quorum safety invariants in distributed nodes.",
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
      concept:
        "Raft is a distributed consensus algorithm designed for understandability, ensuring state machine replication across a cluster of independent nodes despite network delays or machine crashes through a strong elected leader.",
      analogy:
        "Picture a parliamentary council where members elect a single speaker via randomized timed ballots. Only the elected speaker accepts legislation, duplicates certified copies to all members, and commits laws once a verified majority signs off.",
      keyFormula:
        "\\text{Quorum} = \\left\\lfloor \\frac{N}{2} \\right\\rfloor + 1",
      examQuestions: [
        "Explain how randomized election timeouts prevent split-vote deadlocks during leader elections in Raft.",
        "Under what condition does a Raft leader consider a log entry committed, and how is the state machine safety invariant preserved?",
        "How does Raft maintain consistency and prevent split-brain during a network partition where two subsets form?",
      ],
    },
  },
  {
    topic: "Mathematics: Continuous Fourier Transform",
    grade: "Engineering Mathematics / Signal Processing",
    subject: "Mathematics",
    promptPreview:
      "Decompose continuous time signals into orthogonal sinusoidal frequency components with visual spectral metaphor.",
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
      concept:
        "The Continuous Fourier Transform is an integral transform that decomposes any continuous time-varying signal into its constituent orthogonal sinusoidal frequency components, converting temporal amplitude into spectral density.",
      analogy:
        "Like passing sunlight through an optical glass prism to disperse it into individual rainbow wavelengths, or listening to an orchestral symphony and isolating the exact acoustic frequencies produced by every violin and cello.",
      keyFormula:
        "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(t) \\, e^{-2\\pi i t \\xi} \\, dt",
      examQuestions: [
        "State and prove the Time-Shift property of the Continuous Fourier Transform and explain its impact on phase spectrum.",
        "Using the Fourier Transform, derive the frequency response of a linear time-invariant (LTI) system with impulse response h(t).",
        "Explain how the Dirac delta function acts as the Fourier transform pair of an infinite continuous DC signal.",
      ],
    },
  },
  {
    topic: "AI & Deep Learning: Multi-Head Scaled Dot-Product Attention",
    grade: "Machine Learning / Graduate AI",
    subject: "Artificial Intelligence",
    promptPreview:
      "Deconstruct Transformer attention mechanism: Query, Key, Value dot-products, scaling factor, and softmax distributions.",
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
      concept:
        "Scaled Dot-Product Attention is the foundational routing mechanism of Transformer architectures that dynamically weights the contextual relevance of all tokens relative to one another through projections of Queries, Keys, and Values.",
      analogy:
        "Imagine an automated researcher in an archive with a specific question (Query). They scan the index labels (Keys) of every book on the shelves, calculate similarity scores, and synthesize the relevant excerpts (Values) proportional to relevance.",
      keyFormula:
        "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V",
      examQuestions: [
        "Why is the dot-product divided by the square root of the key dimension (\\sqrt{d_k}) before applying softmax?",
        "Compare the computational complexity of self-attention O(n^2) against RNNs O(n) regarding sequence length n and hidden dimension d.",
        "Explain how Multi-Head Attention allows the model to simultaneously attend to information from different representation subspaces.",
      ],
    },
  },
];

export const PIPELINE_ARCHITECTURE_STAGES = [
  {
    stage: "STAGE 01",
    title: "Syllabus Ingestion",
    description:
      "Parses target curriculum, academic standard, and pedagogical intent.",
    border: "border-cyan-500/40",
    color: "text-cyan-400",
  },
  {
    stage: "STAGE 02",
    title: "Analogy Synthesis",
    description:
      "Forces zero-jargon real-world metaphors to anchor core mental models.",
    border: "border-blue-500/40",
    color: "text-blue-400",
  },
  {
    stage: "STAGE 03",
    title: "LaTeX Compiler",
    description:
      "Validates mathematical notation against KaTeX parser without hallucinations.",
    border: "border-amber-500/40",
    color: "text-amber-400",
  },
  {
    stage: "STAGE 04",
    title: "Bloom's Taxonomy",
    description:
      "Generates multi-tier exam questions targeting comprehension and synthesis.",
    border: "border-emerald-500/40",
    color: "text-emerald-400",
  },
];

export const PIPELINE_BENCHMARKS = [
  "Mean Response Latency: 1.14s on Node.js / Express backend with streaming connection",
  "Output Compliance: 100% strict JSON Schema validation with fallback retry logic",
  "EdTech Deployment: Active in Zenmarks.ai educational content synthesis workflows",
];

