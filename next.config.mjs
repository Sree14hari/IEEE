/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'www.ieeesbsbce.in',
      },
      {
        protocol: 'https',
        hostname: 'sbce.ac.in',
      },
    ],
  },
};

export default nextConfig;
