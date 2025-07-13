"use client";

import { useEffect, useState, useCallback } from "react";

interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Optimize performance check with useCallback
  const checkPerformance = useCallback(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4;
    const hasReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setIsLowPerformance(isMobile || isLowEnd || hasReducedMotion);
  }, []);

  useEffect(() => {
    // Defer performance check to avoid blocking initial render
    const timer = setTimeout(() => {
      checkPerformance();
      setIsInitialized(true);
    }, 100);

    window.addEventListener("resize", checkPerformance);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkPerformance);
    };
  }, [checkPerformance]);

  useEffect(() => {
    // Skip smooth scrolling on low-performance devices
    if (isLowPerformance || !isInitialized) return;

    let lenis: LenisInstance | null = null;

    const initLenis = async () => {
      try {
        // Dynamic import to reduce initial bundle size
        const Lenis = (await import("lenis")).default;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          // Performance optimizations
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.1,
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

    // Defer initialization to avoid blocking initial render
    const timer = setTimeout(initLenis, 200);

    return () => {
      clearTimeout(timer);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [isLowPerformance, isInitialized]);

  return <>{children}</>;
}
