"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Navigation, Car } from "lucide-react";
import Image from "next/image";

export default function RestauranteEmCacupe() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ambiente/vista-mar.jpg"
              alt="Vista para o mar do restaurante em Cacupé"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-sage/70 via-taipei-beige/60 to-taipei-cream/70" />
          </div>

          <motion.div
            className="absolute inset-0 opacity-20 z-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239AAB9E\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          />

          <div className="relative text-center px-4 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="mx-auto mb-6 text-taipei-red" size={80} />
              <h1 className="text-5xl md:text-7xl font-serif text-taipei-red mb-6">
                Restaurante em Cacupé
              </h1>
              <p className="text-xl md:text-2xl text-taipei-brown max-w-3xl mx-auto">
                Vista privilegiada para o mar em Florianópolis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Localização */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif text-taipei-red mb-6">Nossa Localização</h2>
                <div className="w-20 h-1 bg-taipei-red mb-6" />
                <p className="text-lg text-taipei-brown leading-relaxed mb-6">
                  Localizado no charmoso bairro de Cacupé, em Florianópolis, o Taipei Coffee House 
                  oferece uma experiência gastronômica única com vista privilegiada para o mar. 
                  Um refúgio tranquilo, longe da agitação do centro, mas com fácil acesso.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed">
                  Nosso espaço foi pensado para proporcionar momentos de conexão, seja para um café 
                  da manhã relaxante, um almoço especial ou uma celebração inesquecível.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/ambiente/interior-1.jpg"
                  alt="Interior do restaurante Taipei Coffee House"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Informações */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Informações</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Horário de Funcionamento",
                  info: ["Seg-Sex: 8h - 18h", "Sáb-Dom: 9h - 19h"]
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  info: ["(48) XXXX-XXXX", "WhatsApp disponível"]
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  info: ["contato@taipeicoffeehouse.com.br"]
                },
                {
                  icon: Car,
                  title: "Estacionamento",
                  info: ["Estacionamento próprio", "Fácil acesso"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="bg-taipei-cream w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="text-xl font-serif text-taipei-red mb-4">{item.title}</h3>
                  {item.info.map((line, i) => (
                    <p key={i} className="text-taipei-brown">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <AnimatedSection className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">Por Que Visitar?</h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-12" />

            {/* Ambiente Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { src: "/images/ambiente/interior-2.jpg", alt: "Interior do restaurante" },
                { src: "/images/ambiente/area-externa.jpg", alt: "Área externa" },
                { src: "/images/hero/hero-panorama.jpg", alt: "Vista panorâmica" },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Vista para o Mar",
                  description: "Desfrute de uma vista privilegiada enquanto saboreia nossos pratos e cafés especiais."
                },
                {
                  title: "Ambiente Acolhedor",
                  description: "Espaço pensado para proporcionar conforto e tranquilidade, perfeito para relaxar."
                },
                {
                  title: "Gastronomia de Qualidade",
                  description: "Menu autoral com influência asiática, preparado com ingredientes frescos e selecionados."
                },
                {
                  title: "Experiência Completa",
                  description: "Mais do que um restaurante, um destino para criar memórias especiais."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-taipei-cream p-6 rounded-xl border-l-4 border-taipei-red"
                >
                  <h3 className="text-xl font-serif text-taipei-red mb-2">{item.title}</h3>
                  <p className="text-taipei-brown">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Como Chegar */}
        <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-taipei-sage to-taipei-beige text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Como Chegar</h2>
            <p className="text-xl mb-10 opacity-90">
              Fácil acesso a partir do centro de Florianópolis
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <p className="text-lg leading-relaxed">
                Saindo do centro de Florianópolis, siga pela SC-401 em direção ao norte da ilha. 
                Cacupé fica a aproximadamente 15 minutos do centro. Nosso restaurante está localizado 
                em uma área tranquila com vista para o mar.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-taipei-sage px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors inline-flex items-center gap-2"
            >
              <Navigation size={20} />
              Abrir no Google Maps
            </motion.button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
