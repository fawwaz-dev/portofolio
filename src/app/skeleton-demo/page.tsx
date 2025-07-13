"use client";

import { motion } from "framer-motion";
import {
  SkeletonCard,
  SkeletonGrid,
  SkeletonText,
  SkeletonFormField,
  SkeletonButton,
  SkeletonAvatar,
} from "@/components/ui/skeleton";
import {
  ProjectCardSkeleton,
  ContactFormSkeleton,
  AboutSectionSkeleton,
} from "@/components/skeletons";

export default function SkeletonDemoPage() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-neon-green/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              style={{ boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)" }}
            >
              <span className="text-xs sm:text-sm font-mono text-neon-green tracking-wider">
                SKELETON_DEMO
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-electric-400 font-mono">
              SKELETON_COMPONENTS
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              Cyberpunk-styled loading skeletons that exactly match the
              structure and layout of the real components.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Project Card Skeletons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              PROJECT_CARD_SKELETONS
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Exact match to real ProjectCard structure with proper image
              dimensions, hover effects, and tech tags
            </p>

            <SkeletonGrid
              items={6}
              columns={3}
              itemComponent={ProjectCardSkeleton}
            />
          </motion.div>

          {/* Contact Form Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              CONTACT_FORM_SKELETON
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Matches exact form structure with proper labels, input fields, and
              submit button styling
            </p>

            <div className="max-w-2xl mx-auto">
              <ContactFormSkeleton />
            </div>
          </motion.div>

          {/* About Section Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              ABOUT_SECTION_SKELETON
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Complete terminal interface with bio section, skill matrix, and
              holographic effects
            </p>

            <AboutSectionSkeleton />
          </motion.div>

          {/* Basic Skeletons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              BASIC_SKELETONS
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Reusable skeleton components for common UI elements
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Text Skeleton */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono">
                  TEXT_SKELETON
                </h3>
                <SkeletonText lines={3} />
              </div>

              {/* Avatar Skeleton */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono">
                  AVATAR_SKELETON
                </h3>
                <div className="flex space-x-4">
                  <SkeletonAvatar size="sm" />
                  <SkeletonAvatar size="md" />
                  <SkeletonAvatar size="lg" />
                </div>
              </div>

              {/* Button Skeleton */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono">
                  BUTTON_SKELETON
                </h3>
                <div className="flex space-x-4">
                  <SkeletonButton size="sm" />
                  <SkeletonButton size="md" />
                  <SkeletonButton size="lg" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Field Skeletons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              FORM_FIELD_SKELETONS
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Individual form field skeletons with proper labels and input
              styling
            </p>

            <div className="max-w-md mx-auto space-y-6">
              <SkeletonFormField showLabel={true} />
              <SkeletonFormField showLabel={true} />
              <SkeletonFormField showLabel={false} />
            </div>
          </motion.div>

          {/* Card Variants */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono mb-8">
              CARD_VARIANTS
            </h2>
            <p className="text-white/70 font-mono text-sm mb-8">
              Flexible card skeleton with configurable elements
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkeletonCard
                showImage={true}
                showTags={true}
                showButton={true}
              />
              <SkeletonCard
                showImage={false}
                showTags={true}
                showButton={false}
              />
              <SkeletonCard
                showImage={true}
                showTags={false}
                showButton={true}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
