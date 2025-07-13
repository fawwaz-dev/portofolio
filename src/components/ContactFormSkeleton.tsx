"use client";

import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";

interface ContactFormSkeletonProps {
  className?: string;
}

export default function ContactFormSkeleton({
  className,
}: ContactFormSkeletonProps) {
  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
      borderColor: "#00ff88",
    },
    blur: {
      scale: 1,
      boxShadow: "0 0 0px rgba(0, 255, 136, 0)",
      borderColor: "rgba(34, 211, 238, 0.3)",
    },
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 sm:space-y-6 ${className}`}
    >
      {/* Name Field - Exact same structure as real component */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <label className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider">
          <User className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          NAME_FIELD
        </label>
        <motion.div
          variants={inputVariants}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 text-sm sm:text-base animate-pulse"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Email Field - Exact same structure as real component */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <label className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider">
          <Mail className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          EMAIL_ADDRESS
        </label>
        <motion.div
          variants={inputVariants}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 text-sm sm:text-base animate-pulse"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Message Field - Exact same structure as real component */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative"
      >
        <label className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider">
          <MessageSquare className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          MESSAGE_CONTENT
        </label>
        <motion.div
          variants={inputVariants}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 resize-none text-sm sm:text-base animate-pulse"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
            height: "120px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Submit Button - Exact same structure as real component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative"
      >
        <motion.div
          className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-neon-green to-electric-400 text-cyber-dark font-bold rounded-none overflow-hidden shadow-2xl border-2 border-neon-green transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-mono text-sm sm:text-base md:text-lg animate-pulse"
          style={{
            clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
          }}
        >
          <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Send className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="whitespace-nowrap">TRANSMIT_MESSAGE</span>
          </div>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
        </motion.div>
      </motion.div>
    </motion.form>
  );
}
