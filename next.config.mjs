/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready: detect all errors
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
}

export default nextConfig
