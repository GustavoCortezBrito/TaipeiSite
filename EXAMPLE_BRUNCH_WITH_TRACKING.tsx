/**
 * EXEMPLO DE IMPLEMENTAÇÃO - Página de Brunch com Tracking
 * 
 * Este arquivo mostra como a página de brunch ficaria após implementar o tracking.
 * Compare com o arquivo original: src/app/brunch/page.tsx
 * 
 * MUDANÇAS PRINCIPAIS:
 * 1. Import do TrackingLink no topo
 * 2. Substituição de <a> e <motion.a> por TrackingLink
 * 3. Adição de parâmetros de tracking (trackingType, ctaName, clickLocation)
 */

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Clock, UtensilsCrossed, Coffee, Sparkles } from "lucide-react";
import Image from "next/image";

// ✅ ADICIONADO: Import do TrackingLink
import TrackingLink from "@/components/TrackingLink";

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

export default function BrunchWithTracking() {
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
              Finais de Semana Especiais
            </motion.p>

            {/* 
              ✅ MUDANÇA: Substituído <motion.a> por TrackingLink
              
              ANTES:
              <motion.a href="https://wa.me/5548985008964" ...>
              
              DEPOIS: 
              Usa TrackingLink com tracking automático
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrackingLink
                href="https://wa.me/5548985008964"
                trackingType="whatsapp"
                ctaName="WhatsApp Brunch Hero"
                clickLocation="Brunch Hero Section"
                target="_blank"
                className="inline-block bg-white text-taipei-red px-8 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
              >
                Reserve seu Brunch
              </TrackingLink>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <AnimatedSection className="py-20 bg-taipei-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block p-4 bg-white rounded-full mb-4">
                    <item.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="font-serif text-xl text-taipei-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taipei-brown/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Menu Section */}
        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-taipei-brown text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              O que está incluído?
            </motion.h2>

            <motion.div
              className="bg-taipei-cream p-8 rounded-lg mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl text-taipei-brown mb-4">
                {brunchMain.name}
              </h3>
              <p className="text-taipei-brown/80 leading-relaxed">
                {brunchMain.description}
              </p>
            </motion.div>

            <div className="mb-12">
              <h3 className="font-serif text-2xl text-taipei-brown mb-6 text-center">
                Adicionais Disponíveis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adicionais.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-taipei-sage/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-taipei-red/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-taipei-red text-sm">+</span>
                    </div>
                    <span className="text-taipei-brown">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 
              ✅ MUDANÇA: Adicionado CTA com tracking no meio da página
            */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TrackingLink
                href="https://wa.me/5548985008964?text=Olá! Gostaria de fazer uma reserva para o Brunch"
                trackingType="whatsapp"
                ctaName="WhatsApp Brunch Menu Section"
                clickLocation="Brunch Menu Section"
                target="_blank"
                className="inline-block bg-taipei-red text-white px-8 py-4 rounded-full font-semibold hover:bg-taipei-red/90 transition-colors"
              >
                Quero Reservar Agora
              </TrackingLink>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Info Section with Google Maps Link */}
        <AnimatedSection className="py-20 bg-taipei-cream">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-3xl text-taipei-brown mb-4">
                  Horários
                </h3>
                <div className="space-y-3 text-taipei-brown">
                  <p className="flex items-center gap-2">
                    <Clock size={20} className="text-taipei-red" />
                    <span className="font-semibold">Sábados e Domingos</span>
                  </p>
                  <p className="ml-7">10h às 13h</p>
                  <p className="text-sm opacity-70 ml-7">
                    Pedidos até 12h30
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-3xl text-taipei-brown mb-4">
                  Reservas
                </h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Recomendamos reserva prévia, especialmente aos domingos.
                  Entre em contato pelo WhatsApp para garantir sua mesa.
                </p>

                {/* 
                  ✅ MUDANÇA: Links com tracking na seção de reservas
                */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <TrackingLink
                    href="https://wa.me/5548985008964"
                    trackingType="whatsapp"
                    ctaName="WhatsApp Brunch Info"
                    clickLocation="Brunch Info Section"
                    target="_blank"
                    className="inline-block bg-taipei-red text-white px-6 py-3 rounded-full font-semibold hover:bg-taipei-red/90 transition-colors text-center"
                  >
                    WhatsApp
                  </TrackingLink>

                  <TrackingLink
                    href="https://maps.google.com/?q=Taipei+Coffee+House+Cacupe+Florianopolis"
                    trackingType="como_chegar"
                    ctaName="Maps Brunch Info"
                    clickLocation="Brunch Info Section"
                    target="_blank"
                    className="inline-block bg-white text-taipei-red px-6 py-3 rounded-full font-semibold hover:bg-taipei-cream transition-colors border-2 border-taipei-red text-center"
                  >
                    Como Chegar
                  </TrackingLink>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section with link to /sobre-o-taipei */}
        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl text-taipei-brown mb-6">
                Mais do que um Brunch
              </h3>
              <p className="text-taipei-brown/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                É uma experiência única em Florianópolis, com vista para o mar
                e sabores que vão além do paladar. Conheça mais sobre nossa
                história e filosofia.
              </p>

              {/* 
                ✅ MUDANÇA: Link interno sem tracking (não é uma conversão)
                Pode-se usar TrackingLink com trackingType="none" ou Link normal
              */}
              <TrackingLink
                href="/sobre-o-taipei"
                trackingType="none"
                className="inline-block text-taipei-red font-semibold hover:underline"
              >
                Conheça Nossa História →
              </TrackingLink>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

/**
 * RESUMO DAS MUDANÇAS:
 * 
 * 1. ✅ Import do TrackingLink adicionado
 * 
 * 2. ✅ Link do WhatsApp no Hero
 *    - trackingType: "whatsapp"
 *    - ctaName: "WhatsApp Brunch Hero"
 *    - clickLocation: "Brunch Hero Section"
 * 
 * 3. ✅ Link do WhatsApp na seção de Menu
 *    - trackingType: "whatsapp"
 *    - ctaName: "WhatsApp Brunch Menu Section"
 *    - clickLocation: "Brunch Menu Section"
 * 
 * 4. ✅ Link do WhatsApp na seção de Info
 *    - trackingType: "whatsapp"
 *    - ctaName: "WhatsApp Brunch Info"
 *    - clickLocation: "Brunch Info Section"
 * 
 * 5. ✅ Link do Google Maps na seção de Info
 *    - trackingType: "como_chegar"
 *    - ctaName: "Maps Brunch Info"
 *    - clickLocation: "Brunch Info Section"
 * 
 * 6. ✅ Link para /sobre-o-taipei (não rastreado como conversão)
 * 
 * RESULTADO ESPERADO NO GA4:
 * Você poderá ver quantos clicks cada CTA recebeu:
 * - WhatsApp Brunch Hero: X clicks
 * - WhatsApp Brunch Menu Section: Y clicks
 * - WhatsApp Brunch Info: Z clicks
 * - Maps Brunch Info: W clicks
 * 
 * Total de intenções de visita da página de Brunch: X+Y+Z+W
 */
