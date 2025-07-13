import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CursorFollower from "@/components/effects/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CyberGrid from "@/components/effects/CyberGrid";
import CursorDebug from "@/components/CursorDebug";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fawwaz Al Farisi - Software Developer",
  description:
    "Full-stack developer building scalable apps using Next.js, Laravel, React, Vue, Astro, Tailwind CSS, Framer Motion, TypeScript, Node.js, PostgreSQL, and MySQL.",
  keywords: [
    "software developer",
    "full-stack developer",
    "web development",
    "cyberpunk",
    "next.js",
    "react",
    "typescript",
    "tailwind css",
    "framer motion",
  ],
  authors: [{ name: "Fawwaz Al Farisi" }],
  creator: "Fawwaz Al Farisi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fawwaz.dev",
    title: "Fawwaz Al Farisi - Software Developer",
    description:
      "Full-stack developer building scalable apps using Next.js, Laravel, React, Vue, Astro, Tailwind CSS, Framer Motion, TypeScript, Node.js, PostgreSQL, and MySQL.",
    siteName: "Fawwaz Al Farisi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawwaz Al Farisi - Software Developer",
    description:
      "Full-stack developer building scalable apps using Next.js, Laravel, React, Vue, Astro, Tailwind CSS, Framer Motion, TypeScript, Node.js, PostgreSQL, and MySQL.",
  },
  other: {
    "theme-color": "#00ff88",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Back/Forward Cache Support */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    }
                  }
                });

                // Back/Forward Cache Support
                window.addEventListener('pageshow', (event) => {
                  if (event.persisted) {
                    console.log('Page restored from back/forward cache');
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SmoothScroll>
            <div className="relative min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
              {/* Global Effects - Conditional based on performance */}
              <CursorFollower />
              <ScrollProgress />
              <CyberGrid />
              {process.env.NODE_ENV === "development" && <CursorDebug />}

              {/* Cyberpunk Animated Background - Optimized */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

                {/* Floating Neon Orbs - Reduced complexity */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-2xl animate-bounce-slow" />

                {/* Scanning Lines - Conditional */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent animate-cyber-scan" />
                </div>
              </div>

              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
