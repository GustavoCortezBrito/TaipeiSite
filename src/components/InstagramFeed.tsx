"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, Film, Images, Loader2 } from "lucide-react";
import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/taipeicoffeehouse/";

// Fallback com fotos locais — usado enquanto não há token da API configurado
const FALLBACK_POSTS: Post[] = [
  { id: "1", image: "/images/insta-1.jpeg", alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "2", image: "/images/insta-2.jpg",  alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "3", image: "/images/insta-3.jpeg", alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "4", image: "/images/insta-4.jpeg", alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "5", image: "/images/insta-5.jpg",  alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "6", image: "/images/insta-6.jpg",  alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "7", image: "/images/insta-7.jpg",  alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
  { id: "8", image: "/images/insta-8.jpg",  alt: "Taipei Coffee House", link: INSTAGRAM_URL, mediaType: "IMAGE" },
];

type Post = {
  id: string;
  image: string;
  alt: string;
  link: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

// Skeleton de loading para cada card
function PostSkeleton() {
  return (
    <div className="aspect-square rounded-xl bg-gradient-to-br from-taipei-cream to-stone-200 animate-pulse" />
  );
}

// Card individual de post
function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="relative aspect-square overflow-hidden rounded-xl group block shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={post.image}
        alt={post.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, 25vw"
        unoptimized={post.image.startsWith("http")} // URLs externas (API) não passam pelo optimizer do Next
      />

      {/* Overlay escuro no hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-5 text-white drop-shadow">
          <span className="flex items-center gap-1.5 font-semibold text-sm">
            <Heart size={18} fill="white" />
            Ver Post
          </span>
        </div>
        <span className="flex items-center gap-1 text-white/80 text-xs">
          <ExternalLink size={12} />
          Abrir no Instagram
        </span>
      </div>

      {/* Badge de tipo de mídia */}
      {(post.mediaType === "VIDEO" || post.mediaType === "CAROUSEL_ALBUM") && (
        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
          {post.mediaType === "VIDEO"
            ? <Film size={12} className="text-white" />
            : <Images size={12} className="text-white" />
          }
        </div>
      )}
    </motion.a>
  );
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();

        if (res.ok && data.posts?.length > 0) {
          setPosts(data.posts);
        } else {
          // API sem token ou erro → usa fotos locais de fallback
          setPosts(FALLBACK_POSTS);
        }
      } catch {
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-taipei-red" size={40} />
            <h2 className="text-4xl md:text-5xl font-serif text-taipei-red">
              Siga-nos no Instagram
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-taipei-brown hover:text-taipei-red transition-colors inline-flex items-center gap-2"
          >
            @taipeicoffeehouse
          </a>
          <div className="w-24 h-1 bg-taipei-red mx-auto mt-6" />
        </motion.div>

        {/* Grid de Posts */}
        <div className="mb-10">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <PostSkeleton key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {posts.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-taipei-brown mb-6">
            Descubra nosso menu com brunch, almoço, cafés especiais e pratos autorais com influência asiática em Florianópolis
          </p>
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            <Instagram size={24} />
            Seguir no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
