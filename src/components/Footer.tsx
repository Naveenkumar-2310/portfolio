"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Clock, Mail, Phone } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  const [chennaiTime, setChennaiTime] = useState<string>("");
  const currentYear = 2025;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setChennaiTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl py-10 sm:py-14 pb-24 sm:pb-14 px-4 sm:px-8 md:px-14 lg:px-20 w-full z-10">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Brand & Rights */}
        <div className="space-y-1.5 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2.5">
            <span className="font-display text-sm sm:text-base font-bold text-white tracking-wide whitespace-nowrap">
              Naveen Kumar P
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="font-mono text-[11px] sm:text-xs text-zinc-400 text-center sm:text-left">
              Software Consultant • Virdhi Tech Lab
            </span>
          </div>
          <p className="font-mono text-[11px] sm:text-xs text-zinc-500 max-w-md leading-relaxed text-center md:text-left">
            &copy; {currentYear} Naveen Kumar P. Engineered with Next.js, React 19, TypeScript &amp; Generative AI pipelines.
          </p>
        </div>

        {/* Live Chennai Time Badge */}
        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-white/10 font-mono text-[11px] sm:text-xs text-zinc-400 shadow-inner">
          <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Chennai, TN, India:</span>
          <span className="text-white font-semibold font-mono">{chennaiTime || "IST"}</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-colors"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4 text-white" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-colors"
            title="Call Phone"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/30 text-cyan-300 transition-colors ml-1 sm:ml-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
