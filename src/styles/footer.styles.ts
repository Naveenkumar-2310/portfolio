/**
 * Style tokens and semantic class configurations for Footer Component
 * Location: src/styles/footer.styles.ts
 */

export const footerStyles = {
  footer:
    "relative border-t border-white/10 bg-black/60 backdrop-blur-2xl py-10 sm:py-14 pb-24 sm:pb-14 px-4 sm:px-8 md:px-14 lg:px-20 w-full z-10",
  container:
    "w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6",
  brandCol:
    "space-y-1.5 text-center md:text-left flex flex-col items-center md:items-start",
  titleRow:
    "flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2.5",
  name: "font-display text-sm sm:text-base font-bold text-white tracking-wide whitespace-nowrap",
  role: "font-mono text-[11px] sm:text-xs text-zinc-400 text-center sm:text-left",
  copyright:
    "font-mono text-[11px] sm:text-xs text-zinc-500 max-w-md leading-relaxed text-center md:text-left",
  timeBadge:
    "flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-white/10 font-mono text-[11px] sm:text-xs text-zinc-400 shadow-inner",
  socialsRow:
    "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
  socialButton:
    "p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-colors",
  backToTopButton:
    "p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/30 text-cyan-300 transition-colors ml-1 sm:ml-2 shadow-lg shadow-cyan-500/20 cursor-pointer",
};

