/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://adarshpg-registration-page.onrender.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
