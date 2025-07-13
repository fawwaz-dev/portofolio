"use client"

import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

interface SkillCardSkeletonProps {
  index: number
}

export default function SkillCardSkeleton({ index }: SkillCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-cyber-gray/40 backdrop-blur-sm rounded-xl border border-neon-green/30"
      style={{ boxShadow: "0 0 10px rgba(0, 255, 136, 0.3)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-5 w-20 bg-neon-green/40" />
        <Skeleton className="h-4 w-10 bg-electric-400/40" />
      </div>
      <Skeleton className="w-full h-2 rounded-full bg-cyber-gray/60" />
      <Skeleton className="h-3 w-16 mt-2 bg-neon-pink/30" />
    </motion.div>
  )
}
