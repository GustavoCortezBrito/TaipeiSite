"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Da Cultura Taiwanesa para Cacupé",
    paragraphs: [
      "Criada entre rituais familiares e mercados tradicionais de Taiwan, Daiane aprendeu desde cedo que servir comida é um ato de afeto. Na cultura oriental, hospitalidade não é performance — é presença. Essa presença se manifesta no respeito ao tempo dos ingredientes, na precisão do preparo e na intenção de acolher calorosamente quem cruza as portas de casa.",
      "Anos depois, vivendo em Florianópolis, ela encontrou em Cacupé o cenário perfeito para unir suas raízes asiáticas à paisagem única da Baía Norte. Assim nasceu o Taipei Coffee House: um restaurante em Florianópolis que integra tradição, estética e experiência à beira-mar, proporcionando um refúgio de paz onde o tempo parece correr mais devagar.",
      "A essência taiwanesa está presente em cada detalhe, desde o aroma do gengibre fresco e das especiarias tradicionais até o cuidado minucioso na seleção de chás e grãos de café de origem controlada. O Taipei é a realização de um sonho de infância que atravessou oceanos para encontrar lar e encanto na bela Ilha da Magia."
    ],
  },
  {
    title: "Um Restaurante com Influência Asiática",
    paragraphs: [
      "O Taipei não é apenas um café de passagem. É um restaurante contemporâneo completo que oferece brunch autoral, almoço à beira-mar, jantar com atmosfera intimista e espaço para eventos corporativos e celebrações exclusivas. A nossa proposta culinária é criar pontes entre o Oriente e o Ocidente, misturando sabores tradicionais e técnicas modernas de preparo.",
      "Nossa gastronomia combina ingredientes selecionados de produtores locais, técnicas orientais milenares e uma apresentação artística e cuidadosa, sempre com vista privilegiada para o mar de Florianópolis. Cada prato conta uma história de fusão cultural, combinando o frescor dos frutos do mar locais com a potência e o perfume das especiarias asiáticas.",
      "Do clássico brunch servido com pães de fermentação natural aos pratos principais inspirados na rica culinária taiwanesa e chinesa, nossa cozinha preza pelo frescor e pela inovação. Nossos chefs buscam surpreender o paladar através do equilíbrio perfeito entre o doce, o salgado, o ácido e o umami, o quinto sabor básico."
    ],
  },
  {
    title: "Hospitalidade como Filosofia de Vida",
    paragraphs: [
      "Na cultura chinesa, conceitos como guanxi (conexão profunda) e renqing (reciprocidade, empatia e carinho) representam a importância primordial das relações humanas. Esses valores milenares guiam o Taipei Coffee House desde a sua fundação e estão intimamente refletidos no comportamento de toda a nossa equipe de atendimento.",
      "Cada detalhe — da escolha da louça de cerâmica feita à mão ao atendimento caloroso e atencioso — é pensado para que nossos convidados sintam que há um lugar reservado especialmente para eles. Acreditamos que a mesa é um espaço sagrado de partilha, conversa e celebração da vida cotidiana.",
      "Nossos atendentes são treinados para acolher cada cliente com o mesmo sorriso e atenção que receberiam em uma autêntica casa taiwanesa. Queremos que você se sinta genuinamente em casa, seja para passar horas lendo um livro com um bom café especial ou para celebrar uma data importante."
    ],
  },
  {
    title: "Cacupé: O Cenário Perfeito à Beira-Mar",
    paragraphs: [
      "Entre o mar calmo e a natureza preservada do norte da ilha, Cacupé é um dos bairros mais tradicionais, calmos e charmosos de Florianópolis. Foi neste cenário bucólico e inspirador que o Taipei encontrou o local ideal para sua existência à beira-mar.",
      "Hoje, somos referência absoluta para quem busca um restaurante em Cacupé com vista para o mar, seja para um brunch de fim de semana de frente para a baía, um almoço especial de negócios ou um evento memorável. A brisa do mar e o pôr do sol espetacular são companheiros diários da nossa jornada gastronômica.",
      "A nossa arquitetura foi projetada para emoldurar a paisagem externa, com grandes janelas de vidro e um deck de madeira que permite sentir a proximidade com o oceano. O Cacupé não é apenas nosso endereço comercial, é parte essencial da nossa identidade e da atmosfera de paz que oferecemos."
    ],
  },
  {
    title: "O Padrão dos Cafés Especiais",
    paragraphs: [
      "Uma das grandes paixões do Taipei é a cultura dos cafés especiais de alta qualidade. Trabalhamos exclusivamente com grãos selecionados, pontuados acima de 85 pontos pela SCAA (Specialty Coffee Association), provenientes de microlotes das melhores regiões produtoras do Brasil.",
      "Nossos baristas dominam diferentes métodos de extração — como Hario V60, Chemex e Aeropress — extraindo o máximo de doçura, acidez e corpo de cada grão. O ritual de preparo é realizado na frente do cliente, valorizando toda a cadeia produtora, desde o produtor rural até a xícara final.",
      "Além dos cafés filtrados e do tradicional espresso, oferecemos bebidas autorais criativas que misturam café com especiarias orientais, chás e ingredientes locais, criando experiências sensoriais que surpreendem e encantam os entusiastas da bebida mais amada do país."
    ],
  }
];

export default function SobreOTaipei() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sobre/historia.jpg"
              alt="Taipei Coffee House - Nossa História e Cultura Taiwanesa"
              fill
              className="object-cover object-[center_30%]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-brown/80 via-taipei-red/60 to-taipei-brown/80" />
          </div>

          {/* Animated blobs */}
          <motion.div
            className="absolute inset-0 z-10 opacity-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-taipei-cream rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-taipei-red rounded-full blur-3xl" />
          </motion.div>

          <div className="relative z-20 text-center px-4">
            <motion.p
              className="text-taipei-cream/80 uppercase tracking-widest text-sm mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fundadora Taiwanesa
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              História e Essência | Taipei Coffee House
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A história do Taipei Coffee House em Florianópolis
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-4 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-taipei-red to-transparent" />
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-6">
                A História do Taipei Coffee House
              </h2>
              <div className="w-24 h-1 bg-taipei-red mx-auto mb-8" />
              <p className="text-lg md:text-xl text-taipei-brown leading-relaxed mb-4 font-light">
                O Taipei Coffee House é um restaurante com vista para o mar localizado no bairro de Cacupé, no norte
                da ilha de Florianópolis. Mais do que um espaço gastronômico convencional, o Taipei nasceu do encontro
                entre duas culturas distantes geograficamente, mas muito próximas no afeto: a profunda tradição taiwanesa e 
                a calorosa hospitalidade brasileira. É um refúgio acolhedor onde a pressa é deixada do lado de fora.
              </p>
              <p className="text-lg md:text-xl text-taipei-brown leading-relaxed mb-4 font-light">
                Fundado por Daiane Shuai, nascida em Taipei, Taiwan, o restaurante carrega em sua essência
                o cuidado oriental com a harmonia, o respeito aos ciclos da natureza e o desejo de transformar cada refeição
                em um momento memorável de conexão. A fundadora trouxe consigo as receitas e as memórias da sua família taiwanesa, 
                dando vida a um cardápio autoral de fusão único em Santa Catarina.
              </p>
              <p className="text-lg md:text-xl text-taipei-brown leading-relaxed font-light">
                Nossa casa foi desenhada para integrar a deslumbrante vista para a baía de Cacupé com um design minimalista, 
                aconchegante e repleto de luz natural. Aqui, você pode desfrutar de um brunch completo aos finais de semana, 
                um almoço com pratos sofisticados durante o dia, ou planejar celebrações inesquecíveis no nosso espaço para eventos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fotos da fundadora */}
        <section className="py-4 pb-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { src: "/images/sobre/fundadora.jpg", alt: "Daiane Shuai — fundadora do Taipei Coffee House" },
                { src: "/images/sobre/daiane-jornal.png", alt: "Daiane Shuai com o jornal do Taipei" },
                { src: "/images/sobre/daiane-familia.png", alt: "Daiane na infância com a família em Taiwan" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-taipei-brown/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seções alternadas */}
        <section className="py-8 px-4 bg-gradient-to-b from-white to-taipei-cream">
          <div className="container mx-auto max-w-4xl space-y-16">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-taipei-beige/30 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-taipei-red rounded-l-2xl" />
                <h3 className="text-2xl md:text-3xl font-serif text-taipei-red mb-5 pl-4">{s.title}</h3>
                <div className="space-y-3 pl-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-taipei-brown leading-relaxed text-lg font-light">{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-br from-taipei-red via-taipei-brown to-taipei-red text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed"
            >
              Venha conhecer o Taipei Coffee House em Cacupé e viva uma experiência
              gastronômica que une cultura, sabor e paisagem em Florianópolis.
            </motion.p>
            <motion.a
              href="https://wa.me/5548985008964"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10 bg-white text-taipei-red px-10 py-4 rounded-full font-semibold hover:bg-taipei-cream transition-colors shadow-lg"
            >
              Reservar Mesa no Taipei Coffee House
            </motion.a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
