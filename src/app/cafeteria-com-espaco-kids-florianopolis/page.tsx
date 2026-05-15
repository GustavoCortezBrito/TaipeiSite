"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Baby, Dog, Trees, Coffee, Users, Sun, Shield, Smile } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Baby, title: "Espaco Kids Seguro", description: "Area dedicada onde as criancas podem circular com liberdade e tranquilidade." },
  { icon: Shield, title: "Ambiente Monitorado", description: "Espaco pensado para a seguranca dos pequenos enquanto os pais relaxam." },
  { icon: Coffee, title: "Cafe para os Pais", description: "Aproveite nossos cafes especiais e gastronomia autoral com calma." },
  { icon: Dog, title: "Pet Friendly", description: "Seu pet e bem-vindo em nossas areas externas." },
  { icon: Trees, title: "Area Externa", description: "Espaco ao ar livre integrado a natureza de Cacupe." },
  { icon: Users, title: "Para Toda a Familia", description: "Mesas ideais para familias e grupos de todos os tamanhos." },
  { icon: Sun, title: "Atmosfera Tranquila", description: "Ambiente acolhedor para aproveitar sem pressa." },
  { icon: Smile, title: "Momentos Memoraveis", description: "Um lugar onde criancas, adultos e pets criam memorias juntos." },
];

export default function CafeteriaComEspacoKids() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/parquinho-kids-cacupe.jpg"
              alt="Espaco kids do Taipei Coffee House em Cacupe"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-red/55 via-taipei-brown/40 to-taipei-brown/60" />
          </div>
          <div className="relative text-center px-4 z-10 text-white">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <Baby className="mx-auto mb-6" size={80} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                Cafe e Restaurante com<br />Espaco Kids em Florianopolis
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Um lugar onde familias tambem se sentem em casa
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-4 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-taipei-red to-transparent" />
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">Um Lugar para Toda a Familia</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
              <p className="text-xl text-taipei-brown leading-relaxed mb-4">
                No Taipei Coffee House, acreditamos que bons momentos a mesa devem poder ser vividos por todos
                — inclusive por quem chega acompanhado de criancas.
              </p>
              <p className="text-xl text-taipei-brown leading-relaxed mb-4">
                Por isso criamos um espaco acolhedor em Cacupe, Florianopolis, onde cafe especial, gastronomia
                e natureza convivem em harmonia.
              </p>
              <p className="text-xl text-taipei-brown leading-relaxed">
                Aqui, pais podem relaxar enquanto as criancas exploram o ambiente com liberdade e seguranca.
                Mais do que uma cafeteria, o Taipei e um espaco gastronômico pensado para encontros, pausas
                e experiencias memoraveis.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Espaco Kids — imagem + texto lado a lado */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/parquinho-kids-cacupe.jpg"
                  alt="Parquinho do Taipei Coffee House"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-taipei-red mb-6">Um lugar pensado para familias</h2>
                <div className="w-16 h-1 bg-taipei-red mb-6" />
                <p className="text-taipei-brown leading-relaxed mb-4">
                  Encontrar um cafe ou restaurante com espaco kids em Florianopolis nem sempre e facil.
                  Muitos lugares sao pensados apenas para adultos. No Taipei, acreditamos que momentos
                  em familia merecem um ambiente onde todos se sintam bem-vindos.
                </p>
                <p className="text-taipei-brown font-medium mb-3">Nosso espaco oferece:</p>
                <ul className="space-y-2 text-taipei-brown">
                  {["Ambiente amplo e confortavel", "Area externa integrada a natureza", "Espaco onde criancas podem circular com tranquilidade", "Mesas ideais para familias e grupos", "Atmosfera tranquila para aproveitar sem pressa"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-taipei-red rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-taipei-brown leading-relaxed mt-4">
                  Enquanto os pequenos se divertem, os adultos podem aproveitar o cafe com calma.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pet Friendly — texto + imagem lado a lado (invertido) */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Dog className="text-taipei-red" size={48} />
                  <h2 className="text-3xl md:text-4xl font-serif text-taipei-red">Pet Friendly</h2>
                </div>
                <div className="w-16 h-1 bg-taipei-red mb-6" />
                <p className="text-taipei-brown leading-relaxed mb-4">
                  Sabemos que muitos momentos especiais incluem tambem os companheiros de quatro patas.
                </p>
                <p className="text-taipei-brown leading-relaxed mb-4">
                  Por isso, o Taipei Coffee House e pet friendly em suas areas externas.
                  Assim, e possivel aproveitar o espaco com:
                </p>
                <ul className="space-y-2 text-taipei-brown mb-4">
                  {["Criancas", "Amigos", "Familia", "E tambem com seu pet"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-taipei-red rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-taipei-brown leading-relaxed">
                  O resultado e um ambiente vivo, acolhedor e cheio de encontros.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/pet-friendly-cacupe.png"
                  alt="Pet friendly no Taipei Coffee House"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-24 px-4 bg-gradient-to-b from-taipei-cream to-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-taipei-red text-center mb-4">O Que Oferecemos</h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-16" />
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-taipei-beige/30 text-center"
                >
                  <div className="bg-gradient-to-br from-taipei-red to-taipei-brown w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <f.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-serif text-taipei-red text-lg mb-2">{f.title}</h3>
                  <p className="text-taipei-brown text-sm">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Refugio gastronômico — CTA escuro */}
        <section className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "50px 50px" }}
          />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif mb-6"
            >
              Um refugio gastronômico em Cacupe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg opacity-90 leading-relaxed mb-10"
            >
              Localizado em Cacupe, uma das regioes mais tranquilas e charmosas de Florianopolis,
              o Taipei combina boa gastronomia, paisagem e hospitalidade. O espaco e ideal para
              cafe da manha em familia, brunch de fim de semana, encontros tranquilos durante a
              tarde e momentos especiais ao por do sol.
            </motion.p>
            <motion.a
              href="https://wa.me/5548988798141"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors shadow-lg"
            >
              Venha com Toda a Familia
            </motion.a>
          </div>
        </section>

        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
