"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mateus Bueno",
    role: "Local Guide · 16 avaliacoes",
    stars: 5,
    text: "Ambiente muito receptivo e iluminado, cardapio tipico asiatico com diversas opcoes doces e salgadas. O atendimento e nota 10, muita simpatia do atendente.",
  },
  {
    name: "Ewerton Calvetti",
    role: "Local Guide · 155 avaliacoes",
    stars: 5,
    text: "Excelente local. Ambiente com bela vista ao mar, em local calmo, com excelente qualidade e variedade de comida, alem de otimo atendimento. Indico a visita. Frequentarei outras vezes com certeza.",
  },
  {
    name: "Sabrina Ricardo",
    role: "Local Guide · 105 avaliacoes",
    stars: 5,
    text: "A vista e deslumbrante. Sem duvidas vale muito. Pedimos frape de caramelo que estava sensacional.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-serif text-taipei-red mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-24 h-1 bg-taipei-red mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2 text-taipei-brown">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4,8</span>
            <span className="text-taipei-brown/60">no Google Maps</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-taipei-cream rounded-2xl p-6 border border-taipei-beige/30 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-taipei-brown leading-relaxed flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-taipei-beige/50 pt-4">
                <p className="font-semibold text-taipei-brown">{r.name}</p>
                <p className="text-xs text-taipei-brown/60">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.app.goo.gl/Q4j9LJZ2NHcyvXtPA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-taipei-red hover:text-taipei-brown transition-colors text-sm font-medium"
          >
            Ver todas as avaliacoes no Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
