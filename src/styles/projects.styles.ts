/**
 * Style tokens and semantic class configurations for Projects Section & Blueprint Modal
 * Location: src/styles/projects.styles.ts
 */

export const projectsSectionStyles = {
  section:
    "relative py-16 sm:py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10 perspective-[1400px]",
  grid:
    "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 [transform-style:preserve-3d]",
  card:
    "group relative bg-[#0e1018]/95 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/20 hover:border-cyan-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-cyan-950/50 hover:-translate-y-2 hover:rotate-1 [transform-style:preserve-3d]",
  borderBeam:
    "absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden z-0",
  borderBeamInner:
    "absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#38bdf8_340deg,#818cf8_360deg)] animate-[borderBeamRotate_4s_linear_infinite]",
  borderBeamMask:
    "absolute inset-[1px] rounded-[inherit] bg-[#0e1018]/95",
  cardHeader:
    "flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6",
  iconWrapper:
    "w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-lg",
  categoryBadge:
    "font-mono text-[10px] sm:text-xs uppercase tracking-widest text-cyan-400 block font-semibold truncate",
  cardTitle:
    "font-display text-lg sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5 sm:gap-2 leading-snug",
  roleBadge:
    "self-start sm:self-auto font-mono text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0 font-medium",
  metricsStrip:
    "grid grid-cols-3 gap-1.5 sm:gap-3 py-3 sm:py-4 mb-4 sm:mb-5 border-y border-white/10 text-center font-mono bg-white/[0.02] rounded-xl sm:rounded-2xl",
  techTag:
    "font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-colors",
  githubButton:
    "w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold text-white bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400/50 transition-all shadow-md group/btn shrink-0",

  // Blueprint Modal Styles
  modalBackdrop:
    "fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200",
  modalShell:
    "relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-[#0d1017] rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/20 shadow-2xl z-[10000] overflow-hidden",
  modalHeader:
    "p-4 sm:p-6 sm:p-8 pb-3 sm:pb-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#0d1017]/95 backdrop-blur-md",
  modalCloseButton:
    "p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2 sm:ml-4",
  modalBody: "p-4 sm:p-6 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6 flex-1",
  modalFooter:
    "p-3.5 sm:p-5 sm:p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs gap-3 shrink-0 bg-[#0d1017]/95",
};

