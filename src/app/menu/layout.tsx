import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Taipei Coffee House | Cafés, Brunch e Pratos Especiais",
  description: "Descubra nosso menu com cafés especiais, brunch, sanduíches gourmet, doces artesanais e pratos com influência asiática em Florianópolis.",
  keywords: ["menu taipei", "cardápio florianópolis", "cafés especiais", "brunch menu", "comida asiática florianópolis"],
  openGraph: {
    title: "Menu Taipei Coffee House | Cafés, Brunch e Pratos Especiais",
    description: "Descubra nosso menu com cafés especiais, brunch, sanduíches gourmet e pratos autorais.",
    url: "https://www.taipeicoffeehouse.com.br/menu",
    type: "website",
    locale: "pt_BR",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
