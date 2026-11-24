"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

import { 
  Sparkles, 
  ArrowUpRight, 
  X, 
  Code2, 
  ShieldCheck, 
  BookOpen, 
  Building2,
  CheckCircle2,
  ExternalLink,
  CalendarCheck 
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PROJECTS, Project } from "@/data/portfolio-data";
import { sound } from "@/lib/sound";
import { projectsSectionStyles } from "@/styles/projects.styles";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Prevent background scroll and page interruption when modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "dailytracker":
        return <CalendarCheck className="w-6 h-6 text-emerald-400" />;
      case "zenmarks":
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case "zensecure":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case "parenting":
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      default:
        return <Building2 className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className={projectsSectionStyles.section}>
      <SectionHeader
        badge={{
          icon: Code2,
          text: "3D Spatial Portfolio",
        }}
        title={
          <>
            Production <span className="text-gradient-aurora">Systems</span> &amp; Architectures
          </>
        }
        description="Proven enterprise applications engineered with modular React/Next.js systems, high-speed Node.js backends, and structured AI prompt workflows."
      />

      {/* Projects Grid: 3D Depth Perspective Cards */}
      <div className={projectsSectionStyles.grid}>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            suppressHydrationWarning
            onClick={() => {
              sound.click();
              setSelectedProject(project);
            }}
            style={{
              transform: "translateZ(10px)",
            }}
            className={projectsSectionStyles.card}
          >
            {/* Ambient Background Glow */}
            <div
              className={`absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br ${project.accentColor} opacity-15 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`}
            />

            {/* Dynamic Traveling Border Beam on Hover */}
            <div className={projectsSectionStyles.borderBeam}>
              <div className={projectsSectionStyles.borderBeamInner} />
              <div className={projectsSectionStyles.borderBeamMask} />
            </div>

            <div>
              {/* Header Info (Elevated in 3D) */}
              <div 
                className={projectsSectionStyles.cardHeader}
                style={{ transform: "translateZ(35px)" }}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className={projectsSectionStyles.iconWrapper}>
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className={projectsSectionStyles.categoryBadge}>
                      {project.category}
                    </span>
                    <h3 className={projectsSectionStyles.cardTitle}>
                      <span className="truncate">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 shrink-0" />
                    </h3>
                  </div>
                </div>

                <span className={projectsSectionStyles.roleBadge}>
                  {project.role}
                </span>
              </div>

              <p 
                className="font-mono text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4"
                style={{ transform: "translateZ(25px)" }}
              >
                {project.subtitle}
              </p>

              <p 
                className="font-sans text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed mb-5 sm:mb-6"
                style={{ transform: "translateZ(20px)" }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <div 
                className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 text-xs sm:text-sm text-zinc-400 font-sans"
                style={{ transform: "translateZ(25px)" }}
              >
                {project.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Metrics Strip */}
              {project.metrics && (
                <div 
                  className={projectsSectionStyles.metricsStrip}
                  style={{ transform: "translateZ(20px)" }}
                >
                  {project.metrics.map((m, i) => (
                    <div key={i} className="overflow-hidden">
                      <div className="text-xs sm:text-base font-bold text-white truncate">{m.value}</div>
                      <div className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Tags & Action Links */}
              <div 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={projectsSectionStyles.techTag}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={projectsSectionStyles.githubButton}
                    title="Inspect Source Code on GitHub"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-white group-hover/btn:text-cyan-300 transition-colors" />
                    <span className="text-zinc-200 group-hover/btn:text-white">GitHub Repo</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/btn:text-cyan-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Deep Dive rendered directly on document.body to escape perspective stacking context */}
      {mounted && selectedProject && createPortal(
        <div
          className={projectsSectionStyles.modalBackdrop}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={projectsSectionStyles.modalShell}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pinned Modal Header */}
            <div className={projectsSectionStyles.modalHeader}>
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {getProjectIcon(selectedProject.id)}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider block font-semibold truncate">
                    {selectedProject.category} • {selectedProject.role}
                  </span>
                  <h3 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-tight truncate">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className={projectsSectionStyles.modalCloseButton}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className={projectsSectionStyles.modalBody}>
              <p className="font-mono text-xs sm:text-sm text-cyan-300/90 bg-cyan-950/20 p-3 rounded-xl border border-cyan-500/20">
                {selectedProject.subtitle}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 font-sans text-xs sm:text-sm lg:text-base text-zinc-200 leading-relaxed">
                {selectedProject.longDescription}
              </div>

              {/* Modal Metrics */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 py-3 sm:py-4 border-y border-white/10 text-center font-mono bg-white/[0.02] rounded-xl sm:rounded-2xl">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="overflow-hidden">
                      <div className="text-xs sm:text-base lg:text-lg font-bold text-white truncate">{m.value}</div>
                      <div className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Deliverables */}
              <div>
                <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 mb-2.5 sm:mb-3 font-semibold">
                  Key Architectural Deliverables &amp; Impact
                </h4>
                <div className="space-y-2.5 sm:space-y-3 font-sans">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 mb-2 font-semibold">
                  Frameworks &amp; Tooling
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pinned Modal Footer */}
            <div className={projectsSectionStyles.modalFooter}>
              <span className="text-zinc-400 text-center sm:text-left text-[11px] sm:text-xs">
                Architected by Naveen Kumar P
              </span>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <GitHubIcon className="w-4 h-4 text-white" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 sm:flex-initial px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-center"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
