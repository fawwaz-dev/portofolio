"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  ArrowUp,
  Home,
  User,
  FolderOpen,
  Mail,
  Instagram,
} from "lucide-react";
import CyberButton from "@/components/ui/CyberButton";

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fawwaz-dev",
    icon: Github,
    color: "#00ff88",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/fawwaz-al-farisi-a35690255",
    icon: Linkedin,
    color: "#22d3ee",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fawwazalfarisi_",
    icon: Instagram,
    color: "#ff0080",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cyber-darker border-t border-electric-400/20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5" />

      {/* Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
            animate={{ y: ["0vh", "100vh"] }}
            transition={{
              duration: 4,
              delay: i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start"
          >
            {/* Logo/Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-electric-400 rounded-lg flex items-center justify-center">
                  <span className="text-cyber-dark font-bold text-sm">FA</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono tracking-wider">
                    FAWWAZ AL FARISI
                  </h3>
                  <p className="text-electric-400 text-xs sm:text-sm font-mono">
                    SOFTWARE_DEVELOPER
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs">
                Full-stack developer building scalable apps using Next.js,
                Laravel, React, Vue, Astro, Tailwind CSS, Framer Motion,
                TypeScript, Node.js, PostgreSQL, and MySQL.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-electric-400 font-mono text-sm uppercase tracking-wider mb-4">
                NAVIGATION
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center space-x-3 text-white/80 hover:text-neon-green transition-colors duration-300"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-mono text-sm tracking-wide">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-electric-400 font-mono text-sm uppercase tracking-wider mb-4">
                CONNECT
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-3 bg-cyber-gray/30 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  >
                    <social.icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: social.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        backgroundColor:
                          social.color === "#ff0080" ? "#ff0080" : social.color,
                        boxShadow:
                          social.color === "#ff0080"
                            ? "0 0 20px rgba(255, 0, 128, 0.5)"
                            : "none",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        background:
                          social.color === "#ff0080"
                            ? "radial-gradient(circle, rgba(255, 0, 128, 0.3) 0%, transparent 70%)"
                            : "none",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <CyberButton onClick={scrollToTop} variant="primary" size="sm">
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>BACK_TO_TOP</span>
            </CyberButton>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-electric-400/20 bg-cyber-gray/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-electric-400 mb-2 font-mono">
                    FAWWAZ AL FARISI
                  </h4>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-white/60 font-mono">
                  © FAWWAZ AL FARISI 2025 — ALL RIGHTS RESERVED
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-neon-green transition-colors duration-300 font-mono"
              >
                PRIVACY_POLICY
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-neon-green transition-colors duration-300 font-mono"
              >
                TERMS_OF_SERVICE
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent pointer-events-none" />
    </footer>
  );
}
