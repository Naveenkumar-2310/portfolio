"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  CheckCircle2, 
  Zap, 
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CAREER_MILESTONES } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";

export default function ExperienceSection() {
  const [activeStep, setActiveStep] = useState(1); // 0: Education (2020-2024), 1: Software Consultant (02/2025-Present)
  const activeMilestone = CAREER_MILESTONES[activeStep] || CAREER_MILESTONES[0];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10">
      <SectionHeader
        badge={{
          icon: Zap,
          text: "Interactive Career Progress Stepper",
        }}
        title={
          <>
            Journey <span className="text-gradient-aurora">Progress Tracker</span>
          </>
        }
        description="Track the verified progression from the academic engineering foundation to active software consultancy at Virdhi Tech Lab."
      />

      {/* Main Career Progress Stepper Bar (Horizontal Highway) */}
      <div className="relative mb-14">
        {/* Background Laser Connecting Track */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2 z-0">
          {/* Animated Active Laser Progress Fill */}
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 transition-all duration-700 shadow-lg shadow-cyan-500/50"
            style={{ width: activeStep === 0 ? "50%" : "100%" }}
          />
        </div>

        {/* 2 Milestone Progress Nodes (Side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {CAREER_MILESTONES.map((m, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={m.id}
                onClick={() => {
                  sound.click();
                  setActiveStep(idx);
                }}
                className={`text-left transition-all duration-300 p-6 sm:p-7 rounded-3xl border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#0e1018] border-cyan-400/90 shadow-2xl shadow-cyan-950/60 scale-[1.01]"
                    : "bg-[#0c0d14]/90 border-white/15 hover:border-cyan-500/40 hover:bg-[#0e1018]"
                }`}
              >
                {/* Node Step Indicator & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    }`}>
                      {m.step}
                    </span>
                    <span className="font-mono text-xs text-zinc-300 font-semibold">{m.period}</span>
                  </div>

                  <span className={`font-mono text-[10px] px-3 py-1 rounded-full border uppercase font-bold tracking-wider ${m.statusColor}`}>
                    {m.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
                    {m.role}
                  </h4>
                  <p className="font-mono text-sm text-cyan-400 font-medium">
                    {m.institution}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {m.location}
                  </span>
                  <span className={`transition-transform font-semibold ${isActive ? "text-cyan-400 translate-x-1" : "text-zinc-500"}`}>
                    Active Focus →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Milestone Progress Details */}
      <div className="border-t border-b border-white/10 py-10 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Summary & Key Milestone Meta (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block font-bold">
              Progress Focus // Milestone {activeMilestone.step}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {activeMilestone.role}
            </h3>

            <p className="font-mono text-sm text-cyan-300 font-semibold">
              {activeMilestone.institution} • {activeMilestone.location}
            </p>

            <div className="p-4 rounded-2xl bg-[#0e1018] border border-white/15 font-mono text-xs text-zinc-200">
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                Milestone Highlight:
              </span>
              <strong className="text-white text-sm">{activeMilestone.highlight}</strong>
            </div>

            <div className="font-mono text-xs text-zinc-400">
              Duration: <span className="text-white font-semibold">{activeMilestone.period}</span>
            </div>
          </div>

          {/* Right Side: Progressive Accomplishments & Skills (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
                Verified Deliverables &amp; Responsibilities
              </h4>
              <div className="space-y-3 font-sans">
                {activeMilestone.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Technologies applied in this milestone */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2.5 font-semibold">
                Competencies &amp; Tooling Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeMilestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-xl bg-[#0e1018] text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
