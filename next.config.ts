import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos in the "What it is" section.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
