/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.eraspace.com',
        port: '',
        pathname: '/media/catalog/**',
      },
    ],
  },
}

module.exports = nextConfig
