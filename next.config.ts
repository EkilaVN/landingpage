import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketifythemes.net",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "smomedia.vn",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "goldenowl.asia",
      },
      {
        protocol: "https",
        hostname: "d2dkqamqz2k831.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "lanit.com.vn",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "admin.ekila.vn",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
