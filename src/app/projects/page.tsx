"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectCardSkeleton } from "@/components/skeletons";
import InteractiveText from "@/components/ui/InteractiveText";
import { getProjects, type Project } from "@/lib/supabase";

const techStacks = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Three.js",
  "WebGL",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected tech stacks
    if (selectedTech.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTech.some((tech) =>
          project.technologies.some((projectTech) =>
            projectTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedTech]);

  const toggleTechFilter = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              style={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-electric-400" />
              <span className="text-xs sm:text-sm font-mono text-electric-400 tracking-wider">
                PROJECTS_DATABASE
              </span>
            </motion.div>

            <InteractiveText
              text="ALL_PROJECTS"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              colors={["#22d3ee", "#00ff88", "#ff0080", "#8b5cf6"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              Explore my complete portfolio of digital experiences, from web
              applications to interactive 3D experiences and creative coding
              projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cyber-darker border-b border-electric-400/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-electric-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-cyber-gray/30 backdrop-blur-xl border border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                }}
              />
            </div>

            {/* Tech Stack Filters */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-electric-400 mb-3 sm:mb-4 font-mono">
                FILTER_BY_TECH_STACK
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStacks.map((tech) => (
                  <motion.button
                    key={tech}
                    onClick={() => toggleTechFilter(tech)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-mono text-xs sm:text-sm transition-all duration-300 ${
                      selectedTech.includes(tech)
                        ? "bg-neon-green text-cyber-dark border border-neon-green shadow-lg"
                        : "bg-cyber-gray/30 text-electric-400 border border-electric-400/30 hover:border-neon-green/50 hover:bg-cyber-gray/50"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      boxShadow: selectedTech.includes(tech)
                        ? "0 0 15px rgba(0, 255, 136, 0.5)"
                        : "none",
                    }}
                  >
                    #{tech.toLowerCase()}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="text-electric-400 font-mono text-xs sm:text-sm">
                  VIEW_MODE:
                </span>
                <div className="flex space-x-2">
                  <motion.button
                    onClick={() => setViewMode("grid")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-neon-green text-cyber-dark shadow-lg"
                        : "bg-cyber-gray/30 text-electric-400 hover:bg-electric-400/20"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      boxShadow:
                        viewMode === "grid"
                          ? "0 0 15px rgba(0, 255, 136, 0.5)"
                          : "none",
                    }}
                  >
                    <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode("list")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-neon-green text-cyber-dark shadow-lg"
                        : "bg-cyber-gray/30 text-electric-400 hover:bg-electric-400/20"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      boxShadow:
                        viewMode === "list"
                          ? "0 0 15px rgba(0, 255, 136, 0.5)"
                          : "none",
                    }}
                  >
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="text-electric-400 font-mono text-xs sm:text-sm">
                {filteredProjects.length} PROJECTS_FOUND
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                  : "space-y-6"
              }
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} index={index} />
              ))}
            </motion.div>
          ) : filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                  : "space-y-6"
              }
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-cyber-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-electric-400/50" />
                </div>
                <h3 className="text-xl font-bold text-electric-400 mb-4 font-mono">
                  NO_PROJECTS_FOUND
                </h3>
                <p className="text-electric-300/70 mb-6 font-mono">
                  Try adjusting your search criteria or filters to find what
                  you&apos;re looking for.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTech([]);
                  }}
                  className="px-6 py-3 bg-electric-400/10 text-electric-400 border border-electric-400/30 rounded-lg font-mono text-sm transition-all duration-300 hover:bg-electric-400/20"
                >
                  CLEAR_FILTERS
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
