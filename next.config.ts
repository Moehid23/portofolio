import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for Firebase Hosting
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trae-api-sg.mchost.guru",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
