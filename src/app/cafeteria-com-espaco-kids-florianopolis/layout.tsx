import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafeteria com Espaço Kids em Florianópolis | Taipei Coffee House",
  description: "Cafeteria com espaço kids em Florianópolis. Ambiente seguro e divertido para crianças enquanto você aproveita cafés especiais e refeições em Cacupé.",
  keywords: ["cafeteria kids florianópolis", "espaço kids cacupé", "café com crianças", "restaurante kids friendly", "espaço infantil"],
  openGraph: {
    title: "Cafeteria com Espaço Kids | Taipei Coffee House",
    description: "Cafeteria com espaço kids seguro e divertido em Florianópolis.",
    url: "https://www.taipeicoffeehouse.com.br/cafeteria-com-espaco-kids-florianopolis",
    type: "website",
    locale: "pt_BR",
  },
};

export default function EspacoKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
