"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export default function WhatsAppButtonTracked() {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Tenta encontrar o botão do WhatsApp por diferentes seletores
    const addTracking = () => {
      const selectors = [
        'div[class*="floating-whatsapp"]',
        'button[class*="whatsapp"]',
        'div[style*="position: fixed"]',
        '[aria-label*="WhatsApp"]',
      ];

      for (const selector of selectors) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          element.addEventListener('click', () => {
            if (!hasTracked.current) {
              console.log('🎯 Tracking WhatsApp Float Button Click');
              trackWhatsAppClick({
                cta_name: 'floating_whatsapp_button',
                click_location: 'Floating Button',
                link_text: 'WhatsApp Flutuante',
              });
              hasTracked.current = true;
            }
          });
        });
      }
    };

    // Tenta adicionar tracking múltiplas vezes
    const intervals = [100, 500, 1000, 2000];
    intervals.forEach(delay => {
      setTimeout(addTracking, delay);
    });
  }, []);

  return (
    <FloatingWhatsApp
      phoneNumber="5548985008964"
      accountName="Taipei Coffee House"
      avatar="/taipei.avif"
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
