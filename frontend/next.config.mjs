/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "wordpress",
        port: "80",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
