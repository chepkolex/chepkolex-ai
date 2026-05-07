/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your existing rewrites ...
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "font-src 'self' https://*.vercel-storage.com vercel.com *.vercel.com vercel.live *.gstatic.com; default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel.com; style-src 'self' 'unsafe-inline' *.vercel.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;