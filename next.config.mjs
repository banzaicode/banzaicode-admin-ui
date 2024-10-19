/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/news/:path*',
        destination: 'http://207.244.247.95:8010/news/:path*',
      },
    ];
  },
};

export default nextConfig;
