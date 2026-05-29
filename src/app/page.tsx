"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
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
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/eventos/espaco-frente-eventos.jpg"
              alt="Lounge de eventos do Taipei"
              fill
              className="object-cover object-center md:object-[center_35%]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/80 via-taipei-red/60 to-taipei-brown/80" />
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

          <div className="container mx-auto px-4 relative z-20 pt-16 md:pt-0 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Taipei Coffee House Florianópolis
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-taipei-cream mb-4 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Restaurante e Café em Florianópolis com Vista para o Mar
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto"
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
                Conhecer Nosso Cardápio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/espaco-eventos-florianopolis"
                className="group border-2 border-white text-white hover:text-taipei-red px-8 py-4 rounded-full transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                <Calendar size={20} />
                Explorar Nossos Eventos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sobre Section */}
        <AnimatedSection id="sobre" className="py-24 px-4 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-taipei-red to-transparent" />
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">Sobre o Taipei Coffee House</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text content - left side */}
              <div className="lg:col-span-7 space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed">
                <p>
                  Localizado em Cacupé, um dos bairros mais charmosos de Florianópolis, o Taipei Coffee House é muito mais
                  que um simples café ou restaurante. Somos um espaço de experiências, onde cada visita se transforma em
                  um momento especial de conexão, sabor e contemplação.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-taipei-cream p-6 rounded-2xl border-l-4 border-taipei-red shadow-sm"
                  >
                    <p className="text-xl font-serif text-taipei-red mb-3 font-semibold">Nossa Essência</p>
                    <p className="text-base leading-relaxed">
                      Combinamos gastronomia autoral com influência asiática, cafés especiais selecionados e um ambiente
                      sofisticado com vista privilegiada para o mar. Cada detalhe foi pensado para proporcionar uma
                      experiência sensorial única, onde tradição e contemporaneidade se encontram.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-taipei-cream p-6 rounded-2xl border-l-4 border-taipei-sage shadow-sm"
                  >
                    <p className="text-xl font-serif text-taipei-red mb-3 font-semibold">Localização Privilegiada</p>
                    <p className="text-base leading-relaxed">
                      Em Cacupé, oferecemos não apenas uma refeição, mas uma experiência completa. Nossa vista para o mar
                      de Florianópolis cria o cenário perfeito para brunches relaxantes, almoços especiais, encontros de
                      negócios ou celebrações memoráveis com família e amigos.
                    </p>
                  </motion.div>
                </div>

                <p className="pt-2">
                  Seja para um café da manhã tranquilo, um brunch de fim de semana, um almoço executivo ou um evento especial,
                  o Taipei Coffee House é o destino ideal para quem busca qualidade, acolhimento e uma experiência gastronômica
                  diferenciada em Florianópolis. Venha descobrir por que somos referência em cafés especiais e gastronomia
                  autoral na região.
                </p>
              </div>

              {/* Visual Collage - right side */}
              <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex flex-col items-center gap-16 justify-center">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-taipei-red/5 rounded-3xl -z-10 blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-taipei-sage/5 rounded-full -z-10 blur-xl" />
                
                {/* Geometry accent */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-taipei-red/10 rounded-3xl -z-10 translate-x-3 translate-y-3" />
                
                {/* Collage Container */}
                <div className="relative w-full max-w-[340px] aspect-[4/5] md:max-w-[380px] mb-8">
                  {/* Main Image: Fundadora */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative w-[85%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <Image
                      src="/images/sobre/fundadora.jpg"
                      alt="Daiane Shuai — Fundadora do Taipei Coffee House"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/30 to-transparent" />
                  </motion.div>

                  {/* Overlapping Image: Newspaper */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="absolute -bottom-6 -right-4 w-[55%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10"
                  >
                    <Image
                      src="/images/sobre/daiane-jornal.png"
                      alt="Daiane Shuai em reportagem sobre o Taipei Coffee House"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/20 to-transparent" />
                  </motion.div>

                  {/* Tiny Accent Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -top-4 -left-4 bg-taipei-red text-white py-2 px-4 rounded-xl shadow-lg z-20 text-xs font-serif italic tracking-wide"
                  >
                    Fundadora Taiwanesa
                  </motion.div>
                </div>

                {/* Collage Container: Conexão entre Ilhas */}
                <div className="relative w-full max-w-[340px] aspect-[4/5] md:max-w-[380px]">
                  {/* Main Image: Taiwan Island */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative w-[85%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <Image
                      src="/images/sobre/taiwan-scenic.png"
                      alt="Paisagem da Ilha de Taiwan"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/30 to-transparent" />
                  </motion.div>

                  {/* Overlapping Image: Cacupé Frente-mar */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="absolute -bottom-6 -right-4 w-[55%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10"
                  >
                    <Image
                      src="/images/sobre/cacupe-front-sea.png"
                      alt="Taipei Coffee House frente-mar em Cacupé"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/20 to-transparent" />
                  </motion.div>

                  {/* Tiny Accent Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -top-4 -left-4 bg-taipei-red text-white py-2 px-4 rounded-xl shadow-lg z-20 text-xs font-serif italic tracking-wide"
                  >
                    Conexão entre Ilhas
                  </motion.div>
                </div>
              </div>
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
                  <p className="text-2xl font-serif text-taipei-red mb-4 text-center font-bold">{item.title}</p>
                  <p className="text-taipei-brown text-center leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Experiências */}
        <AnimatedSection className="py-24 px-4 bg-white relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-4">Viva a Experiência Taipei</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-6" />
              <p className="text-lg md:text-xl text-taipei-brown max-w-2xl mx-auto font-light leading-relaxed">
                Cada canto da nossa casa e cada detalhe do nosso menu foram planejados para proporcionar momentos memoráveis de contemplação e sabor.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/images/brunch/brunch-hero.png",
                  alt: "Brunch premium do Taipei Coffee House",
                  title: "Brunch à Beira-Mar",
                  desc: "Mini croissants artesanais, geleias caseiras, frutas e cafés especiais servidos nos finais de semana.",
                  link: "/brunch",
                  linkText: "Conhecer o Brunch",
                  span: "lg:col-span-2",
                  delay: 0
                },
                {
                  src: "/images/menu/cafe-graos.png",
                  alt: "Grãos especiais e microlotes de café no Taipei",
                  title: "Grãos Especiais",
                  desc: "Cafés autorais e microlotes selecionados acima de 85 pontos SCAA para paladares refinados.",
                  link: "/menu",
                  linkText: "Ver Cardápio",
                  span: "lg:col-span-1",
                  delay: 0.1
                },
                {
                  src: "/images/parquinho-kids-cacupe.jpg",
                  alt: "Parquinho infantil kids no Taipei em Cacupé",
                  title: "Espaço Kids Integrado",
                  desc: "Estrutura completa e segura de playground para os pequenos enquanto você relaxa e curte a vista.",
                  link: "/cafeteria-com-espaco-kids-florianopolis",
                  linkText: "Conhecer Espaço Kids",
                  span: "lg:col-span-1",
                  delay: 0.2
                },
                {
                  src: "/images/hero/hero-main.jpg",
                  alt: "Taipei Coffee House - Vista para o mar em Cacupé",
                  title: "Eventos Exclusivos",
                  desc: "Celebrações sociais intimistas ou confraternizações corporativas inesquecíveis de frente para o mar.",
                  link: "/espaco-eventos-florianopolis",
                  linkText: "Reservar Nosso Espaço",
                  span: "lg:col-span-2",
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className={`${item.span} relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[400px] border border-taipei-beige/25 group`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/95 via-taipei-brown/40 to-transparent group-hover:via-taipei-brown/50 transition-all duration-300" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10 text-white">
                    <p className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight font-bold">
                      {item.title}
                    </p>
                    <p className="text-taipei-cream text-sm md:text-base mb-6 font-light max-w-xl opacity-90 leading-relaxed">
                      {item.desc}
                    </p>

                    <div>
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-white group/btn font-semibold text-sm hover:text-taipei-cream transition-colors"
                      >
                        {item.linkText}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

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
                  info: "(48) 98500-8964",
                  subinfo: "WhatsApp disponível",
                  link: "https://wa.me/5548985008964",
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
                        <p className="text-xl font-serif mb-2 font-semibold">{item.title}</p>
                        <p className="text-lg font-medium mb-1">{item.info}</p>
                        <p className="text-sm opacity-80">{item.subinfo}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-4 rounded-full mb-4">
                        <item.icon size={32} />
                      </div>
                      <p className="text-xl font-serif mb-2 font-semibold">{item.title}</p>
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
                  href="https://wa.me/5548985008964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-taipei-red px-10 py-4 rounded-full hover:bg-taipei-cream transition-all hover:shadow-2xl inline-flex items-center gap-2 font-semibold relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-taipei-red/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone size={20} />
                  Fazer Reserva via WhatsApp
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/sobre-o-taipei"
                  className="group border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-taipei-red transition-all hover:shadow-2xl inline-flex items-center gap-2 font-semibold relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  Conhecer Nossa História Completa
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <Testimonials />

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
