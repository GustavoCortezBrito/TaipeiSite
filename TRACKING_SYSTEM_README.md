# 📊 Sistema de Tracking Avançado GA4 - Taipei Coffee House

![Status](https://img.shields.io/badge/Status-Pronto%20para%20Uso-success)
![Versão](https://img.shields.io/badge/Versão-1.0-blue)
![GA4](https://img.shields.io/badge/Google%20Analytics-4-orange)

## 🎯 O que é este sistema?

Um **sistema completo de tracking de eventos** para Google Analytics 4 que permite medir com precisão:

- 📱 Quantos clicks no WhatsApp cada página gera
- 📅 Quantas pessoas querem fazer reserva
- 🗺️ Quantos procuram a localização no Google Maps
- 📞 Quantos ligam para o estabelecimento
- 📝 Quantos preenchem formulários de eventos

## ⚡ Quick Start (5 minutos)

### 1. Use o componente TrackingLink

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

### 2. Veja o resultado no console

```bash
npm run dev
```

Abra o console (F12) e clique no elemento:

```
📊 GA4 Event: click_whatsapp {
  page_path: "/brunch",
  cta_name: "WhatsApp Hero",
  click_location: "Hero Section"
}
```

✅ **Funcionou!** Agora você está rastreando conversões.

## 📚 Documentação Completa

| Documento | Para quem? | Tempo | Descrição |
|-----------|------------|-------|-----------|
| **[TRACKING_INDEX.md](./TRACKING_INDEX.md)** | Todos | 5 min | 📚 Navegue por toda a documentação |
| **[QUICK_START.md](./QUICK_START.md)** | Dev | 5 min | 🚀 Comece agora mesmo |
| **[RESUMO_EXECUTIVO.md](./RESUMO_EXECUTIVO.md)** | Gestor | 8 min | 💼 Apresentação para stakeholders |
| **[TRACKING_GUIDE.md](./TRACKING_GUIDE.md)** | Dev | 20 min | 📘 Referência técnica completa |
| **[IMPLEMENTATION_EXAMPLE.md](./IMPLEMENTATION_EXAMPLE.md)** | Dev | 15 min | 💻 10 exemplos práticos |
| **[GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md)** | Analista | 25 min | ⚙️ Configurar o GA4 |
| **[CHECKLIST_IMPLEMENTACAO.md](./CHECKLIST_IMPLEMENTACAO.md)** | Todos | 5 min | ✅ Acompanhar progresso |

## 🎪 Eventos Rastreados

### Conversões Principais (marcar no GA4)
- ✅ `click_whatsapp` - Click no WhatsApp
- ✅ `click_reserva` - Click em fazer reserva
- ✅ `click_como_chegar` - Click no Google Maps
- ✅ `click_ligar` - Click no telefone
- ✅ `form_submit_eventos` - Envio de formulário de eventos
- ✅ `form_submit_reserva` - Envio de formulário de reserva

### Eventos de Apoio
- 📊 `click_menu` - Abertura do menu
- 📊 `click_instagram` - Click no Instagram
- 📊 `form_start_eventos` - Início do formulário

## 🛠️ Componentes Criados

### `TrackingLink` - Link com tracking
```tsx
<TrackingLink
  href="URL"
  trackingType="whatsapp|reserva|como_chegar|ligar|menu|instagram"
  ctaName="identificador_unico"
  clickLocation="seção_da_página"
/>
```

### `TrackingButton` - Botão com tracking
```tsx
<TrackingButton
  trackingType="whatsapp|reserva|..."
  ctaName="identificador_unico"
  onClick={() => minhaFuncao()}
/>
```

### `useFormTracking` - Hook para formulários
```tsx
const { onFormStart, onFormSubmit } = useFormTracking({
  formType: 'eventos|reserva',
  formName: 'Nome do Formulário'
});
```

## 📊 Parâmetros Coletados

Cada evento envia automaticamente:

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `page_path` | Página onde ocorreu | `/brunch` |
| `link_url` | Destino do link | `https://wa.me/...` |
| `link_text` | Texto do botão | "Fale Conosco" |
| `cta_name` | Nome do CTA | `whatsapp_hero` |
| `click_location` | Seção da página | `Hero Section` |

## 🎯 Análises Disponíveis

Após implementação, você responderá:

### "Quantos clicks de WhatsApp vieram de cada página?"
```
✅ Brunch: 32 clicks (18 Hero, 8 Footer, 6 CTA)
✅ Menu: 15 clicks (10 Hero, 5 Footer)
✅ Eventos: 6 clicks
```

### "Qual CTA tem melhor performance?"
```
✅ 1º WhatsApp Hero Brunch: 18 clicks
✅ 2º WhatsApp Footer: 23 clicks
✅ 3º Reserva Menu: 10 clicks
```

### "Qual é o funil de conversão?"
```
✅ 1000 sessões
   → 450 páginas de interesse (45%)
   → 90 ações de intenção (20%)
   → 13 conversões (14%)
```

## 🚀 Como Implementar

### Opção 1: Leitura Completa
1. Leia [TRACKING_INDEX.md](./TRACKING_INDEX.md) para navegar
2. Siga a documentação recomendada para seu perfil
3. Implemente gradualmente

### Opção 2: Quick Start
1. Leia [QUICK_START.md](./QUICK_START.md)
2. Copie exemplos de [IMPLEMENTATION_EXAMPLE.md](./IMPLEMENTATION_EXAMPLE.md)
3. Teste e ajuste

### Opção 3: Código Direto
1. Veja [EXAMPLE_BRUNCH_WITH_TRACKING.tsx](./EXAMPLE_BRUNCH_WITH_TRACKING.tsx)
2. Copie e adapte para suas páginas
3. Use [TRACKING_GUIDE.md](./TRACKING_GUIDE.md) como referência

## 📁 Estrutura de Arquivos

```
taipei/
├── 📄 Documentação
│   ├── TRACKING_SYSTEM_README.md      ← Você está aqui
│   ├── TRACKING_INDEX.md              ← Navegação completa
│   ├── QUICK_START.md                 ← Comece aqui!
│   ├── TRACKING_README.md
│   ├── RESUMO_EXECUTIVO.md
│   ├── TRACKING_GUIDE.md
│   ├── IMPLEMENTATION_EXAMPLE.md
│   ├── GA4_SETUP_GUIDE.md
│   ├── CHECKLIST_IMPLEMENTACAO.md
│   └── EXAMPLE_BRUNCH_WITH_TRACKING.tsx
│
└── 📁 src/
    ├── lib/
    │   └── analytics.ts               ← ⭐ Sistema central
    ├── components/
    │   ├── TrackingLink.tsx           ← ⭐ Link com tracking
    │   ├── TrackingButton.tsx         ← ⭐ Botão com tracking
    │   └── WhatsAppButtonTracked.tsx  ← ⭐ WhatsApp flutuante
    └── hooks/
        └── useFormTracking.ts         ← ⭐ Hook de formulários
```

## 🧪 Como Testar

### Desenvolvimento (Agora)
```bash
npm run dev
# Abra console (F12)
# Clique nos elementos
# Veja eventos no console
```

### Produção (Após Deploy)
1. Instale [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
2. Ative no site em produção
3. Acesse GA4 → DebugView
4. Veja eventos em tempo real

## ⚙️ Configuração do GA4

Após implementar no site, configure o GA4:

### 1. Marcar Conversões
GA4 → Configure → Events → Marcar como conversão:
- ✅ click_whatsapp
- ✅ click_reserva
- ✅ click_como_chegar
- ✅ click_ligar
- ✅ form_submit_eventos
- ✅ form_submit_reserva

### 2. Criar Dimensões Personalizadas
GA4 → Configure → Custom definitions:
- CTA Name (`cta_name`)
- Click Location (`click_location`)
- Link Text (`link_text`)
- Link URL (`link_url`)
- Form Name (`form_name`)

### 3. Criar Relatórios
- Conversões por Página
- Desempenho de CTAs
- Funil de Conversão
- Análise por Seção

> 📘 **Guia completo:** [GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md)

## 📈 Resultado Esperado

### Dashboard GA4 (após 2 semanas)

```
┌─────────────────────────────────────────┐
│   CONVERSÕES - ÚLTIMOS 7 DIAS           │
├─────────────────────────────────────────┤
│ 📱 WhatsApp: 123 clicks                 │
│ 📅 Reservas: 45 clicks                  │
│ 🗺️  Como Chegar: 32 clicks              │
│ 📞 Ligações: 18 clicks                  │
│ 📝 Formulários: 8 envios                │
│                                          │
│ 🎯 TOTAL: 226 ações de intenção         │
└─────────────────────────────────────────┘
```

## 💡 Benefícios

### ✅ Antes vs Depois

**ANTES:**
> "Tivemos 100 clicks esta semana"  
> ❓ Mas onde? Em quê? Qual a intenção?

**DEPOIS:**
> "32 clicks no WhatsApp vieram do Brunch, sendo 18 do Hero"  
> ✅ Dados específicos para tomar decisões!

## 🎯 Próximos Passos

### Semana 1-2: Implementação
- [ ] Ler [QUICK_START.md](./QUICK_START.md)
- [ ] Implementar nas páginas principais
- [ ] Testar em desenvolvimento
- [ ] Fazer deploy

### Semana 3: Configuração
- [ ] Configurar GA4 ([guia](./GA4_SETUP_GUIDE.md))
- [ ] Validar com DebugView
- [ ] Criar relatórios

### Semana 4-5: Coleta de Dados
- [ ] Monitorar eventos
- [ ] Aguardar volume de dados
- [ ] Validar funcionamento

### Semana 6+: Análise e Otimização
- [ ] Analisar desempenho
- [ ] Identificar oportunidades
- [ ] Implementar melhorias
- [ ] Medir impacto

## 🆘 Precisa de Ajuda?

### Por Tipo de Dúvida

| Dúvida | Consulte |
|--------|----------|
| Como usar os componentes? | [QUICK_START.md](./QUICK_START.md) |
| Exemplos de código? | [IMPLEMENTATION_EXAMPLE.md](./IMPLEMENTATION_EXAMPLE.md) |
| Referência técnica? | [TRACKING_GUIDE.md](./TRACKING_GUIDE.md) |
| Configurar GA4? | [GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md) |
| Visão de negócio? | [RESUMO_EXECUTIVO.md](./RESUMO_EXECUTIVO.md) |
| Acompanhar progresso? | [CHECKLIST_IMPLEMENTACAO.md](./CHECKLIST_IMPLEMENTACAO.md) |

### Problemas Comuns

**Eventos não aparecem no console**
→ Verifique se está em `npm run dev`

**Erro ao importar componentes**
→ Verifique o caminho: `@/components/TrackingLink`

**trackingType inválido**
→ Use: whatsapp, reserva, como_chegar, ligar, menu, instagram

**Eventos duplicados**
→ Verifique se não há dois listeners no mesmo elemento

## ✅ Checklist Rápido

Antes de começar:

- [ ] Entendi o objetivo do sistema
- [ ] Li o QUICK_START.md
- [ ] Sei onde encontrar exemplos
- [ ] Sei como testar no console
- [ ] Tenho acesso ao GA4

## 🎉 Status

- ✅ **Sistema desenvolvido e pronto**
- ✅ **Componentes testados**
- ✅ **Documentação completa**
- ✅ **Exemplos funcionais**
- ⏳ **Aguardando implementação nas páginas**

## 📞 Informações do Projeto

| Item | Valor |
|------|-------|
| **Cliente** | Taipei Coffee House |
| **Projeto** | Sistema de Tracking GA4 Avançado |
| **Versão** | 1.0 |
| **Data** | Agosto 2026 |
| **Status** | ✅ Pronto para uso |
| **GA4 ID** | G-6CJ4J83H41 |
| **WhatsApp** | 5548985008964 |

---

## 🚀 Começar Agora

```bash
# 1. Leia o Quick Start
cat QUICK_START.md

# 2. Inicie o servidor
npm run dev

# 3. Abra o console (F12)

# 4. Implemente seu primeiro link com tracking!
```

---

**👉 Comece pelo [QUICK_START.md](./QUICK_START.md) ou navegue por toda a documentação em [TRACKING_INDEX.md](./TRACKING_INDEX.md)**

---

Desenvolvido com ❤️ para Taipei Coffee House
