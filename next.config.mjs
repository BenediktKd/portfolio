/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready: detect all errors
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  images: {
    // Keep unoptimized for now - can optimize later with proper image setup
    unoptimized: true,
  },
}

export default nextConfig
