"use client";

import React from "react";
import { Calendar, Award } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";
import { StageJourneyCard } from "@/components/deck";

export default function JourneyChapter() {
  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Calendar className="w-3.5 h-3.5 text-purple-400" />}
        badgeText="Chapter 05 // Trajectory & Foundation"
        badgeStyle="text-purple-300 bg-gradient-to-r from-purple-950/60 to-pink-950/60 border border-purple-400/40 mb-2 shadow-sm shadow-purple-500/20"
        title={
          <>
            Experience &amp;{" "}
            <span className="text-gradient-aurora">Distinction</span>
          </>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Current Consulting Role */}
        <StageJourneyCard
          period="02/2025 – Present"
          roleOrDegree="Software Consultant"
          organization="Virdhi Tech Lab P Ltd • Chennai, TN"
          statusBadge="Active"
          description="Engineering core web platforms using React.js and Next.js, building high-throughput Node.js REST services, and designing automated prompt workflows for client EdTech and security systems."
          theme="cyan"
        />

        {/* Academic Distinction */}
        <StageJourneyCard
          period="2020 – 2024"
          roleOrDegree="B.E. Mechanical Engineering"
          organization="Sengunthar Engineering College • Namakkal"
          icon={<Award className="w-5 h-5 text-amber-400" />}
          highlightBadge={{
            label: "Final Cumulative Grade:",
            text: "9.10 CGPA (Distinction)",
          }}
          description="Analytical problem decomposition, finite element mathematical thinking, and first-principles mental models applied to software systems."
          theme="amber"
        />
      </div>
    </div>
  );
}
