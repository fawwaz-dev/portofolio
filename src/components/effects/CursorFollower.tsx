"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const lastMouseEvent = useRef(0);

  // Debug logging in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("CursorFollower Debug:", {
        isMobile,
        isLowPerformance,
        isVisible,
        windowWidth: typeof window !== "undefined" ? window.innerWidth : 0,
        hardwareConcurrency:
          typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 0,
        hasReducedMotion:
          typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false,
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
    const isLowEnd = navigator.hardwareConcurrency <= 1; // Very relaxed threshold
    const hasReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Debug logging
    if (process.env.NODE_ENV === "development") {
      console.log("CursorFollower Device Check:", {
        windowWidth: window.innerWidth,
        hardwareConcurrency: navigator.hardwareConcurrency,
        hasReducedMotion,
        isMobileDevice,
        isLowEnd,
        willShowCursor: !isMobileDevice && !isLowEnd && !hasReducedMotion,
      });
    }

    setIsMobile(isMobileDevice);
    setIsLowPerformance(isLowEnd || hasReducedMotion);
  }, []);

  // Optimized mouse event handler with throttling
  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseEvent.current < 16) return; // ~60fps max
      lastMouseEvent.current = now;

      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    }, 16),
    [cursorX, cursorY]
  );

  // Optimized hover detection
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    // Defer device check to avoid blocking initial render
    const timer = setTimeout(() => {
      checkDevice();
      setIsVisible(true);
    }, 100);

    // Force cursor to be visible for debugging
    setIsVisible(true);

    // Add event listeners for cursor tracking
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    return () => {
      clearTimeout(timer);
    };
  }, [
    isMobile,
    isLowPerformance,
    checkDevice,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  ]);

  // Only disable on actual mobile devices (touch-only)
  if (isMobile) {
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
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[50]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 0.8,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="w-full h-full border border-neon-green/30 rounded-full"
          style={{
            boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
          }}
        />
      </motion.div>

      {/* Cyberpunk Data Stream Effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-20 pointer-events-none z-[45]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isHovering ? 0.6 : 0,
          scaleY: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-full bg-gradient-to-b from-neon-green via-electric-400 to-transparent"
          style={{
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
          }}
        />
      </motion.div>
    </>
  );
}
