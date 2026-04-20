"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5548988798141"
      accountName="Taipei Coffee House"
      avatar="/logo-taipei.png"
      statusMessage="Responde em até 2 horas"
      chatMessage="Olá! 👋 Bem-vindo ao Taipei Coffee House. Como podemos te ajudar?"
      placeholder="Digite sua mensagem..."
      allowClickAway={false}
      allowEsc={true}
      notification={true}
      notificationDelay={60000}
      notificationSound={false}
      darkMode={false}
      buttonStyle={{
        bottom: "24px",
        right: "24px",
      }}
      chatboxStyle={{
        bottom: "90px",
        right: "24px",
      }}
    />
  );
}
