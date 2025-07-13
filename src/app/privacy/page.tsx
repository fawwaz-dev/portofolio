"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Database, Mail, Trash2, Cookie } from "lucide-react";
import InteractiveText from "@/components/ui/InteractiveText";

export default function PrivacyPage() {
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
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-green" />
              <span className="text-xs sm:text-sm font-mono text-neon-green tracking-wider">
                PRIVACY_PROTOCOL
              </span>
            </motion.div>

            <InteractiveText
              text="PRIVACY_POLICY"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              colors={["#00ff88", "#22d3ee", "#ff0080", "#8b5cf6"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              Your privacy is paramount. This policy outlines how we collect,
              use, and protect your data.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Data Collection */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-electric-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono">
                  DATA_COLLECTION
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  INFORMATION_WE_COLLECT
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Contact Information:</strong> Name and email
                      address when you submit the contact form
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Technical Data:</strong> IP address, browser type,
                      device information, and usage analytics
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Cookies:</strong> Essential cookies for website
                      functionality and performance
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Data Usage */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-electric-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono">
                  HOW_WE_USE_DATA
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  PURPOSE_OF_COLLECTION
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Communication:</strong> Respond to your inquiries
                      and provide support
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Website Improvement:</strong> Analyze usage
                      patterns to enhance user experience
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Security:</strong> Protect against fraud and
                      ensure website security
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Cookie className="w-6 h-6 text-electric-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono">
                  COOKIES_&_TRACKING
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  We use essential cookies to ensure the website functions
                  properly. These cookies are necessary for:
                </p>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Website functionality and performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Security and fraud prevention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Analytics to improve user experience</span>
                  </li>
                </ul>
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed mt-4">
                  You can disable cookies in your browser settings, though this
                  may affect website functionality.
                </p>
              </div>
            </motion.div>

            {/* Data Rights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Trash2 className="w-6 h-6 text-electric-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono">
                  YOUR_RIGHTS
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  DATA_CONTROL
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Access:</strong> Request a copy of your personal
                      data
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Correction:</strong> Update or correct inaccurate
                      information
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Deletion:</strong> Request removal of your
                      personal data
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      <strong>Opt-out:</strong> Unsubscribe from communications
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-electric-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-400 font-mono">
                  CONTACT_US
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  For privacy-related inquiries, data requests, or questions
                  about this policy:
                </p>
                <div className="space-y-2 text-electric-300/80 font-mono text-sm sm:text-base">
                  <p>
                    <strong>Email:</strong> fawwazalfarisi.works@gmail.com
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 30 days
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-full px-6 py-3">
                <span className="text-xs sm:text-sm font-mono text-electric-400 tracking-wider">
                  LAST_UPDATED: JULI_2025
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
