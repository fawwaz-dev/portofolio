"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status Badge Skeleton */}
          <Skeleton className="h-12 w-48 mx-auto rounded-full bg-cyber-gray/40" />

          {/* Greeting */}
          <Skeleton className="h-6 w-32 mx-auto bg-neon-green/40" />

          {/* Name */}
          <Skeleton className="h-20 md:h-28 lg:h-32 w-full max-w-4xl mx-auto bg-gradient-to-r from-neon-green/30 to-electric-400/30" />

          {/* Profession */}
          <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 mx-auto bg-neon-pink/30" />

          {/* Description */}
          <div className="space-y-2 max-w-3xl mx-auto">
            <Skeleton className="h-6 w-full bg-cyber-gray/40" />
            <Skeleton className="h-6 w-4/5 mx-auto bg-cyber-gray/40" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-cyber-gray/40" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Skeleton className="h-12 w-40 rounded-none bg-gradient-to-r from-neon-green/30 to-electric-400/30" />
            <Skeleton className="h-12 w-36 rounded-none bg-cyber-gray/40" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="h-10 w-16 mx-auto mb-2 bg-neon-green/40" />
                <Skeleton className="h-4 w-20 mx-auto bg-electric-400/30" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
