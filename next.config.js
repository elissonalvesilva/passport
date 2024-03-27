/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 600,
  },
  output: "standalone",
  env: {
    PASSPORT_API_URL: process.env.PASSPORT_API_URL,
  },
}

module.exports = nextConfig
