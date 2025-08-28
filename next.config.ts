import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "starleaders.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "starleaders-dev.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
