"use client";

import React from "react";
import { Terminal, Mail, Phone, Copy, Check } from "lucide-react";
import StageChapterHeader from "../StageChapterHeader";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface ContactChapterProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export default function ContactChapter({
  onCopyEmail,
  copiedEmail,
}: ContactChapterProps) {
  return (
    <div className="w-full space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
      <StageChapterHeader
        badgeIcon={<Terminal className="w-3.5 h-3.5 text-rose-400" />}
        badgeText="Chapter 06 // Direct Transmission"
        badgeStyle="text-rose-300 bg-gradient-to-r from-rose-950/60 to-cyan-950/60 border border-rose-400/40 mb-2 shadow-sm shadow-rose-500/20"
        title={
          <>
            Initiate <span className="text-gradient-aurora">Consultation</span>
          </>
        }
        description="Available for software architecture, full-stack web initiatives, and structured AI prompt engineering engagements."
        align="center"
      />

      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-cyan-500/40 font-mono text-xs sm:text-sm space-y-4 max-w-lg mx-auto text-left shadow-2xl">
        {/* Email Card (Cyan) */}
        <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 hover:border-cyan-400 transition-colors">
          <div className="flex items-center gap-2.5 truncate">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-cyan-200 font-semibold truncate">
              {PERSONAL_INFO.email}
            </span>
          </div>
          <button
            onClick={onCopyEmail}
            className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors cursor-pointer shrink-0"
            title="Copy Email"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Phone Card (Emerald) */}
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 hover:border-emerald-400 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-emerald-200 font-semibold">
              {PERSONAL_INFO.phone}
            </span>
          </div>
          <span className="text-[11px] text-emerald-300 font-bold">
            Call / WhatsApp
          </span>
        </a>

        {/* LinkedIn & GitHub Row */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-500/15 border border-blue-500/40 text-blue-300 hover:bg-blue-500/25 transition-colors font-semibold"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors font-semibold"
          >
            <GitHubIcon className="w-4 h-4 text-white" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
