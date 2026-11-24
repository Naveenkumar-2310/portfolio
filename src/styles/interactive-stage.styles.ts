/**
 * Style tokens and semantic class configurations for Interactive Deck Mode
 * Location: src/styles/interactive-stage.styles.ts
 */

export const stageModalStyles = {
  backdrop:
    "fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-3xl p-0 sm:p-4 md:p-6 animate-in fade-in duration-300 select-none",
  shell:
    "relative w-full max-w-[1550px] h-[100dvh] sm:h-[92vh] bg-[#090b12]/95 rounded-none sm:rounded-3xl md:rounded-4xl border-0 sm:border border-cyan-500/30 shadow-[0_0_80px_rgba(56,189,248,0.25)] overflow-hidden flex flex-col justify-between",
  ambientGlowCyan:
    "absolute -top-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none",
  ambientGlowViolet:
    "absolute -bottom-32 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none",
  ambientGlowCenter:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none",
  gridOverlay: "absolute inset-0 bg-neural-grid opacity-25 pointer-events-none",
  header:
    "relative z-20 px-3.5 sm:px-6 py-2.5 sm:py-3.5 bg-zinc-950/95 border-b border-white/10 flex items-center justify-between gap-2 sm:gap-4 shrink-0 backdrop-blur-xl",
  headerTabStrip:
    "hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5 font-mono text-xs shrink-0",
  mobileTabStrip:
    "md:hidden relative z-10 w-full px-2.5 py-2 bg-zinc-950/95 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth shrink-0 touch-pan-x",
  tabButtonBase:
    "flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer",
  tabButtonActive: (color: string) =>
    `bg-gradient-to-r ${color} text-white shadow-md shadow-cyan-500/30 scale-105`,
  tabButtonInactive: "text-zinc-400 hover:text-white hover:bg-white/10",
  closeButton:
    "p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 text-zinc-300 hover:text-rose-300 hover:border-rose-500/30 border border-transparent transition-colors cursor-pointer shrink-0",
  contentContainer:
    "relative z-10 flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 py-3 sm:py-6 min-h-0 flex flex-col no-scrollbar",
  contentWrapper: "w-full max-w-5xl mx-auto my-auto py-2 sm:py-4",
  footer:
    "relative z-20 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-zinc-950/95 border-t border-white/10 flex items-center justify-between shrink-0 backdrop-blur-xl",
  navButtonPrev:
    "flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-xs font-semibold bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer shrink-0",
  navButtonNext:
    "flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all cursor-pointer shrink-0",
  progressDotBase:
    "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
  progressDotActive: "w-5 sm:w-10 bg-cyan-400 shadow-sm shadow-cyan-400/50",
  progressDotInactive: "w-1.5 sm:w-2 bg-white/20 hover:bg-white/40",
  chapterBadge: (colorClasses: string) =>
    `inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold ${colorClasses}`,
};

export const statCardThemes = {
  amber: {
    container:
      "p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-amber-900/10 to-black border border-amber-500/40 shadow-lg shadow-amber-950/30",
    label: "font-mono text-[10px] text-amber-400 uppercase tracking-wider block font-bold",
    value: "font-display text-2xl font-black text-amber-300",
    subtext: "font-sans text-[11px] text-amber-200/80 block mt-0.5",
  },
  cyan: {
    container:
      "p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-900/10 to-black border border-cyan-500/40 shadow-lg shadow-cyan-950/30",
    label: "font-mono text-[10px] text-cyan-400 uppercase tracking-wider block font-bold",
    value: "font-display text-2xl font-black text-cyan-300",
    subtext: "font-sans text-[11px] text-cyan-200/80 block mt-0.5",
  },
  emerald: {
    container:
      "p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-teal-900/10 to-black border border-emerald-500/40 shadow-lg shadow-emerald-950/30",
    label: "font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold",
    value: "font-display text-2xl font-black text-emerald-300",
    subtext: "font-sans text-[11px] text-emerald-200/80 block mt-0.5",
  },
};

export const thinkingCardThemes = {
  cyan: {
    container:
      "p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-cyan-950/35 via-zinc-950 to-black border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-950/20",
    badge:
      "w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-3 font-mono font-bold text-sm shadow-md shadow-cyan-500/30",
    title: "font-display text-lg font-bold text-cyan-200 mb-1.5",
    tag: "inline-block mt-3 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 font-mono text-[10px] text-cyan-300",
  },
  blue: {
    container:
      "p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-950/35 via-zinc-950 to-black border border-blue-500/40 hover:border-blue-400 transition-all shadow-lg shadow-blue-950/20",
    badge:
      "w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 mb-3 font-mono font-bold text-sm shadow-md shadow-blue-500/30",
    title: "font-display text-lg font-bold text-blue-200 mb-1.5",
    tag: "inline-block mt-3 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 font-mono text-[10px] text-blue-300",
  },
  amber: {
    container:
      "p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-950/35 via-zinc-950 to-black border border-amber-500/40 hover:border-amber-400 transition-all shadow-lg shadow-amber-950/20",
    badge:
      "w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 mb-3 font-mono font-bold text-sm shadow-md shadow-amber-500/30",
    title: "font-display text-lg font-bold text-amber-200 mb-1.5",
    tag: "inline-block mt-3 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono text-[10px] text-amber-300",
  },
  emerald: {
    container:
      "p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-950/35 via-zinc-950 to-black border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-lg shadow-emerald-950/20",
    badge:
      "w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-3 font-mono font-bold text-sm shadow-md shadow-emerald-500/30",
    title: "font-display text-lg font-bold text-emerald-200 mb-1.5",
    tag: "inline-block mt-3 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-300",
  },
};

export const stageProjectThemes = {
  solo: "sm:col-span-2 bg-gradient-to-br from-emerald-950/60 via-cyan-950/35 to-black border-2 border-emerald-400/80 shadow-2xl shadow-emerald-950/50 hover:border-emerald-300",
  zenmarks: "bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-black border border-cyan-500/40 hover:border-cyan-400",
  zensecure: "bg-gradient-to-br from-teal-950/40 via-emerald-950/20 to-black border border-teal-500/40 hover:border-teal-400",
  parenting: "bg-gradient-to-br from-purple-950/40 via-pink-950/20 to-black border border-purple-500/40 hover:border-purple-400",
  virdhitechofficial: "bg-gradient-to-br from-indigo-950/40 via-zinc-950 to-black border border-indigo-500/40 hover:border-indigo-400",
};

