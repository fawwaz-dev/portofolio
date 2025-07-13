"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { Project } from "@/lib/supabase";
import CyberButton from "@/components/ui/CyberButton";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Custom hook for responsive tag overflow
function useTagOverflow(technologies: string[]) {
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);
  console.log(technologies);

  useEffect(() => {
    const calculateVisibleTags = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      let currentWidth = 0;
      const gap = 8; // 2 * 4px gap
      const visible: string[] = [];
      let hidden = 0;

      // Reset refs array
      tagRefs.current = tagRefs.current.slice(0, technologies.length);

      for (let i = 0; i < technologies.length; i++) {
        const tagElement = tagRefs.current[i];
        if (!tagElement) continue;

        const tagWidth = tagElement.offsetWidth;
        const wouldFit = currentWidth + tagWidth + gap <= containerWidth;

        if (wouldFit) {
          visible.push(technologies[i]);
          currentWidth += tagWidth + gap;
        } else {
          hidden++;
        }
      }

      setVisibleTags(visible);
      setHiddenCount(hidden);
    };

    // Calculate on mount and resize
    calculateVisibleTags();
    const resizeObserver = new ResizeObserver(calculateVisibleTags);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [technologies]);

  return { visibleTags, hiddenCount, containerRef, tagRefs };
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={project.id}
      variants={itemVariants}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative"
    >
      {/* Enhanced Project Card */}
      <div className="relative bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-electric-400/50 hover:bg-cyber-gray/30">
        {/* Card Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-400/5 via-transparent to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Image/Thumbnail */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {project.image_url ? (
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-electric-400/20 to-neon-green/20" />
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-16 h-16 text-electric-400/50 group-hover:text-electric-400 transition-colors duration-300" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-mono group-hover:text-electric-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm text-electric-300/70 mb-4 font-mono leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies
              ?.slice(0, 3)
              .map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs font-mono bg-electric-400/10 text-electric-400 border border-electric-400/30 rounded-md"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                  }}
                >
                  #{tech.toLowerCase()}
                </span>
              ))}
            {project.technologies && project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-mono bg-electric-400/10 text-electric-400 border border-electric-400/30 rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {project.project_url && (
              <CyberButton variant="small" href={project.project_url} external>
                <ExternalLink className="w-4 h-4" />
                <span>VIEW</span>
              </CyberButton>
            )}

            {project.github_url && (
              <CyberButton variant="small" href={project.github_url} external>
                <Github className="w-4 h-4" />
                <span>CODE</span>
              </CyberButton>
            )}
          </div>
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-400/20 via-transparent to-neon-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
