"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Don't set up cursor events on mobile
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

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

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render cursor on mobile/tablet
  if (isMobile) return null;

  return (
    <>
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
