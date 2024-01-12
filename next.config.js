/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.eraspace.com',
        port: '',
        pathname: '/media/catalog/**'
      },
      {
        protocol: 'https',
        hostname: 'i1.adis.ws',
        port: '',
        pathname: '/i/**'
      }
    ]
  }
}

module.exports = nextConfig
