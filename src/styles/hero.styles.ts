/**
 * Style tokens and semantic classes for Hero Section
 * Location: src/styles/hero.styles.ts
 */

export const heroStyles = {
  section:
    "relative min-h-[96vh] flex flex-col justify-between pt-32 pb-8 overflow-hidden z-10 w-full perspective-[1200px]",
  container:
    "w-full max-w-[1700px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 flex-1 flex flex-col justify-center",
  statusRow: "flex flex-wrap items-center gap-3 mb-8",
  statusPillConsultant:
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 shadow-lg shadow-cyan-500/10",
  statusPillTech:
    "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-400 border border-white/10",
  statusPillLocation:
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs font-mono text-zinc-400 border border-white/5",
  grid: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",
  leftColumn: "lg:col-span-7 space-y-6",
  nameHeading:
    "font-display text-[clamp(1.85rem,5.2vw,4.75rem)] lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white whitespace-nowrap leading-none overflow-visible select-none inline-flex items-center",
  roleSubtitle:
    "font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-200 leading-tight",
  bioParagraph:
    "max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-sans font-normal",
  ctaRow: "pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4",
  primaryCta:
    "group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer",
  secondaryCta:
    "inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-zinc-200 glass-panel hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer",
  stageModeCta:
    "inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer",
  githubLink:
    "p-3.5 rounded-full glass-panel hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 shrink-0",
  rightColumn: "lg:col-span-5 flex justify-center",
};

