import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taipei Coffee House | Café e Brunch em Cacupé - Florianópolis",
  description: "Café e restaurante em Florianópolis com vista para o mar. Brunch, almoço e cafés especiais em Cacupé. Experiência gastronômica única.",
  keywords: ["restaurante florianópolis", "brunch florianópolis", "café florianópolis", "restaurante cacupé", "vista para o mar", "eventos florianópolis"],
  authors: [{ name: "Taipei Coffee House" }],
  creator: "Taipei Coffee House",
  publisher: "Taipei Coffee House",
  alternates: {
    canonical: "https://www.taipeicoffeehouse.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Taipei Coffee House | Café e Brunch em Cacupé - Florianópolis",
    description: "Café e restaurante em Florianópolis com vista para o mar. Brunch, almoço e cafés especiais em Cacupé.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.taipeicoffeehouse.com.br",
    siteName: "Taipei Coffee House",
    images: [
      {
        url: "https://www.taipeicoffeehouse.com.br/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Taipei Coffee House - Cacupé, Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taipei Coffee House | Café e Brunch em Cacupé - Florianópolis",
    description: "Café e restaurante em Florianópolis com vista para o mar. Brunch, almoço e cafés especiais em Cacupé.",
    images: ["https://www.taipeicoffeehouse.com.br/images/hero/hero-main.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#A84544" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="Florianópolis" />
        <meta name="geo.position" content="-27.4817;-48.5208" />
        <meta name="ICBM" content="-27.4817, -48.5208" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
