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
      // Redireciona a página de eventos que tinha acento/cedilha no Wix
      {
        source: '/espa%C3%A7o-eventos-florianopolis',
        destination: '/espaco-eventos-florianopolis',
        permanent: true,
      },
      {
        source: '/espaço-eventos-florianopolis',
        destination: '/espaco-eventos-florianopolis',
        permanent: true,
      },
      // Redireciona a página de eventos corporativos que tinha acento no Wix
      {
        source: '/service-page/eventos-corporativos-em-florian%C3%B3polis',
        destination: '/service-page/eventos-corporativos-em-florianopolis',
        permanent: true,
      },
      {
        source: '/service-page/eventos-corporativos-em-florianópolis',
        destination: '/service-page/eventos-corporativos-em-florianopolis',
        permanent: true,
      },
      // Redireciona serviços antigos do Wix (agendamento e loja) para evitar erros 404
      {
        source: '/booking-services/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/store-categories/:path*',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/product-page/:path*',
        destination: '/menu',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
