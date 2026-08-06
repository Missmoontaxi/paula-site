/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio-collections/my-portfolio/mountain-life',
        destination: '/fun-stuff/snowboarding',
        permanent: true,
      },
      {
        source: '/portfolio-collections/my-portfolio',
        destination: '/fun-stuff',
        permanent: true,
      },
      {
        source: '/portfolio-collections/:path*',
        destination: '/fun-stuff',
        permanent: true,
      },
      {
        source: '/about-5',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/proof',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
