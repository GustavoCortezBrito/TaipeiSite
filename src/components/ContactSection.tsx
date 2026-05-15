"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

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
        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
      >
        <CheckCircle className="text-taipei-red" size={56} />
        <p className="text-2xl font-serif text-taipei-red">Mensagem enviada!</p>
        <p className="text-taipei-brown">Você será redirecionado para o WhatsApp em instantes.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="cs-name" className="text-sm font-medium text-taipei-brown">
          Nome <span className="text-taipei-red">*</span>
        </label>
        <input
          id="cs-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige/70 focus:outline-none focus:border-taipei-red transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cs-email" className="text-sm font-medium text-taipei-brown">
          E-mail <span className="text-taipei-red">*</span>
        </label>
        <input
          id="cs-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige/70 focus:outline-none focus:border-taipei-red transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="cs-phone" className="text-sm font-medium text-taipei-brown">
          Telefone / WhatsApp
        </label>
        <input
          id="cs-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(48) 99999-9999"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige/70 focus:outline-none focus:border-taipei-red transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="cs-message" className="text-sm font-medium text-taipei-brown">
          Mensagem <span className="text-taipei-red">*</span>
        </label>
        <textarea
          id="cs-message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Escreva sua dúvida, reserva ou mensagem..."
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige/70 focus:outline-none focus:border-taipei-red transition-colors bg-white resize-none"
        />
      </div>

      <div className="sm:col-span-2">
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full inline-flex items-center justify-center gap-2 bg-taipei-red text-white px-8 py-4 rounded-xl hover:bg-taipei-brown transition-all hover:shadow-lg font-semibold disabled:opacity-60"
        >
          <Send size={18} />
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </motion.button>
      </div>
    </form>
  );
}

function LocationCard() {
  const mapsUrl = "https://www.google.com/maps/search/Taipei+Coffee+House+Cacupé+Florianópolis";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Taipei+Coffee+House+Cacupé+Florianópolis";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-taipei-beige/40 flex flex-col h-full">
      {/* Header info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={20} className="text-taipei-red" />
          <h3 className="text-taipei-red font-serif text-xl">Localização</h3>
        </div>
        <div className="text-taipei-brown text-sm space-y-1 leading-relaxed">
          <p>Estrada Haroldo Soares Glavan, 3010</p>
          <p>Cacupé, Florianópolis - SC</p>
          <p>CEP 88050-005</p>
        </div>

        {/* Info row */}
        <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-taipei-brown">
          <a
            href="https://wa.me/5548988798141"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 bg-taipei-cream hover:bg-taipei-beige/40 rounded-lg p-3 transition-colors"
          >
            <Phone size={14} className="text-taipei-red" />
            <span className="text-center">(48) 98879-8141</span>
          </a>
          <div className="flex flex-col items-center gap-1 bg-taipei-cream rounded-lg p-3">
            <Clock size={14} className="text-taipei-red" />
            <span className="text-center">Ter–Dom</span>
          </div>
          <a
            href="mailto:contato@taipeicoffeehouse.com.br"
            className="flex flex-col items-center gap-1 bg-taipei-cream hover:bg-taipei-beige/40 rounded-lg p-3 transition-colors"
          >
            <Mail size={14} className="text-taipei-red" />
            <span className="text-center">E-mail</span>
          </a>
        </div>
      </div>

      {/* Map embed — flex-1 para ocupar o espaço restante */}
      <div className="flex-1 min-h-48">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.2!2d-48.5197!3d-27.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737f4b4b4b4b5%3A0x0!2sEstrada+Haroldo+Soares+Glavan%2C+3010+-+Cacu%C3%A9%2C+Florian%C3%B3polis+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Taipei Coffee House"
        />
      </div>

      {/* Buttons */}
      <div className="p-4 flex flex-col gap-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-taipei-red hover:bg-taipei-brown text-white font-semibold py-3 rounded-xl transition-colors"
        >
          <MapPin size={18} />
          Ver no Google Maps
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-taipei-cream hover:bg-taipei-beige/50 text-taipei-brown font-semibold py-3 rounded-xl transition-colors border border-taipei-beige"
        >
          <Navigation size={18} />
          Como Chegar
        </a>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contato-form" className="py-24 px-4 bg-taipei-cream">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-taipei-red mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-taipei-red mx-auto mb-4" />
          <p className="text-taipei-brown text-lg">
            Reservas, eventos ou dúvidas — estamos aqui para ajudar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-taipei-beige/40 shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-serif text-taipei-red mb-6">Envie uma mensagem</h3>
            <div className="flex-1">
              <ContactForm />
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <LocationCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
