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
            <div className="space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed max-w-3xl mx-auto font-light">
              <p>
                Se você procura um autêntico restaurante em Cacupé, localizado no norte da ilha de Florianópolis, o Taipei Coffee
                House é o cenário ideal para uma experiência gastronômica inesquecível à beira-mar. Nós unimos um brunch
                autoral sofisticado, um almoço contemporâneo delicioso e pratos inspirados na culinária taiwanesa em um ambiente acolhedor,
                com vista panorâmica e privilegiada para o mar calmo de Cacupé.
              </p>
              <p>
                Localizado em um dos bairros mais charmosos, calmos e valorizados da capital catarinense, o Taipei oferece
                muito mais que uma simples refeição rápida. Nós oferecemos um espaço de presença e afeto, onde cada detalhe —
                desde a escolha cuidadosa dos ingredientes locais até a hospitalidade calorosa — é planejado para que você e sua
                família desfrutem do melhor da gastronomia à beira-mar.
              </p>
              <p>
                A nossa essência une o respeito oriental pelo tempo de preparo de cada prato com o frescor dos insumos brasileiros. 
                Queremos proporcionar a você um refúgio de tranquilidade onde o mar de Florianópolis serve de moldura para grandes conversas, 
                momentos de lazer ou comemorações especiais com quem você mais ama.
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
                  alt="Clientes aproveitando o almoço no restaurante em Cacupé"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/85 via-taipei-brown/30 to-transparent" />
                <div className="absolute bottom-10 left-8 right-8 text-white">
                  <p className="text-3xl md:text-4xl font-bold font-serif tracking-wide leading-tight drop-shadow-md">
                    O DIA GANHA
                    <br />
                    OUTRO SABOR
                    <br />
                    NO TAIPEI
                  </p>
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
                <p className="text-lg text-taipei-brown leading-relaxed font-light">
                  O bairro de Cacupé é amplamente conhecido por sua tranquilidade bucólica, natureza preservada e uma vista deslumbrante 
                  para a Baía Norte de Florianópolis. Para quem busca onde comer em Cacupé com alta qualidade, sofisticação e atendimento acolhedor, 
                  o Taipei Coffee House se destaca como um restaurante contemporâneo que une técnicas modernas, sabores criativos e uma localização 
                  privilegiada de fácil acesso.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed font-light">
                  Nossa cozinha combina pratos clássicos com um toque de influência asiática, como o nosso famoso Bão artesanal e pratos autorais 
                  que misturam a leveza do mar com o aroma marcante das especiarias orientais. Seja para um almoço executivo durante a semana, 
                  um café especial no meio da tarde ou um encontro romântico ao pôr do sol, o Taipei oferece a atmosfera perfeita para qualquer momento.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed font-light">
                  A nossa proximidade com o mar permite que nossos clientes desfrutem de um ambiente fresco e arejado, ideal para relaxar enquanto 
                  saboreiam uma boa refeição acompanhada de nossa carta de bebidas, chás especiais e vinhos selecionados para harmonização.
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
                <p className="text-lg text-taipei-brown leading-relaxed font-light">
                  Nosso brunch em Cacupé é servido de forma especial, combinando pães artesanais de fermentação natural, ovos perfeitamente preparados, 
                  geleias caseiras, frutas da estação e, claro, nossos premiados cafés especiais. Cada elemento do brunch é planejado para trazer equilíbrio 
                  entre sabores doces e salgados com um toque oriental marcante.
                </p>
                <p className="text-lg text-taipei-brown leading-relaxed font-light">
                  No almoço, o cardápio do Taipei se expande com opções de pratos principais individuais que valorizam peixes frescos da região, 
                  carnes grelhadas com molhos autorais e saladas refrescantes. Nossa proposta é oferecer uma alimentação equilibrada, leve e extremamente saborosa, 
                  perfeita para quem busca comer bem sem pressa durante a semana ou aos sábados e domingos.
                </p>

                <div className="space-y-4 pt-2">
                  <p className="text-xl font-serif text-taipei-brown font-semibold">
                    O Taipei é ideal para quem procura:
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "Brunch premium aos finais de semana",
                      "Almoço contemporâneo com vista para o mar",
                      "Cafés especiais pontuados de microlotes selecionados",
                      "Espaço acolhedor e seguro para crianças e famílias",
                      "Ambiente externo pet friendly para curtir com seu pet"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-taipei-brown text-lg font-light">
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
                  alt="Pratos gourmet servidos no almoço do Taipei Coffee House"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
            <div className="space-y-6 text-lg md:text-xl text-taipei-brown leading-relaxed max-w-3xl mx-auto font-light">
              <p>
                Um dos maiores atrativos do nosso restaurante em Cacupé é o design arquitetônico que valoriza a integração com a natureza local. 
                Os amplos janelões de vidro permitem que a luz natural inunde o salão interno, enquanto o deck de madeira externo coloca você em 
                contato direto com a brisa suave do oceano e o visual inesquecível da orla marítima.
              </p>
              <p>
                Pensando no conforto de toda a família, o Taipei Coffee House conta com um **Espaço Kids totalmente equipado e seguro**, 
                permitindo que os pais relaxem e aproveitem a refeição enquanto os filhos se divertem no playground. Além disso, somos orgulhosamente 
                **Pet Friendly**, o que significa que seu animal de estimação é super bem-vindo em nosso deck externo para compartilhar esses momentos felizes com você.
              </p>
              <p>
                Seja para celebrar aniversários, formaturas, mini-weddings ou para organizar encontros corporativos sofisticados em Florianópolis, 
                nossa equipe de eventos está pronta para desenhar cardápios personalizados e garantir uma comemoração memorável. Venha nos visitar 
                e vivencie o estilo de vida tranquilo e saboroso de Cacupé.
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
