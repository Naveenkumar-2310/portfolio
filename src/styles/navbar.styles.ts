/**
 * Style tokens and semantic classes for Navbar
 * Location: src/styles/navbar.styles.ts
 */

export const navbarStyles = {
  header:
    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-4 md:pt-6 pointer-events-none",
  container:
    "w-full max-w-[1700px] mx-auto flex items-center justify-between",
  brandButton:
    "pointer-events-auto flex items-center gap-3 group cursor-pointer text-left glass-panel px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/40 transition-all",
  brandMonogram:
    "relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 group-hover:scale-105 transition-transform",
  desktopNav:
    "pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 shadow-2xl backdrop-blur-2xl",
  navPillBase:
    "px-3 py-1 rounded-full text-xs font-medium font-mono transition-all relative cursor-pointer",
  navPillActive: "text-white font-semibold bg-white/10 shadow-inner",
  navPillInactive: "text-zinc-400 hover:text-zinc-200 hover:bg-white/5",
  deckLauncherButton:
    "pointer-events-auto hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-500/20 shadow-md shadow-cyan-500/20 transition-all cursor-pointer",
  soundToggleButton:
    "pointer-events-auto p-2 rounded-full glass-panel border border-white/10 hover:border-cyan-400/40 text-zinc-400 hover:text-white transition-all cursor-pointer",
  mobileMenuToggle:
    "pointer-events-auto lg:hidden p-2 rounded-full glass-panel border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer",
  mobileMenu:
    "pointer-events-auto lg:hidden mt-3 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200",
  mobileDrawer:
    "fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300 select-none",
};

