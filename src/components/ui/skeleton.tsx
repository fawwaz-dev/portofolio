"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Base Skeleton Component
interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function Skeleton({ className, children }: SkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "relative overflow-hidden bg-cyber-gray/30 backdrop-blur-sm border border-electric-400/20 rounded-lg",
        className
      )}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent animate-shimmer" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Text Skeleton
interface SkeletonTextProps {
  className?: string;
  lines?: number;
  lineHeight?: string;
}

export function SkeletonText({
  className,
  lines = 1,
  lineHeight = "h-4",
}: SkeletonTextProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={cn("bg-cyber-gray/50 rounded animate-pulse", lineHeight)}
          style={{
            width: `${60 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}

// Card Skeleton
interface SkeletonCardProps {
  className?: string;
  showImage?: boolean;
  showTags?: boolean;
  showButton?: boolean;
}

export function SkeletonCard({
  className,
  showImage = true,
  showTags = true,
  showButton = true,
}: SkeletonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative p-4 sm:p-6 bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl hover:border-electric-400/40 transition-all duration-300",
        "hover:shadow-lg hover:shadow-electric-400/10",
        className
      )}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      }}
    >
      {/* Shimmer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/10 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        {/* Image */}
        {showImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="aspect-video bg-cyber-gray/50 rounded-lg animate-pulse"
          />
        )}

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-6 bg-cyber-gray/50 rounded animate-pulse"
            style={{ width: "80%" }}
          />

          {/* Description */}
          <SkeletonText lines={3} lineHeight="h-3" />

          {/* Tags */}
          {showTags && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 px-3 bg-cyber-gray/50 rounded-full animate-pulse"
                  style={{ width: `${60 + i * 15}px` }}
                />
              ))}
            </motion.div>
          )}

          {/* Button */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-10 bg-gradient-to-r from-neon-green/20 to-electric-400/20 rounded-lg animate-pulse"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Form Field Skeleton
interface SkeletonFormFieldProps {
  className?: string;
  showLabel?: boolean;
}

export function SkeletonFormField({
  className,
  showLabel = true,
}: SkeletonFormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("space-y-2", className)}
    >
      {/* Label */}
      {showLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-4 bg-cyber-gray/50 rounded animate-pulse"
          style={{ width: "40%" }}
        />
      )}

      {/* Input Field */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-12 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-lg animate-pulse"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
        }}
      />
    </motion.div>
  );
}

// List Item Skeleton
interface SkeletonListItemProps {
  className?: string;
  showIcon?: boolean;
  showDescription?: boolean;
}

export function SkeletonListItem({
  className,
  showIcon = true,
  showDescription = true,
}: SkeletonListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-start space-x-3 p-3", className)}
    >
      {/* Icon */}
      {showIcon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-6 h-6 bg-cyber-gray/50 rounded animate-pulse flex-shrink-0"
        />
      )}

      {/* Content */}
      <div className="flex-1 space-y-2">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-4 bg-cyber-gray/50 rounded animate-pulse"
          style={{ width: "70%" }}
        />

        {/* Description */}
        {showDescription && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-3 bg-cyber-gray/50 rounded animate-pulse"
            style={{ width: "90%" }}
          />
        )}
      </div>
    </motion.div>
  );
}

// Grid Skeleton
interface SkeletonGridProps {
  className?: string;
  items?: number;
  columns?: number;
  itemComponent?: React.ComponentType<any>;
  itemProps?: any;
}

export function SkeletonGrid({
  className,
  items = 6,
  columns = 3,
  itemComponent: ItemComponent = SkeletonCard,
  itemProps = {},
}: SkeletonGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "grid gap-4 sm:gap-6",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-1 sm:grid-cols-2": columns === 2,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":
            columns === 4,
        },
        className
      )}
    >
      {Array.from({ length: items }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <ItemComponent {...itemProps} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Avatar Skeleton
interface SkeletonAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SkeletonAvatar({
  className,
  size = "md",
}: SkeletonAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-cyber-gray/50 rounded-full animate-pulse",
        sizeClasses[size],
        className
      )}
    />
  );
}

// Button Skeleton
interface SkeletonButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SkeletonButton({
  className,
  size = "md",
}: SkeletonButtonProps) {
  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-gradient-to-r from-neon-green/20 to-electric-400/20 rounded-lg animate-pulse",
        sizeClasses[size],
        className
      )}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
      }}
    />
  );
}

// Shimmer animation is now defined in globals.css
