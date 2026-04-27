import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Sociais em Florianópolis | Taipei Coffee House",
  description: "Espaço para eventos sociais em Florianópolis. Aniversários, formaturas, casamentos, chás de bebê e celebrações especiais com vista para o mar em Cacupé.",
  keywords: ["eventos sociais florianópolis", "aniversários florianópolis", "formaturas cacupé", "festas florianópolis", "celebrações vista mar"],
  openGraph: {
    title: "Eventos Sociais | Taipei Coffee House",
    description: "Espaço para eventos sociais e celebrações especiais em Florianópolis.",
    url: "https://www.taipeicoffeehouse.com.br/service-page/eventos-sociais",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EventosSociaisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
