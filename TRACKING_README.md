# 📊 Sistema de Tracking GA4 - Taipei Coffee House

## 🎯 Objetivo

Implementar tracking avançado de eventos no Google Analytics 4 para medir o funil de conversão e identificar quais páginas e CTAs geram mais intenção de visita/conversão.

## 📦 O que foi implementado?

### ✅ Sistema completo de tracking incluindo:

1. **Biblioteca central de analytics** (`src/lib/analytics.ts`)
2. **Componentes reutilizáveis:**
   - `TrackingLink` - Links com tracking automático
   - `TrackingButton` - Botões com tracking automático
   - `WhatsAppButtonTracked` - Botão flutuante do WhatsApp com tracking
3. **Hook customizado:** `useFormTracking` - Para rastrear formulários
4. **Documentação completa:**
   - `TRACKING_GUIDE.md` - Guia técnico de uso
   - `IMPLEMENTATION_EXAMPLE.md` - Exemplos práticos de implementação
   - `GA4_SETUP_GUIDE.md` - Configuração do GA4 passo a passo

## 🎪 Eventos Rastreados

### Eventos de Conversão (marcar como conversão no GA4):
- ✅ `click_whatsapp` - Click em WhatsApp
- ✅ `click_reserva` - Click em botão de reserva
- ✅ `click_como_chegar` - Click em Google Maps
- ✅ `click_ligar` - Click no telefone
- ✅ `form_submit_eventos` - Envio do formulário de eventos
- ✅ `form_submit_reserva` - Envio do formulário de reserva

### Eventos de Apoio:
- 📊 `click_menu` - Abertura do menu
- 📊 `click_instagram` - Click no Instagram
- 📊 `form_start_eventos` - Início do formulário de eventos

## 📊 Parâmetros Coletados

Cada evento envia automaticamente:

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `page_path` | Página onde ocorreu | `/brunch` |
| `link_url` | Destino do link | `https://wa.me/...` |
| `link_text` | Texto do botão | "Fazer Reserva" |
| `cta_name` | Identificador do CTA | `whatsapp_hero` |
| `click_location` | Seção da página | `Hero Section` |

## 🚀 Como Usar

### Exemplo 1: Link do WhatsApp

```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://wa.me/5548985008964"
  trackingType="whatsapp"
  ctaName="WhatsApp Hero"
  clickLocation="Hero Section"
  target="_blank"
>
  Fale Conosco
</TrackingLink>
```

### Exemplo 2: Botão de Reserva

```tsx
import TrackingButton from '@/components/TrackingButton';

<TrackingButton
  trackingType="reserva"
  ctaName="Reserva Menu"
  onClick={() => abrirModalReserva()}
>
  Fazer Reserva
</TrackingButton>
```

### Exemplo 3: Formulário de Eventos

```tsx
'use client';
import { useFormTracking } from '@/hooks/useFormTracking';

export default function EventosForm() {
  const { onFormStart, onFormSubmit } = useFormTracking({
    formType: 'eventos',
    formName: 'Formulário de Eventos',
  });

  return (
    <form onSubmit={handleSubmit} onFocus={onFormStart}>
      {/* campos do formulário */}
    </form>
  );
}
```

## 📚 Documentação

### Para Desenvolvedores:
- **[TRACKING_GUIDE.md](./TRACKING_GUIDE.md)** - Guia técnico completo de uso
- **[IMPLEMENTATION_EXAMPLE.md](./IMPLEMENTATION_EXAMPLE.md)** - Exemplos práticos com ANTES/DEPOIS

### Para Configuração do GA4:
- **[GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md)** - Passo a passo para configurar o GA4

## 🔍 Como Testar

### 1. Em Desenvolvimento (Console)

```bash
npm run dev
```

Abra o console (F12) e clique nos elementos. Você verá:

```
📊 GA4 Event: click_whatsapp {
  page_path: "/brunch",
  cta_name: "whatsapp_hero",
  click_location: "Hero Section"
}
```

### 2. Em Produção (GA4 DebugView)

1. Instale: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
2. Ative a extensão
3. Acesse: **GA4 → Configure → DebugView**
4. Clique nos CTAs e veja os eventos em tempo real

## 📈 Análises Disponíveis

Com este sistema, você poderá responder:

- ✅ "Quantos clicks de WhatsApp vieram da página de Brunch?"
- ✅ "Qual CTA tem melhor taxa de conversão?"
- ✅ "Qual página gera mais intenção de reserva?"
- ✅ "Quantas pessoas começam vs finalizam o formulário?"
- ✅ "Qual é o funil completo: Sessão → Página → Ação → Lead?"

## 🎯 Funil de Conversão

```
Sessão (100%)
    ↓
Página de Interesse (45%)
    ↓
Ação de Intenção (20%)
    ↓
Lead/Reserva (15%)
```

## ✅ Próximos Passos

### Fase 1: Implementação no Site ⏳
- [ ] Substituir links/botões existentes por componentes com tracking
- [ ] Testar em desenvolvimento
- [ ] Fazer deploy

### Fase 2: Configuração GA4 ⏳
- [ ] Marcar eventos como conversões
- [ ] Criar dimensões personalizadas
- [ ] Criar relatórios personalizados
- [ ] Configurar alertas

### Fase 3: Análise e Otimização ⏳
- [ ] Coletar dados por 2 semanas
- [ ] Analisar desempenho de CTAs
- [ ] Identificar oportunidades de melhoria
- [ ] Otimizar páginas com baixa conversão

## 🛠️ Arquivos Criados

```
taipei/
├── src/
│   ├── lib/
│   │   └── analytics.ts                    # Sistema central de tracking
│   ├── components/
│   │   ├── TrackingLink.tsx               # Link com tracking
│   │   ├── TrackingButton.tsx             # Botão com tracking
│   │   └── WhatsAppButtonTracked.tsx      # WhatsApp flutuante com tracking
│   └── hooks/
│       └── useFormTracking.ts             # Hook para formulários
│
└── Documentação/
    ├── TRACKING_README.md                 # Este arquivo (visão geral)
    ├── TRACKING_GUIDE.md                  # Guia técnico detalhado
    ├── IMPLEMENTATION_EXAMPLE.md          # Exemplos práticos
    └── GA4_SETUP_GUIDE.md                 # Configuração do GA4
```

## 💡 Dicas Importantes

1. **Seja consistente** na nomenclatura de `ctaName` e `clickLocation`
2. **Teste sempre** antes de fazer deploy
3. **Documente** as implementações
4. **Use nomes descritivos** para facilitar análise
5. **Evite duplicação** de eventos

## 🆘 Suporte

### Dúvidas sobre implementação?
→ Consulte `IMPLEMENTATION_EXAMPLE.md`

### Dúvidas sobre configuração do GA4?
→ Consulte `GA4_SETUP_GUIDE.md`

### Dúvidas técnicas sobre a biblioteca?
→ Consulte `TRACKING_GUIDE.md`

## 📊 Exemplo de Resultado Esperado

Após 2 semanas de coleta de dados, você verá algo como:

```
📊 Conversões por Página (últimos 7 dias):

/brunch
  ├─ click_whatsapp: 32 (18 Hero, 8 Footer, 6 CTA)
  ├─ click_reserva: 18
  └─ click_como_chegar: 12

/menu
  ├─ click_whatsapp: 15 (10 Hero, 5 Footer)
  ├─ click_reserva: 10
  └─ click_menu: 45 (abertura do PDF)

/eventos
  ├─ form_submit_eventos: 8
  ├─ click_whatsapp: 6
  └─ form_start_eventos: 25 (taxa de conclusão: 32%)
```

## 🎉 Benefícios

Com este sistema implementado, você terá:

- ✅ **Visibilidade total** sobre o funil de conversão
- ✅ **Dados precisos** para tomar decisões
- ✅ **Identificação** de CTAs de alto/baixo desempenho
- ✅ **Otimização baseada em dados** reais
- ✅ **ROI mensurável** de melhorias no site

---

**Desenvolvido para:** Taipei Coffee House  
**Data:** Agosto 2026  
**Versão:** 1.0
