/**
 * Style tokens and semantic class configurations for Contact Section
 * Location: src/styles/contact.styles.ts
 */

export const contactSectionStyles = {
  section:
    "relative py-16 sm:py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10",
  grid: "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start",
  leftColumn: "lg:col-span-5 space-y-3.5 sm:space-y-4",
  rightColumn: "lg:col-span-7 space-y-4 sm:space-y-6",
  infoCard:
    "glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-3",
  iconWrapperCyan:
    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0",
  iconWrapperEmerald:
    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0",
  copyButton:
    "p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0 cursor-pointer",
  terminalShell:
    "glass-panel rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl cyber-scanline",
  terminalHeader:
    "px-3.5 py-2.5 sm:px-5 sm:py-3 bg-zinc-900/90 border-b border-white/5 flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400",
  terminalBody:
    "p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs max-h-48 overflow-y-auto space-y-2.5 bg-black/70",
  formShell:
    "glass-panel p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden",
  inputField:
    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors",
  inputLabel:
    "block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2",
  submitButton:
    "w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-mono font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 cursor-pointer",
};
