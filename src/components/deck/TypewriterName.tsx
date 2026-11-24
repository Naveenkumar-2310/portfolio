"use client";

import React, { useState, useEffect } from "react";

interface TypewriterNameProps {
  as?: "h1" | "h2" | "span";
  className?: string;
  speed?: number;
  delay?: number;
}

/**
 * High-velocity animated typewriter component for Naveen Kumar P
 * - Starts with letter 'N' on initial render so the screen NEVER appears blank or hanging.
 * - Fast 30ms typing velocity for instantaneous, responsive keynote impact (<0.4s total).
 * - Strictly preserves AGENTS.md Rule 1 (Single Line, no wrap, whitespace-nowrap).
 */
export default function TypewriterName({
  as: Component = "h2",
  className = "font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap inline-flex items-center select-none",
  speed = 30,
  delay = 0,
}: TypewriterNameProps) {
  const firstName = "Naveen";
  const lastName = "Kumar P";
  const fullLength = firstName.length + 1 + lastName.length; // 6 + 1 + 7 = 14

  // Initialized to 1 so the initial frame instantly shows 'N' + caret, eliminating any blank-space delay
  const [typedCount, setTypedCount] = useState(1);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const startTyping = () => {
      intervalId = setInterval(() => {
        setTypedCount((prev) => {
          if (prev >= fullLength) {
            if (intervalId) clearInterval(intervalId);
            return fullLength;
          }
          return prev + 1;
        });
      }, speed);
    };

    if (delay > 0) {
      const timeoutId = setTimeout(startTyping, delay);
      return () => {
        clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
      };
    } else {
      startTyping();
      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, [fullLength, speed, delay]);

  const displayedFirst =
    typedCount <= 6 ? firstName.slice(0, typedCount) : firstName;
  const hasSpace = typedCount >= 7;
  const displayedLast =
    typedCount > 7 ? lastName.slice(0, typedCount - 7) : "";
  const isTyping = typedCount < fullLength;

  return (
    <Component className={className}>
      <span>{displayedFirst}</span>
      {hasSpace && <span>&nbsp;</span>}
      {displayedLast && (
        <span className="text-gradient-aurora">{displayedLast}</span>
      )}
      <span
        className={`inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.75em] bg-cyan-400 ml-1.5 sm:ml-2 align-middle ${
          isTyping ? "animate-pulse" : "animate-pulse opacity-75"
        }`}
        aria-hidden="true"
      />
    </Component>
  );
}
