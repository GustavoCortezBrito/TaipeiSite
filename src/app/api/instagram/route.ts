import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Instagram Access Token is not configured in environment variables." },
      { status: 400 }
    );
  }

  try {
    // Buscar posts do Instagram. O endpoint oficial retorna a mídia recente do usuário.
    // Usamos revalidate: 3600 para cachear a resposta por 1 hora no servidor do Next.js
    const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`;
    
    const response = await fetch(instagramUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Instagram API returned an error:", errorText);
      return NextResponse.json(
        { error: "Instagram API returned an error.", details: errorText },
        { status: response.status }
      );
    }

    const json = await response.json();
    
    if (!json.data || !Array.isArray(json.data)) {
      return NextResponse.json(
        { error: "Invalid response structure from Instagram API" },
        { status: 500 }
      );
    }

    // Formatamos os dados para corresponder ao que o front-end espera
    const posts = json.data
      .filter((post: any) => {
        // Garantimos que a mídia tenha URL válida e ignoramos tipos desconhecidos
        return post.media_url && (post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" || post.media_type === "VIDEO");
      })
      .map((post: any) => ({
        id: post.id,
        // Se for vídeo, priorizamos a thumbnail_url. Caso contrário, usamos a media_url.
        image: post.media_type === "VIDEO" && post.thumbnail_url ? post.thumbnail_url : post.media_url,
        alt: post.caption ? post.caption.slice(0, 100) : "Taipei Coffee House Instagram Post",
        link: post.permalink,
        timestamp: post.timestamp,
        mediaType: post.media_type,
      }))
      // Limitamos a 8 posts para encaixar perfeitamente no grid de 2x4
      .slice(0, 8);

    return NextResponse.json({ posts });
  } catch (error: any) {
    console.error("Failed to fetch Instagram feed:", error);
    return NextResponse.json(
      { error: "Internal Server Error while fetching Instagram feed.", message: error.message },
      { status: 500 }
    );
  }
}
