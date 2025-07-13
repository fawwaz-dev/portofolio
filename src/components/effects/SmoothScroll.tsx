"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device performance capabilities
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency <= 4;
      const hasReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setIsLowPerformance(isMobile || isLowEnd || hasReducedMotion);
    };

    checkPerformance();
    window.addEventListener("resize", checkPerformance);

    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  useEffect(() => {
    // Skip smooth scrolling on low-performance devices
    if (isLowPerformance) return;

    let lenis: LenisInstance | null = null;

    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        }) as LenisInstance;

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (error) {
        console.warn("Failed to initialize smooth scrolling:", error);
      }
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [isLowPerformance]);

  return <>{children}</>;
}
