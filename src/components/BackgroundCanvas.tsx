"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Neural Synaptic Node
    interface SynapseNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      energy: number; // 0 to 1, increases when mouse gets close
      colorType: number;
      symbol?: string;
    }

    const thinkingSymbols = ["λ", "∇", "Σ", "∫", "Ψ", "Δ", "01", "ƒ", "Ω", "π", "⨁", "∂"];
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 75);
    const nodes: SynapseNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 2 + 1.2,
        radius: 2,
        energy: Math.random() * 0.2,
        colorType: Math.floor(Math.random() * 3),
        symbol: Math.random() > 0.65 ? thinkingSymbols[Math.floor(Math.random() * thinkingSymbols.length)] : undefined,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Wrap around boundaries smoothly
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Proximity to mouse triggers neural activation / thinking firing
        const dxMouse = mouseX - node.x;
        const dyMouse = mouseY - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 180) {
          node.energy = Math.min(node.energy + 0.08, 1);
        } else {
          node.energy = Math.max(node.energy - 0.012, 0.08);
        }

        // Pulse effect
        const pulse = Math.sin(time * 2 + i) * 0.5 + 0.5;
        node.radius = node.baseRadius + node.energy * 2.5 + pulse * 0.6;

        // Color based on neural state
        let nodeColor = "rgba(56, 189, 248, "; // cyan
        if (node.colorType === 1) nodeColor = "rgba(129, 140, 248, "; // indigo
        if (node.colorType === 2) nodeColor = "rgba(167, 139, 250, "; // violet

        const alpha = Math.min(0.2 + node.energy * 0.7 + pulse * 0.15, 0.95);

        // Draw glowing outer aura if energized
        if (node.energy > 0.25) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `${nodeColor}${alpha * 0.25})`;
          ctx.fill();
        }

        // Draw core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${alpha})`;
        ctx.fill();

        // Draw thinking symbol if present
        if (node.symbol && node.energy > 0.2) {
          ctx.font = "10px JetBrains Mono, monospace";
          ctx.fillStyle = `rgba(255, 255, 255, ${node.energy * 0.6})`;
          ctx.fillText(node.symbol, node.x + 8, node.y - 8);
        }

        // Connect nearby nodes to form synaptic pathways
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const combinedEnergy = (node.energy + other.energy) * 0.5;
            const lineAlpha = (1 - dist / maxDist) * (0.08 + combinedEnergy * 0.45);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);

            // Subtle curved synaptic impulse
            const midX = (node.x + other.x) / 2 + Math.sin(time + i) * 4;
            const midY = (node.y + other.y) / 2 + Math.cos(time + j) * 4;
            ctx.quadraticCurveTo(midX, midY, other.x, other.y);

            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = combinedEnergy > 0.4 ? 1.2 : 0.6;
            ctx.stroke();

            // Synaptic action potential (traveling spark)
            if (combinedEnergy > 0.35 && Math.random() > 0.96) {
              const sparkProgress = (time * 3 + i) % 1;
              const sparkX = node.x + (other.x - node.x) * sparkProgress;
              const sparkY = node.y + (other.y - node.y) * sparkProgress;

              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-screen h-screen opacity-40">
      {/* Aurora Ambient Glows */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/06 blur-[160px] animate-synapse" 
      />
      <div 
        className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-violet-600/06 blur-[170px] animate-synapse" 
        style={{ animationDelay: "-3s" }}
      />
      <div 
        className="absolute -bottom-[20%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-emerald-600/05 blur-[150px] animate-synapse" 
        style={{ animationDelay: "-6s" }}
      />

      {/* Full-width fine grid pattern */}
      <div className="absolute inset-0 bg-neural-grid opacity-70 w-full h-full" />
      <div className="absolute inset-0 bg-dot-matrix opacity-40 w-full h-full" />

      {/* Interactive Synapse Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
