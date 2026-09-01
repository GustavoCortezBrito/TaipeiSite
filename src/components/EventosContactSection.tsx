"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import { useFormTracking } from "@/hooks/useFormTracking";

interface EventosContactSectionProps {
  title?: string;
  subtitle?: string;
  formTitle?: string;
  formType?: 'eventos' | 'reserva';
  pageName?: string;
}

function EventosContactForm({ formType = 'eventos', formTitle = "Solicite um Orçamento", pageName = "Eventos" }: { formType?: 'eventos' | 'reserva', formTitle?: string, pageName?: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hook de tracking para o formulário de eventos
  const { onFormStart, onFormSubmit } = useFormTracking({
    formType: formType,
    formName: `Formulário de ${formType === 'eventos' ? 'Eventos' : 'Reserva'} - ${pageName}`,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Enviar o e-mail via API route com Resend
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail de eventos:", error);
    }

    const msg = `Olá! Me chamo *${form.name}*.\n📧 E-mail: ${form.email}${form.phone ? `\n📱 Telefone: ${form.phone}` : ""}\n\n*Solicitação de Orçamento - ${pageName}*\n\n${form.message}`;
    const url = `https://wa.me/5548985008964?text=${encodeURIComponent(msg)}`;
    
    setLoading(false);
    setSubmitted(true);
    
    // Rastreia o envio bem-sucedido
    onFormSubmit();
    
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
        <p className="text-2xl font-serif text-taipei-red">Solicitação enviada!</p>
        <p className="text-taipei-brown">Você será redirecionado para o WhatsApp em instantes.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={onFormStart} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="evt-name" className="text-sm font-medium text-taipei-brown">
          Nome <span className="text-taipei-red">*</span>
        </label>
        <input
          id="evt-name"
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
        <label htmlFor="evt-email" className="text-sm font-medium text-taipei-brown">
          E-mail <span className="text-taipei-red">*</span>
        </label>
        <input
          id="evt-email"
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
        <label htmlFor="evt-phone" className="text-sm font-medium text-taipei-brown">
          Telefone / WhatsApp
        </label>
        <input
          id="evt-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(48) 99999-9999"
          className="border border-taipei-beige rounded-xl px-4 py-3 text-taipei-brown placeholder-taipei-beige/70 focus:outline-none focus:border-taipei-red transition-colors bg-white"
        />
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="evt-message" className="text-sm font-medium text-taipei-brown">
          Mensagem <span className="text-taipei-red">*</span>
        </label>
        <textarea
          id="evt-message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Conte-nos sobre seu evento: data, número de pessoas, tipo de celebração..."
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
          {loading ? "Enviando..." : "Solicitar Orçamento"}
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
          <p className="text-taipei-red font-serif text-xl font-semibold">Localização</p>
        </div>
        <div className="text-taipei-brown text-sm space-y-1 leading-relaxed">
          <p>Estrada Haroldo Soares Glavan, 3010</p>
          <p>Cacupé, Florianópolis - SC</p>
          <p>CEP 88050-005</p>
        </div>

        {/* Info row */}
        <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-taipei-brown">
          <TrackingLink
            href="tel:+5548985008964"
            trackingType="ligar"
            ctaName="telefone_eventos_section"
            clickLocation="Eventos Section"
            className="flex flex-col items-center gap-1 bg-taipei-cream hover:bg-taipei-beige/40 rounded-lg p-3 transition-colors"
          >
            <Phone size={14} className="text-taipei-red" />
            <span className="text-center">(48) 98500-8964</span>
          </TrackingLink>
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

      {/* Map embed */}
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
        <TrackingLink
          href={mapsUrl}
          trackingType="como_chegar"
          ctaName="maps_eventos_section"
          clickLocation="Eventos Section"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-taipei-red hover:bg-taipei-brown text-white font-semibold py-3 rounded-xl transition-colors"
        >
          <MapPin size={18} />
          Ver Localização no Google Maps
        </TrackingLink>
        <TrackingLink
          href={directionsUrl}
          trackingType="como_chegar"
          ctaName="directions_eventos_section"
          clickLocation="Eventos Section"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-taipei-cream hover:bg-taipei-beige/50 text-taipei-brown font-semibold py-3 rounded-xl transition-colors border border-taipei-beige"
        >
          <Navigation size={18} />
          Rotas de Como Chegar
        </TrackingLink>
      </div>
    </div>
  );
}

export default function EventosContactSection({ 
  title = "Fale Conosco",
  subtitle = "Solicite um orçamento personalizado para o seu evento",
  formTitle = "Solicite um Orçamento",
  formType = 'eventos',
  pageName = "Eventos"
}: EventosContactSectionProps) {
  return (
    <section id="contato-eventos" className="py-24 px-4 bg-taipei-cream">
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
            {title}
          </h2>
          <div className="w-24 h-1 bg-taipei-red mx-auto mb-4" />
          <p className="text-taipei-brown text-lg">
            {subtitle}
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
            <p className="text-2xl font-serif text-taipei-red mb-6 font-semibold">{formTitle}</p>
            <div className="flex-1">
              <EventosContactForm formType={formType} formTitle={formTitle} pageName={pageName} />
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
