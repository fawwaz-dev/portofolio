"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState, Suspense, useCallback } from "react";
import { ArrowRight, Play, Zap } from "lucide-react";
import InteractiveText from "@/components/ui/InteractiveText";
import { getProjects } from "@/lib/supabase";
import CyberButton from "@/components/ui/CyberButton";

// Dynamic imports for heavy components
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => (
    <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
  ),
  ssr: false,
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => (
    <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
  ),
  ssr: false,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => (
    <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
  ),
  ssr: false,
});

// Import dynamic from Next.js
import dynamic from "next/dynamic";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimize spring calculations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Memoize transforms to prevent recalculation
  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

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
    }, 100);

    window.addEventListener("resize", checkPerformance);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkPerformance);
    };
  }, [checkPerformance]);

  useEffect(() => {
    // Defer loading animation to reduce initial load
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Defer project fetching to avoid blocking initial render
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        await getProjects();
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Defer to after initial render
    const timer = setTimeout(fetchProjects, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Cyberpunk Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />

        {/* Neon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/10" />
        <div className="absolute inset-0 bg-cyber-mesh" />

        {/* Scanning Line Effect - Conditional */}
        {!isLowPerformance && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
              animate={{ y: ["0vh", "100vh"] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        )}

        {/* Main Content */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          {/* Loading Animation - Cyber Style */}
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="fixed inset-0 bg-cyber-darker z-50 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full mx-auto mb-4"
                  style={{ filter: "drop-shadow(0 0 10px #00ff88)" }}
                />
                <p className="text-neon-green/80 font-mono text-sm tracking-wider">
                  INITIALIZING_SYSTEM...
                </p>
              </div>
            </motion.div>
          )}

          {/* Enhanced Status Badge with Pulse Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-gray/20 border border-neon-green/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse" />
              <span className="text-neon-green/90 font-mono text-sm tracking-wider">
                AVAILABLE_FOR_WORK
              </span>
            </div>
          </motion.div>

          {/* Enhanced Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 tracking-wide">
              Hello, I'm{" "}
              <span className="text-neon-green font-semibold">Fawwaz</span>
            </h1>
          </motion.div>

          {/* Enhanced Name with Interactive Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <InteractiveText
              text="FAWWAZ"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none"
              colors={["#ffffff", "#00ff88", "#00d4ff", "#ff0080"]}
            />
            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-electric-400/20 to-neon-pink/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Enhanced Tagline with Better Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto"
          >
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-wide leading-relaxed">
              Crafting{" "}
              <span className="relative inline-block font-mono">
                <span
                  className="bg-gradient-to-r from-neon-green via-electric-400 to-neon-blue bg-clip-text text-transparent font-bold animate-neon-flicker"
                  style={{ textShadow: "0 0 10px currentColor" }}
                >
                  DIGITAL_REALITIES
                </span>
                <motion.div
                  className="absolute -inset-2 bg-neon-green/20 blur-xl rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </span>{" "}
              for the future
            </h2>
          </motion.div>

          {/* Enhanced Description with Better Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
              Full-stack developer crafting scalable applications with modern
              technologies. Specializing in{" "}
              <span className="text-neon-green font-semibold">
                Next.js, React, TypeScript
              </span>{" "}
              and{" "}
              <span className="text-electric-400 font-semibold">
                Laravel, Vue.js
              </span>
              . Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <CyberButton
              href="/projects"
              className="px-8 py-4 text-lg font-semibold tracking-wider"
            >
              VIEW_PROJECTS
            </CyberButton>
            <CyberButton
              href="/contact"
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold tracking-wider"
            >
              GET_IN_TOUCH
            </CyberButton>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "YEARS_EXPERIENCE", value: "3+" },
              { label: "PROJECTS_COMPLETED", value: "50+" },
              { label: "TECHNOLOGIES", value: "15+" },
              { label: "HAPPY_CLIENTS", value: "25+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.9 + index * 0.1,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-neon-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/60 font-mono tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense
        fallback={
          <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
        }
      >
        <AboutSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
        }
      >
        <ProjectsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 bg-cyber-gray/20 rounded-lg animate-pulse" />
        }
      >
        <ContactSection />
      </Suspense>
    </div>
  );
}
