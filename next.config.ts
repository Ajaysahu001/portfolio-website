import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimisation ──────────────────────────────────────────────────────
  images: {
    // Serve modern formats (WebP/AVIF) automatically
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints aligned to Tailwind's default screens
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // ── Compression ─────────────────────────────────────────────────────────────
  compress: true,

  // ── Security headers ────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Force HTTPS
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Control referrer info sent to external sites
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Minimal permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-cache for static assets
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache sitemap/robots for 1 day
        source: "/(sitemap.xml|robots.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=43200" },
        ],
      },
    ];
  },

  // ── Redirects ───────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Ensure trailing-slash-free canonical URLs
      {
        source: "/projects/",
        destination: "/projects",
        permanent: true,
      },
      // Redirect legacy favicon.ico requests to the generated icon route
      {
        source: "/favicon.ico",
        destination: "/icon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
