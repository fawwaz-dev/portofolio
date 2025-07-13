/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // 🔥 CYBERPUNK ELEGANCE PALETTE
        electric: {
          50: "#f0fdff",
          100: "#ccf7fe",
          200: "#99eefd",
          300: "#66e5fc",
          400: "#22d3ee", // Main electric blue
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        neon: {
          green: "#00ff88", // Bright neon green
          pink: "#ff0080", // Hot pink
          blue: "#00d4ff", // Electric blue
          purple: "#8b5cf6", // Electric purple
          yellow: "#ffff00", // Neon yellow
        },
        cyber: {
          dark: "#0a0a0f", // Deep dark
          darker: "#050507", // Almost black
          gray: "#1a1a2e", // Dark gray
          accent: "#16213e", // Dark blue accent
        },
        glow: {
          blue: "rgba(34, 211, 238, 0.5)",
          green: "rgba(0, 255, 136, 0.5)",
          pink: "rgba(255, 0, 128, 0.5)",
          purple: "rgba(139, 92, 246, 0.5)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "neon-flicker": "neon-flicker 0.15s ease-in-out infinite alternate",
        "cyber-scan": "cyber-scan 3s linear infinite",
        "data-stream": "data-stream 20s linear infinite",
        hologram: "hologram 4s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": {
            boxShadow:
              "0 0 5px var(--glow-color), 0 0 10px var(--glow-color), 0 0 15px var(--glow-color)",
            filter: "brightness(1)",
          },
          "100%": {
            boxShadow:
              "0 0 10px var(--glow-color), 0 0 20px var(--glow-color), 0 0 30px var(--glow-color)",
            filter: "brightness(1.2)",
          },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "cyber-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "data-stream": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        hologram: {
          "0%, 100%": {
            opacity: "0.8",
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            opacity: "1",
            filter: "hue-rotate(90deg)",
          },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)",
        "neon-gradient":
          "linear-gradient(45deg, #00ff88, #00d4ff, #ff0080, #8b5cf6)",
        "cyber-mesh":
          "radial-gradient(ellipse at top, rgba(0,255,136,0.1), transparent), radial-gradient(ellipse at bottom, rgba(0,212,255,0.1), transparent)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
