"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import SocialShare from "@/components/SocialShare";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Calendar, Sparkles, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Taipei Coffee House - Vista para o mar em Cacupé"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-cream/80 via-secondary/70 to-taipei-beige/80" />
          </div>

          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 opacity-10 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-taipei-red rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-taipei-sage rounded-full blur-3xl" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-20 pb-20 text-center">
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
                Taipei Coffee House Florianópolis
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link 
                href="/menu" 
                className="group bg-taipei-red text-white px-8 py-4 rounded-full hover:bg-taipei-brown transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <UtensilsCrossed size={20} />
                Ver Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/espaco-eventos-florianopolis" 
                className="group border-2 border-taipei-red text-taipei-red px-8 py-4 rounded-full hover:bg-taipei-red hover:text-white transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-taipei-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                <Calendar size={20} />
                Nossos Eventos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
<<<<<<< HEAD


=======
>>>>>>> ec9b886819ab8b5b1dee8748d1b1624ebd951312
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
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
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

<<<<<<< HEAD
        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* Contact Section */}
        <ContactSection />
=======
        {/* Serviços Section */}
        <AnimatedSection id="servicos" className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-6" />
              <p className="text-lg text-taipei-brown max-w-2xl mx-auto">
                Do café da manhã ao fim da tarde, o Taipei Coffee House tem a experiência certa para cada momento do seu dia em Florianópolis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-taipei-cream rounded-full flex items-center justify-center">
                  <Coffee className="text-taipei-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-taipei-red mb-2">Grãos Selecionados e Preparo Artesanal</h3>
                  <p className="text-taipei-brown leading-relaxed">
                    Trabalhamos com grãos selecionados de origem única, preparados por baristas treinados. Espresso, cappuccino, coado, cold brew e muito mais. Cada xícara é uma experiência sensorial pensada para quem aprecia um café de verdade. Somos referência em cafés especiais no norte da ilha de Florianópolis.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-taipei-cream rounded-full flex items-center justify-center">
                  <UtensilsCrossed className="text-taipei-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-taipei-red mb-2">Cardápio de Brunch e Almoço em Cacupé</h3>
                  <p className="text-taipei-brown leading-relaxed">
                    Nosso brunch de fim de semana é um dos mais queridos de Florianópolis. Pratos autorais com influência asiática, opções doces e salgadas, sucos naturais e cafés especiais compõem um cardápio pensado para momentos de prazer à mesa. No almoço, servimos pratos executivos e à la carte com ingredientes frescos e sazonais.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-taipei-cream rounded-full flex items-center justify-center">
                  <Calendar className="text-taipei-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-taipei-red mb-2">Estrutura Completa para Celebrações</h3>
                  <p className="text-taipei-brown leading-relaxed">
                    Dispomos de espaço exclusivo para eventos corporativos, aniversários, formaturas, confraternizações e celebrações especiais. Com capacidade para grupos, vista para o mar e estrutura completa, o Taipei Coffee House é o cenário ideal para tornar qualquer evento em Florianópolis inesquecível. Atendemos tanto eventos sociais quanto corporativos com cardápio personalizado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-taipei-cream rounded-full flex items-center justify-center">
                  <Star className="text-taipei-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-taipei-red mb-2">Ambiente Familiar com Espaço Kids</h3>
                  <p className="text-taipei-brown leading-relaxed">
                    Pensamos em toda a família. Nosso espaço kids permite que os pequenos brinquem com segurança enquanto os adultos relaxam e aproveitam a vista para o mar. Somos pet friendly na área externa e oferecemos estacionamento gratuito. Um ambiente acolhedor para toda a família em Cacupé, Florianópolis.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Por que nos visitar Section */}
        <AnimatedSection id="por-que-visitar" className="py-24 px-4 bg-taipei-cream">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-4">Por Que Visitar o Taipei Coffee House</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-6" />
            </motion.div>

            <div className="space-y-6 text-lg text-taipei-brown leading-relaxed">
              <p>
                O Taipei Coffee House nasceu do sonho de criar um espaço onde gastronomia, natureza e cultura se encontram. Localizado na Estrada Haroldo Soares Glavan, em Cacupé — um dos bairros mais tranquilos e charmosos de Florianópolis — nosso restaurante e café oferece uma vista privilegiada para o mar que transforma qualquer refeição em uma experiência memorável.
              </p>
              <p>
                A influência asiática permeia cada detalhe do Taipei: da decoração ao cardápio, passando pelo nome que homenageia a capital de Taiwan. Essa fusão cultural cria um ambiente único em Florianópolis, onde você pode saborear um café especial enquanto contempla as águas da Baía Norte. É o equilíbrio perfeito entre o sofisticado e o acolhedor.
              </p>
              <p>
                Para quem busca um <strong>restaurante em Cacupé</strong>, uma <strong>cafeteria com vista para o mar em Florianópolis</strong> ou um <strong>espaço para eventos no norte da ilha</strong>, o Taipei Coffee House reúne tudo isso em um só lugar. Atendemos de terça a domingo, com horários pensados para o seu conforto: de terça a sexta das 11h às 20h, sábados das 10h às 20h e domingos das 10h às 19h.
              </p>
              <p>
                Seja você morador de Florianópolis ou turista descobrindo a ilha pela primeira vez, o Taipei Coffee House é uma parada obrigatória. Venha para o café, fique pelo almoço, volte para o brunch de fim de semana. Cada visita revela um novo motivo para amar este espaço único em Cacupé.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/sobre-o-taipei"
                className="group bg-taipei-red text-white px-8 py-4 rounded-full hover:bg-taipei-brown transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Nossa História
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/menu"
                className="group border-2 border-taipei-red text-taipei-red px-8 py-4 rounded-full hover:bg-taipei-red hover:text-white transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Ver Cardápio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Social Share */}
        <div className="py-8 px-4 bg-white flex justify-center">
          <SocialShare />
        </div>
>>>>>>> ec9b886819ab8b5b1dee8748d1b1624ebd951312

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
