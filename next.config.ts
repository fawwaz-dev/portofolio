import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  // Enable modern JavaScript features
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize for back/forward cache
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size and reduce unused JavaScript
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
            priority: 20,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: "lucide-react",
            chunks: "all",
            priority: 20,
          },
          // Separate React for better caching
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 30,
          },
          // Separate Next.js for better caching
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: "next",
            chunks: "all",
            priority: 25,
          },
        },
      };

      // Enable minification
      config.optimization.minimize = true;

      // Remove unused code
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Enable tree shaking
      config.optimization.providedExports = true;
    }

    // Optimize for modern browsers
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "react",
      "react-dom": "react-dom",
    };

    return config;
  },
  // Enable modern JavaScript features
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
