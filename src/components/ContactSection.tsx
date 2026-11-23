"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Terminal,
  Sparkles,
  Download,
  ExternalLink,
} from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, TERMINAL_COMMANDS } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State with Anti-Bot Protection
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Bot trap: invisible to humans
  });
  const mountTimeRef = useRef<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ name: string; email: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ cmd: string; res: string }>
  >([
    {
      cmd: "init",
      res: "Naveen Kumar Interactive Shell v2.4 (Thinking Engine Active). Type 'help' for commands.",
    },
  ]);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // 1. Anti-Bot Defense: If the hidden honeypot field is filled, it's a scraper bot
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      setIsSubmitting(false);
      setSuccessInfo({
        name: formData.name || "Inquirer",
        email: formData.email || "visitor@domain.com",
      });
      setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
      return;
    }

    const elapsedMs = mountTimeRef.current > 0 ? Date.now() - mountTimeRef.current : 3000;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          honeypot: formData.honeypot,
          elapsedMs,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to transmit message.");
      }

      // Success Confirmation & Reset Values
      setSuccessInfo({ name: formData.name, email: formData.email });
      setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.65 },
        colors: ["#38bdf8", "#818cf8", "#34d399", "#f59e0b", "#f43f5e"],
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to transmit inquiry.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }

    const response =
      TERMINAL_COMMANDS[cleanCmd] ||
      `Unknown directive '${cleanCmd}'. Type 'help' for command registry.`;

    setTerminalHistory((prev) => [...prev, { cmd: cleanCmd, res: response }]);
    setTerminalInput("");
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-28 px-4 sm:px-8 md:px-14 lg:px-20 w-full max-w-[1700px] mx-auto z-10"
    >
      <SectionHeader
        badge={{
          icon: Mail,
          text: "Direct Transmission",
        }}
        title={
          <>
            Initiate <span className="text-gradient-aurora">Consultation</span>
          </>
        }
        description="Available for software consultancy, full-stack architectural design, and generative AI prompt engineering initiatives."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
          {/* Email Card */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="overflow-hidden min-w-0 flex-1">
                <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider truncate">
                  Direct Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-xs sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="overflow-hidden min-w-0 flex-1">
                <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider truncate">
                  Call / WhatsApp
                </p>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-mono text-xs sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
              title="Copy Phone Number"
            >
              {copiedPhone ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          {/* Location & LinkedIn Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="glass-panel p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/10 flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase">
                  Location
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-white">
                  Chennai, TN
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-3 sm:gap-3.5 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="overflow-hidden min-w-0">
                <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase">
                  LinkedIn
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Connect <ExternalLink className="w-3.5 h-3.5" />
                </p>
              </div>
            </a>
          </div>

          {/* GitHub Repository Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="overflow-hidden min-w-0 flex-1">
                <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>GitHub Profile</span>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">100% Solo Project</span>
                </p>
                <p className="font-mono text-xs sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate">
                  github.com/Naveenkumar-2310
                </p>
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/20 text-zinc-400 group-hover:text-cyan-300 transition-colors shrink-0">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>

          {/* Download Resume Card */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                Download Verified Resume
              </h4>
              <p className="font-mono text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Comprehensive PDF with project details
              </p>
            </div>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Naveen_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-white flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Get PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Terminal & Form (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Interactive Shell Terminal */}
          <div className="glass-panel rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-zinc-900/90 border-b border-white/5 flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                <span className="truncate">naveen-kumar@thinking-shell:~</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 shrink-0 ml-2">
                type &apos;help&apos;
              </span>
            </div>

            <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs max-h-48 overflow-y-auto space-y-2.5 bg-black/70">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-zinc-500">&gt;</span>
                    <span>{item.cmd}</span>
                  </div>
                  <div className="text-zinc-300 pl-3.5 border-l border-zinc-800 leading-relaxed break-words">
                    {item.res}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleTerminalSubmit}
              className="p-2.5 sm:p-3 bg-zinc-900/70 border-t border-white/5 flex gap-2"
            >
              <span className="text-xs font-mono text-cyan-400 pl-1.5 self-center">
                &gt;
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type command ('thinking', 'skills', 'projects', 'hire')..."
                className="w-full bg-transparent text-[11px] sm:text-xs font-mono text-white placeholder-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[11px] sm:text-xs font-mono px-3 sm:px-3.5 py-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white transition-colors shrink-0"
              >
                exec
              </button>
            </form>
          </div>

          {/* Direct Inquiry Form with Anti-Bot Protection */}
          <div className="glass-panel p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden">
            {successInfo ? (
              <div className="py-6 sm:py-8 px-2 sm:px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold block">
                    ✓ Transmitted Successfully
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Message Sent to Naveen Kumar P!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{successInfo.name}</strong>. Your consultation query has been logged and forwarded to <strong className="text-cyan-400">pnaveenkumar.prasanna@gmail.com</strong>.
                  </p>
                  <p className="font-mono text-[11px] sm:text-xs text-zinc-400">
                    I will review your inquiry and reach back to <span className="text-emerald-300">{successInfo.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setSuccessInfo(null)}
                    className="px-5 sm:px-6 py-2.5 rounded-full font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent("Consultation Inquiry - Naveen Kumar P")}&body=${encodeURIComponent("Hi Naveen,\n\nI would like to discuss an engineering consultation project:")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 rounded-full font-mono text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Gmail (Web)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 sm:space-y-5">
                {/* Anti-Bot Honeypot: Real humans never see or fill this. Bots blindly fill all inputs. */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                    height: 0,
                    width: 0,
                    overflow: "hidden",
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="company_website_verify">Leave empty</label>
                  <input
                    type="text"
                    id="company_website_verify"
                    name="company_website_verify"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 font-mono text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="elena@enterprise.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 / International number"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2">
                    Project Scope / Technical Consultation Needs <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your engineering project, timeline, or consultation objectives..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-mono font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin text-cyan-200" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Email Options (Eliminates unwanted Outlook launches) */}
                <div className="pt-3 border-t border-white/5 space-y-2 text-center">
                  <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400">
                    Prefer direct email without opening Outlook?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent("Consultation Inquiry - Naveen Kumar P")}&body=${encodeURIComponent("Hi Naveen,\n\nI would like to discuss an engineering consultation project:\n")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 sm:px-3 py-1.5 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors flex items-center gap-1.5"
                      title="Compose in Gmail Web in your browser (No Outlook application required)"
                    >
                      <span>Compose in Gmail (Browser)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                      className="px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Copy email address to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-300">Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Consultation%20Inquiry&body=Hi%20Naveen,`}
                      className="px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5 hover:text-zinc-200 hover:bg-white/10 transition-colors text-[10px] sm:text-[11px]"
                      title="Open Microsoft Outlook desktop application"
                    >
                      <span>Outlook</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
