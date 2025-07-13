// Design System Constants
export const DESIGN_SYSTEM = {
  // Typography
  typography: {
    hero: {
      title: "text-4xl sm:text-6xl md:text-8xl lg:text-[10rem]",
      subtitle: "text-lg sm:text-xl md:text-3xl lg:text-4xl",
      body: "text-lg sm:text-xl",
    },
    page: {
      title: "text-3xl sm:text-5xl md:text-6xl",
      subtitle: "text-xl sm:text-2xl md:text-3xl",
      body: "text-base sm:text-lg md:text-xl",
    },
    section: {
      title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
      subtitle: "text-lg sm:text-xl md:text-2xl",
      body: "text-sm sm:text-base md:text-lg",
    },
    font: {
      mono: "font-mono",
      sans: "font-sans",
      weights: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
    },
    tracking: {
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
    },
    lineHeight: {
      tight: "leading-tight",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },

  // Spacing
  spacing: {
    section: {
      padding: "py-20 sm:py-24",
      margin: "mb-16 sm:mb-20",
    },
    container: {
      padding: "px-4 sm:px-6 lg:px-8",
      maxWidth: "max-w-7xl",
    },
    grid: {
      gap: "gap-6 sm:gap-8",
    },
  },

  // Buttons
  buttons: {
    primary: {
      base: "inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-green to-electric-400 text-cyber-dark font-bold rounded-none overflow-hidden shadow-2xl border-2 border-neon-green transition-all duration-300",
      clipPath:
        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      hover: "hover:scale-105",
    },
    secondary: {
      base: "inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-neon-green font-bold rounded-none overflow-hidden shadow-2xl border-2 border-neon-green hover:bg-neon-green hover:text-cyber-dark transition-all duration-300",
      clipPath:
        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      hover: "hover:scale-105",
    },
    small: {
      base: "inline-flex items-center space-x-2 px-3 py-2 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-lg font-mono text-sm transition-all duration-300 hover:bg-neon-green/20 hover:border-neon-green/50",
      clipPath:
        "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
      hover: "hover:scale-105",
    },
  },

  // Colors
  colors: {
    primary: {
      neonGreen: "#00ff88",
      electricBlue: "#22d3ee",
      neonPink: "#ff0080",
      neonPurple: "#8b5cf6",
    },
    background: {
      cyberDark: "#0a0a0f",
      cyberDarker: "#050507",
      cyberGray: "#1a1a2e",
    },
    opacity: {
      light: "/10",
      medium: "/20",
      heavy: "/30",
      solid: "/40",
    },
  },

  // Animations
  animations: {
    duration: {
      fast: 300,
      normal: 500,
      slow: 800,
    },
    easing: {
      smooth: "ease-in-out",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    stagger: {
      fast: 0.1,
      normal: 0.2,
      slow: 0.3,
    },
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: "sm:",
    tablet: "md:",
    desktop: "lg:",
    large: "xl:",
  },
} as const;

// Utility functions
export const getButtonClasses = (
  variant: keyof typeof DESIGN_SYSTEM.buttons
) => {
  return DESIGN_SYSTEM.buttons[variant];
};

export const getTypographyClasses = (
  type: keyof typeof DESIGN_SYSTEM.typography,
  element: keyof (typeof DESIGN_SYSTEM.typography)[typeof type]
) => {
  return DESIGN_SYSTEM.typography[type][element];
};
