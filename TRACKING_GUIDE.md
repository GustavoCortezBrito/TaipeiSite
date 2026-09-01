# 📊 Guia de Implementação - Tracking Avançado GA4/GTM

## Visão Geral

Este guia documenta o sistema completo de tracking de eventos implementado para o Taipei Coffee House, permitindo análise detalhada do funil de conversão e intenção de visita.

## 🎯 Eventos Implementados

### Eventos de Conversão Principais
Estes eventos devem ser marcados como **conversões no GA4**:

1. **`click_whatsapp`** - Click em qualquer link do WhatsApp
2. **`click_reserva`** - Click em botão/link de reserva
3. **`click_como_chegar`** - Click em Google Maps / localização
4. **`click_ligar`** - Click no telefone
5. **`form_submit_eventos`** - Envio concluído do formulário de eventos
6. **`form_submit_reserva`** - Envio concluído do formulário de reserva

### Eventos de Apoio

7. **`click_menu`** - Abertura do menu (PDF/link)
8. **`click_instagram`** - Click no Instagram
9. **`form_start_eventos`** - Início do formulário de eventos

## 📦 Arquivos Criados

```
src/
├── lib/
│   └── analytics.ts          # Sistema central de tracking
├── components/
│   ├── TrackingLink.tsx      # Link com tracking automático
│   └── TrackingButton.tsx    # Botão com tracking automático
└── hooks/
    └── useFormTracking.ts    # Hook para formulários
```

## 🔧 Como Usar

### 1. Links com Tracking (TrackingLink)

```tsx
import TrackingLink from '@/components/TrackingLink';

// WhatsApp
<TrackingLink 
  href="https://wa.me/5548999999999"
  trackingType="whatsapp"
  ctaName="WhatsApp Hero"
  clickLocation="Hero Section"
  target="_blank"
  className="btn-primary"
>
  Fale Conosco pelo WhatsApp
</TrackingLink>

// Reserva
<TrackingLink 
  href="/reservas"
  trackingType="reserva"
  ctaName="Reserva Menu"
  clickLocation="Menu Page"
>
  Fazer Reserva
</TrackingLink>

// Como Chegar
<TrackingLink 
  href="https://maps.google.com/?q=Taipei+Coffee+House"
  trackingType="como_chegar"
  ctaName="Maps Footer"
  clickLocation="Footer"
  target="_blank"
>
  Ver no Google Maps
</TrackingLink>

// Ligar
<TrackingLink 
  href="tel:+554832332747"
  trackingType="ligar"
  ctaName="Telefone Header"
  clickLocation="Header"
>
  (48) 3233-2747
</TrackingLink>

// Menu
<TrackingLink 
  href="/menu.pdf"
  trackingType="menu"
  ctaName="Menu PDF"
  clickLocation="Menu Page"
  target="_blank"
>
  Ver Menu Completo
</TrackingLink>

// Instagram
<TrackingLink 
  href="https://instagram.com/taipeicoffeehouse"
  trackingType="instagram"
  ctaName="Instagram Footer"
  clickLocation="Footer"
  target="_blank"
>
  @taipeicoffeehouse
</TrackingLink>
```

### 2. Botões com Tracking (TrackingButton)

```tsx
import TrackingButton from '@/components/TrackingButton';

<TrackingButton
  trackingType="whatsapp"
  ctaName="WhatsApp CTA Brunch"
  clickLocation="Brunch Page"
  onClick={() => window.open('https://wa.me/5548999999999', '_blank')}
  className="btn-primary"
>
  Reserve seu Brunch
</TrackingButton>
```

### 3. Formulários com Tracking (useFormTracking)

```tsx
'use client';

import { useFormTracking } from '@/hooks/useFormTracking';

export default function EventosForm() {
  const { onFormStart, onFormSubmit } = useFormTracking({
    formType: 'eventos',
    formName: 'Formulário de Eventos - Página Eventos',
    clickLocation: 'Eventos Page'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sua lógica de envio aqui
    const response = await fetch('/api/eventos', { ... });
    
    if (response.ok) {
      // Rastreia o submit apenas se for bem-sucedido
      onFormSubmit();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      onFocus={onFormStart} // Rastreia quando qualquer campo recebe foco
    >
      <input type="text" name="nome" />
      <input type="email" name="email" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 4. Tracking Manual (Casos Especiais)

```tsx
import { 
  trackWhatsAppClick,
  trackReservaClick,
  getPageSection 
} from '@/lib/analytics';

// Exemplo: Modal de reserva
const handleOpenReservaModal = () => {
  trackReservaClick({
    cta_name: 'Modal Reserva Hero',
    click_location: 'Hero Section',
    link_text: 'Reservar Mesa'
  });
  
  setModalOpen(true);
};

// Exemplo: Click em imagem que leva ao WhatsApp
const handleImageClick = () => {
  trackWhatsAppClick({
    cta_name: 'Imagem Promocional',
    click_location: getPageSection(window.location.pathname),
    link_text: 'Banner Promoção'
  });
  
  window.open('https://wa.me/5548999999999', '_blank');
};
```

## 📊 Parâmetros dos Eventos

Cada evento envia automaticamente os seguintes parâmetros ao GA4:

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `page_path` | Caminho da página atual | `/brunch` |
| `link_url` | URL de destino do link | `https://wa.me/...` |
| `link_text` | Texto do link/botão | "Fale Conosco" |
| `cta_name` | Nome identificador do CTA | "whatsapp_hero" |
| `click_location` | Seção da página | "Hero Section" |

## 🎨 Nomenclatura Padrão

### CTA Names (sugestão)
- `whatsapp_hero` - WhatsApp na seção hero
- `whatsapp_brunch` - WhatsApp na página de brunch
- `reserva_menu` - Reserva na página de menu
- `maps_footer` - Google Maps no rodapé
- `telefone_header` - Telefone no cabeçalho

### Click Locations (sugestão)
- `Hero Section` - Seção principal/banner
- `Header` - Cabeçalho
- `Footer` - Rodapé
- `Brunch Page` - Página de brunch
- `Menu Page` - Página de menu
- `Eventos Page` - Página de eventos
- `Sidebar` - Barra lateral
- `CTA Section` - Seção de CTA

## 🔍 Validação e Testes

### 1. Teste Local (Modo Desenvolvimento)

Os eventos são logados no console do navegador em desenvolvimento:

```javascript
📊 GA4 Event: click_whatsapp {
  page_path: "/brunch",
  link_url: "https://wa.me/5548999999999",
  link_text: "Fale Conosco",
  cta_name: "whatsapp_hero",
  click_location: "Hero Section"
}
```

### 2. GA4 DebugView

1. Acesse: [Google Analytics](https://analytics.google.com/)
2. Vá em: **Admin → Data Streams → Enhanced Measurement**
3. Ative: **DebugView**
4. Em sua máquina, instale a extensão: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
5. Ative a extensão e recarregue o site
6. Acesse: **Admin → DebugView** no GA4
7. Clique nos CTAs e veja os eventos em tempo real

### 3. GTM Preview Mode (se usar GTM)

1. Acesse: [Google Tag Manager](https://tagmanager.google.com/)
2. Click em: **Preview**
3. Digite a URL do site
4. Veja os eventos disparando em tempo real

## 📈 Configurando Conversões no GA4

1. Acesse: [Google Analytics](https://analytics.google.com/)
2. Vá em: **Admin → Events**
3. Marque como **conversão** os seguintes eventos:
   - ✅ `click_whatsapp`
   - ✅ `click_reserva`
   - ✅ `click_como_chegar`
   - ✅ `click_ligar`
   - ✅ `form_submit_eventos`
   - ✅ `form_submit_reserva`

## 📊 Relatórios Sugeridos no GA4

### 1. Funil de Conversão

```
Sessão 
  → Página de Interesse (Brunch, Menu, Eventos)
    → Ação de Intenção (WhatsApp, Reserva, Como Chegar)
      → Lead/Conversão
```

### 2. Análise por Página

**Exploração → Análise de Caminho Livre:**

- Dimensão 1: `Page path`
- Dimensão 2: `Event name`
- Métrica: `Event count`

Isso vai mostrar:
- Quantos clicks de WhatsApp vieram do Brunch
- Quantas reservas vieram da página de Menu
- Etc.

### 3. Análise de CTA

**Exploração → Tabela Livre:**

- Linhas: `cta_name` (parâmetro personalizado)
- Colunas: `Event name`
- Métrica: `Event count`

### 4. Desempenho por Localização

**Exploração → Tabela Livre:**

- Linhas: `click_location` (parâmetro personalizado)
- Métrica: `Event count`
- Filtro: Event name = click_whatsapp

## 🚀 Próximos Passos

### Fase 1: Implementação Inicial ✅
- [x] Criar sistema de tracking
- [x] Criar componentes reutilizáveis
- [x] Documentação completa

### Fase 2: Aplicação no Site
- [ ] Substituir links/botões existentes por `TrackingLink` e `TrackingButton`
- [ ] Adicionar tracking aos formulários
- [ ] Atualizar número real do WhatsApp
- [ ] Testar em DebugView

### Fase 3: Configuração GA4
- [ ] Marcar eventos como conversões
- [ ] Criar relatórios personalizados
- [ ] Configurar alertas de conversão

### Fase 4: Análise e Otimização
- [ ] Analisar dados após 1 semana
- [ ] Identificar CTAs de melhor desempenho
- [ ] Otimizar páginas com baixa conversão
- [ ] A/B test de diferentes CTAs

## 📝 Atualizações Necessárias

### 1. Atualizar Número do WhatsApp

No arquivo `src/lib/analytics.ts`, linha 99:

```typescript
const getWhatsAppLink = (): string => {
  return 'https://wa.me/5548999999999'; // ⚠️ SUBSTITUIR PELO NÚMERO REAL
};
```

### 2. Atualizar Link do Instagram

No arquivo `src/lib/analytics.ts`, linha 165:

```typescript
export const trackInstagramClick = (params: {
  //...
}) => {
  trackEvent('click_instagram', {
    ...params,
    link_url: 'https://instagram.com/taipeicoffeehouse', // Verificar se está correto
  });
};
```

## ❓ Dúvidas Comuns

**P: Os eventos estão duplicando?**
R: Verifique se não há listeners de click genérico capturando os mesmos elementos. Use `e.stopPropagation()` se necessário.

**P: Como ver os parâmetros personalizados no GA4?**
R: Vá em **Configure → Custom Definitions** e registre as dimensões: `cta_name`, `click_location`, `link_text`, `link_url`.

**P: Posso usar isso com GTM?**
R: Sim! Os eventos são enviados via `gtag` e o GTM pode capturá-los através do dataLayer.

**P: Como trackear clicks em imagens?**
R: Use `TrackingButton` ou a função manual `trackEvent()` no onClick da imagem.

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique o console do navegador em modo desenvolvimento
2. Use o GA4 DebugView para validar eventos
3. Consulte a [documentação oficial do GA4](https://support.google.com/analytics/answer/9267735)
