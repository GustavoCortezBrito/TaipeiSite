"use client";

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Coffee, Croissant, Sandwich, Cake, Wine, Leaf, Star, Sparkles } from "lucide-react";

// Note: Metadata export doesn't work in client components
// Metadata should be in a separate layout.tsx or moved to server component

export default function Menu() {
  const categories = [
    {
      icon: Coffee,
      title: "Cafés Especiais",
      color: "bg-taipei-brown",
      items: [
        { name: "Espresso", description: "Café puro e intenso" },
        { name: "Cappuccino", description: "Espresso com leite vaporizado" },
        { name: "Latte", description: "Café suave com leite" },
        { name: "Flat White", description: "Café australiano cremoso" },
      ]
    },
    {
      icon: Croissant,
      title: "Doces",
      color: "bg-taipei-beige",
      items: [
        { name: "Croissant", description: "Tradicional francês" },
        { name: "Pain au Chocolat", description: "Croissant com chocolate" },
        { name: "Tortas Artesanais", description: "Variedade diária" },
        { name: "Cookies", description: "Receitas especiais" },
      ]
    },
    {
      icon: Sandwich,
      title: "Salgados",
      color: "bg-taipei-sage",
      items: [
        { name: "Bruschettas", description: "Variedade de sabores" },
        { name: "Sanduíches Artesanais", description: "Ingredientes frescos" },
        { name: "Pastéis", description: "Receitas orientais" },
        { name: "Quiches", description: "Opções vegetarianas" },
      ]
    },
    {
      icon: Cake,
      title: "Brunch",
      color: "bg-taipei-red",
      items: [
        { name: "Ovos Benedict", description: "Clássico com molho holandês" },
        { name: "Panquecas", description: "Com frutas frescas" },
        { name: "Açaí Bowl", description: "Tropical e nutritivo" },
        { name: "Tábua de Frios", description: "Seleção especial" },
      ]
    },
    {
      icon: Wine,
      title: "Drinks",
      color: "bg-taipei-brown",
      items: [
        { name: "Vinhos Selecionados", description: "Carta especial" },
        { name: "Drinks Autorais", description: "Criações da casa" },
        { name: "Sucos Naturais", description: "Frutas frescas" },
        { name: "Chás Especiais", description: "Variedades orientais" },
      ]
    },
    {
      icon: Leaf,
      title: "Culinária Asiática",
      color: "bg-taipei-sage",
      items: [
        { name: "Em Breve", description: "Menu especial em desenvolvimento" },
        { name: "Pratos Autorais", description: "Influência oriental" },
        { name: "Experiências Únicas", description: "Sabores autênticos" },
      ]
    },
  ];

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative h-[50vh] bg-gradient-to-br from-taipei-cream via-secondary to-taipei-beige flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, #A84544 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />

          <div className="relative text-center px-4 z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif text-taipei-red mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nosso Menu
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-taipei-brown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Descubra sabores únicos com influência asiática
            </motion.p>
          </div>
        </section>

        {/* Menu Categories */}
        <section id="categorias" className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection>
              <p className="text-center text-lg text-taipei-brown mb-16 max-w-3xl mx-auto">
                Nosso cardápio une tradição e inovação, com pratos autorais preparados com ingredientes frescos 
                e de qualidade. Cada item é pensado para proporcionar uma experiência gastronômica memorável.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gradient-to-br from-white to-taipei-cream rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-taipei-beige/30 relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-white/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className={`${category.color} p-6 text-white relative`}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="mx-auto mb-4" size={48} />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-center">{category.title}</h3>
                    <div className="absolute top-2 right-2">
                      <Sparkles size={20} className="opacity-50" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="border-b border-taipei-beige/30 pb-3 last:border-0"
                      >
                        <h4 className="font-semibold text-taipei-red mb-1">{item.name}</h4>
                        <p className="text-sm text-taipei-brown">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Empório */}
        <AnimatedSection id="emporio" className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-40 h-40 border-2 border-taipei-sage rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-taipei-red rounded-full" />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">Empório</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed mb-8">
              Além do nosso cardápio, oferecemos uma seleção especial de produtos artesanais no nosso empório. 
              Cafés especiais, doces caseiros, geleias e muito mais para você levar para casa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-taipei-red text-white px-10 py-4 rounded-full hover:bg-taipei-brown transition-colors"
            >
              Conheça Nossos Produtos
            </motion.button>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection id="reserva" className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Faça Sua Reserva</h2>
            <p className="text-xl mb-10 opacity-90">
              Garanta seu lugar e desfrute de uma experiência gastronômica única
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-taipei-red px-10 py-4 rounded-full hover:bg-taipei-cream transition-colors font-semibold"
            >
              Reservar Mesa
            </motion.button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
