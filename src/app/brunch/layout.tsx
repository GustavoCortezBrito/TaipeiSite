import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brunch Taipei Coffee House | Brunch em Florianópolis com Vista Mar",
  description: "Brunch especial aos finais de semana em Florianópolis. Pratos autorais, cafés especiais e vista para o mar em Cacupé. Reserve sua mesa!",
  keywords: ["brunch florianópolis", "brunch cacupé", "brunch fim de semana", "café da manhã florianópolis", "brunch vista mar"],
  openGraph: {
    title: "Brunch Taipei Coffee House | Brunch em Florianópolis",
    description: "Brunch especial aos finais de semana com pratos autorais e vista para o mar.",
    url: "https://www.taipeicoffeehouse.com.br/brunch",
    type: "website",
    locale: "pt_BR",
  },
};

export default function BrunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
