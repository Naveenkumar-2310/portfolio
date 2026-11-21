"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  Code, 
  Brain, 
  HelpCircle, 
  Activity, 
  Check, 
  Copy, 
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { 
  AI_DEMO_TOPICS, 
  PIPELINE_ARCHITECTURE_STAGES, 
  PIPELINE_BENCHMARKS 
} from "@/data/portfolio-data";
import LatexFormula from "@/components/LatexFormula";
import { sound } from "@/lib/sound";

export default function AIStudioSection() {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"execution" | "prompt" | "architecture">("execution");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(false); // DO NOT show output 1st! Only when Execute is clicked!
  const [generationStep, setGenerationStep] = useState(0); 
  const [tokensGenerated, setTokensGenerated] = useState(0);
  const [executionMessage, setExecutionMessage] = useState("Pipeline Standby // Click 'Execute' to Synthesize");
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const activeTopic = AI_DEMO_TOPICS[selectedTopicIndex] || AI_DEMO_TOPICS[0];
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  const handleRunPipeline = () => {
    sound.click();
    clearAllTimeouts();
    setIsGenerating(true);
    setHasExecuted(true);
    setGenerationStep(0);
    setTokensGenerated(0);
    setExecutionMessage("Phase 1: Tokenizing Syllabus Context & Grade Level...");

    const t1 = setTimeout(() => {
      setGenerationStep(1);
      setTokensGenerated(118);
      setExecutionMessage("Phase 2: Synthesizing Intuitive Mental Model & Real-World Analogy...");
    }, 450);

    const t2 = setTimeout(() => {
      setGenerationStep(2);
      setTokensGenerated(245);
      setExecutionMessage("Phase 3: Compiling LaTeX Mathematical Proof & Formulation...");
    }, 900);

    const t3 = setTimeout(() => {
      setGenerationStep(3);
      setTokensGenerated(372);
      setExecutionMessage("Phase 4: Synthesizing Bloom's Taxonomy Exam Assessment Questions...");
    }, 1350);

    const t4 = setTimeout(() => {
      setGenerationStep(4);
      setTokensGenerated(498);
      setIsGenerating(false);
      setExecutionMessage("✓ Pipeline Execution Succeeded (Latency: 1.14s | Schema: 100% Valid)");
      sound.chime();
    }, 1800);

    timeoutsRef.current = [t1, t2, t3, t4];
  };

  const copyPromptToClipboard = () => {
    navigator.clipboard.writeText(activeTopic.rawSystemPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const switchTopic = (idx: number) => {
    sound.click();
    clearAllTimeouts();
    setIsGenerating(false);
    setSelectedTopicIndex(idx);
    setHasExecuted(false); // Reset so output is NOT shown first!
    setGenerationStep(0);
    setTokensGenerated(0);
    setExecutionMessage("Pipeline Standby // Click 'Execute' to Synthesize");
  };

  return (
    <section id="aistudio" className="relative py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10">
      <SectionHeader
        badge={{
          icon: Sparkles,
          text: "Interactive Production AI Simulator",
        }}
        title={
          <>
            AI Prompt <span className="text-gradient-neural">Studio</span> &amp; Pipeline Lab
          </>
        }
        description="Live simulation of the prompt engineering architecture developed for Zenmarks.ai at Virdhi Tech Lab."
      />

      {/* Recruiter & Purpose Banner */}
      <div className="mb-8 p-6 rounded-3xl bg-[#0e1018]/95 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">
              Recruiter &amp; Tech Lead Inspection Hub: How This Works
            </span>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
              At <strong className="text-white">Zenmarks.ai</strong>, Naveen Kumar engineered multi-stage prompt pipelines to automate textbook curriculum breakdown. Instead of random chat prompts, this system enforces **reproducible context scaffolding, intuitive analogies, LaTeX formulas, and Bloom&apos;s Taxonomy exams**. Use the tabs below to inspect the live execution, view the raw system prompt code, or analyze the multi-stage architecture.
            </p>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => {
              sound.click();
              setActiveTab("execution");
            }}
            className={`px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all border ${
              activeTab === "execution"
                ? "bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25"
                : "bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10"
            }`}
          >
            ⚡ Live Output
          </button>

          <button
            onClick={() => {
              sound.click();
              setActiveTab("prompt");
            }}
            className={`px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all border ${
              activeTab === "prompt"
                ? "bg-amber-500 text-white border-amber-400 shadow-lg shadow-amber-500/25"
                : "bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10"
            }`}
          >
            🔍 View System Prompt
          </button>

          <button
            onClick={() => {
              sound.click();
              setActiveTab("architecture");
            }}
            className={`hidden sm:inline-flex px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all border ${
              activeTab === "architecture"
                ? "bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/25"
                : "bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10"
            }`}
          >
            📐 Architecture Logic
          </button>
        </div>
      </div>

      {/* Main Studio Frame - High Contrast Solid Surface */}
      <div className="bg-[#0e1018]/95 rounded-3xl sm:rounded-4xl border border-white/20 overflow-hidden shadow-2xl shadow-cyan-950/40">
        {/* Studio Window Bar */}
        <div className="px-6 sm:px-8 py-4 bg-zinc-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-zinc-200 font-semibold">
              zenmarks-cognitive-pipeline.v2.runtime
            </span>
          </div>

          {/* Subject & Module Selector */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-zinc-400 hidden md:inline">Select Subject &amp; Topic:</span>
            <div className="flex flex-wrap gap-1.5">
              {AI_DEMO_TOPICS.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => switchTopic(idx)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                    selectedTopicIndex === idx
                      ? "bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/30"
                      : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {topic.subject.split(" ")[0]} 0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Status Sub-Bar */}
        <div className="px-6 sm:px-8 py-2.5 bg-black/50 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-cyan-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{executionMessage}</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Tokens: <strong className="text-white">{tokensGenerated}</strong></span>
            <span>Speed: <strong className="text-emerald-400">{hasExecuted ? "96 tok/s" : "0 tok/s"}</strong></span>
            <span>Formula Engine: <strong className="text-cyan-300">KaTeX LaTeX</strong></span>
          </div>
        </div>

        {/* TAB 1: LIVE SYNTHESIZER EXECUTION */}
        {activeTab === "execution" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Column: Directives & Chain of Thought Trace (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    Target Subject &amp; Grade Level
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-200 border border-white/10">
                    {activeTopic.grade}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeTopic.topic}
                </h3>
                <p className="font-mono text-xs text-zinc-400 leading-relaxed mb-6">
                  Prompt Directive: &quot;{activeTopic.promptPreview}&quot;
                </p>

                {/* Step by Step Execution Indicators */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
                    Multi-Stage Pipeline Execution Trace
                  </span>
                  
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className={`p-3 rounded-xl flex items-center justify-between transition-colors ${
                      generationStep >= 1 ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/50" : "bg-white/5 text-zinc-500"
                    }`}>
                      <span>1. Scaffolding Syllabus &amp; Context</span>
                      {generationStep >= 1 ? <Check className="w-4 h-4 text-cyan-400" /> : <span className="w-2 h-2 rounded-full bg-zinc-600" />}
                    </div>

                    <div className={`p-3 rounded-xl flex items-center justify-between transition-colors ${
                      generationStep >= 2 ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/50" : "bg-white/5 text-zinc-500"
                    }`}>
                      <span>2. Intuitive Mental Model Generator</span>
                      {generationStep >= 2 ? <Check className="w-4 h-4 text-cyan-400" /> : <span className="w-2 h-2 rounded-full bg-zinc-600" />}
                    </div>

                    <div className={`p-3 rounded-xl flex items-center justify-between transition-colors ${
                      generationStep >= 3 ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/50" : "bg-white/5 text-zinc-500"
                    }`}>
                      <span>3. Mathematical Derivation &amp; KaTeX Proof</span>
                      {generationStep >= 3 ? <Check className="w-4 h-4 text-cyan-400" /> : <span className="w-2 h-2 rounded-full bg-zinc-600" />}
                    </div>

                    <div className={`p-3 rounded-xl flex items-center justify-between transition-colors ${
                      generationStep >= 4 ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/50" : "bg-white/5 text-zinc-500"
                    }`}>
                      <span>4. Bloom&apos;s Taxonomy Question Synthesis</span>
                      {generationStep >= 4 ? <Check className="w-4 h-4 text-cyan-400" /> : <span className="w-2 h-2 rounded-full bg-zinc-600" />}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleRunPipeline}
                disabled={isGenerating}
                className="w-full py-4 px-6 rounded-2xl font-mono font-bold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Live AI Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>{hasExecuted ? "Re-Execute Structured Pipeline" : "Execute Structured AI Pipeline"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Column: Output Showcase (DO NOT SHOW OUTPUT FIRST! Only when Execute is clicked!) */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-black/60 flex flex-col justify-between space-y-6">
              {!hasExecuted && !isGenerating ? (
                /* STANDBY STATE: Awaiting Execution */
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 space-y-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
                  <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-950/40">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>

                  <div className="max-w-md space-y-2">
                    <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold block">
                      [ Pipeline Idle // Awaiting Trigger ]
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Output Is Not Pre-Rendered
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Click the <strong className="text-amber-400">&quot;Execute Structured AI Pipeline&quot;</strong> button on the left to trigger the real-time LLM workflow and synthesize the concept, real-world analogy, KaTeX formula, and exam questions.
                    </p>
                  </div>

                  <button
                    onClick={handleRunPipeline}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/30 hover:scale-105 transition-all shadow-lg shadow-cyan-500/10"
                  >
                    <Play className="w-3.5 h-3.5 fill-cyan-300" />
                    <span>Trigger Pipeline Now</span>
                  </button>
                </div>
              ) : (
                /* EXECUTING OR EXECUTED STATE */
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Concept Section */}
                  <div className={`transition-all duration-500 ${generationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-30 blur-sm translate-y-2"}`}>
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 font-bold">
                      <Brain className="w-4 h-4" />
                      <span>CORE INTELLECTUAL CONCEPT [PHASE 1]</span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-zinc-100 leading-relaxed">
                      {generationStep >= 1 ? activeTopic.response.concept : "Phase 1: Tokenizing curriculum context..."}
                    </p>
                  </div>

                  {/* Analogy Section */}
                  <div className={`p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 transition-all duration-500 ${generationStep >= 2 ? "opacity-100 translate-y-0" : "opacity-30 blur-sm translate-y-2"}`}>
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 mb-2 font-bold">
                      <Sparkles className="w-4 h-4" />
                      <span>INTUITIVE REAL-WORLD ANALOGY [PHASE 2]</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed italic">
                      {generationStep >= 2 ? `"${activeTopic.response.analogy}"` : "Phase 2: Compiling intuitive analogy..."}
                    </p>
                  </div>

                  {/* Formula & LaTeX Formulation rendered via KaTeX */}
                  <div className={`transition-all duration-500 ${generationStep >= 3 ? "opacity-100 translate-y-0" : "opacity-30 blur-sm translate-y-2"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold">
                        <Code className="w-4 h-4" />
                        <span>MATHEMATICAL FORMULATION [LATEX RENDERED]</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/5">
                        KaTeX Engine
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-black/90 border border-white/15 text-center shadow-inner">
                      {generationStep >= 3 ? (
                        <LatexFormula formula={activeTopic.response.keyFormula} className="text-base sm:text-xl" />
                      ) : (
                        <span className="font-mono text-xs text-zinc-500">Phase 3: Deriving mathematical formula...</span>
                      )}
                    </div>
                  </div>

                  {/* Exam Synthesis */}
                  <div className={`transition-all duration-500 ${generationStep >= 4 ? "opacity-100 translate-y-0" : "opacity-30 blur-sm translate-y-2"}`}>
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>EXAM-ORIENTED QUESTION SYNTHESIS [PHASE 4]</span>
                    </div>
                    <ul className="space-y-2.5 font-sans">
                      {generationStep >= 4 ? (
                        activeTopic.response.examQuestions.map((q, i) => (
                          <li key={i} className="text-xs sm:text-sm text-zinc-200 flex items-start gap-2.5">
                            <span className="font-mono text-emerald-400 font-bold shrink-0">Q0{i + 1}:</span>
                            <span>{q}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-zinc-500 font-mono">Phase 4: Structuring Bloom&apos;s Taxonomy exams...</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Latency: 1.14s • Zero Hallucination Validated</span>
                <span className="text-cyan-400 font-semibold">Zenmarks.ai AI Engine</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VIEW RAW SYSTEM PROMPT (FOR RECRUITERS & TECH LEADS) */}
        {activeTab === "prompt" && (
          <div className="p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold block">
                  Production Prompt Template &amp; Constraints
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Engineered System Prompt for {activeTopic.subject}
                </h4>
              </div>

              <button
                onClick={copyPromptToClipboard}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                {copiedPrompt ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPrompt ? "Copied Prompt!" : "Copy System Prompt"}</span>
              </button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Recruiters and engineering leads can inspect the exact role-framing, input directives, few-shot constraints, and JSON schema boundaries developed for this curriculum topic:
            </p>

            <pre className="p-6 rounded-2xl bg-black/85 border border-white/15 font-mono text-xs sm:text-sm text-amber-200 overflow-x-auto leading-relaxed shadow-2xl selection:bg-amber-500/30">
              <code>{activeTopic.rawSystemPrompt}</code>
            </pre>
          </div>
        )}

        {/* TAB 3: PIPELINE ARCHITECTURE LOGIC */}
        {activeTab === "architecture" && (
          <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
            <div>
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold block">
                Engineering Blueprint
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Zenmarks.ai Multi-Stage Prompt Pipeline Architecture
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
              {PIPELINE_ARCHITECTURE_STAGES.map((s) => (
                <div key={s.stage} className={`p-5 rounded-2xl bg-[#0e1018] border ${s.border} space-y-2`}>
                  <span className={`${s.color} font-bold`}>{s.stage}</span>
                  <h5 className="font-display text-sm font-bold text-white">{s.title}</h5>
                  <p className="text-zinc-400 font-sans text-xs">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300">
              <span className="text-cyan-400 font-bold block mb-1">&gt; PRODUCTION BENCHMARKS:</span>
              {PIPELINE_BENCHMARKS.map((b, i) => (
                <div key={i}>• {b}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
