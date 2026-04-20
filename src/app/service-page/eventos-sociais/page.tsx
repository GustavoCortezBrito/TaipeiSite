"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Cake, PartyPopper, Camera, Music, Sparkles } from "lucide-react";

export default function EventosSociais() {
  const eventTypes = [
    { icon: Cake, title: "Aniversários", description: "Celebre com estilo e sofisticação" },
    { icon: Heart, title: "Casamentos", description: "O cenário perfeito para seu grande dia" },
    { icon: PartyPopper, title: "Formaturas", description: "Comemore conquistas importantes" },
    { icon: Sparkles, title: "Celebrações", description: "Qualquer momento especial merece ser celebrado" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-taipei-red via-pink-400 to-taipei-beige flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <div className="relative text-center px-4 z-10 text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Heart className="mx-auto mb-6" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Eventos Sociais
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Celebre momentos inesquecíveis com vista para o mar
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">
              Momentos Que Ficam Para Sempre
            </h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed">
              No Taipei Coffee House, transformamos suas celebrações em experiências memoráveis. 
              Com vista privilegiada para o mar de Cacupé, ambiente sofisticado e atendimento personalizado, 
              cuidamos de cada detalhe para que você e seus convidados vivam momentos únicos.
            </p>
          </div>
        </AnimatedSection>

        {/* Event Types */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Tipos de Celebrações</h2>
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
                  <div className="bg-gradient-to-br from-taipei-red to-pink-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <type.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{type.title}</h3>
                  <p className="text-taipei-brown">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Cenário Perfeito",
                  description: "Vista para o mar e ambiente instagramável para fotos inesquecíveis"
                },
                {
                  icon: Cake,
                  title: "Gastronomia Personalizada",
                  description: "Menu customizado com opções doces e salgadas de alta qualidade"
                },
                {
                  icon: Music,
                  title: "Ambiente Completo",
                  description: "Som, iluminação e decoração inclusos no pacote"
                },
                {
                  icon: Sparkles,
                  title: "Decoração Exclusiva",
                  description: "Ambientação personalizada de acordo com o tema do seu evento"
                },
                {
                  icon: Heart,
                  title: "Atendimento Dedicado",
                  description: "Equipe atenciosa cuidando de cada detalhe da sua celebração"
                },
                {
                  icon: PartyPopper,
                  title: "Experiência Única",
                  description: "Momentos especiais em um dos lugares mais bonitos de Florianópolis"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-taipei-cream to-white p-8 rounded-2xl shadow-md"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                    <feature.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{feature.title}</h3>
                  <p className="text-taipei-brown">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Nosso Espaço</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-taipei-beige to-taipei-sage rounded-2xl h-64 flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Camera className="text-white" size={48} />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-16">O Que Dizem Nossos Clientes</h2>
            
            <div className="space-y-8">
              {[
                {
                  text: "O Taipei foi o lugar perfeito para comemorar meu aniversário. A vista é maravilhosa e o atendimento impecável!",
                  author: "Maria Silva"
                },
                {
                  text: "Realizamos nossa formatura no Taipei e foi simplesmente perfeito. Todos os convidados elogiaram!",
                  author: "João Santos"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-taipei-cream p-8 rounded-2xl"
                >
                  <p className="text-lg text-taipei-brown italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-taipei-red font-semibold">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-red to-pink-500 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos Celebrar Juntos?</h2>
            <p className="text-xl mb-10 opacity-90">
              Entre em contato e vamos criar uma celebração inesquecível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Ver Galeria
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
