/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  swcMinify: false,
  productionBrowserSourceMaps: true,
  experimental: {
    // Required:
    appDir: true,
  },
  webpack: config => {

    config.module.rules.push({
      test: /\.min\.js$/,
      type: "asset/resource"
    });

    return config;
  }
};

module.exports = nextConfig;
