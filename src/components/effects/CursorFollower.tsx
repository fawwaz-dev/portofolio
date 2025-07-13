"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  // Debug logging in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("CursorFollower Debug:", {
        isMobile,
        isLowPerformance,
        isVisible,
        windowWidth: window.innerWidth,
        hardwareConcurrency: navigator.hardwareConcurrency,
        hasReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches,
      });
    }
  }, [isMobile, isLowPerformance, isVisible]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Optimize spring configuration for better performance
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Optimized throttle function with useCallback
  const throttle = useCallback(
    (func: (e: MouseEvent) => void, limit: number) => {
      let inThrottle: boolean;
      return function (e: MouseEvent) {
        if (!inThrottle) {
          func(e);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },
    []
  );

  // Optimize device capability check
  const checkDevice = useCallback(() => {
    if (typeof window === "undefined") return;

    const isMobileDevice = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    const hasReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setIsMobile(isMobileDevice);
    setIsLowPerformance(isLowEnd || hasReducedMotion);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Defer device check to avoid blocking initial render
      const timer = setTimeout(checkDevice, 50);
      window.addEventListener("resize", checkDevice);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", checkDevice);
      };
    }
  }, [checkDevice]);

  useEffect(() => {
    // Only disable cursor on actual mobile devices (touch-only)
    if (isMobile || typeof window === "undefined") return;

    const throttledMoveCursor = throttle((e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    }, 16); // ~60fps

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Optimize event listener attachment
    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "button, a, [data-cursor-hover]"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Defer event listener attachment
    const timer = setTimeout(addEventListeners, 100);

    window.addEventListener("mousemove", throttledMoveCursor);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", throttledMoveCursor);

      // Clean up event listeners
      const interactiveElements = document.querySelectorAll(
        "button, a, [data-cursor-hover]"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile, throttle]);

  // Only disable cursor on actual mobile devices (touch-only)
  if (isMobile) {
    console.log("Cursor disabled: Mobile device detected");
    return null;
  }

  return (
    <>
      {/* Debug: Force cursor visibility for testing */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 left-4 bg-red-500 text-white p-2 rounded z-[9999] text-xs">
          Cursor Active: {isVisible ? "Visible" : "Hidden"}
        </div>
      )}

      {/* Main Cursor - Enhanced Cyberpunk Style */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[60] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-full h-full bg-neon-green rounded-full"
          style={{
            boxShadow:
              "0 0 25px rgba(0, 255, 136, 1), 0 0 50px rgba(0, 255, 136, 0.5)",
            background: "radial-gradient(circle, #00ff88, #00d4ff)",
          }}
        />
      </motion.div>

      {/* Cursor Trail - Enhanced Cyberpunk Style */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[55]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="w-full h-full bg-gradient-to-r from-neon-green via-electric-400 to-neon-pink rounded-full blur-md"
          style={{
            boxShadow:
              "0 0 40px rgba(0, 255, 136, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)",
          }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[50]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="w-full h-full border-2 border-neon-green rounded-full"
          style={{
            boxShadow: "0 0 60px rgba(0, 255, 136, 0.6)",
          }}
        />
      </motion.div>
    </>
  );
}
