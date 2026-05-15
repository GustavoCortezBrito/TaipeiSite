"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O Taipei Coffee House tem espaço kids?",
    answer: "Sim, temos um espaço kids para que as crianças possam brincar enquanto você aproveita seu momento no Taipei."
  },
  {
    question: "O Taipei Coffee House é pet friendly?",
    answer: "Sim, pets são bem-vindos em nossa área externa."
  },
  {
    question: "Onde fica o Taipei Coffee House?",
    answer: "Estamos localizados na Estrada Haroldo Soares Glavan, 3010 - Cacupé, Florianópolis - SC."
  },
  {
    question: "O Taipei Coffee House serve brunch?",
    answer: "Sim, servimos brunch especial aos finais de semana com opções autorais e influência asiática."
  },
  {
    question: "O Taipei Coffee House é um café ou restaurante?",
    answer: "Somos ambos! Oferecemos cafés especiais, brunch e almoço em um ambiente sofisticado."
  },
  {
    question: "Precisa fazer reserva para visitar o Taipei Coffee House?",
    answer: "Recomendamos reserva para grupos acima de 6 pessoas e para finais de semana. Entre em contato pelo WhatsApp (48) 98879-8141."
  },
  {
    question: "O Taipei Coffee House é um bom lugar para famílias?",
    answer: "Sim, somos um ambiente familiar com espaço kids e opções no cardápio para todas as idades."
  },
  {
    question: "O Taipei Coffee House tem área externa?",
    answer: "Sim, temos uma área externa com vista para o mar, perfeita para aproveitar o clima de Florianópolis."
  },
  {
    question: "O Taipei Coffee House tem opções de almoço ou refeições?",
    answer: "Sim, servimos almoço com pratos autorais que combinam gastronomia contemporânea e influência asiática."
  },
  {
    question: "O Taipei Coffee House aceita eventos ou celebrações?",
    answer: "Sim! Realizamos eventos corporativos, aniversários, formaturas e celebrações especiais. Entre em contato para mais informações."
  },
  {
    question: "Qual o melhor café em Florianópolis?",
    answer: "O Taipei Coffee House é referência em cafés especiais em Florianópolis, com preparos cuidadosos e grãos selecionados."
  },
  {
    question: "Por que visitar o Taipei Coffee House em Florianópolis?",
    answer: "Oferecemos uma experiência gastronômica única com vista para o mar, combinando gastronomia autoral, cafés especiais e um ambiente acolhedor."
  },
  {
    question: "O Taipei Coffee House é uma boa opção para turistas em Florianópolis?",
    answer: "Sim, somos um destino imperdível para turistas que buscam experiências gastronômicas diferenciadas com vista para o mar."
  },
  {
    question: "O Taipei Coffee House tem vista para o mar?",
    answer: "Sim, temos uma vista privilegiada para o mar em Cacupé, um dos bairros mais charmosos de Florianópolis."
  },
  {
    question: "O Taipei Coffee House tem estacionamento?",
    answer: "Sim, oferecemos estacionamento gratuito para nossos clientes."
  },
  {
    question: "O Taipei Coffee House é um bom lugar para encontros ou reuniões?",
    answer: "Sim, nosso ambiente é ideal para encontros pessoais e reuniões de negócios, com espaço confortável e vista inspiradora."
  },
  {
    question: "O Taipei Coffee House é uma cafeteria instagramável em Florianópolis?",
    answer: "Sim, nosso ambiente com influência asiática e vista para o mar cria cenários perfeitos para fotos."
  },
  {
    question: "O Taipei Coffee House oferece experiências gastronômicas diferentes?",
    answer: "Sim, nossa gastronomia autoral combina técnicas contemporâneas com influência asiática, criando pratos únicos."
  },
  {
    question: "O Taipei Coffee House é um bom lugar para trabalhar ou estudar?",
    answer: "Sim, oferecemos um ambiente tranquilo e inspirador, ideal para trabalho remoto ou estudos."
  },
  {
    question: "O Taipei Coffee House fica perto de Jurerê ou do norte da ilha?",
    answer: "Sim, estamos localizados em Cacupé, próximo ao norte da ilha e de fácil acesso para quem está em Jurerê."
  },
  {
    question: "O Taipei Coffee House é um lugar tranquilo para passar a tarde?",
    answer: "Sim, nosso ambiente acolhedor e vista para o mar proporcionam o cenário perfeito para uma tarde relaxante."
  },
  {
    question: "O que torna o Taipei Coffee House diferente de outras cafeterias em Florianópolis?",
    answer: "Nossa combinação única de gastronomia autoral com influência asiática, cafés especiais, vista para o mar e ambiente sofisticado nos torna uma experiência única em Florianópolis."
  }
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Monta link do WhatsApp com os dados do formulário
    const msg = `Olá! Me chamo *${form.name}*.\n📧 E-mail: ${form.email}${form.phone ? `\n📱 Telefone: ${form.phone}` : ""}\n\n${form.message}`;
    const url = `https://wa.me/5548988798141?text=${encodeURIComponent(msg)}`;
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => window.open(url, "_blank"), 800);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-8 gap-4 text-center"
      >
        <CheckCircle className="text-taipei-red" size={56} />
        <p className="text-2xl font-serif text-taipei-red">Mensagem enviada!</p>
        <p className="text-taipei-brown">Você será redirecionado para o WhatsApp em instantes.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Nome */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-taipei-brown">
          Nome <span className="text-taipei-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige focus:outline-none focus:border-taipei-red transition-colors bg-taipei-cream/30"
        />
      </div>

      {/* E-mail */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-taipei-brown">
          E-mail <span className="text-taipei-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige focus:outline-none focus:border-taipei-red transition-colors bg-taipei-cream/30"
        />
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="phone" className="text-sm font-medium text-taipei-brown">
          Telefone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(48) 99999-9999"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige focus:outline-none focus:border-taipei-red transition-colors bg-taipei-cream/30"
        />
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-taipei-brown">
          Mensagem <span className="text-taipei-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Escreva sua dúvida ou mensagem..."
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige focus:outline-none focus:border-taipei-red transition-colors bg-taipei-cream/30 resize-none"
        />
      </div>

      {/* Botão */}
      <div className="md:col-span-2 flex justify-center">
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-taipei-red text-white px-10 py-4 rounded-full hover:bg-taipei-brown transition-all hover:shadow-lg font-semibold disabled:opacity-60"
        >
          <Send size={18} />
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </motion.button>
      </div>
    </form>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 5);
  const hasMore = faqData.length > 5;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-taipei-red mx-auto mb-6" />
          <p className="text-lg text-taipei-brown">
            Tire suas dúvidas sobre o Taipei Coffee House
          </p>
        </motion.div>

        <div className="space-y-4">
          {displayedFAQs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-taipei-beige/30"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-taipei-cream/30 transition-colors"
              >
                <span className="text-lg font-medium text-taipei-brown pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-taipei-red" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-taipei-brown leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {hasMore && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="bg-taipei-red text-white px-8 py-3 rounded-full hover:bg-taipei-brown transition-all hover:shadow-lg"
            >
              Carregar Mais Perguntas
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
          id="contato-form"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-taipei-beige/30 p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-2xl font-serif text-taipei-red mb-2">
                Não encontrou a resposta que procurava?
              </p>
              <p className="text-taipei-brown">
                Envie sua mensagem e responderemos em breve.
              </p>
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
