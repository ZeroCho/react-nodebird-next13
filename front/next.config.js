/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
