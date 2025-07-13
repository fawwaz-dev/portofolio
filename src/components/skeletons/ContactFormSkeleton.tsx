"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface ContactFormSkeletonProps {
  className?: string;
}

export default function ContactFormSkeleton({
  className = "",
}: ContactFormSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-cyber-gray/30 backdrop-blur-sm rounded-2xl border border-electric-400/30 p-6 sm:p-8 ${className}`}
    >
      {/* Form Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <Skeleton className="h-8 w-32 mx-auto mb-4 bg-neon-green/30" />
        <Skeleton className="h-4 w-48 mx-auto bg-electric-400/20" />
      </motion.div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Skeleton className="h-4 w-16 mb-2 bg-electric-400/30" />
          <Skeleton className="h-12 w-full rounded-lg bg-cyber-gray/40" />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Skeleton className="h-4 w-12 mb-2 bg-electric-400/30" />
          <Skeleton className="h-12 w-full rounded-lg bg-cyber-gray/40" />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Skeleton className="h-4 w-16 mb-2 bg-electric-400/30" />
          <Skeleton className="h-32 w-full rounded-lg bg-cyber-gray/40" />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Skeleton className="h-12 w-full rounded-lg bg-gradient-to-r from-neon-green/30 to-electric-400/30" />
        </motion.div>
      </div>
    </motion.div>
  );
}
