/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/melliah-food",
  assetPrefix: "/melliah-food",
};

module.exports = nextConfig;
