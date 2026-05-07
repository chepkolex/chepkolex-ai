/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://chepkolex-web.vercel.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;