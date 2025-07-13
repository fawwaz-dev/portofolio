"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DESIGN_SYSTEM } from "@/lib/design-system";

interface CyberButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "small";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function CyberButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  href,
  external = false,
  ariaLabel,
}: CyberButtonProps) {
  const buttonConfig = DESIGN_SYSTEM.buttons[variant];

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base",
    lg: "px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg",
  };

  const baseClasses = cn(
    buttonConfig.base,
    sizeClasses[size],
    buttonConfig.hover,
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <motion.div
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      className="relative group"
    >
      {/* Button Glow Effect */}
      <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Button Content */}
      <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
        {children}
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
        style={{
          clipPath: buttonConfig.clipPath,
          boxShadow:
            variant === "primary"
              ? "0 0 20px rgba(0, 255, 136, 0.5)"
              : "0 0 20px rgba(0, 255, 136, 0.3)",
        }}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={{
        clipPath: buttonConfig.clipPath,
        boxShadow:
          variant === "primary"
            ? "0 0 20px rgba(0, 255, 136, 0.5)"
            : "0 0 20px rgba(0, 255, 136, 0.3)",
      }}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
