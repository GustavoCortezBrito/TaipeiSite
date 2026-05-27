import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurante em Cacupé Florianópolis | Taipei Coffee House",
  description: "Restaurante em Cacupé com vista para o mar. Localização privilegiada, estacionamento gratuito e gastronomia especial em Florianópolis.",
  keywords: ["restaurante cacupé", "restaurante florianópolis", "onde comer cacupé", "restaurante vista mar", "taipei localização"],
  alternates: {
    canonical: "https://www.taipeicoffeehouse.com.br/restaurante-em-cacupe",
  },
  openGraph: {
    title: "Restaurante em Cacupé | Taipei Coffee House",
    description: "Restaurante em Cacupé com vista para o mar and gastronomia especial.",
    url: "https://www.taipeicoffeehouse.com.br/restaurante-em-cacupe",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RestauranteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
