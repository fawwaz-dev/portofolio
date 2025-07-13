"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { SkillCardSkeleton } from "@/components/skeletons";

export default function AboutLoading() {
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
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-gradient-to-r from-neon-green/20 to-electric-400/20" />
          <Skeleton className="h-6 w-96 mx-auto bg-cyber-gray/30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Skeleton */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neon-green/20 to-electric-400/20 p-1">
                <Skeleton className="w-full h-full rounded-2xl bg-cyber-gray/40" />
              </div>
            </div>
          </motion.div>

          {/* Bio Content Skeleton */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Skeleton className="h-9 w-64 bg-neon-green/30" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-cyber-gray/30" />
                <Skeleton className="h-4 w-full bg-cyber-gray/30" />
                <Skeleton className="h-4 w-3/4 bg-cyber-gray/30" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-cyber-gray/30" />
                <Skeleton className="h-4 w-5/6 bg-cyber-gray/30" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-cyber-gray/30" />
                <Skeleton className="h-4 w-4/5 bg-cyber-gray/30" />
              </div>
            </div>

            {/* Quick Stats Skeleton */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-cyber-gray/30 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <Skeleton className="h-8 w-12 mx-auto mb-2 bg-neon-green/30" />
                  <Skeleton className="h-4 w-16 mx-auto bg-electric-400/20" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section Skeleton */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Skeleton className="h-9 w-80 mx-auto mb-12 bg-gradient-to-r from-neon-green/20 to-electric-400/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkillCardSkeleton key={index} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
