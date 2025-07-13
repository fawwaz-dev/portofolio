"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { submitContact } from "@/lib/supabase";
import CyberButton from "@/components/ui/CyberButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      await submitContact(formData);
      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-6"
    >
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <label
          htmlFor="name"
          className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider"
        >
          <User className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          NAME_FIELD
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          variants={inputVariants}
          whileFocus="focus"
          onBlur={() => {}}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 text-sm sm:text-base"
          placeholder="Enter your name..."
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <label
          htmlFor="email"
          className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider"
        >
          <Mail className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          EMAIL_ADDRESS
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          variants={inputVariants}
          whileFocus="focus"
          onBlur={() => {}}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 text-sm sm:text-base"
          placeholder="your.email@example.com"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative"
      >
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-mono text-electric-400 mb-2 sm:mb-3 tracking-wider"
        >
          <MessageSquare className="inline w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          MESSAGE_CONTENT
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          variants={inputVariants}
          whileFocus="focus"
          onBlur={() => {}}
          className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-cyber-gray/50 backdrop-blur-xl border-2 border-electric-400/30 rounded-lg text-white placeholder-electric-400/50 font-mono transition-all duration-300 focus:outline-none focus:ring-0 resize-none text-sm sm:text-base"
          placeholder="Describe your project or inquiry..."
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-400/5 rounded-lg pointer-events-none" />
      </motion.div>

      {/* Submit Button */}
      <CyberButton
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        size="md"
        className="w-full"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-cyber-dark" />
            <span className="whitespace-nowrap text-xs sm:text-sm">
              TRANSMITTING...
            </span>
          </div>
        ) : (
          <>
            <Send className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="whitespace-nowrap text-xs sm:text-sm">
              TRANSMIT_MESSAGE
            </span>
          </>
        )}
      </CyberButton>

      {/* Status Messages */}
      {submitStatus.type !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-lg border ${
            submitStatus.type === "success"
              ? "bg-neon-green/10 border-neon-green/30 text-neon-green"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          <div className="flex items-center space-x-2">
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="font-mono text-sm">{submitStatus.message}</span>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}
