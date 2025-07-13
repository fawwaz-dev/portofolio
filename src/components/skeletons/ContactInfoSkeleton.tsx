"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface ContactInfoSkeletonProps {
  index?: number;
  className?: string;
}

export default function ContactInfoSkeleton({
  index = 0,
  className = "",
}: ContactInfoSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center space-x-4 p-4 bg-cyber-gray/20 backdrop-blur-sm rounded-xl border border-electric-400/20 hover:border-electric-400/40 transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      <Skeleton className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-green/40 to-electric-400/40" />

      {/* Content */}
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-20 bg-neon-green/40" />
        <Skeleton className="h-3 w-32 bg-electric-400/30" />
      </div>
    </motion.div>
  );
}
