import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taipei Coffee House | Cafeteria, Brunch e Almoço em Cacupé - Florianópolis",
  description: "Restaurante e Café em Florianópolis com Vista para o Mar. Brunch, almoço, cafés especiais e eventos em Cacupé. Uma experiência gastronômica com influência asiática.",
  keywords: ["restaurante florianópolis", "brunch florianópolis", "café florianópolis", "restaurante cacupé", "vista para o mar", "eventos florianópolis"],
  openGraph: {
    title: "Taipei Coffee House | Cafeteria, Brunch e Almoço em Cacupé - Florianópolis",
    description: "Restaurante e Café em Florianópolis com Vista para o Mar. Brunch, almoço, cafés especiais e eventos em Cacupé.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.taipeicoffeehouse.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
