"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Calendar, Sparkles, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] bg-gradient-to-br from-taipei-cream via-secondary to-taipei-beige flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-taipei-red rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-taipei-sage rounded-full blur-3xl" />
          </motion.div>

          <div className="relative text-center px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-taipei-red mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Taipei Coffee House
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-taipei-brown mb-4 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Restaurante e Café em Florianópolis com Vista para o Mar
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-taipei-brown/80 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Brunch, almoço, cafés especiais e eventos em Cacupé. Uma experiência gastronômica com influência asiática.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/menu" 
                  className="group bg-taipei-red text-white px-8 py-4 rounded-full hover:bg-taipei-brown transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <UtensilsCrossed size={20} />
                  Ver Menu
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/espaco-eventos-florianopolis" 
                  className="group border-2 border-taipei-red text-taipei-red px-8 py-4 rounded-full hover:bg-taipei-red hover:text-white transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-taipei-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  <Calendar size={20} />
                  Eventos
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-6 h-10 border-2 border-taipei-red rounded-full flex justify-center">
              <div className="w-1 h-3 bg-taipei-red rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Sobre Section */}
        <AnimatedSection id="sobre" className="py-24 px-4 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-taipei-red to-transparent" />
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-8">Sobre o Taipei Coffee House</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
            </motion.div>
            
            <div className="space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed">
              <p className="text-center">
                Localizado em Cacupé, um dos bairros mais charmosos de Florianópolis, o Taipei Coffee House é muito mais 
                que um simples café ou restaurante. Somos um espaço de experiências, onde cada visita se transforma em 
                um momento especial de conexão, sabor e contemplação.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-taipei-cream p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">Nossa Essência</h3>
                  <p className="leading-relaxed">
                    Combinamos gastronomia autoral com influência asiática, cafés especiais selecionados e um ambiente 
                    sofisticado com vista privilegiada para o mar. Cada detalhe foi pensado para proporcionar uma 
                    experiência sensorial única, onde tradição e contemporaneidade se encontram.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-taipei-cream p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-serif text-taipei-red mb-4">Localização Privilegiada</h3>
                  <p className="leading-relaxed">
                    Em Cacupé, oferecemos não apenas uma refeição, mas uma experiência completa. Nossa vista para o mar 
                    de Florianópolis cria o cenário perfeito para brunches relaxantes, almoços especiais, encontros de 
                    negócios ou celebrações memoráveis com família e amigos.
                  </p>
                </motion.div>
              </div>

              <p className="text-center mt-8">
                Seja para um café da manhã tranquilo, um brunch de fim de semana, um almoço executivo ou um evento especial, 
                o Taipei Coffee House é o destino ideal para quem busca qualidade, acolhimento e uma experiência gastronômica 
                diferenciada em Florianópolis. Venha descobrir por que somos referência em cafés especiais e gastronomia 
                autoral na região.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Destaques */}
        <section id="destaques" className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-taipei-red rounded-full" />
            <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-taipei-sage rounded-full" />
          </div>
          <div className="container mx-auto relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red text-center mb-4">Nossos Destaques</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Coffee,
                  title: "Cafés Especiais",
                  description: "Preparados com qualidade e cuidado, nossos cafés são selecionados para proporcionar uma experiência única.",
                  delay: 0
                },
                {
                  icon: UtensilsCrossed,
                  title: "Gastronomia Autoral",
                  description: "Bruschettas, sanduíches, pastéis, doces e tortas pensados para harmonizar com cada momento.",
                  delay: 0.1
                },
                {
                  icon: Calendar,
                  title: "Eventos Especiais",
                  description: "Aniversários, formaturas, encontros corporativos e celebrações especiais com vista para o mar.",
                  delay: 0.2
                },
                {
                  icon: Sparkles,
                  title: "Experiência Única",
                  description: "Ambiente acolhedor com influência asiática, proporcionando momentos memoráveis à beira-mar.",
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-taipei-beige/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-taipei-red/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="bg-gradient-to-br from-taipei-cream to-taipei-beige w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <item.icon className="text-taipei-red" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-taipei-red mb-4 text-center">{item.title}</h3>
                  <p className="text-taipei-brown text-center leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection id="cta" className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px"
            }}
          />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-serif mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Visite-nos em Cacupé
              </motion.h2>
              <motion.p 
                className="text-xl mb-4 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Descubra uma experiência gastronômica única com vista para o mar
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: MapPin,
                  title: "Localização",
                  info: "Estrada Haroldo Soares Glavan, 3010",
                  subinfo: "Cacupé, Florianópolis - SC",
                  link: "https://maps.google.com/?q=Taipei+Coffee+House+Cacupe",
                  delay: 0
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  info: "(48) 98879-8141",
                  subinfo: "WhatsApp disponível",
                  link: "https://wa.me/5548988798141",
                  delay: 0.1
                },
                {
                  icon: Calendar,
                  title: "Horário",
                  info: "Ter-Sex: 11h-20h",
                  subinfo: "Sáb: 10h-20h | Dom: 10h-19h",
                  link: null,
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-white/20 p-4 rounded-full mb-4">
                          <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                        <p className="text-lg font-medium mb-1">{item.info}</p>
                        <p className="text-sm opacity-80">{item.subinfo}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-4 rounded-full mb-4">
                        <item.icon size={32} />
                      </div>
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <p className="text-lg font-medium mb-1">{item.info}</p>
                      <p className="text-sm opacity-80">{item.subinfo}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://wa.me/5548988798141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-taipei-red px-10 py-4 rounded-full hover:bg-taipei-cream transition-all hover:shadow-2xl inline-flex items-center gap-2 font-semibold relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-taipei-red/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone size={20} />
                  Fazer Reserva
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/sobre-o-taipei"
                  className="group border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-taipei-red transition-all hover:shadow-2xl inline-flex items-center gap-2 font-semibold relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  Conheça Nossa História
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
