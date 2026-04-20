"use client";

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Users, Award, MapPin } from "lucide-react";

export default function SobreOTaipei() {
  const values = [
    {
      icon: Heart,
      title: "Experiência Sensorial",
      description: "Cada visita é um momento de conexão onde ingredientes, ambiente e detalhes despertam os sentidos."
    },
    {
      icon: Users,
      title: "Acolhimento e Hospitalidade",
      description: "Inspirado na cultura oriental, valorizamos o ato de receber bem, criando um espaço onde todos se sintam especiais."
    },
    {
      icon: Award,
      title: "Tradição Contemporânea",
      description: "Equilíbrio entre raízes culturais e inovação, unindo o clássico ao novo para uma experiência autêntica."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          </motion.div>

          <div className="relative text-center px-4 z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nossa História
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Uma jornada de sabores, cultura e hospitalidade
            </motion.p>
          </div>
        </section>

        {/* História */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-serif text-taipei-red mb-6">Onde Tudo Começou</h2>
                <div className="w-20 h-1 bg-taipei-red mb-6" />
                <p className="text-lg text-taipei-brown leading-relaxed mb-4">
                  A gastronomia sempre esteve presente na vida de Daiane, não como um plano, mas como uma memória 
                  afetiva marcante desde a infância. Os finais de semana eram momentos de descoberta, explorando sabores, 
                  visitando mercados e repetindo o ritual de parar nas mesmas barracas para comer junto de sua avó.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed">
                  Seu pai, dono de restaurante em Taiwan e apaixonado pela cozinha, também foi uma influência importante. 
                  A vontade de empreender sempre existiu, e em uma conversa despretensiosa, uma amiga arquiteta fez a 
                  pergunta que despertou a ideia: "Day, por que você não abre um café?"
                </p>
              </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-taipei-cream rounded-3xl p-8 h-96 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <MapPin className="text-taipei-red mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-serif text-taipei-red mb-4">Cacupé, Florianópolis</h3>
                      <p className="text-taipei-brown mb-2">Estrada Haroldo Soares Glavan, 3010</p>
                      <p className="text-taipei-brown mb-4">Cacupé - Florianópolis, SC</p>
                      <p className="text-taipei-brown text-sm">CEP: 88050-005</p>
                    </div>
                  </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Propósito */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">Nosso Propósito</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
              <p className="text-xl text-taipei-brown leading-relaxed mb-6">
                O Taipei Coffee House nasce do desejo de honrar as origens e do ato genuíno de servir ao outro – 
                algo profundamente enraizado na cultura oriental.
              </p>
              <p className="text-lg text-taipei-brown leading-relaxed">
                Na tradição chinesa, ser um bom anfitrião é uma forma de respeito e acolhimento. 
                Daiane carrega esse valor desde a infância, inspirada por sua avó, que sempre demonstrou carinho 
                através da comida e da hospitalidade. Um lugar onde cada detalhe reflete esse propósito: 
                fazer com que as pessoas se sintam bem-vindas e cuidadas, como se estivessem em casa.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">Nossos Valores</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-taipei-cream p-8 rounded-2xl text-center"
                >
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <value.icon className="text-taipei-red" size={40} />
                  </div>
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">{value.title}</h3>
                  <p className="text-taipei-brown leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão */}
        <AnimatedSection className="py-24 px-4 bg-taipei-red text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Nossa Missão</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-6">
              Criar presença, despertar os sentidos, oferecer pausa. Cada gesto, cada escolha, fala sobre isso. 
              Do cuidado com o preparo ao tempo que se respeita, tudo convida à presença.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Nosso compromisso é servir com excelência, proporcionar momentos únicos e tornar cada visita memorável, 
              seja para um café rápido ou uma celebração especial. É sobre estar, sentir, partilhar — sem pressa.
            </p>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
