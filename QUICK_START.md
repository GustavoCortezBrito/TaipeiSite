# 🚀 Quick Start - Tracking GA4 em 5 Minutos

Este guia mostra como começar a usar o sistema de tracking **agora mesmo**, sem ler toda a documentação.

## ⚡ Passo 1: Entenda os 3 Componentes Principais

### 1. TrackingLink (para links)
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

### 2. TrackingButton (para botões)
```tsx
import TrackingButton from '@/components/TrackingButton';

<TrackingButton
  trackingType="reserva"
  ctaName="Reserva Modal"
  onClick={() => abrirModal()}
>
  Fazer Reserva
</TrackingButton>
```

### 3. useFormTracking (para formulários)
```tsx
import { useFormTracking } from '@/hooks/useFormTracking';

const { onFormStart, onFormSubmit } = useFormTracking({
  formType: 'eventos',
  formName: 'Formulário de Eventos',
});

<form onSubmit={handleSubmit} onFocus={onFormStart}>
  {/* campos */}
</form>
```

## ⚡ Passo 2: Tipos de Tracking Disponíveis

Use o `trackingType` correto para cada situação:

| trackingType | Quando usar |
|--------------|-------------|
| `"whatsapp"` | Links para WhatsApp |
| `"reserva"` | Botões de fazer reserva |
| `"como_chegar"` | Links do Google Maps |
| `"ligar"` | Links de telefone (`tel:`) |
| `"menu"` | Links para ver o menu (PDF/página) |
| `"instagram"` | Links do Instagram |
| `"none"` | Links que não precisam tracking |

## ⚡ Passo 3: Padrões de Nomenclatura

### ctaName (Identificador único do botão)
Formato: `{tipo}_{localização}`

**Exemplos:**
- `"whatsapp_hero"` → WhatsApp no hero
- `"whatsapp_footer"` → WhatsApp no rodapé
- `"reserva_menu"` → Reserva na página de menu
- `"maps_brunch"` → Google Maps na página de brunch

### clickLocation (Seção da página)
Use nomes descritivos em inglês:

**Exemplos:**
- `"Hero Section"` → Seção principal
- `"Footer"` → Rodapé
- `"Header"` → Cabeçalho
- `"CTA Section"` → Seção de call-to-action
- `"Brunch Page"` → Página de brunch (detecta automaticamente)

## ⚡ Passo 4: Substitua Seus Links

### Exemplo 1: WhatsApp

**❌ ANTES:**
```tsx
<a href="https://wa.me/5548985008964" target="_blank">
  Fale Conosco
</a>
```

**✅ DEPOIS:**
```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://wa.me/5548985008964"
  trackingType="whatsapp"
  ctaName="whatsapp_cta"
  target="_blank"
>
  Fale Conosco
</TrackingLink>
```

### Exemplo 2: Google Maps

**❌ ANTES:**
```tsx
<a href="https://maps.google.com/?q=Taipei+Coffee" target="_blank">
  Como Chegar
</a>
```

**✅ DEPOIS:**
```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="https://maps.google.com/?q=Taipei+Coffee"
  trackingType="como_chegar"
  ctaName="maps_footer"
  target="_blank"
>
  Como Chegar
</TrackingLink>
```

### Exemplo 3: Telefone

**❌ ANTES:**
```tsx
<a href="tel:+554832332747">
  (48) 3233-2747
</a>
```

**✅ DEPOIS:**
```tsx
import TrackingLink from '@/components/TrackingLink';

<TrackingLink
  href="tel:+554832332747"
  trackingType="ligar"
  ctaName="telefone_header"
>
  (48) 3233-2747
</TrackingLink>
```

### Exemplo 4: Formulário

**❌ ANTES:**
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  await enviarFormulario();
};

<form onSubmit={handleSubmit}>
  {/* campos */}
</form>
```

**✅ DEPOIS:**
```tsx
import { useFormTracking } from '@/hooks/useFormTracking';

const { onFormStart, onFormSubmit } = useFormTracking({
  formType: 'eventos',
  formName: 'Formulário de Eventos',
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const success = await enviarFormulario();
  if (success) onFormSubmit(); // Rastreia apenas se sucesso
};

<form onSubmit={handleSubmit} onFocus={onFormStart}>
  {/* campos */}
</form>
```

## ⚡ Passo 5: Teste Imediatamente

### 1. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 2. Abra o console do navegador
Pressione `F12` ou `Ctrl + Shift + I`

### 3. Clique nos elementos
Você verá no console:
```
📊 GA4 Event: click_whatsapp {
  page_path: "/brunch",
  link_url: "https://wa.me/5548985008964",
  link_text: "Fale Conosco",
  cta_name: "whatsapp_hero",
  click_location: "Hero Section"
}
```

✅ Se viu isso, está funcionando!

## ⚡ Passo 6: Priorize Estas Implementações

Comece pelas conversões mais importantes:

### 1️⃣ Alta Prioridade (fazer primeiro)
- ✅ Todos os botões/links do WhatsApp
- ✅ Botões "Fazer Reserva"
- ✅ Links "Como Chegar" / Google Maps

### 2️⃣ Média Prioridade (fazer em seguida)
- ✅ Links de telefone
- ✅ Formulário de eventos
- ✅ Links do Instagram

### 3️⃣ Baixa Prioridade (fazer depois)
- ✅ Links do menu (PDF)
- ✅ Outros links externos

## ⚡ Passo 7: Valide no GA4 (Produção)

Após fazer deploy:

### 1. Instale a extensão
[Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)

### 2. Ative e teste
1. Abra o site em produção
2. Ative a extensão (ícone fica azul)
3. Acesse GA4 → Configure → DebugView
4. Clique nos CTAs no site
5. Veja eventos aparecendo em tempo real no GA4

## 📚 Quer Mais Detalhes?

### Para Desenvolvedores:
- **[TRACKING_GUIDE.md](./TRACKING_GUIDE.md)** → Guia técnico completo
- **[IMPLEMENTATION_EXAMPLE.md](./IMPLEMENTATION_EXAMPLE.md)** → Mais exemplos

### Para Configuração:
- **[GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md)** → Setup completo do GA4

### Para Gestão:
- **[RESUMO_EXECUTIVO.md](./RESUMO_EXECUTIVO.md)** → Visão de negócio
- **[CHECKLIST_IMPLEMENTACAO.md](./CHECKLIST_IMPLEMENTACAO.md)** → Acompanhamento

## 💡 Dicas Rápidas

### ✅ DO's
- ✅ Use nomes descritivos para `ctaName`
- ✅ Seja consistente na nomenclatura
- ✅ Teste sempre no console antes de fazer deploy
- ✅ Use `trackingType="none"` para links internos que não são conversão

### ❌ DON'Ts
- ❌ Não use caracteres especiais no `ctaName` (use apenas letras, números e underscore)
- ❌ Não esqueça de importar o componente
- ❌ Não rastreie o mesmo elemento duas vezes
- ❌ Não faça deploy sem testar

## 🎯 Objetivo Final

Após implementar, você terá respostas para:

> "Quantos clicks de WhatsApp vieram da página de Brunch?"  
> **Resposta:** 32 clicks (18 Hero, 8 Footer, 6 CTA)

> "Qual CTA tem melhor performance?"  
> **Resposta:** WhatsApp Hero Brunch com 18 clicks

> "Qual página converte mais?"  
> **Resposta:** /brunch com 62 ações de intenção

## 🆘 Precisa de Ajuda?

### Problema: "Os eventos não aparecem no console"
**Solução:** Verifique se está em modo desenvolvimento (`npm run dev`)

### Problema: "Erro ao importar TrackingLink"
**Solução:** Verifique o caminho: `import TrackingLink from '@/components/TrackingLink'`

### Problema: "trackingType não existe"
**Solução:** Confira os tipos válidos no Passo 2 deste guia

### Problema: "Eventos duplicados"
**Solução:** Verifique se não há dois listeners no mesmo elemento

---

## 🚀 Comece Agora!

1. Escolha UMA página para começar (ex: Home)
2. Encontre UM link do WhatsApp
3. Substitua por `TrackingLink`
4. Teste no console
5. ✅ Pronto! Repita para outros links

**Tempo estimado:** 5-10 minutos por página

---

**Última atualização:** Agosto 2026  
**Versão:** 1.0  
**Autor:** Sistema de Tracking GA4 - Taipei Coffee House
