"use client";

import { useEffect, useState, useCallback } from "react";
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

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Throttle function for performance
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

  useEffect(() => {
    // Simple device check - only disable on actual mobile
    const checkDevice = () => {
      if (typeof window === "undefined") return;

      // Only consider it mobile if it's a small screen AND has touch capability
      const isMobileDevice =
        window.innerWidth < 768 && "ontouchstart" in window;

      setIsMobile(isMobileDevice);
      setIsLowPerformance(false); // Don't disable based on performance in production
    };

    if (typeof window !== "undefined") {
      checkDevice();
      window.addEventListener("resize", checkDevice);
      return () => window.removeEventListener("resize", checkDevice);
    }
  }, []);

  useEffect(() => {
    // Only disable cursor on actual mobile devices (touch-only)
    if (isMobile || typeof window === "undefined") {
      // Fallback: show cursor anyway if device detection fails
      if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV === "development"
      ) {
        console.log("Cursor fallback: Showing cursor despite device check");
        setIsVisible(true);
      }
      return;
    }

    const throttledMoveCursor = throttle((e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    }, 16); // ~60fps

    // Make cursor visible immediately
    setIsVisible(true);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, [data-cursor-hover]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", throttledMoveCursor);

    return () => {
      window.removeEventListener("mousemove", throttledMoveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile, throttle]);

  // Set cursor visible when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Only disable cursor on actual mobile devices (touch-only)
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Debug: Force cursor visibility for testing */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 left-4 bg-red-500 text-white p-2 rounded z-[9999] text-xs">
          Cursor Active: {isVisible ? "Visible" : "Hidden"}
          <br />
          Mobile: {isMobile ? "Yes" : "No"}
          <br />
          Low Performance: {isLowPerformance ? "Yes" : "No"}
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
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[50] border-[1px] border-neon-green/20 rounded-full blur-[1px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.4 : 0,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
