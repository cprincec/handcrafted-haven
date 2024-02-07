/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl.dropboxusercontent.com',
        port: '',
        pathname: '/scl/fi/*/*',
      },
    ],
  },
};

module.exports = nextConfig;
