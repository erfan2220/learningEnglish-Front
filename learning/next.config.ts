import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '103.75.196.105',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
