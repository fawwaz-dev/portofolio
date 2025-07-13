"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ContactInfoSkeleton,
  ContactFormSkeleton,
} from "@/components/skeletons";

export default function ContactLoading() {
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
          <Skeleton className="h-12 w-80 mx-auto mb-4 bg-gradient-to-r from-neon-green/20 to-electric-400/20" />
          <Skeleton className="h-6 w-96 mx-auto bg-cyber-gray/30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Skeleton */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <Skeleton className="h-8 w-48 mb-6 bg-neon-green/30" />
              <div className="space-y-2 mb-8">
                <Skeleton className="h-4 w-full bg-cyber-gray/30" />
                <Skeleton className="h-4 w-4/5 bg-cyber-gray/30" />
                <Skeleton className="h-4 w-3/4 bg-cyber-gray/30" />
              </div>
            </div>

            <div className="space-y-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <ContactInfoSkeleton key={index} index={index} />
              ))}
            </div>

            {/* Additional Info Skeleton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 bg-gradient-to-r from-neon-green/10 to-electric-400/10 rounded-xl border border-white/20"
            >
              <Skeleton className="h-5 w-40 mb-2 bg-neon-green/30" />
              <Skeleton className="h-4 w-full bg-electric-400/20" />
            </motion.div>
          </motion.div>

          {/* Contact Form Skeleton */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactFormSkeleton />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
