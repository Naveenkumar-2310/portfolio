"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Brain, Cpu, Zap, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export default function HolographicPortrait() {
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth 3D tilt
    const calcRotX = -(y / (rect.height / 2)) * 14;
    const calcRotY = (x / (rect.width / 2)) * 14;
    setRotX(calcRotX);
    setRotY(calcRotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.hover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] mx-auto select-none perspective-[1200px]">
      {/* 3D Perspective Card Container */}
      <div
        ref={cardRef}
        suppressHydrationWarning
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${Math.round(rotX)}deg) rotateY(${Math.round(rotY)}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
        }}
        className={`relative group rounded-3xl sm:rounded-4xl p-2.5 bg-gradient-to-b from-cyan-500/20 via-white/10 to-indigo-500/20 border border-white/20 shadow-2xl shadow-cyan-950/50 [transform-style:preserve-3d] ${
          isHovered ? "transition-transform duration-75 ease-out" : "transition-transform duration-500 ease-out"
        }`}
      >
        {/* Animated 3D Glow Sheen */}
        <div
          className="absolute -inset-[2px] rounded-3xl sm:rounded-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-60 blur-md group-hover:opacity-90 transition-opacity animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Inner Card Container */}
        <div className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden bg-zinc-950 border border-white/10 z-10">
          {/* Cybernetic Corner Accents */}
          <span className="absolute top-3 left-3 z-30 font-mono text-[10px] text-cyan-400/90 tracking-widest pointer-events-none">
            [SYS_CORE: 0xNAVEEN]
          </span>
          <span className="absolute top-3 right-3 z-30 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>

          {/* Portrait Image */}
          <div className="relative w-full aspect-[3/3.8] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <Image
              src="/naveen-kumar.jpg"
              alt="Naveen Kumar - Software Consultant & AI Engineer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105 brightness-100 contrast-105"
            />

            {/* Holographic 3D Grid Overlay */}
            <div className="absolute inset-0 bg-neural-grid opacity-20 pointer-events-none" />

            {/* Laser Scanning Line */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-90 pointer-events-none transition-opacity"
              style={{
                animation: "scanline 3s linear infinite",
              }}
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

            {/* 3D Elevated Nameplate (Floats in 3D Space) */}
            <div
              className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="glass-panel px-4 py-2.5 rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight">
                      Naveen Kumar P
                    </h3>
                    <p className="font-mono text-[11px] text-cyan-400 tracking-wider">
                      SOFTWARE CONSULTANT &amp; FULL-STACK
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Sparkles
                      className="w-4 h-4 animate-spin"
                      style={{ animationDuration: "8s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Floating 3D Orbital Satellites Focused on Skills */}
        {/* 🛰️ Orbital 1: Top Left - React 19 & Next.js 15 */}
        <div
          className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/50 shadow-xl shadow-cyan-950/40 font-mono text-[11px] text-cyan-200 animate-float-gentle"
          style={{ animationDuration: "5s", transform: "translateZ(40px)" }}
        >
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>React 19 &amp; Next.js 16 (Lead)</span>
        </div>

        {/* 🛰️ Orbital 2: Top Right - Generative AI Prompt Architect */}
        <div
          className="hidden sm:flex absolute -top-5 -right-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/50 shadow-xl shadow-amber-950/40 font-mono text-[11px] text-amber-200 animate-float-gentle"
          style={{
            animationDuration: "6s",
            animationDelay: "-2s",
            transform: "translateZ(45px)",
          }}
        >
          <Brain className="w-3.5 h-3.5 text-amber-400" />
          <span>AI Prompt Workflows (Zenmarks)</span>
        </div>

        {/* 🛰️ Orbital 3: Bottom Left - Node.js & REST APIs */}
        <div
          className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/50 shadow-xl shadow-emerald-950/40 font-mono text-[11px] text-emerald-200 animate-float-gentle"
          style={{
            animationDuration: "7s",
            animationDelay: "-4s",
            transform: "translateZ(35px)",
          }}
        >
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Node.js, Express &amp; MySQL</span>
        </div>

        {/* 🛰️ Orbital 4: Bottom Right - Virdhi Tech Lab Consultant */}
        <div
          className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-violet-500/50 shadow-xl shadow-violet-950/40 font-mono text-[11px] text-violet-200 animate-float-gentle"
          style={{
            animationDuration: "5.5s",
            animationDelay: "-1s",
            transform: "translateZ(40px)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Consultant @ Virdhi Tech Lab</span>
        </div>
      </div>
    </div>
  );
}
