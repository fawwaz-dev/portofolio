"use client"

import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

export default function FeaturesSkeleton() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Skeleton className="h-10 w-80 mx-auto mb-4 bg-gradient-to-r from-neon-green/30 to-electric-400/30" />
          <Skeleton className="h-6 w-96 mx-auto bg-cyber-gray/40" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-cyber-gray/40 backdrop-blur-sm rounded-2xl border border-neon-green/30"
              style={{ boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
            >
              <div className="flex justify-center mb-6">
                <Skeleton className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-green/40 to-electric-400/40" />
              </div>
              <Skeleton className="h-6 w-32 mx-auto mb-4 bg-neon-green/40" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-cyber-gray/50" />
                <Skeleton className="h-4 w-3/4 mx-auto bg-cyber-gray/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
