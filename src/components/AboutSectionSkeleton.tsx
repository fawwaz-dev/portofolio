"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Zap, Cpu, Database, Globe } from "lucide-react";

interface AboutSectionSkeletonProps {
  className?: string;
}

export default function AboutSectionSkeleton({
  className,
}: AboutSectionSkeletonProps) {
  const skills = [
    {
      name: "React/Next.js",
      icon: Code,
      color: "neon-green",
      colorValue: "#00ff88",
    },
    {
      name: "TypeScript",
      icon: Terminal,
      color: "electric-400",
      colorValue: "#22d3ee",
    },
    { name: "Node.js", icon: Cpu, color: "neon-pink", colorValue: "#ff0080" },
    {
      name: "PostgreSQL",
      icon: Database,
      color: "neon-blue",
      colorValue: "#00d4ff",
    },
    {
      name: "Three.js/WebGL",
      icon: Globe,
      color: "neon-purple",
      colorValue: "#8b5cf6",
    },
    {
      name: "Tailwind CSS",
      icon: Zap,
      color: "neon-green",
      colorValue: "#00ff88",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-cyber-darker relative z-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Terminal Header - Exact same structure as real component */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-neon-green/30 rounded-full px-6 py-3 mb-8"
              style={{ boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)" }}
            >
              <Terminal className="w-5 h-5 text-neon-green" />
              <span className="text-sm font-mono text-neon-green tracking-wider">
                SYSTEM_ABOUT.EXE
              </span>
            </motion.div>

            {/* Title - Same size and styling as real InteractiveText */}
            <div
              className="h-12 sm:h-16 md:h-20 bg-cyber-gray/50 rounded animate-pulse mb-8"
              style={{ width: "300px" }}
            />
          </div>

          {/* Terminal Card - Exact same grid layout as real component */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Bio Terminal - Same structure and styling */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-4 sm:p-8 bg-cyber-gray/30 backdrop-blur-xl border border-neon-green/30 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.1)",
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
              }}
            >
              {/* Terminal Header - Same structure */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm font-mono text-electric-400 ml-4">
                  bio.txt
                </span>
              </div>

              {/* Terminal Content - Same structure and spacing */}
              <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-2"
                >
                  <span className="text-neon-green">$</span>
                  <span className="text-electric-400">cat</span>
                  <span className="text-white">bio.txt</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="pl-4 space-y-2 text-white/90 leading-relaxed"
                >
                  <div
                    className="h-4 bg-cyber-gray/50 rounded animate-pulse"
                    style={{ width: "100%" }}
                  />
                  <div
                    className="h-4 bg-cyber-gray/50 rounded animate-pulse"
                    style={{ width: "90%" }}
                  />
                  <div
                    className="h-4 bg-cyber-gray/50 rounded animate-pulse"
                    style={{ width: "85%" }}
                  />
                  <div
                    className="h-4 bg-cyber-gray/50 rounded animate-pulse"
                    style={{ width: "95%" }}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-2"
                >
                  <span className="text-neon-green">$</span>
                  <span className="text-electric-400">echo</span>
                  <span className="text-white">
                    &quot;Building the future, one pixel at a time...&quot;
                  </span>
                </motion.div>
              </div>

              {/* Scanning Line Effect - Same as real component */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            </motion.div>

            {/* Skills Hologram - Same structure as real component */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-electric-400 mb-4 font-mono">
                  SKILL_MATRIX
                </h3>
                <p className="text-white/70 font-mono text-sm">
                  Core competencies and expertise levels
                </p>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon
                          className="w-5 h-5"
                          style={{ color: skill.colorValue }}
                        />
                        <span className="text-white font-mono text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-electric-400 font-mono text-xs sm:text-sm">
                        {85 + index * 2}%
                      </span>
                    </div>

                    <div className="relative h-2 bg-cyber-gray/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + index * 2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full relative animate-pulse"
                        style={{
                          background: `linear-gradient(to right, ${skill.colorValue}, ${skill.colorValue}80)`,
                          boxShadow: `0 0 10px ${skill.colorValue}`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Holographic Effect - Same structure as real component */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-br from-neon-blue/10 to-neon-pink/10 border border-electric-400/30 rounded-xl backdrop-blur-sm"
                style={{
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
                }}
              >
                <div className="text-center">
                  <h4 className="text-lg font-bold text-electric-400 mb-2 font-mono">
                    CURRENT_STATUS
                  </h4>
                  <p className="text-white/80 font-mono text-sm">
                    Available for exciting projects and collaborations
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-xs text-neon-green font-mono">
                      ONLINE
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
