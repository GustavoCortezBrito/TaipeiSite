import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taipeicoffeehouse.com.br";

  // Rotas ativas no projeto Next.js (migradas do Wix)
  const routes = [
    "",
    "/brunch",
    "/cafeteria-com-espaco-kids-florianopolis",
    "/espaco-eventos-florianopolis",
    "/menu",
    "/restaurante-em-cacupe",
    "/sobre-o-taipei",
    "/service-page/eventos-corporativos-em-florianopolis",
    "/service-page/eventos-sociais",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
