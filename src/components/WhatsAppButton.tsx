"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5548988798141"
      accountName="Taipei Coffee House"
      avatar="/logo-taipei.png" // Adicione o logo na pasta public
      statusMessage="Responde em até 2 horas"
      chatMessage="Olá! 👋 Bem-vindo ao Taipei Coffee House. Como podemos te ajudar?"
      placeholder="Digite sua mensagem..."
      allowClickAway
      allowEsc
      notification
      notificationDelay={60000} // 60 segundos
      notificationSound
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
