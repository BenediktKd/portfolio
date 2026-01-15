/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready: detect all errors
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
