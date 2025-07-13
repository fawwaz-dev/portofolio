"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import InteractiveText from "@/components/ui/InteractiveText";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "fawwazalfarisi.works@gmail.com",
    color: "neon-green",
    colorValue: "#00ff88",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+62 882-2680-4934",
    color: "electric-400",
    colorValue: "#22d3ee",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Indonesia",
    color: "neon-pink",
    colorValue: "#ff0080",
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

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cyber-darker relative z-10 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-cyber-gray/50 backdrop-blur-xl border border-neon-pink/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              style={{ boxShadow: "0 0 20px rgba(255, 0, 128, 0.2)" }}
            >
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-pink" />
              <span className="text-xs sm:text-sm font-mono text-neon-pink tracking-wider">
                CONTACT_PROTOCOL
              </span>
            </motion.div>

            <InteractiveText
              text="GET_IN_TOUCH"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
              colors={["#ff0080", "#22d3ee", "#00ff88", "#8b5cf6"]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-electric-300/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-mono px-2"
            >
              Ready to bring your digital vision to life? Let's collaborate and
              create something extraordinary together.
            </motion.p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-electric-400 mb-6 font-mono">
                  CONNECTION_POINTS
                </h3>
                <p className="text-white/70 font-mono mb-8 leading-relaxed text-sm">
                  Multiple channels available for seamless communication and
                  project collaboration.
                </p>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-cyber-gray/30 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    <div
                      className="p-3 rounded-lg group-hover:bg-opacity-30 transition-all duration-300"
                      style={{
                        backgroundColor: `${info.colorValue}20`,
                        border: `1px solid ${info.colorValue}30`,
                      }}
                    >
                      <info.icon
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{ color: info.colorValue }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-mono mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-mono text-sm sm:text-base break-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-neon-green/10 to-electric-400/10 border border-neon-green/30 rounded-xl backdrop-blur-sm"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 136, 0.1)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-neon-green font-mono text-sm">
                    STATUS: AVAILABLE_FOR_PROJECTS
                  </span>
                </div>
                <p className="text-white/70 font-mono text-sm mt-2">
                  Response time: &lt; 24 hours
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                variants={itemVariants}
                className="p-3 sm:p-4 md:p-6 lg:p-8 bg-cyber-gray/30 backdrop-blur-xl border border-neon-pink/30 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 0 30px rgba(255, 0, 128, 0.1)",
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-electric-400 ml-2 sm:ml-4">
                    contact_form.exe
                  </span>
                </div>

                <ContactForm />
              </motion.div>

              {/* Form Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-electric-400/5 rounded-2xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4 p-6 bg-cyber-gray/50 backdrop-blur-xl border border-electric-400/30 rounded-xl">
              <Send className="w-6 h-6 text-electric-400 animate-pulse" />
              <span className="text-electric-400 font-mono">
                Ready to start your next project?
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
