/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets-in.bmscdn.com'], // Add the hostname here
  },
};

module.exports = nextConfig;
