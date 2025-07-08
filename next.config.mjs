/** @type {import('next').NextConfig} */
const nextConfig = {
  //   trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chevaldemo.xyz",
      },
    ],
  },
};

export default nextConfig;
