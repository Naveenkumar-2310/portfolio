"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Clock, Mail, Phone } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { footerStyles } from "@/styles/footer.styles";

export default function Footer() {
  const [chennaiTime, setChennaiTime] = useState<string>("");
  const currentYear = 2025;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setChennaiTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        {/* Brand & Rights */}
        <div className={footerStyles.brandCol}>
          <div className={footerStyles.titleRow}>
            <span className={footerStyles.name}>
              Naveen Kumar P
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className={footerStyles.role}>
              Software Consultant • Virdhi Tech Lab
            </span>
          </div>
          <p className={footerStyles.copyright}>
            &copy; {currentYear} Naveen Kumar P. Engineered with Next.js, React 19, TypeScript &amp; Generative AI pipelines.
          </p>
        </div>

        {/* Live Chennai Time Badge */}
        <div className={footerStyles.timeBadge}>
          <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Chennai, TN, India:</span>
          <span className="text-white font-semibold font-mono">{chennaiTime || "IST"}</span>
        </div>

        {/* Socials & Back to Top */}
        <div className={footerStyles.socialsRow}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialButton}
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4 text-white" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialButton}
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className={footerStyles.socialButton}
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className={footerStyles.socialButton}
            title="Call Phone"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className={footerStyles.backToTopButton}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
