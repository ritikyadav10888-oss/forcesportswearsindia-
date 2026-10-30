/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Standalone only for Firebase App Hosting; Vercel uses its own Next.js runtime
  ...(process.env.VERCEL ? {} : { output: 'standalone' }),
  // /public files are served first; any asset path not in the deploy is streamed from Firebase Storage
  async rewrites() {
    return {
      fallback: [
        { source: '/:path(.*\\.(?:png|jpg|jpeg|webp|svg|gif|pdf|PNG|JPG|JPEG|WEBP))', destination: '/api/asset/:path' },
      ],
    };
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: '*.firebasestorage.app' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
