"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Clock, UtensilsCrossed, Coffee, Sparkles } from "lucide-react";

export default function Brunch() {
  const highlights = [
    {
      icon: Clock,
      title: "Finais de Semana",
      description: "Sábados e domingos, das 9h às 15h"
    },
    {
      icon: UtensilsCrossed,
      title: "Menu Completo",
      description: "Opções doces e salgadas"
    },
    {
      icon: Coffee,
      title: "Cafés Especiais",
      description: "Harmonização perfeita"
    },
    {
      icon: Sparkles,
      title: "Vista para o Mar",
      description: "Ambiente único em Cacupé"
    }
  ];

  const menuItems = [
    {
      category: "Clássicos",
      items: [
        { name: "Ovos Benedict", description: "Ovos pochê, presunto, molho holandês sobre pão inglês" },
        { name: "Panquecas Americanas", description: "Stack de 3 panquecas com frutas frescas e maple syrup" },
        { name: "French Toast", description: "Rabanada francesa com frutas caramelizadas" },
        { name: "Avocado Toast", description: "Abacate, ovo pochê, tomate cereja e rúcula" },
      ]
    },
    {
      category: "Opções Leves",
      items: [
        { name: "Açaí Bowl", description: "Açaí com granola, frutas frescas e mel" },
        { name: "Iogurte com Granola", description: "Iogurte natural, granola caseira e frutas da estação" },
        { name: "Salada de Frutas", description: "Mix de frutas tropicais frescas" },
        { name: "Smoothie Bowl", description: "Bowl de smoothie com toppings variados" },
      ]
    },
    {
      category: "Salgados",
      items: [
        { name: "Tábua de Frios", description: "Seleção de queijos, frios e pães artesanais" },
        { name: "Croissant Recheado", description: "Croissant com recheios variados" },
        { name: "Sanduíche Clube", description: "Frango, bacon, alface, tomate e maionese" },
        { name: "Quiche do Dia", description: "Quiche artesanal com salada verde" },
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-taipei-cream via-taipei-beige to-secondary flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-taipei-red rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-80 h-80 bg-taipei-sage rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>

          <div className="relative text-center px-4 z-10">
            <motion.h1 
              className="text-6xl md:text-8xl font-serif text-taipei-red mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Brunch
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-taipei-brown mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              O melhor brunch de Florianópolis
            </motion.p>
            <motion.p 
              className="text-lg text-taipei-brown/80 max-w-2xl mx-auto"
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

        {/* Menu */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">Nosso Menu</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="space-y-12">
              {menuItems.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <h3 className="text-3xl font-serif text-taipei-red mb-8 text-center">{section.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="border-l-4 border-taipei-red pl-4 py-2"
                      >
                        <h4 className="font-semibold text-lg text-taipei-brown mb-1">{item.name}</h4>
                        <p className="text-sm text-taipei-brown/70">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-serif mb-4">Ambiente Único</h3>
                <p className="opacity-90 leading-relaxed">
                  Desfrute do seu brunch em um ambiente sofisticado e acolhedor, com vista privilegiada 
                  para o mar de Cacupé. O cenário perfeito para começar o dia com tranquilidade.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-serif mb-4">Reservas</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Recomendamos reserva prévia, especialmente aos domingos. Entre em contato pelo 
                  WhatsApp ou Instagram para garantir sua mesa.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-taipei-red px-8 py-3 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
                >
                  Fazer Reserva
                </motion.button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
