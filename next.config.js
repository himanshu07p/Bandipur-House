/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Wildcard to allow all domains
      },
      {
        protocol: 'http',
        hostname: '**', // Optional: Allow all HTTP domains
      },
    ],
  },
};

module.exports = nextConfig;
