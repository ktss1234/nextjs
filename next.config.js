/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.codemobiles.com",
        port: "",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        
        port: '8085',
        pathname: '/images/**',
      },
    ],
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
