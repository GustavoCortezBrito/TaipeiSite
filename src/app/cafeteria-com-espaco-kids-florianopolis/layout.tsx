import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafeteria com Espaço Kids e Pet Friendly | Taipei Coffee House",
  description: "Cafeteria com espaço kids e pet friendly em Florianópolis. Ambiente seguro para crianças e pets na área externa com vista para o mar em Cacupé.",
  keywords: ["cafeteria kids florianópolis", "espaço kids cacupé", "pet friendly florianópolis", "café com crianças", "restaurante pet friendly", "espaço infantil", "cachorro permitido"],
  openGraph: {
    title: "Cafeteria com Espaço Kids e Pet Friendly | Taipei Coffee House",
    description: "Cafeteria com espaço kids seguro e área pet friendly em Florianópolis. Traga toda a família!",
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
