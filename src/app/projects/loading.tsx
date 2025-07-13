"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectCardSkeleton } from "@/components/skeletons";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Skeleton className="h-12 w-72 mx-auto mb-4 bg-gradient-to-r from-neon-green/20 to-electric-400/20" />
          <Skeleton className="h-6 w-96 mx-auto bg-cyber-gray/30" />
        </motion.div>

        {/* Projects Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCardSkeleton key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
