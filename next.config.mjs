import 'dotenv/config';

const { NEWS_API_URL } = process.env;

if (!NEWS_API_URL) {
  throw new Error('Missing NEWS_API_URL environment variable');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/news/:path*',
        destination: `${NEWS_API_URL}/news/:path*`,
      },
    ];
  },
};

export default nextConfig;
