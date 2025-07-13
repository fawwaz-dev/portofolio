"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveTextProps {
  text: string;
  className?: string;
  colors?: string[];
}

export default function InteractiveText({
  text,
  className,
  colors = ["#ffffff", "#00ff88", "#00d4ff", "#ff0080"],
}: InteractiveTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = text.split("");

  return (
    <div className={cn("overflow-hidden select-none", className)}>
      <div className="flex flex-wrap justify-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9 + index * 0.03,
              ease: [0.33, 1, 0.68, 1],
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "inline-block cursor-pointer transition-all duration-300 font-black",
              "text-white",
              hoveredIndex === index && "scale-110",
              hoveredIndex !== null &&
                hoveredIndex !== index &&
                "scale-95 opacity-70"
            )}
            whileHover={{
              y: -10,
              rotateZ: ((index % 3) - 1) * 3,
              color: colors[index % colors.length],
              textShadow: "0 0 20px currentColor",
              filter: "brightness(1.5)",
            }}
            style={{
              textShadow:
                hoveredIndex === index ? "0 0 20px currentColor" : "none",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
