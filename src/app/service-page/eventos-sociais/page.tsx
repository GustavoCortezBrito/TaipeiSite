"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Heart, Cake, PartyPopper, Sparkles, Camera, Music } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

const spaceImages = [
  { src: "/images/espaco-frente-eventos.jpg", alt: "Frente do espaco de eventos" },
  { src: "/images/eventos/bar-eventos.jpg", alt: "Bar para eventos" },
  { src: "/images/eventos/espaco-2andar.jpg", alt: "Espaco segundo andar" },
  { src: "/images/pessoas-evento.jpg", alt: "Evento social no Taipei" },
  { src: "/images/eventos-sociais.png", alt: "Eventos sociais" },
  { src: "/images/eventos-edited.jpg", alt: "Espaco de eventos" },
];

export default function EventosSociais() {
  const eventTypes = [
    { icon: Cake, title: "Aniversarios", description: "Celebre com estilo e sofisticacao" },
    { icon: Heart, title: "Casamentos", description: "O cenario perfeito para seu grande dia" },
    { icon: PartyPopper, title: "Formaturas", description: "Comemore conquistas importantes" },
    { icon: Sparkles, title: "Celebracoes", description: "Qualquer momento especial merece ser celebrado" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pessoas-evento.jpg"
              alt="Eventos sociais no Taipei Coffee House"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-red/50 via-taipei-brown/40 to-taipei-brown/60" />
          </div>
          <div className="relative text-center px-4 z-10 text-white">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <Heart className="mx-auto mb-6" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">Eventos Sociais</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Celebre momentos inesqueciveis com vista para o mar
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">Momentos Que Ficam Para Sempre</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed">
              No Taipei Coffee House, transformamos suas celebracoes em experiencias memoraveis.
              Com vista privilegiada para o mar de Cacupe, ambiente sofisticado e atendimento personalizado,
              cuidamos de cada detalhe para que voce e seus convidados vivam momentos unicos.
            </p>
          </div>
        </AnimatedSection>

        {/* Tipos de evento */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Tipos de Celebracoes</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="bg-gradient-to-br from-taipei-red to-taipei-brown w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <type.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{type.title}</h3>
                  <p className="text-taipei-brown">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria do espaco */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Nosso Espaco</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {spaceImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* O que oferecemos */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Camera, title: "Cenario Perfeito", description: "Vista para o mar e ambiente instagramavel para fotos inesqueciveis" },
                { icon: Cake, title: "Gastronomia Personalizada", description: "Menu customizado com opcoes doces e salgadas de alta qualidade" },
                { icon: Music, title: "Ambiente Completo", description: "Som, iluminacao e decoracao inclusos no pacote" },
                { icon: Sparkles, title: "Decoracao Exclusiva", description: "Ambientacao personalizada de acordo com o tema do seu evento" },
                { icon: Heart, title: "Atendimento Dedicado", description: "Equipe atenciosa cuidando de cada detalhe da sua celebracao" },
                { icon: PartyPopper, title: "Experiencia Unica", description: "Momentos especiais em um dos lugares mais bonitos de Florianopolis" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-md border border-taipei-beige/30"
                >
                  <div className="bg-taipei-cream w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                    <feature.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{feature.title}</h3>
                  <p className="text-taipei-brown">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "50px 50px" }}
          />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos Celebrar Juntos?</h2>
            <p className="text-xl mb-10 opacity-90">Entre em contato e vamos criar uma celebracao inesquecivel</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="https://wa.me/5548988798141" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors">
                Solicitar Orcamento
              </motion.a>
              <motion.a href="https://www.instagram.com/taipeicoffeehouse/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver no Instagram
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}