/** @type {import('next').NextConfig} */
const path = require('path')
const localePath = path.resolve('./public/locales')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'build',
  compiler: {
    styledComponents: true
  },
  experimental:{
    styledComponents: true
  },
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
      return {
          '/': { page: '/' },
      };
  },
  images: {
      loader: 'akamai',
      path:'',
  }
};

module.exports = nextConfig


/**
active-class-name
async rewrites() {
  return [
    {
      source: '/blog',
      destination: '/news',
    },
  ]
},
*/