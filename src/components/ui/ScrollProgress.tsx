"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Top Progress Bar - Enhanced Cyberpunk Style */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-green via-electric-400 to-neon-pink transform-gpu z-50"
        style={{
          scaleX,
          transformOrigin: "0%",
          boxShadow: "0 0 15px rgba(0, 255, 136, 1), 0 0 30px rgba(0, 255, 136, 0.5)",
        }}
      />

      {/* Side Progress Indicator - Enhanced Cyberpunk Style */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative h-32 w-px bg-cyber-gray/60">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-green to-electric-400"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "0%",
              boxShadow: "0 0 8px rgba(0, 255, 136, 0.8), 0 0 16px rgba(0, 255, 136, 0.4)",
            }}
          />

          {/* Glowing dot at current position */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-green rounded-full"
            style={{
              y: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 }),
              boxShadow: "0 0 10px rgba(0, 255, 136, 1)",
            }}
          />
        </div>
      </div>
    </>
  )
}
