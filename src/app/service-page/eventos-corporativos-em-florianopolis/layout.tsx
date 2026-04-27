import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Corporativos em Florianópolis | Taipei Coffee House",
  description: "Espaço para eventos corporativos em Florianópolis. Reuniões, workshops, treinamentos e confraternizações com estrutura completa e vista para o mar.",
  keywords: ["eventos corporativos florianópolis", "reuniões empresariais", "workshops florianópolis", "espaço corporativo cacupé", "eventos empresariais"],
  openGraph: {
    title: "Eventos Corporativos | Taipei Coffee House",
    description: "Espaço completo para eventos corporativos em Florianópolis.",
    url: "https://www.taipeicoffeehouse.com.br/service-page/eventos-corporativos-em-florianopolis",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EventosCorporativosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
