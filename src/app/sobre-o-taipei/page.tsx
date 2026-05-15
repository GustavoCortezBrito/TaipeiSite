"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Da Cultura Taiwanesa para Cacupé",
    paragraphs: [
      "Criada entre rituais familiares e mercados tradicionais de Taiwan, Daiane aprendeu desde cedo que servir comida é um ato de afeto. Na cultura oriental, hospitalidade não é performance — é presença.",
      "Anos depois, vivendo em Florianópolis, ela encontrou em Cacupé o cenário perfeito para unir suas raízes asiáticas à paisagem única da Baía Norte. Assim nasceu o Taipei Coffee House: um restaurante em Florianópolis que integra tradição, estética e experiência à beira-mar.",
    ],
  },
  {
    title: "Um Restaurante com Influência Asiática",
    paragraphs: [
      "O Taipei não é apenas um café. É um restaurante contemporâneo que oferece brunch autoral, almoço à beira-mar, jantar com atmosfera intimista e espaço para eventos corporativos e celebrações.",
      "Nossa gastronomia combina ingredientes selecionados, técnicas orientais e apresentação cuidadosa, sempre com vista privilegiada para o mar em Floripa.",
    ],
  },
  {
    title: "Hospitalidade como Filosofia",
    paragraphs: [
      "Na cultura chinesa, conceitos como guanxi (conexão) e renqing (reciprocidade) representam a importância das relações humanas. Esses valores guiam o Taipei desde a inauguração.",
      "Cada detalhe — da escolha da louça ao atendimento — é pensado para que nossos convidados sintam que há um lugar reservado para eles.",
    ],
  },
  {
    title: "Cacupé: O Lugar Escolhido",
    paragraphs: [
      "Entre o mar e a natureza preservada, Cacupé é um dos bairros mais charmosos de Florianópolis. Foi aqui que o Taipei encontrou sua casa.",
      "Hoje, somos referência para quem busca restaurante em Cacupé com vista para o mar, seja para um brunch de fim de semana, um almoço especial ou um evento à beira-mar.",
    ],
  },
];

export default function SobreOTaipei() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sobre/historia.jpg"
              alt="Taipei, Taiwan"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/80 via-taipei-red/60 to-taipei-brown/80" />
          </div>

          {/* Animated blobs */}
          <motion.div
            className="absolute inset-0 z-10 opacity-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-taipei-cream rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-taipei-red rounded-full blur-3xl" />
          </motion.div>

          <div className="relative z-20 text-center px-4">
            <motion.p
              className="text-taipei-cream/80 uppercase tracking-widest text-sm mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fundadora Taiwanesa
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sobre Nós
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A história do Taipei Coffee House em Florianópolis
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-4 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-taipei-red to-transparent" />
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">
                A História do Taipei Coffee House
              </h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
              <p className="text-lg md:text-xl text-taipei-brown leading-relaxed mb-4">
                O Taipei Coffee House é um restaurante com vista para o mar localizado em Cacupé, no norte
                da ilha de Florianópolis. Mais do que um espaço gastronômico, o Taipei nasceu do encontro
                entre duas culturas: a tradição taiwanesa e a hospitalidade brasileira.
              </p>
              <p className="text-lg md:text-xl text-taipei-brown leading-relaxed">
                Fundado por Daiane Shuai, nascida em Taipei, Taiwan, o restaurante carrega em sua essência
                o cuidado oriental com os detalhes e o desejo de transformar cada refeição em experiência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fotos da fundadora */}
        <section className="py-4 pb-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { src: "/images/sobre/fundadora.jpg", alt: "Daiane Shuai — fundadora" },
                { src: "/imagens site/Daiane_Shuai_fundadora_Taipei_coffee_house_cacupe_florianopolis.jpg", alt: "Daiane com o cardápio" },
                { src: "/imagens site/Daiane_Shuai_fundadora_Taipei_coffee_house_cacupe_floripa_child.png", alt: "Daiane e família" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seções alternadas */}
        <section className="py-8 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-4xl space-y-16">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-taipei-beige/30 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-taipei-red rounded-l-2xl" />
                <h3 className="text-2xl md:text-3xl font-serif text-taipei-red mb-5 pl-4">{s.title}</h3>
                <div className="space-y-3 pl-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-taipei-brown leading-relaxed text-lg">{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed"
            >
              Venha conhecer o Taipei Coffee House em Cacupé e viva uma experiência
              gastronômica que une cultura, sabor e paisagem em Florianópolis.
            </motion.p>
            <motion.a
              href="https://wa.me/5548988798141"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10 bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors shadow-lg"
            >
              Fazer uma Reserva
            </motion.a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
