"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Baby, Heart, Coffee, Sparkles, Shield, Smile } from "lucide-react";

export default function CafeteriaComEspacoKids() {
  const features = [
    {
      icon: Baby,
      title: "Espaço Kids Seguro",
      description: "Área dedicada e segura para as crianças brincarem"
    },
    {
      icon: Shield,
      title: "Supervisão",
      description: "Ambiente monitorado para tranquilidade dos pais"
    },
    {
      icon: Coffee,
      title: "Conforto para os Pais",
      description: "Aproveite seu café enquanto as crianças se divertem"
    },
    {
      icon: Smile,
      title: "Menu Infantil",
      description: "Opções saudáveis e saborosas para os pequenos"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-pink-200 via-taipei-cream to-yellow-100 flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Sparkles className="text-taipei-red opacity-20" size={24} />
              </motion.div>
            ))}
          </motion.div>

          <div className="relative text-center px-4 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Baby className="mx-auto mb-6 text-taipei-red" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif text-taipei-red mb-6">
                Espaço Kids
              </h1>
              <p className="text-xl md:text-2xl text-taipei-brown max-w-3xl mx-auto">
                Cafeteria com espaço para as crianças em Florianópolis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">
              Diversão para Toda a Família
            </h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed">
              No Taipei Coffee House, entendemos que momentos em família são preciosos. 
              Por isso, criamos um espaço onde os pais podem relaxar e aproveitar nossos cafés especiais 
              enquanto as crianças se divertem em um ambiente seguro e acolhedor.
            </p>
          </div>
        </AnimatedSection>

        {/* Features */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="bg-gradient-to-br from-pink-200 to-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="text-taipei-red" size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{feature.title}</h3>
                  <p className="text-taipei-brown">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-serif text-taipei-red text-center mb-16">
              Por Que Trazer Sua Família?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ambiente Familiar",
                  description: "Espaço pensado para receber famílias com crianças de todas as idades, proporcionando conforto e diversão."
                },
                {
                  title: "Tranquilidade para os Pais",
                  description: "Aproveite seu momento de café ou refeição sabendo que seus filhos estão em um ambiente seguro."
                },
                {
                  title: "Socialização",
                  description: "As crianças podem interagir e fazer novos amigos enquanto se divertem."
                },
                {
                  title: "Vista para o Mar",
                  description: "Desfrute da vista privilegiada de Cacupé enquanto toda a família relaxa."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-taipei-red"
                >
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">{benefit.title}</h3>
                  <p className="text-taipei-brown leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Menu Infantil */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Menu Infantil</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-12" />
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <p className="text-lg text-taipei-brown text-center mb-8">
                Oferecemos opções saudáveis e saborosas especialmente pensadas para as crianças:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Panquecas com frutas",
                  "Sanduíches naturais",
                  "Sucos naturais",
                  "Smoothies de frutas",
                  "Mini pizzas",
                  "Cookies caseiros"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-yellow-50 p-4 rounded-xl"
                  >
                    <Heart className="text-taipei-red flex-shrink-0" size={20} />
                    <span className="text-taipei-brown font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-red via-pink-400 to-yellow-400 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Venha Nos Visitar!</h2>
            <p className="text-xl mb-10 opacity-90">
              Traga sua família para uma experiência especial em Cacupé
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
            >
              Fazer Reserva
            </motion.button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
