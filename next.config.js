/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/Meliah-Food",
  assetPrefix: "/Meliah-Food",
};

module.exports = nextConfig;
