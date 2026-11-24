"use client";

import React, { useState, useEffect } from "react";

interface TypewriterNameProps {
  className?: string;
  speed?: number;
  delay?: number;
}

/**
 * Animated typewriter component for Naveen Kumar P
 * Adheres strictly to AGENTS.md Rule 1 (Single Line, no wrap, whitespace-nowrap)
 */
export default function TypewriterName({
  className = "font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap inline-flex items-center",
  speed = 65,
  delay = 120,
}: TypewriterNameProps) {
  const firstName = "Naveen";
  const lastName = "Kumar P";
  const fullLength = firstName.length + 1 + lastName.length; // 6 + 1 + 7 = 14

  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setTypedCount((prev) => {
          if (prev >= fullLength) {
            if (intervalId) clearInterval(intervalId);
            return fullLength;
          }
          return prev + 1;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fullLength, speed, delay]);

  const displayedFirst =
    typedCount <= 6 ? firstName.slice(0, typedCount) : firstName;
  const hasSpace = typedCount >= 7;
  const displayedLast =
    typedCount > 7 ? lastName.slice(0, typedCount - 7) : "";
  const isTyping = typedCount < fullLength;

  return (
    <h2 className={className}>
      <span>{displayedFirst}</span>
      {hasSpace && <span>&nbsp;</span>}
      {displayedLast && (
        <span className="text-gradient-aurora">{displayedLast}</span>
      )}
      <span
        className={`inline-block w-[3px] sm:w-[4px] h-[0.75em] bg-cyan-400 ml-1.5 align-middle ${
          isTyping ? "animate-pulse" : "animate-pulse opacity-75"
        }`}
        aria-hidden="true"
      />
    </h2>
  );
}
