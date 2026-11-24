/**
 * Style tokens and semantic classes for 3D Skills Showcase
 * Location: src/styles/skills.styles.ts
 */

export const skillsShowcaseStyles = {
  section:
    "relative py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10 perspective-[1400px]",
  categoryTabsContainer:
    "flex flex-wrap gap-3 mb-12 justify-center lg:justify-start",
  categoryTabBase:
    "flex items-center gap-2.5 px-5 py-3 rounded-2xl font-mono text-xs font-semibold transition-all duration-300 cursor-pointer shadow-lg",
  skillsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6",
  skillCard:
    "glass-panel p-6 rounded-3xl border transition-all duration-500 flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 [transform-style:preserve-3d]",
  skillLevelBar:
    "h-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-700",
};
