"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos de terça a sexta das 11h às 20h, sábados das 10h às 20h e domingos das 10h às 19h. Fechamos às segundas-feiras."
  },
  {
    question: "É necessário fazer reserva?",
    answer: "Recomendamos reserva para grupos acima de 6 pessoas e para finais de semana. Para reservas, entre em contato pelo WhatsApp (48) 98879-8141."
  },
  {
    question: "Vocês aceitam cartão?",
    answer: "Sim, aceitamos todas as bandeiras de cartão de crédito e débito, além de PIX."
  },
  {
    question: "Tem estacionamento?",
    answer: "Sim, temos estacionamento gratuito para nossos clientes."
  },
  {
    question: "Vocês fazem eventos?",
    answer: "Sim! Realizamos eventos corporativos, aniversários, formaturas e celebrações especiais. Entre em contato para mais informações sobre nossos pacotes."
  },
  {
    question: "O brunch é servido todos os dias?",
    answer: "Nosso brunch especial é servido aos finais de semana. Durante a semana, temos opções de café da manhã e almoço."
  },
  {
    question: "Tem opções vegetarianas e veganas?",
    answer: "Sim, nosso cardápio inclui diversas opções vegetarianas e veganas. Consulte nosso menu ou pergunte ao garçom."
  },
  {
    question: "Aceitam pets?",
    answer: "Sim, pets são bem-vindos em nossa área externa."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-taipei-brown mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/5548988798141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-taipei-red text-white px-8 py-3 rounded-full hover:bg-taipei-brown transition-all hover:shadow-lg"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
