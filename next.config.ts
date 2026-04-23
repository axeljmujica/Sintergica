import type { NextConfig } from "next";

// Static export is opt-in via STATIC_EXPORT=1 (used for cPanel/shared hosting).
// On Vercel / server deployments we leave it off so middleware, ISR, headers,
// and image optimization work natively.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  compress: true,
  images: {
    // Required for static export; harmless in dev.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "blog.sintergica.ai",
      },
    ],
  },
  async redirects() {
    // On server deployments (Vercel), /, /investigacion/blog, etc. need to
    // resolve to the localized routes. On static export these are handled by
    // .htaccess (Apache); here we replicate the minimum needed set.
    if (isStaticExport) return [];
    return [
      { source: "/investigacion/blog", destination: "/recursos/blog", permanent: true },
      { source: "/investigacion/prensa", destination: "/recursos/prensa", permanent: true },
      { source: "/empresa/eventos", destination: "/recursos/eventos", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/videos/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
};

export default nextConfig;
