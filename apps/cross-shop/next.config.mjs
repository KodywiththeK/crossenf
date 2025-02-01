/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3cross-media.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
