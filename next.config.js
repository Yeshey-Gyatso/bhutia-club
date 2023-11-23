/** @type {import('next').NextConfig} */
const nextConfig = {
    
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

const { i18n } = require('./next-i18next.config')
module.exports = {
  i18n,
}
