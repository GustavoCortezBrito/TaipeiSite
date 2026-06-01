"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Clock, UtensilsCrossed, Coffee, Sparkles, Plus } from "lucide-react";
import Image from "next/image";

const brunchMain = {
  name: "Brunch Taipei",
  description:
    "Mini croissants puros, mini pão de queijo, fatia de bolo, fatia de pão de campanha, maçã, fatias de mussarela, fatias de presunto, ramekin de manteiga, ramekin de geleia (do nosso empório), suco de laranja, café com leite ou chocolate quente.",
};

const adicionais = [
  { name: "Porção de Shitake na Manteiga" },
  { name: "Iogurte Natural com Granola" },
  { name: "Ovo Estalado" },
  { name: "Ovo Pochê ou Cremoso c/ Nata" },
  { name: "Fatias de Bacon Crocante" },
  { name: "Pão sem Glúten" },
  { name: "Pesto de Beterraba" },
];

export default function Brunch() {
  const highlights = [
    {
      icon: Clock,
      title: "Finais de Semana",
      description: "Sábado e Domingo — das 10h às 13h",
    },
    {
      icon: UtensilsCrossed,
      title: "Menu Completo",
      description: "Opções doces e salgadas",
    },
    {
      icon: Coffee,
      title: "Cafés Especiais",
      description: "Harmonização perfeita",
    },
    {
      icon: Sparkles,
      title: "Vista para o Mar",
      description: "Ambiente único em Cacupé",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/brunch/brunch-hero.png"
              alt="Brunch do Taipei Coffee House em Cacupé"
              fill
              className="object-cover object-[center_45%]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/80 via-taipei-red/60 to-taipei-brown/80" />
          </div>

          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-taipei-red rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-80 h-80 bg-taipei-sage rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>

          <div className="relative text-center px-4 z-20">
            <motion.h1
              className="text-6xl md:text-8xl font-serif text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Brunch
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-taipei-cream mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              O melhor brunch de Florianópolis
            </motion.p>
            <motion.p
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Finais de semana especiais com vista para o mar, café de qualidade e pratos autorais
            </motion.p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            {/* Brunch Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { src: "/images/brunch/brunch-2.png", alt: "Brunch especial" },
                { src: "/images/brunch/brunch-mesa.jpg", alt: "Mesa de brunch" },
                { src: "/images/brunch/brunch-hero.png", alt: "Brunch completo" },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-taipei-cream rounded-2xl"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                    <item.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="font-serif text-lg text-taipei-red mb-2">{item.title}</h3>
                  <p className="text-sm text-taipei-brown">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cardápio Real */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-2">
                Brunch Especial Taipei
              </h2>
              <p className="text-center text-taipei-brown mb-4">Sábado e Domingo — das 10h às 13h</p>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-14" />
            </AnimatedSection>

            {/* Brunch Principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-taipei-beige/30 mb-10"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-serif text-taipei-red">{brunchMain.name}</h3>
              </div>
              <p className="text-taipei-brown/80 leading-relaxed">{brunchMain.description}</p>
            </motion.div>

            {/* Adicionais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-taipei-beige/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Plus className="text-taipei-red flex-shrink-0" size={22} />
                <h3 className="text-2xl font-serif text-taipei-red">Adicionais</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {adicionais.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center py-3 px-4 rounded-xl bg-taipei-cream hover:bg-taipei-beige/40 transition-colors"
                  >
                    <span className="text-taipei-brown font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experiência */}
        <AnimatedSection className="py-24 px-4 bg-taipei-red text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Uma Experiência Completa</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl flex flex-col"
              >
                <h3 className="text-2xl font-serif mb-4">Ambiente Único</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Desfrute do seu brunch em um ambiente sofisticado e acolhedor, com vista privilegiada 
                  para o mar de Cacupé. O cenário perfeito para começar o dia com tranquilidade.
                </p>
                <motion.a
                  href="/sobre-o-taipei"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-taipei-red px-8 py-3 rounded-full font-semibold hover:bg-taipei-cream transition-colors self-start mt-auto"
                >
                  Conheça o Espaço
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl flex flex-col"
              >
                <h3 className="text-2xl font-serif mb-4">Reservas</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Recomendamos reserva prévia, especialmente aos domingos. Entre em contato pelo 
                  WhatsApp ou Instagram para garantir sua mesa.
                </p>
                <motion.a
                  href="https://wa.me/5548985008964"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-taipei-red px-8 py-3 rounded-full font-semibold hover:bg-taipei-cream transition-colors self-start mt-auto"
                >
                  Fazer Reserva
                </motion.a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
