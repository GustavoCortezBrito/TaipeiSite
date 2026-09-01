'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackFormStartEventos,
  trackFormSubmitEventos,
  trackFormSubmitReserva,
  getPageSection,
} from '@/lib/analytics';

type FormType = 'eventos' | 'reserva';

interface UseFormTrackingOptions {
  formType: FormType;
  formName: string;
  clickLocation?: string;
}

/**
 * Hook customizado para rastrear interações com formulários
 * 
 * Uso:
 * ```tsx
 * const { onFormStart, onFormSubmit } = useFormTracking({
 *   formType: 'eventos',
 *   formName: 'Formulário de Eventos - Página Eventos'
 * });
 * 
 * <form onFocus={onFormStart} onSubmit={onFormSubmit}>
 *   ...
 * </form>
 * ```
 */
export const useFormTracking = ({
  formType,
  formName,
  clickLocation,
}: UseFormTrackingOptions) => {
  const pathname = usePathname();
  const hasStarted = useRef(false);

  // Detecta automaticamente o clickLocation baseado no pathname se não for fornecido
  const finalClickLocation = clickLocation || getPageSection(pathname);

  // Rastreia o início do formulário (primeiro foco em qualquer campo)
  const onFormStart = () => {
    if (!hasStarted.current) {
      hasStarted.current = true;

      if (formType === 'eventos') {
        trackFormStartEventos({
          form_name: formName,
          click_location: finalClickLocation,
        });
      }
      // Para reservas, não temos evento de start específico no requisito
    }
  };

  // Rastreia o submit do formulário
  const onFormSubmit = (e?: React.FormEvent) => {
    // Não previne o comportamento padrão, apenas rastreia
    if (formType === 'eventos') {
      trackFormSubmitEventos({
        form_name: formName,
        click_location: finalClickLocation,
      });
    } else if (formType === 'reserva') {
      trackFormSubmitReserva({
        form_name: formName,
        click_location: finalClickLocation,
      });
    }
  };

  // Reset do estado quando mudar de página
  useEffect(() => {
    hasStarted.current = false;
  }, [pathname]);

  return {
    onFormStart,
    onFormSubmit,
  };
};

/**
 * Hook simplificado para rastrear apenas o submit
 */
export const useFormSubmitTracking = (
  formType: FormType,
  formName: string,
  clickLocation?: string
) => {
  const pathname = usePathname();
  const finalClickLocation = clickLocation || getPageSection(pathname);

  return (e?: React.FormEvent) => {
    if (formType === 'eventos') {
      trackFormSubmitEventos({
        form_name: formName,
        click_location: finalClickLocation,
      });
    } else if (formType === 'reserva') {
      trackFormSubmitReserva({
        form_name: formName,
        click_location: finalClickLocation,
      });
    }
  };
};
