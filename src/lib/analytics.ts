/**
 * Sistema de Tracking de Eventos - Google Analytics 4
 * 
 * Este módulo centraliza todos os eventos customizados do GA4 para o Taipei Coffee House.
 * Permite rastreamento detalhado de ações de intenção de visita e conversão.
 */

// Tipos de eventos customizados
export type EventName =
  | 'click_whatsapp'
  | 'click_reserva'
  | 'click_como_chegar'
  | 'click_ligar'
  | 'click_menu'
  | 'click_instagram'
  | 'form_start_eventos'
  | 'form_submit_eventos'
  | 'form_submit_reserva';

// Parâmetros dos eventos
export interface EventParams {
  page_path?: string;
  link_url?: string;
  link_text?: string;
  cta_name?: string;
  click_location?: string;
  form_name?: string;
  section?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Declaração global do gtag
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: EventParams
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Função principal para enviar eventos ao GA4
 * 
 * @param eventName - Nome do evento (ex: 'click_whatsapp')
 * @param params - Parâmetros adicionais do evento
 */
export const trackEvent = (eventName: EventName, params?: EventParams): void => {
  // Verifica se o gtag está disponível
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('GA4 não está carregado');
    return;
  }

  // Adiciona informações automáticas
  const eventParams: EventParams = {
    page_path: window.location.pathname,
    ...params,
  };

  // Envia o evento
  window.gtag('event', eventName, eventParams);

  // Log em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 GA4 Event:', eventName, eventParams);
  }
};

/**
 * Eventos específicos com parâmetros predefinidos
 */

// Click em WhatsApp
export const trackWhatsAppClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
}) => {
  trackEvent('click_whatsapp', {
    ...params,
    link_url: getWhatsAppLink(),
  });
};

// Click em Reserva
export const trackReservaClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
}) => {
  trackEvent('click_reserva', params);
};

// Click em Como Chegar (Google Maps)
export const trackComochegarClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
}) => {
  trackEvent('click_como_chegar', {
    ...params,
    link_url: 'https://maps.google.com',
  });
};

// Click para Ligar
export const trackLigarClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
}) => {
  trackEvent('click_ligar', {
    ...params,
    link_url: 'tel:+554832332747',
  });
};

// Click no Menu
export const trackMenuClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
  link_url?: string;
}) => {
  trackEvent('click_menu', params);
};

// Click no Instagram
export const trackInstagramClick = (params: {
  cta_name: string;
  click_location: string;
  link_text?: string;
}) => {
  trackEvent('click_instagram', {
    ...params,
    link_url: 'https://instagram.com/taipeicoffeehouse',
  });
};

// Início do formulário de eventos
export const trackFormStartEventos = (params: {
  form_name: string;
  click_location: string;
}) => {
  trackEvent('form_start_eventos', params);
};

// Submit do formulário de eventos
export const trackFormSubmitEventos = (params: {
  form_name: string;
  click_location: string;
}) => {
  trackEvent('form_submit_eventos', params);
};

// Submit do formulário de reserva
export const trackFormSubmitReserva = (params: {
  form_name: string;
  click_location: string;
}) => {
  trackEvent('form_submit_reserva', params);
};

/**
 * Funções auxiliares
 */

// Retorna o link do WhatsApp
const getWhatsAppLink = (): string => {
  return 'https://wa.me/5548985008964';
};

// Detecta automaticamente a seção da página baseado no pathname
export const getPageSection = (pathname: string): string => {
  if (pathname.includes('brunch')) return 'Brunch';
  if (pathname.includes('menu')) return 'Menu';
  if (pathname.includes('eventos')) return 'Eventos';
  if (pathname.includes('restaurante')) return 'Restaurante';
  if (pathname.includes('kids')) return 'Kids';
  if (pathname.includes('sobre')) return 'Sobre';
  if (pathname.includes('contato')) return 'Contato';
  if (pathname === '/') return 'Home';
  return 'Outra';
};

// Hook para rastreamento automático de scroll
export const trackScroll = (percentage: number): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'scroll', {
    percent_scrolled: percentage,
    page_path: window.location.pathname,
  });
};

// Rastreamento de tempo na página
let pageStartTime: number;

export const startPageTimer = (): void => {
  pageStartTime = Date.now();
};

export const trackPageTime = (): void => {
  if (typeof window === 'undefined' || !window.gtag || !pageStartTime) return;

  const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);

  window.gtag('event', 'time_on_page', {
    value: timeOnPage,
    page_path: window.location.pathname,
  });
};
