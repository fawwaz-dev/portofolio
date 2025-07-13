"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  // Optimize canvas resize with useCallback
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Optimize animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid properties
    const gridSize = 50;
    const time = timeRef.current;

    // Set grid style
    ctx.strokeStyle = `rgba(0, 255, 136, ${
      0.1 + Math.sin(time * 0.01) * 0.05
    })`;
    ctx.lineWidth = 1;

    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Add some glowing intersections (reduced frequency for performance)
    ctx.fillStyle = `rgba(0, 255, 136, ${0.3 + Math.sin(time * 0.02) * 0.2})`;
    for (let x = 0; x <= canvas.width; x += gridSize * 6) {
      for (let y = 0; y <= canvas.height; y += gridSize * 6) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    timeRef.current++;
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Start animation with a delay to avoid blocking initial render
    const timer = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
    />
  );
}
