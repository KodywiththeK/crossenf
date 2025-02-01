/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3cross-media.s3.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "bit.ly",
      },
      {
        protocol: "https",
        hostname: "bit.ly",
      },
    ],
  },
};

export default nextConfig;
