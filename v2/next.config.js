/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAPS_API_KEY: process.env.MAPS_API_KEY,
        GEO_API_KEY: process.env.GEO_API_KEY
      }
}

module.exports = nextConfig
