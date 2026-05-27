"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Luiza Spanamberg",
    role: "Local Guide · 10 avaliações · 2 fotos",
    avatar: "L",
    avatarColor: "#6B9E78",
    stars: 5,
    time: "Há 2 horas",
    isNew: true,
    text: "Foi tudo excelente. Comeria mil Bao Taipei, é uma delícia. Tudo o que experimentamos foi excelente, comida, bebida… Café, matcha, drinks, salada Taipei, croissant, tudo. Ambiente pacífico de frente pro mar. Atendimento atencioso e rápido. Valeu, Douglas!",
    ratings: { comida: 5, servico: 5, ambiente: 5 },
  },
  {
    name: "Richard Amante",
    role: "Local Guide · 23 avaliações",
    avatar: "R",
    avatarColor: "#C0392B",
    stars: 5,
    time: "Há 1 semana",
    isNew: false,
    text: "Vista maravilhosa, comida deliciosa, cerveja gelada e atendimento impecável! O Taipei Coffee House é um lugar super especial à beira-mar.",
    ratings: null,
  },
  {
    name: "Paloma Pinheiro",
    role: "Local Guide · 8 avaliações",
    avatar: "P",
    avatarColor: "#8E44AD",
    stars: 5,
    time: "Há 2 semanas",
    isNew: false,
    text: "Vim pelo café e vista, vou voltar pelo Bão. Melhor Bao do Brasil até hoje. Tive que comer um segundo, parabéns! Tudo maravilhoso.",
    ratings: null,
  },
  {
    name: "Tallytta Rocha",
    role: "4 avaliações",
    avatar: "T",
    avatarColor: "#E67E22",
    stars: 5,
    time: "Há 3 semanas",
    isNew: false,
    text: "Eu amei o Taipei! Tudo muito gostoso e saboroso, o atendimento foi maravilhoso também, o lugar é gostoso e tem uma vista linda!",
    ratings: null,
  },
  {
    name: "Dreiza Rodrigues",
    role: "Local Guide · 47 avaliações",
    avatar: "D",
    avatarColor: "#2980B9",
    stars: 5,
    time: "Há 1 mês",
    isNew: false,
    text: "Excelente local para drinks, frequentar com família e amigos. Vista deslumbrante e ambiente acolhedor.",
    ratings: null,
  },
  {
    name: "Dana Cerutti",
    role: "12 avaliações",
    avatar: "D",
    avatarColor: "#16A085",
    stars: 5,
    time: "Há 1 mês",
    isNew: false,
    text: "Bruschetta muito boa, bons preços e ótimo ambiente. Vista panorâmica.",
    ratings: null,
  },
];

function GoogleStars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#FBBC04] fill-[#FBBC04]" : "text-gray-300 fill-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-serif text-taipei-red mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-24 h-1 bg-taipei-red mx-auto mb-6" />
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-gray-800">4,8</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#FBBC04] fill-[#FBBC04]" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">no Google Maps</span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-base flex-shrink-0"
                  style={{ backgroundColor: r.avatarColor }}
                >
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm leading-tight truncate">{r.name}</p>
                  <p className="text-xs text-gray-500 truncate">{r.role}</p>
                </div>
                {/* Google icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 opacity-70">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars + time + NEW badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <GoogleStars count={r.stars} />
                <span className="text-xs text-gray-400">{r.time}</span>
                {r.isNew && (
                  <span className="text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full">
                    NOVO
                  </span>
                )}
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {r.text}
              </p>

              {/* Sub-ratings (only Luiza has them) */}
              {r.ratings && (
                <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <span>Comida: <strong className="text-gray-700">{r.ratings.comida}/5</strong></span>
                  <span>Serviço: <strong className="text-gray-700">{r.ratings.servico}/5</strong></span>
                  <span>Ambiente: <strong className="text-gray-700">{r.ratings.ambiente}/5</strong></span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.app.goo.gl/Q4j9LJZ2NHcyvXtPA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-taipei-red hover:text-taipei-brown transition-colors text-sm font-medium"
          >
            Ver todas as avaliações no Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
