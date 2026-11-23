"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.classList.contains("interactive-hover")
        );
        setIsPointer(isInteractive);
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => setIsClicking(false), 300);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId: number;
    const followMouse = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Cyber Spotlight Following Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-10 rounded-full transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${trailingPos.x - 190}px, ${trailingPos.y - 190}px, 0)`,
          width: "380px",
          height: "380px",
          background: isPointer
            ? "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(129, 140, 248, 0.06) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(129, 140, 248, 0.03) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Outer interactive follower ring with click pulse */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${trailingPos.x - 22}px, ${trailingPos.y - 22}px, 0) scale(${
            isClicking ? 0.75 : isPointer ? 1.7 : 1
          })`,
          width: "44px",
          height: "44px",
          border: isPointer
            ? "1.5px solid rgba(56, 189, 248, 0.7)"
            : "1px solid rgba(56, 189, 248, 0.35)",
          backgroundColor: isPointer
            ? "rgba(56, 189, 248, 0.15)"
            : "rgba(56, 189, 248, 0.03)",
          backdropFilter: "blur(1.5px)",
          boxShadow: isPointer ? "0 0 16px rgba(56, 189, 248, 0.35)" : "none",
        }}
      />

      {/* Inner sharp precision cyber dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-0 will-change-transform"
        style={{
          transform: `translate3d(${position.x - 3.5}px, ${position.y - 3.5}px, 0) scale(${
            isClicking ? 1.5 : isPointer ? 0.6 : 1
          })`,
          width: "7px",
          height: "7px",
          backgroundColor: isPointer ? "#38bdf8" : "#ffffff",
          boxShadow: "0 0 10px #38bdf8, 0 0 20px rgba(56, 189, 248, 0.6)",
        }}
      />
    </>
  );
}

