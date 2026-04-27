import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espaço para Eventos em Florianópolis | Taipei Coffee House",
  description: "Espaço para eventos em Florianópolis com vista para o mar. Aniversários, formaturas, eventos corporativos e celebrações especiais em Cacupé.",
  keywords: ["espaço eventos florianópolis", "eventos cacupé", "salão festas florianópolis", "eventos vista mar", "celebrações florianópolis"],
  openGraph: {
    title: "Espaço para Eventos | Taipei Coffee House",
    description: "Espaço para eventos com vista para o mar em Florianópolis.",
    url: "https://www.taipeicoffeehouse.com.br/espaco-eventos-florianopolis",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EspacoEventosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
