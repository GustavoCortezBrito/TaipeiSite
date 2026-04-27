import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Taipei Coffee House | Nossa História e Valores",
  description: "Conheça a história do Taipei Coffee House, nossos valores e o que nos torna únicos. Gastronomia com influência asiática e hospitalidade em Florianópolis.",
  keywords: ["sobre taipei", "história taipei coffee house", "valores", "missão", "café florianópolis"],
  openGraph: {
    title: "Sobre o Taipei Coffee House | Nossa História",
    description: "Conheça nossa história, valores e o que nos torna especiais.",
    url: "https://www.taipeicoffeehouse.com.br/sobre-o-taipei",
    type: "website",
    locale: "pt_BR",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
