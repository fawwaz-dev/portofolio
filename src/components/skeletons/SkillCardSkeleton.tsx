"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface SkillCardSkeletonProps {
  index?: number;
  className?: string;
}

export default function SkillCardSkeleton({
  index = 0,
  className = "",
}: SkillCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-4 bg-cyber-gray/20 backdrop-blur-sm rounded-xl border border-electric-400/20 hover:border-electric-400/40 transition-all duration-300 ${className}`}
    >
      <div className="space-y-3">
        <Skeleton className="h-5 w-20 bg-neon-green/40" />
        <Skeleton className="h-4 w-10 bg-electric-400/40" />
        <Skeleton className="w-full h-2 rounded-full bg-cyber-gray/60" />
        <Skeleton className="h-3 w-16 mt-2 bg-neon-pink/30" />
      </div>
    </motion.div>
  );
}
