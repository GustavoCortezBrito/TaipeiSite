"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function RestauranteEmCacupe() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ambiente/vista-mar.jpg"
              alt="Vista para o mar do restaurante em Cacupé"
              fill
              className="object-cover object-[center_50%]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/85 via-taipei-red/40 to-taipei-brown/85" />
          </div>

          <div className="relative text-center px-4 z-20 text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="mx-auto mb-6 text-taipei-cream animate-pulse" size={60} />
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Restaurante em Cacupé
              </h1>
              <p className="text-xl md:text-2xl text-taipei-cream max-w-3xl mx-auto font-light leading-relaxed">
                Vista privilegiada para o mar em Florianópolis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section: Restaurante em Cacupé com Vista para o Mar */}
        <AnimatedSection className="py-20 px-4 bg-white relative">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">
              Restaurante em Cacupé com Vista para o Mar
            </h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-10" />
            <div className="space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed max-w-3xl mx-auto">
              <p>
                Se você procura restaurante em Cacupé, no norte da ilha de Florianópolis, o Taipei Coffee
                House é o cenário ideal para uma experiência gastronômica à beira-mar. Unimos brunch
                autoral, almoço contemporâneo e jantar com influência asiática em um ambiente sofisticado,
                com vista privilegiada para o mar em Floripa.
              </p>
              <p>
                Localizado em um dos bairros mais charmosos e valorizados de Florianópolis, o Taipei oferece
                muito mais que uma refeição — oferece presença, atmosfera e sabor em cada detalhe.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Onde Comer em Cacupé */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem com Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/images/ambiente/almoco-pessoas.png"
                  alt="O dia ganha outro sabor no Taipei"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/85 via-taipei-brown/30 to-transparent" />
                <div className="absolute bottom-10 left-8 right-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-serif tracking-wide leading-tight drop-shadow-md">
                    O DIA GANHA
                    <br />
                    OUTRO SABOR
                    <br />
                    NO TAIPEI
                  </h3>
                </div>
              </motion.div>

              {/* Conteúdo de Texto */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-taipei-red">
                  Onde Comer em Cacupé, Florianópolis
                </h2>
                <div className="w-20 h-1 bg-taipei-red" />
                <p className="text-lg text-taipei-brown leading-relaxed">
                  Cacupé é conhecido pela tranquilidade, natureza preservada e vista deslumbrante da Ponte
                  Hercílio Luz. Para quem busca onde comer em Cacupé com qualidade e sofisticação, o Taipei
                  Coffee House se destaca como restaurante contemporâneo que une gastronomia criativa e
                  localização privilegiada.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed">
                  Seja para um almoço leve, um brunch no fim de semana ou um jantar ao pôr do sol, somos uma
                  referência gastronômica no bairro.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brunch e Almoço em Cacupé */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo de Texto com Checklist */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6 order-2 md:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-taipei-red">
                  Brunch e Almoço em Cacupé
                </h2>
                <div className="w-20 h-1 bg-taipei-red" />
                <p className="text-lg text-taipei-brown leading-relaxed">
                  Nosso brunch em Cacupé combina café especial, pratos autorais e toque oriental em receitas
                  que surpreendem. Já no almoço, oferecemos opções contemporâneas com ingredientes
                  selecionados e apresentação elegante.
                </p>

                <div className="space-y-4 pt-2">
                  <h4 className="text-xl font-serif text-taipei-brown font-semibold">
                    O Taipei é ideal para quem procura:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "Brunch em Cacupé",
                      "Almoço com vista para o mar",
                      "Restaurante sofisticado em Floripa",
                      "Experiência gastronômica no norte da ilha"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-taipei-brown text-lg">
                        <span className="text-taipei-red font-bold text-xl">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Imagem do Slider/Food */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2 group"
              >
                <Image
                  src="/images/ambiente/almoco-pratos.png"
                  alt="Brunch e Almoço em Cacupé no Taipei"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-colors">
                  <span className="text-taipei-brown text-xl font-bold">→</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Restaurante em Cacupé para Momentos Especiais */}
        <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif text-taipei-red mb-6">
              Restaurante em Cacupé para Momentos Especiais
            </h2>
            <div className="w-24 h-1 bg-taipei-red mx-auto mb-10" />
            <div className="space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed max-w-3xl mx-auto">
              <p>
                Um dos grandes diferenciais do nosso restaurante em Cacupé é a vista aberta para o mar. O
                ambiente integra arquitetura acolhedora com paisagem natural, criando um espaço perfeito
                para encontros especiais, celebrações e momentos de pausa. Aqui, cada refeição acontece
                com o mar como cenário.
              </p>
              <p>
                Além do brunch e almoço, o Taipei Coffee House também é escolhido para encontros românticos,
                confraternizações e eventos intimistas em Florianópolis. Se você procura restaurante em
                Cacupé com vista para o mar em Floripa, venha conhecer o Taipei e descubra uma experiência
                que vai além do café.
              </p>
            </div>
          </div>
        </AnimatedSection>



        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
