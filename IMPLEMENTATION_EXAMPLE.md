# 🚀 Exemplo Prático de Implementação

Este documento mostra como atualizar páginas existentes do site para adicionar o tracking de eventos.

## 📋 Checklist de Implementação

- [ ] Atualizar imports no topo das páginas
- [ ] Substituir links por `TrackingLink`
- [ ] Substituir botões por `TrackingButton` ou adicionar tracking manual
- [ ] Adicionar tracking aos formulários
- [ ] Testar no console (dev mode)
- [ ] Validar no GA4 DebugView

## 🔄 Exemplo 1: Atualizando Links do WhatsApp

### ❌ ANTES (sem tracking)

```tsx
<a
  href="https://wa.me/5548985008964"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-taipei-red text-white px-8 py-3 rounded-full"
>
  Fale Conosco pelo WhatsApp
</a>
```

### ✅ DEPOIS (com tracking)

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://wa.me/5548985008964"
  trackingType="whatsapp"
  ctaName="WhatsApp Hero"
  clickLocation="Hero Section"
  target="_blank"
  className="bg-taipei-red text-white px-8 py-3 rounded-full"
>
  Fale Conosco pelo WhatsApp
</TrackingLink>
```

## 📞 Exemplo 2: Atualizando Links de Telefone

### ❌ ANTES

```tsx
<a href="tel:+554832332747" className="hover:text-taipei-red">
  (48) 3233-2747
</a>
```

### ✅ DEPOIS

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="tel:+554832332747"
  trackingType="ligar"
  ctaName="Telefone Footer"
  clickLocation="Footer"
  className="hover:text-taipei-red"
>
  (48) 3233-2747
</TrackingLink>
```

## 🗺️ Exemplo 3: Atualizando Links do Google Maps

### ❌ ANTES

```tsx
<a
  href="https://maps.google.com/?q=Taipei+Coffee+House+Florianopolis"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2"
>
  <MapPin size={20} />
  Como Chegar
</a>
```

### ✅ DEPOIS

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://maps.google.com/?q=Taipei+Coffee+House+Florianopolis"
  trackingType="como_chegar"
  ctaName="Maps Footer"
  clickLocation="Footer"
  target="_blank"
  className="flex items-center gap-2"
>
  <MapPin size={20} />
  Como Chegar
</TrackingLink>
```

## 📋 Exemplo 4: Atualizando Links do Menu

### ❌ ANTES

```tsx
<a
  href="/menu.pdf"
  target="_blank"
  className="bg-taipei-red text-white px-6 py-3 rounded"
>
  Ver Menu Completo (PDF)
</a>
```

### ✅ DEPOIS

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="/menu.pdf"
  trackingType="menu"
  ctaName="Menu PDF CTA"
  clickLocation="Menu Page"
  target="_blank"
  className="bg-taipei-red text-white px-6 py-3 rounded"
>
  Ver Menu Completo (PDF)
</TrackingLink>
```

## 📸 Exemplo 5: Atualizando Links do Instagram

### ❌ ANTES

```tsx
<a
  href="https://instagram.com/taipeicoffeehouse"
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram size={24} />
  @taipeicoffeehouse
</a>
```

### ✅ DEPOIS

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://instagram.com/taipeicoffeehouse"
  trackingType="instagram"
  ctaName="Instagram Footer"
  clickLocation="Footer"
  target="_blank"
>
  <Instagram size={24} />
  @taipeicoffeehouse
</TrackingLink>
```

## 📝 Exemplo 6: Atualizando Formulário de Eventos

### ❌ ANTES

```tsx
'use client';

export default function EventosForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio
    await sendForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" />
      <input type="email" name="email" />
      <textarea name="mensagem" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### ✅ DEPOIS

```tsx
'use client';

import { useFormTracking } from '@/hooks/useFormTracking';

export default function EventosForm() {
  const { onFormStart, onFormSubmit } = useFormTracking({
    formType: 'eventos',
    formName: 'Formulário de Eventos - Página Eventos',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Lógica de envio
    const success = await sendForm();
    
    // Rastreia apenas se envio foi bem-sucedido
    if (success) {
      onFormSubmit();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      onFocus={onFormStart} // Rastreia quando usuário começa a preencher
    >
      <input type="text" name="nome" />
      <input type="email" name="email" />
      <textarea name="mensagem" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## 🎨 Exemplo 7: Página Completa (Brunch) - ANTES e DEPOIS

### ❌ ANTES (página original - trecho)

```tsx
// src/app/brunch/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin } from "lucide-react";

export default function BrunchPage() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <h1>Brunch em Florianópolis</h1>
        <p>Todos os domingos das 9h às 14h</p>
        
        <div className="cta-buttons">
          <a
            href="https://wa.me/5548985008964"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Phone size={20} />
            Fazer Reserva
          </a>
          
          <a
            href="https://maps.google.com/?q=Taipei+Coffee+House"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MapPin size={20} />
            Como Chegar
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
```

### ✅ DEPOIS (com tracking completo)

```tsx
// src/app/brunch/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackingLink from "@/components/TrackingLink";
import { Phone, MapPin } from "lucide-react";

export default function BrunchPage() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <h1>Brunch em Florianópolis</h1>
        <p>Todos os domingos das 9h às 14h</p>
        
        <div className="cta-buttons">
          <TrackingLink
            href="https://wa.me/5548985008964"
            trackingType="whatsapp"
            ctaName="WhatsApp Brunch Hero"
            clickLocation="Brunch Hero Section"
            target="_blank"
            className="btn-primary"
          >
            <Phone size={20} />
            Fazer Reserva
          </TrackingLink>
          
          <TrackingLink
            href="https://maps.google.com/?q=Taipei+Coffee+House"
            trackingType="como_chegar"
            ctaName="Maps Brunch Hero"
            clickLocation="Brunch Hero Section"
            target="_blank"
            className="btn-secondary"
          >
            <MapPin size={20} />
            Como Chegar
          </TrackingLink>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
```

## 🎯 Exemplo 8: Botão de Reserva Genérico

Se você tem um botão que abre um modal ou executa uma ação personalizada:

### ❌ ANTES

```tsx
<button
  onClick={() => setModalOpen(true)}
  className="btn-primary"
>
  Fazer Reserva
</button>
```

### ✅ DEPOIS

```tsx
import TrackingButton from '@/components/TrackingButton';

<TrackingButton
  trackingType="reserva"
  ctaName="Modal Reserva"
  clickLocation="Menu Page"
  onClick={() => setModalOpen(true)}
  className="btn-primary"
>
  Fazer Reserva
</TrackingButton>
```

## 🔧 Exemplo 9: Tracking Manual em Componentes Complexos

Para componentes onde você não pode usar `TrackingLink` ou `TrackingButton`:

```tsx
'use client';

import { trackWhatsAppClick } from '@/lib/analytics';
import { motion } from 'framer-motion';

export default function CustomCard() {
  const handleCardClick = () => {
    // Rastreia o evento
    trackWhatsAppClick({
      cta_name: 'Card Promocional',
      click_location: 'Home Page',
      link_text: 'Banner Promoção Brunch',
    });
    
    // Abre o WhatsApp
    window.open('https://wa.me/5548985008964?text=Olá! Vi a promoção de brunch', '_blank');
  };

  return (
    <motion.div
      onClick={handleCardClick}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer card"
    >
      <img src="/promo.jpg" alt="Promoção" />
      <h3>Brunch Especial</h3>
      <p>Clique para reservar pelo WhatsApp</p>
    </motion.div>
  );
}
```

## 📊 Exemplo 10: Atualizando o Botão Flutuante do WhatsApp

### ❌ ANTES

```tsx
// src/app/layout.tsx ou página principal
import WhatsAppButton from "@/components/WhatsAppButton";

<WhatsAppButton />
```

### ✅ DEPOIS

```tsx
// src/app/layout.tsx ou página principal
import WhatsAppButtonTracked from "@/components/WhatsAppButtonTracked";

<WhatsAppButtonTracked />
```

## 🏆 Prioridade de Implementação

Recomendamos implementar o tracking nesta ordem:

### Fase 1: CTAs Principais (Alta Prioridade)
1. ✅ Todos os botões/links do WhatsApp
2. ✅ Botões de "Fazer Reserva"
3. ✅ Links "Como Chegar" / Google Maps
4. ✅ Links de telefone

### Fase 2: CTAs Secundários (Média Prioridade)
5. ✅ Links do Instagram
6. ✅ Links para ver o Menu
7. ✅ Formulário de Eventos

### Fase 3: Outros (Baixa Prioridade)
8. ✅ Outros formulários
9. ✅ Links externos diversos

## 🧪 Como Testar

### 1. Teste em Desenvolvimento

```bash
npm run dev
```

Abra o console do navegador (F12) e clique nos elementos. Você deve ver:

```
📊 GA4 Event: click_whatsapp {
  page_path: "/brunch",
  link_url: "https://wa.me/5548985008964",
  link_text: "Fazer Reserva",
  cta_name: "WhatsApp Brunch Hero",
  click_location: "Brunch Hero Section"
}
```

### 2. Teste em Produção (GA4 DebugView)

1. Instale a extensão: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
2. Ative a extensão
3. Acesse o site em produção
4. Vá no GA4: **Admin → DebugView**
5. Clique nos CTAs e veja os eventos aparecerem em tempo real

## 📝 Template de Implementação

Use este template para documentar suas implementações:

```markdown
## Página: [Nome da Página]
**Data:** [Data]
**Responsável:** [Nome]

### Alterações:
- [ ] Link WhatsApp no Hero (linha X)
- [ ] Botão Reserva no CTA (linha Y)
- [ ] Link Google Maps no Footer (linha Z)

### Testes:
- [ ] Console mostrando eventos corretamente
- [ ] GA4 DebugView validado
- [ ] Não há duplicação de eventos

### Observações:
[Qualquer nota adicional]
```

## 🚨 Checklist Final Antes de Publicar

- [ ] Todos os imports estão corretos
- [ ] Nenhum link importante ficou sem tracking
- [ ] Testado em desenvolvimento (console)
- [ ] Testado em staging/produção (GA4 DebugView)
- [ ] Não há duplicação de eventos
- [ ] Eventos estão marcados como conversões no GA4
- [ ] Parâmetros personalizados registrados no GA4

## 💡 Dicas

1. **Seja consistente** na nomenclatura dos `ctaName` e `clickLocation`
2. **Teste sempre** antes de fazer push
3. **Documente** as mudanças para referência futura
4. **Use nomes descritivos** para facilitar análise no GA4
5. **Evite duplicação** - remova listeners de click genérico nos mesmos elementos

## 🆘 Problemas Comuns

### Eventos não aparecem no console

**Solução:** Verifique se está em `NODE_ENV=development`

### Eventos duplicados

**Solução:** Verifique se não há dois listeners no mesmo elemento

### Parâmetros não aparecem no GA4

**Solução:** Registre as dimensões personalizadas em **Configure → Custom Definitions**

### gtag is not defined

**Solução:** Verifique se o Google Analytics está carregado no `layout.tsx`
