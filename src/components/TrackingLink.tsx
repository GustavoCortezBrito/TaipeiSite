'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
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

interface TrackingLinkProps {
  href: string;
  children: ReactNode;
  trackingType?: TrackingType;
  ctaName?: string;
  clickLocation?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

/**
 * Componente de Link com tracking automático de eventos GA4
 * 
 * Uso:
 * <TrackingLink 
 *   href="https://wa.me/..."
 *   trackingType="whatsapp"
 *   ctaName="WhatsApp Hero"
 *   clickLocation="Hero Section"
 * >
 *   Fale Conosco
 * </TrackingLink>
 */
export default function TrackingLink({
  href,
  children,
  trackingType = 'none',
  ctaName,
  clickLocation,
  className,
  target,
  rel,
  onClick,
}: TrackingLinkProps) {
  const pathname = usePathname();

  // Detecta automaticamente o clickLocation baseado no pathname se não for fornecido
  const finalClickLocation = clickLocation || getPageSection(pathname);

  // Extrai o texto do link para tracking
  const linkText = typeof children === 'string' ? children : '';

  // Define o ctaName automaticamente se não for fornecido
  const finalCtaName = ctaName || `${trackingType}_${finalClickLocation}`.toLowerCase();

  const handleClick = () => {
    // Executa o tracking baseado no tipo
    switch (trackingType) {
      case 'whatsapp':
        trackWhatsAppClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
        });
        break;
      case 'reserva':
        trackReservaClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
        });
        break;
      case 'como_chegar':
        trackComochegarClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
        });
        break;
      case 'ligar':
        trackLigarClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
        });
        break;
      case 'menu':
        trackMenuClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
          link_url: href,
        });
        break;
      case 'instagram':
        trackInstagramClick({
          cta_name: finalCtaName,
          click_location: finalClickLocation,
          link_text: linkText,
        });
        break;
    }

    // Executa callback adicional se fornecido
    if (onClick) {
      onClick();
    }
  };

  // Se for link externo, usa <a>, caso contrário usa Next.js Link
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} target={target} onClick={handleClick}>
      {children}
    </Link>
  );
}
