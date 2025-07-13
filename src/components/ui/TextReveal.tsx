"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  gradient?: string
  delay?: number
}

export default function TextReveal({
  text,
  className,
  gradient = "from-neon-green to-electric-400",
  delay = 0.6,
}: TextRevealProps) {
  const letters = text.split("")

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.h1
        className={cn(
          "font-black tracking-tighter bg-gradient-to-r bg-clip-text text-transparent",
          `bg-gradient-to-r ${gradient}`,
        )}
        style={{
          textShadow: "0 0 20px rgba(0, 255, 136, 0.8)",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
