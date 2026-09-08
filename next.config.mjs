/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  // Production performance and security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|ico|webp|woff|woff2|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "Content-Disposition", value: "inline; filename=Shamik_Mondal_Resume.pdf" },
        ],
      },
    ];
  },
};

export default nextConfig;
