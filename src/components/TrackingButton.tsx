'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackWhatsAppClick,
  trackReservaClick,
  trackComochegarClick,
  trackLigarClick,
  trackMenuClick,
  trackInstagramClick,
  getPageSection,
} from '@/lib/analytics';

type TrackingType =
  | 'whatsapp'
  | 'reserva'
  | 'como_chegar'
  | 'ligar'
  | 'menu'
  | 'instagram'
  | 'none';

interface TrackingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  trackingType?: TrackingType;
  ctaName?: string;
  clickLocation?: string;
  linkUrl?: string;
}

/**
 * Componente de Button com tracking automático de eventos GA4
 * 
 * Uso:
 * <TrackingButton 
 *   trackingType="whatsapp"
 *   ctaName="WhatsApp Footer"
 *   clickLocation="Footer"
 *   onClick={() => window.open('https://wa.me/...')}
 * >
 *   Enviar Mensagem
 * </TrackingButton>
 */
export default function TrackingButton({
  children,
  trackingType = 'none',
  ctaName,
  clickLocation,
  linkUrl,
  onClick,
  ...props
}: TrackingButtonProps) {
  const pathname = usePathname();

  // Detecta automaticamente o clickLocation baseado no pathname se não for fornecido
  const finalClickLocation = clickLocation || getPageSection(pathname);

  // Extrai o texto do botão para tracking
  const buttonText = typeof children === 'string' ? children : '';

  // Define o ctaName automaticamente se não for fornecido
  const finalCtaName = ctaName || `${trackingType}_${finalClickLocation}`.toLowerCase();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Executa o tracking baseado no tipo
    switch (trackingType) {
      case 'whatsapp':
        trackWhatsAppClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
        });
        break;
      case 'reserva':
        trackReservaClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
        });
        break;
      case 'como_chegar':
        trackComochegarClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
        });
        break;
      case 'ligar':
        trackLigarClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
        });
        break;
      case 'menu':
        trackMenuClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
          link_url: linkUrl,
        });
        break;
      case 'instagram':
        trackInstagramClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: buttonText,
        });
        break;
    }

    // Executa callback adicional se fornecido
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
