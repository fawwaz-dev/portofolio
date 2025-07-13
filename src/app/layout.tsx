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
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
              {/* Global Effects */}
              <CursorFollower />
              <ScrollProgress />
              <CyberGrid />
              <CursorDebug />

              {/* Cyberpunk Animated Background */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

                {/* Floating Neon Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-400/5 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-2xl animate-bounce-slow" />

                {/* Scanning Lines */}
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
