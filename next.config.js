const sassOptions = {
  includePaths: ["./src"],
  prependData: `@import "./styles/main.scss";`,
};

const imageOptions = {
  domains: ["flagcdn.com", "upload.wikimedia.org"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions,
  images: imageOptions,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
