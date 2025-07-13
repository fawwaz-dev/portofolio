"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Copyright,
  AlertTriangle,
  Users,
  Settings,
} from "lucide-react";
import InteractiveText from "@/components/ui/InteractiveText";

export default function TermsPage() {
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
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              style={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-electric-400" />
              <span className="text-xs sm:text-sm font-mono text-electric-400 tracking-wider">
                TERMS_PROTOCOL
              </span>
            </motion.div>

            <InteractiveText
              text="TERMS_OF_SERVICE"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 px-2 break-words"
              colors={["#22d3ee", "#00ff88", "#ff0080", "#8b5cf6"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              By using this website, you agree to these terms and conditions
              governing your use of our services.
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
            {/* Acceptance */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Shield className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  ACCEPTANCE_OF_TERMS
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement. If you
                  do not agree to abide by the above, please do not use this
                  service.
                </p>
              </div>
            </motion.div>

            {/* Usage Rules */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Users className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  USAGE_RULES
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  PERMITTED_USES
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      View and interact with website content for personal,
                      non-commercial use
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      Contact us through provided forms for legitimate inquiries
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Share content through social media platforms</span>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-neon-pink font-mono mb-4 mt-6">
                  PROHIBITED_USES
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-pink">•</span>
                    <span>
                      Attempting to gain unauthorized access to our systems
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-pink">•</span>
                    <span>Using automated tools to scrape or extract data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-pink">•</span>
                    <span>
                      Transmitting malicious code or attempting to disrupt
                      service
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Copyright className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  INTELLECTUAL_PROPERTY
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  OWNERSHIP
                </h3>
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  All content on this website, including but not limited to
                  text, graphics, logos, images, and software, is the property
                  of Fawwaz and is protected by copyright laws. You may not
                  reproduce, distribute, or create derivative works without
                  explicit permission.
                </p>

                <h3 className="text-lg font-bold text-neon-green font-mono mb-4 mt-6">
                  PERMITTED_USE
                </h3>
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  You may view and interact with the content for personal,
                  non-commercial purposes. Any other use requires written
                  permission from Fawwaz.
                </p>
              </div>
            </motion.div>

            {/* Limitations */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  LIMITATIONS_OF_LIABILITY
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  DISCLAIMER
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      The website is provided &quot;as is&quot; without
                      warranties of any kind
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      We are not liable for any damages arising from use of the
                      website
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      We do not guarantee uninterrupted or error-free service
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      External links are not under our control and we are not
                      responsible for their content
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* User Responsibility */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Users className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  USER_RESPONSIBILITY
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  YOUR_OBLIGATIONS
                </h3>
                <ul className="space-y-3 text-electric-300/80 font-mono text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Provide accurate information when contacting us</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Respect our intellectual property rights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>
                      Use the website in compliance with applicable laws
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green">•</span>
                    <span>Report any security vulnerabilities or issues</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Modifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Settings className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  MODIFICATIONS_&_TERMINATION
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-neon-green font-mono mb-4">
                  CHANGES_TO_TERMS
                </h3>
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting. Your
                  continued use of the website constitutes acceptance of the
                  modified terms.
                </p>

                <h3 className="text-lg font-bold text-neon-green font-mono mb-4 mt-6">
                  TERMINATION
                </h3>
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  We may terminate or suspend access to our website immediately,
                  without prior notice, for any reason, including breach of
                  these terms.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <Shield className="w-6 h-6 text-electric-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-electric-400 font-mono break-words">
                  CONTACT_INFORMATION
                </h2>
              </div>

              <div className="bg-cyber-gray/20 backdrop-blur-xl border border-electric-400/20 rounded-xl p-6 space-y-4">
                <p className="text-electric-300/80 font-mono text-sm sm:text-base leading-relaxed">
                  For questions about these terms or to report violations:
                </p>
                <div className="space-y-2 text-electric-300/80 font-mono text-sm sm:text-base">
                  <p>
                    <strong>Email:</strong> legal@fawwaz.dev
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 7 business days
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-full px-6 py-3">
                <span className="text-xs sm:text-sm font-mono text-electric-400 tracking-wider">
                  LAST_UPDATED: JULY_2025
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
