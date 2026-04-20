/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  async redirects() {
    return [
      // Adicionar redirects 301 aqui se necessário após a migração
    ];
  },
};

export default nextConfig;
