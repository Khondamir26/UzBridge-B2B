import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during build on Vercel
  },
  images: {
    domains: ["dissingweitling.com", "images.unsplash.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
