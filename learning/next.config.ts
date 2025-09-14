import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true },

  /* config options here */
   // trailingSlash: true,
   //  async rewrites() {
   //
   //   return [
   //     {
   //       source: "/api/:path*",
   //       destination: "http://103.75.196.105/api/:path*", // your nginx → gunicorn
   //     },
   //   ];
   // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '127.0.0.1',
  //       port: '8000',
  //       pathname: '/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
