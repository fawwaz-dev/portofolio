"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Zap, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { ProjectCardSkeleton } from "@/components/skeletons";
import InteractiveText from "@/components/ui/InteractiveText";
import { getProjects, type Project } from "@/lib/supabase";
import { useEffect, useState } from "react";
import CyberButton from "@/components/ui/CyberButton";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoadingProjects(false);
      }
    }

    fetchProjects();
  }, []);

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

  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cyber-darker relative z-10 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

      {/* Floating Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              style={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-electric-400" />
              <span className="text-xs sm:text-sm font-mono text-electric-400 tracking-wider">
                PROJECTS_DATABASE
              </span>
            </motion.div>

            <InteractiveText
              text="FEATURED_PROJECTS"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              colors={["#22d3ee", "#00ff88", "#ff0080", "#8b5cf6"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              Exploring the intersection of creativity and technology through
              innovative digital experiences and cutting-edge web applications.
            </motion.p>
          </div>

          {/* Projects Grid - Enhanced Cyberpunk Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {isLoadingProjects
              ? Array.from({ length: 3 }).map((_, index) => (
                  <ProjectCardSkeleton key={index} index={index} />
                ))
              : featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
          </motion.div>

          {/* Enhanced View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/projects">
              <CyberButton variant="primary" size="md">
                <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
                  EXPLORE_ALL_PROJECTS
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </CyberButton>
            </Link>
          </motion.div>

          {/* Enhanced Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {[
              {
                label: "TOTAL_PROJECTS",
                value: "25+",
                color: "neon-green",
                glow: "rgba(0, 255, 136, 0.3)",
              },
              {
                label: "TECH_STACKS",
                value: "12+",
                color: "electric-400",
                glow: "rgba(34, 211, 238, 0.3)",
              },
              {
                label: "YEARS_EXPERIENCE",
                value: "5+",
                color: "neon-pink",
                glow: "rgba(255, 0, 128, 0.3)",
              },
              {
                label: "CLIENT_SATISFACTION",
                value: "98%",
                color: "neon-blue",
                glow: "rgba(0, 212, 255, 0.3)",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 sm:p-6 bg-cyber-gray/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%)",
                  boxShadow: `0 0 20px ${stat.glow}`,
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Stat Content */}
                <div
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-${stat.color} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 font-mono`}
                  style={{ textShadow: `0 0 10px ${stat.glow}` }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
