"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";

interface TypewriterNameProps {
  as?: "h1" | "h2" | "span";
  className?: string;
  speed?: number;
  delay?: number;
}

/**
 * Interactive high-velocity animated typewriter component for Naveen Kumar P
 * - Starts typing automatically on mount.
 * - Interactive: Clicking on the name replays the typing animation anytime.
 * - Strictly preserves AGENTS.md Rule 1 (Single Line, no wrap, whitespace-nowrap).
 */
export default function TypewriterName({
  as: Component = "h2",
  className = "font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap inline-flex items-center select-none cursor-pointer group",
  speed = 28,
  delay = 0,
}: TypewriterNameProps) {
  const firstName = "Naveen";
  const lastName = "Kumar P";
  const fullLength = firstName.length + 1 + lastName.length; // 6 + 1 + 7 = 14

  const [typedCount, setTypedCount] = useState(1);
  const [replayTrigger, setReplayTrigger] = useState(0);

  const handleReplay = () => {
    sound.click();
    setTypedCount(1);
    setReplayTrigger((prev) => prev + 1);
  };

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
  }, [fullLength, speed, delay, replayTrigger]);

  const displayedFirst =
    typedCount <= 6 ? firstName.slice(0, typedCount) : firstName;
  const hasSpace = typedCount >= 7;
  const displayedLast =
    typedCount > 7 ? lastName.slice(0, typedCount - 7) : "";
  const isTyping = typedCount < fullLength;

  return (
    <Component
      onClick={handleReplay}
      className={className}
      title="Click to replay typing animation"
      aria-label="Naveen Kumar P"
    >
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
