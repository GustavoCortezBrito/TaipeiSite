"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, Heart, Briefcase, PartyPopper, Camera, Music, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EspacoEventos() {
  const eventTypes = [
    {
      icon: Heart,
      title: "Eventos Sociais",
      description: "Aniversários, formaturas, casamentos e celebrações especiais",
      link: "/service-page/eventos-sociais",
      color: "from-taipei-red to-taipei-brown"
    },
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description: "Workshops, confraternizações e encontros empresariais",
      link: "/service-page/eventos-corporativos-em-florianopolis",
      color: "from-taipei-brown to-taipei-sage"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Capacidade Flexível",
      description: "Espaço adaptável para eventos de 20 a 100 pessoas"
    },
    {
      icon: Camera,
      title: "Vista Privilegiada",
      description: "Cenário perfeito para fotos com vista para o mar"
    },
    {
      icon: UtensilsCrossed,
      title: "Gastronomia Personalizada",
      description: "Menu customizado para seu evento"
    },
    {
      icon: Music,
      title: "Infraestrutura Completa",
      description: "Som, iluminação e decoração inclusos"
    },
    {
      icon: Sparkles,
      title: "Experiência Única",
      description: "Atendimento personalizado e ambiente sofisticado"
    },
    {
      icon: PartyPopper,
      title: "Celebrações Memoráveis",
      description: "Cada detalhe pensado para seu momento especial"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/eventos/bar-eventos.jpg"
              alt="Espaço para eventos no Taipei Coffee House"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-red/80 via-taipei-brown/70 to-taipei-red/80" />
          </div>

          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          </motion.div>

          <div className="relative text-center px-4 z-20 text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Calendar className="mx-auto mb-6" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Espaço para Eventos
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Celebre momentos especiais em um ambiente único com vista para o mar
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="bg-white text-taipei-red px-10 py-4 rounded-full hover:bg-taipei-cream transition-all hover:scale-105 font-semibold">
                Solicitar Orçamento
              </button>
            </motion.div>
          </div>
        </section>

        {/* Tipos de Eventos */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">Tipos de Eventos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-12" />
            </AnimatedSection>

            {/* Eventos Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/eventos/espaco-2andar.jpg"
                  alt="Espaço do segundo andar para eventos"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/ambiente/area-externa.jpg"
                  alt="Área externa para eventos"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={type.link}>
                    <div className={`bg-gradient-to-br ${type.color} p-12 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer h-full`}>
                      <type.icon className="mb-6" size={64} />
                      <h3 className="text-3xl font-serif mb-4">{type.title}</h3>
                      <p className="text-lg opacity-90 mb-6">{type.description}</p>
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold">
                        Saiba Mais →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="bg-taipei-cream w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="text-taipei-red" size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{feature.title}</h3>
                  <p className="text-taipei-brown">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">Como Funciona</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />

            <div className="space-y-8">
              {[
                { step: "01", title: "Contato Inicial", description: "Entre em contato conosco pelo WhatsApp ou Instagram para agendar uma visita" },
                { step: "02", title: "Visita ao Espaço", description: "Conheça nosso espaço e discuta os detalhes do seu evento" },
                { step: "03", title: "Proposta Personalizada", description: "Receba um orçamento customizado para suas necessidades" },
                { step: "04", title: "Planejamento", description: "Trabalhamos juntos nos detalhes: menu, decoração e logística" },
                { step: "05", title: "Seu Evento", description: "Relaxe e aproveite enquanto cuidamos de tudo" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="bg-taipei-red text-white w-16 h-16 rounded-full flex items-center justify-center font-serif text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-taipei-red mb-2">{item.title}</h3>
                    <p className="text-taipei-brown text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-red to-taipei-brown text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Pronto para Celebrar?</h2>
            <p className="text-xl mb-10 opacity-90">
              Entre em contato e vamos criar juntos um evento inesquecível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5548988798141"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
              >
                WhatsApp
              </motion.a>
              <motion.a
                href="https://www.instagram.com/taipeicoffeehouse/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Instagram
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
