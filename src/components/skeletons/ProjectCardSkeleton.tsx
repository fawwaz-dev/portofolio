"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardSkeletonProps {
  index?: number;
  className?: string;
}

export default function ProjectCardSkeleton({
  index = 0,
  className = "",
}: ProjectCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-4 sm:p-6 bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl hover:border-electric-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric-400/10 ${className}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      }}
    >
      {/* Shimmer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/10 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="aspect-video bg-cyber-gray/50 rounded-lg animate-pulse"
        />

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-6 bg-cyber-gray/50 rounded animate-pulse"
            style={{ width: "80%" }}
          />

          {/* Description */}
          <div className="space-y-2">
            <div
              className="h-3 bg-cyber-gray/50 rounded animate-pulse"
              style={{ width: "100%" }}
            />
            <div
              className="h-3 bg-cyber-gray/50 rounded animate-pulse"
              style={{ width: "90%" }}
            />
            <div
              className="h-3 bg-cyber-gray/50 rounded animate-pulse"
              style={{ width: "75%" }}
            />
          </div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-6 px-3 bg-cyber-gray/50 rounded-full animate-pulse"
                style={{ width: `${60 + i * 15}px` }}
              />
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-2"
          >
            <div className="h-10 bg-gradient-to-r from-neon-green/20 to-electric-400/20 rounded-lg animate-pulse flex-1" />
            <div className="h-10 bg-gradient-to-r from-neon-pink/20 to-electric-400/20 rounded-lg animate-pulse w-12" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
