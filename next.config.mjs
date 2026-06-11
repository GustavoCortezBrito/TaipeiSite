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
      // Redireciona a página principal antiga do Wix para evitar 404 e transferir autoridade
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicial',
        destination: '/',
        permanent: true,
      },
      // Redireciona caminhos comuns em português para suas novas rotas
      {
        source: '/cardapio',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/sobre-o-taipei',
        permanent: true,
      },
      {
        source: '/quem-somos',
        destination: '/sobre-o-taipei',
        permanent: true,
      },
      {
        source: '/sobre-nos',
        destination: '/sobre-o-taipei',
        permanent: true,
      },
      {
        source: '/contato',
        destination: '/#contato-form',
        permanent: true,
      },
      {
        source: '/eventos',
        destination: '/espaco-eventos-florianopolis',
        permanent: true,
      },
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
      // Redireciona variações com acento da página Espaço Kids
      {
        source: '/cafeteria-com-espa%C3%A7o-kids-florian%C3%B3polis',
        destination: '/cafeteria-com-espaco-kids-florianopolis',
        permanent: true,
      },
      {
        source: '/cafeteria-com-espaço-kids-florianópolis',
        destination: '/cafeteria-com-espaco-kids-florianopolis',
        permanent: true,
      },
      {
        source: '/cafeteria-com-espaco-kids-florian%C3%B3polis',
        destination: '/cafeteria-com-espaco-kids-florianopolis',
        permanent: true,
      },
      {
        source: '/cafeteria-com-espa%C3%A7o-kids-florianopolis',
        destination: '/cafeteria-com-espaco-kids-florianopolis',
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
