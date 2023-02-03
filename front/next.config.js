/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost, https://project-car-production.up.railway.app'],
  },
}

module.exports = nextConfig
