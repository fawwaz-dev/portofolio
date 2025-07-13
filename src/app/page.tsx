"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Zap } from "lucide-react";
import Scene3D from "@/components/3D/Scene3D";
import InteractiveText from "@/components/ui/InteractiveText";
import { getProjects, type Project } from "@/lib/supabase";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CyberButton from "@/components/ui/CyberButton";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Cyberpunk Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
        {/* 3D Background */}
        <Scene3D mousePosition={mousePosition} />

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />

        {/* Neon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/10" />
        <div className="absolute inset-0 bg-cyber-mesh" />

        {/* Scanning Line Effect */}
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
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="inline-flex items-center space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-neon-green/30 rounded-full px-6 py-3 mb-8 group hover:border-neon-green/50 transition-all duration-300"
            style={{ boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
            }}
          >
            <motion.div
              className="w-2 h-2 bg-neon-green rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-mono text-neon-green tracking-wider group-hover:text-neon-green/90 transition-colors">
              SYSTEM_ONLINE
            </span>
            <div className="w-px h-4 bg-neon-green/30" />
            <span className="text-xs text-electric-400 font-mono">v2.0.25</span>
          </motion.div>

          {/* Enhanced Main Title with Better Hierarchy */}
          <div className="space-y-6 sm:space-y-8 mb-16">
            {/* Role Badge with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <motion.p
                className="text-lg text-electric-400 font-mono tracking-wider uppercase inline-flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-neon-green">&gt;</span>
                <span>SOFTWARE_DEVELOPER</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="text-neon-green"
                >
                  _
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Enhanced Interactive Name with Glow Effect */}
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
          </div>

          {/* Enhanced Description with Better Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg sm:text-xl text-electric-300/80 leading-relaxed font-mono">
              Full-stack developer building{" "}
              <span className="text-neon-green font-semibold">
                scalable apps
              </span>{" "}
              using{" "}
              <span className="text-electric-400 font-semibold">Next.js</span>,{" "}
              <span className="text-neon-pink font-semibold">Laravel</span>,{" "}
              <span className="text-electric-400 font-semibold">React</span>,{" "}
              <span className="text-neon-green font-semibold">Vue</span>,{" "}
              <span className="text-electric-400 font-semibold">Astro</span>,{" "}
              <span className="text-neon-pink font-semibold">Tailwind CSS</span>
              ,{" "}
              <span className="text-electric-400 font-semibold">
                Framer Motion
              </span>
              ,{" "}
              <span className="text-neon-green font-semibold">TypeScript</span>,{" "}
              <span className="text-electric-400 font-semibold">Node.js</span>,{" "}
              <span className="text-neon-pink font-semibold">PostgreSQL</span>,
              and <span className="text-electric-400 font-semibold">MySQL</span>
              .
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <CyberButton variant="primary" size="md" href="/projects">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-mono text-sm sm:text-base md:text-lg">
                  VIEW_PROJECTS
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </CyberButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <CyberButton variant="secondary" size="md" href="/contact">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-mono text-sm sm:text-base md:text-lg">
                  GET_IN_TOUCH
                </span>
              </CyberButton>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-electric-400/60 hover:text-electric-400 transition-colors cursor-pointer"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-xs font-mono tracking-wider">
              SCROLL_DOWN
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-white/60 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
