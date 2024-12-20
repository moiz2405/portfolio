import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.giphy.com'], // Add the domain to allow images from Giphy
  },
};

export default nextConfig;
