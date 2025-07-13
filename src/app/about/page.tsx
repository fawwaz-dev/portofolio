"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Terminal, Code, Zap } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import InteractiveText from "@/components/ui/InteractiveText";
import CyberButton from "@/components/ui/CyberButton";

const skills = [
  { name: "Frontend Development", icon: Code, color: "text-neon-green" },
  { name: "Backend Systems", icon: Terminal, color: "text-electric-400" },
  { name: "UI/UX Design", icon: Zap, color: "text-neon-pink" },
];

const timeline = [
  {
    year: "2023",
    title: "Senior Full Stack Developer",
    description: "Leading development of enterprise applications",
    color: "border-neon-green",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    description: "Building scalable web applications",
    color: "border-electric-400",
  },
  {
    year: "2019",
    title: "Junior Developer",
    description: "Started coding journey with React",
    color: "border-neon-pink",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5" />

      {/* Floating Neon Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-electric-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-20 h-20 bg-neon-pink/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
            animate={{ y: ["0vh", "100vh"] }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <InteractiveText
              text="ABOUT_ME"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono tracking-wider"
              colors={["#00ff88", "#22d3ee", "#ff0080", "#8b5cf6"]}
            />
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-electric-300/80 leading-relaxed font-mono max-w-4xl mx-auto"
          >
            Full-stack developer building scalable apps using Next.js, Laravel,
            React, Vue, Astro, Tailwind CSS, Framer Motion, TypeScript, Node.js,
            PostgreSQL, and MySQL.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-cyber-gray/30 backdrop-blur-sm border border-white/20 hover:border-neon-green/50 transition-all duration-300 ${skill.color}`}
              >
                <skill.icon className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-mono">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Section Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AboutSection />
        </motion.div>

        {/* Enhanced Skills Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-4">
              CAREER_TIMELINE
            </h2>
            <p className="text-white/70 font-mono text-sm">
              Professional journey through the digital realm
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-electric-400 to-neon-pink" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-4 h-4 rounded-full bg-cyber-gray border-2 ${item.color} relative z-10`}
                  />

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6 bg-cyber-gray/30 backdrop-blur-sm border border-white/20 rounded-xl hover:border-neon-green/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neon-green font-mono font-bold">
                        {item.year}
                      </span>
                      <span className="text-electric-400 text-sm font-mono">
                        ACTIVE
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 font-mono">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <CyberButton variant="primary" size="md">
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </CyberButton>

            <CyberButton variant="secondary" size="md" href="/projects">
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </CyberButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
