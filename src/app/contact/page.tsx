"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  MessageSquare,
  Instagram,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import InteractiveText from "@/components/ui/InteractiveText";

const contactMetadata = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "fawwazalfarisi.work@gmail.com",
    color: "#00ff88",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Indonesia",
    color: "#22d3ee",
  },
  {
    icon: Clock,
    label: "TIMEZONE",
    value: "UTC+7 (Available 24/7)",
    color: "#ff0080",
  },
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

        {/* Neon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-neon-pink/5 via-transparent to-electric-400/5" />

        {/* Floating Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-neon-pink/5 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-neon-pink/30 rounded-full px-6 py-3 mb-8"
                style={{ boxShadow: "0 0 20px rgba(255, 0, 128, 0.2)" }}
              >
                <MessageSquare className="w-5 h-5 text-neon-pink" />
                <span className="text-sm font-mono text-neon-pink tracking-wider">
                  CONTACT_PROTOCOL.EXE
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <InteractiveText
                  text="CONTACT_PROTOCOL"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 break-words"
                  colors={["#ff0080", "#22d3ee", "#00ff88", "#8b5cf6"]}
                />
              </motion.div>

              {/* Invitation Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-xl md:text-2xl text-electric-300/80 max-w-4xl mx-auto mb-12 leading-relaxed font-mono"
              >
                Let's build something{" "}
                <span className="text-neon-green font-bold animate-neon-flicker">
                  exceptional
                </span>{" "}
                together. Ready to bring your digital vision to life?
              </motion.p>
            </motion.div>

            {/* Contact Metadata Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16"
            >
              {contactMetadata.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-4 sm:p-6 bg-cyber-gray/30 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-lg group-hover:bg-opacity-30 transition-all duration-300"
                      style={{
                        backgroundColor: `${item.color}20`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/60 uppercase tracking-wider font-mono mb-1">
                        {item.label}
                      </p>
                      <p className="text-white font-mono text-sm break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h3 className="text-electric-400 font-mono text-sm uppercase tracking-wider mb-6">
                CONNECT_VIA_SOCIAL
              </h3>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-3 sm:p-4 bg-cyber-gray/30 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  >
                    <social.icon
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
