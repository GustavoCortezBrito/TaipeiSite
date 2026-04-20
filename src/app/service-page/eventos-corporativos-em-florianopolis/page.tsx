"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, Users, Coffee, Presentation, Wifi, Clock } from "lucide-react";

export default function EventosCorporativos() {
  const services = [
    {
      icon: Presentation,
      title: "Workshops & Treinamentos",
      description: "Espaço equipado para apresentações e capacitações"
    },
    {
      icon: Users,
      title: "Confraternizações",
      description: "Ambiente descontraído para integração de equipes"
    },
    {
      icon: Coffee,
      title: "Coffee Breaks",
      description: "Pausas estratégicas com cafés especiais e snacks"
    },
    {
      icon: Briefcase,
      title: "Reuniões Executivas",
      description: "Ambiente profissional e inspirador"
    }
  ];

  const infrastructure = [
    { icon: Wifi, text: "Wi-Fi de alta velocidade" },
    { icon: Presentation, text: "Projetor e tela" },
    { icon: Coffee, text: "Coffee break incluso" },
    { icon: Clock, text: "Flexibilidade de horários" },
    { icon: Users, text: "Até 80 pessoas" },
    { icon: Briefcase, text: "Estacionamento" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-taipei-brown via-taipei-sage to-taipei-brown flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "linear-gradient(45deg, #8F7368 25%, transparent 25%, transparent 75%, #8F7368 75%, #8F7368), linear-gradient(45deg, #8F7368 25%, transparent 25%, transparent 75%, #8F7368 75%, #8F7368)",
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 30px 30px"
            }}
          />

          <div className="relative text-center px-4 z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Briefcase className="mx-auto mb-6" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Eventos Corporativos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                O ambiente perfeito para seus encontros empresariais em Florianópolis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">
              Inspire Sua Equipe
            </h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            <p className="text-xl text-taipei-brown leading-relaxed">
              Nosso espaço em Cacupé oferece o ambiente ideal para eventos corporativos que combinam 
              produtividade com bem-estar. Com vista para o mar e infraestrutura completa, 
              proporcionamos experiências que vão além do convencional.
            </p>
          </div>
        </AnimatedSection>

        {/* Services */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Nossos Serviços</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="bg-taipei-cream w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-taipei-red mb-3">{service.title}</h3>
                  <p className="text-taipei-brown text-lg">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-24 px-4 bg-white">
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
                  className="bg-taipei-cream p-6 rounded-xl text-center"
                >
                  <item.icon className="text-taipei-red mx-auto mb-3" size={32} />
                  <p className="text-taipei-brown font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-sage to-taipei-beige">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-serif text-white text-center mb-16">Por Que Escolher o Taipei?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Localização Privilegiada",
                  description: "Em Cacupé, com fácil acesso e estacionamento, proporcionando comodidade para todos os participantes."
                },
                {
                  title: "Ambiente Inspirador",
                  description: "Vista para o mar e design acolhedor que estimula criatividade e produtividade."
                },
                {
                  title: "Gastronomia de Qualidade",
                  description: "Coffee breaks e refeições preparadas com ingredientes frescos e apresentação impecável."
                },
                {
                  title: "Atendimento Personalizado",
                  description: "Equipe dedicada para garantir que cada detalhe do seu evento seja perfeito."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">{benefit.title}</h3>
                  <p className="text-taipei-brown leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-24 px-4 bg-taipei-brown text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos Planejar Seu Evento?</h2>
            <p className="text-xl mb-10 opacity-90">
              Entre em contato para receber uma proposta personalizada
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-taipei-brown px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
