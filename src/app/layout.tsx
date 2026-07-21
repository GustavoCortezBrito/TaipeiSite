import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// IDs de Rastreamento
const META_PIXEL_ID = "1004217395784376";
const GA_TRACKING_ID = "G-6CJ4J83H41";

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
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google9cd2227f30a2ba37",
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
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
