"use client";

import { motion } from "framer-motion";

interface ProjectCardSkeletonProps {
  className?: string;
  index?: number;
}

export default function ProjectCardSkeleton({
  className,
  index = 0,
}: ProjectCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-cyber-gray/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-electric-400/30 hover:border-neon-green/70 transition-all duration-300 ${className}`}
      style={{ boxShadow: "0 0 15px rgba(0, 255, 136, 0.2)" }}
    >
      {/* Project Image - Exact same dimensions as real component */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-cyber-gray/50 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Actions - Same position and size as real buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full animate-pulse" />
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full animate-pulse" />
        </div>
      </div>

      {/* Project Info - Exact same padding and structure */}
      <div className="p-6">
        {/* Title - Same height and styling as real title */}
        <div
          className="h-6 bg-cyber-gray/50 rounded animate-pulse mb-2"
          style={{ width: "80%" }}
        />

        {/* Description - Same height and line-clamp as real description */}
        <div className="space-y-2 mb-4">
          <div
            className="h-4 bg-cyber-gray/50 rounded animate-pulse"
            style={{ width: "100%" }}
          />
          <div
            className="h-4 bg-cyber-gray/50 rounded animate-pulse"
            style={{ width: "75%" }}
          />
        </div>

        {/* Technologies - Same flex layout and styling as real tech tags */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-6 px-3 py-1 bg-gradient-to-r from-neon-green/20 to-electric-400/20 rounded-full animate-pulse"
              style={{ width: `${60 + i * 15}px` }}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism effect - Same as real component */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}
