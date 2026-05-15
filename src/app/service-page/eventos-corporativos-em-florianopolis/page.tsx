"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Briefcase, Users, Coffee, Presentation, Wifi, Clock } from "lucide-react";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

const spaceImages = [
  { src: "/images/eventos/bar-eventos.jpg", alt: "Bar para eventos corporativos" },
  { src: "/images/eventos/espaco-2andar.jpg", alt: "Espaco segundo andar" },
  { src: "/imagens site/Espaco_frente_eventos_Taipei_coffee_house_cacupe_florianopolis.jpg", alt: "Frente do espaco" },
  { src: "/imagens site/Bar_eventos_taipei_coffee_house_florianopolis_cacupe.jpg", alt: "Bar de eventos" },
  { src: "/imagens site/Eventos.corporativos_Taipei.png", alt: "Eventos corporativos" },
  { src: "/imagens site/Eventos_edited.jpg", alt: "Espaco de eventos" },
];

export default function EventosCorporativos() {
  const services = [
    { icon: Presentation, title: "Workshops e Treinamentos", description: "Espaco equipado para apresentacoes e capacitacoes" },
    { icon: Users, title: "Confraternizacoes", description: "Ambiente descontraido para integracao de equipes" },
    { icon: Coffee, title: "Coffee Breaks", description: "Pausas estrategicas com cafes especiais e snacks" },
    { icon: Briefcase, title: "Reunioes Executivas", description: "Ambiente profissional e inspirador" },
  ];

  const infrastructure = [
    { icon: Wifi, text: "Wi-Fi de alta velocidade" },
    { icon: Presentation, text: "Projetor e tela" },
    { icon: Coffee, text: "Coffee break incluso" },
    { icon: Clock, text: "Flexibilidade de horarios" },
    { icon: Users, text: "Ate 200 pessoas" },
    { icon: Briefcase, text: "Estacionamento" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/imagens site/Bar_eventos_taipei_coffee_house_florianopolis_cacupe.jpg"
              alt="Eventos corporativos no Taipei Coffee House"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/70 via-taipei-sage/50 to-taipei-brown/70" />
          </div>
          <div className="relative text-center px-4 z-10 text-white">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <Briefcase className="mx-auto mb-6" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">Eventos Corporativos</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                O ambiente perfeito para seus encontros empresariais em Florianopolis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">Inspire Sua Equipe</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed">
              Nosso espaco em Cacupe oferece o ambiente ideal para eventos corporativos que combinam
              produtividade com bem-estar. Com vista para o mar e infraestrutura completa,
              proporcionamos experiencias que vao alem do convencional.
            </p>
          </div>
        </AnimatedSection>

        {/* Servicos */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Nossos Servicos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, index) => (
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
                    <s.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-3">{s.title}</h3>
                  <p className="text-taipei-brown">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
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

        {/* Infraestrutura */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Infraestrutura</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {infrastructure.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl text-center border border-taipei-beige/30 shadow-sm"
                >
                  <item.icon className="text-taipei-red mx-auto mb-3" size={32} />
                  <p className="text-taipei-brown font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que escolher */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Por Que Escolher o Taipei?</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Localizacao Privilegiada", description: "Em Cacupe, com facil acesso e estacionamento, proporcionando comodidade para todos os participantes." },
                { title: "Ambiente Inspirador", description: "Vista para o mar e design acolhedor que estimula criatividade e produtividade." },
                { title: "Gastronomia de Qualidade", description: "Coffee breaks e refeicoes preparadas com ingredientes frescos e apresentacao impecavel." },
                { title: "Atendimento Personalizado", description: "Equipe dedicada para garantir que cada detalhe do seu evento seja perfeito." },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-taipei-cream p-8 rounded-2xl border-l-4 border-taipei-red"
                >
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">{benefit.title}</h3>
                  <p className="text-taipei-brown leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

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
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos Planejar Seu Evento?</h2>
            <p className="text-xl mb-10 opacity-90">Entre em contato para receber uma proposta personalizada</p>
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