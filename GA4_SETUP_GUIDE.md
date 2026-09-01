# 🎯 Guia de Configuração do Google Analytics 4

Este guia mostra **passo a passo** como configurar o GA4 para receber e analisar os eventos customizados do Taipei Coffee House.

## 📋 Índice

1. [Marcando Eventos como Conversões](#1-marcando-eventos-como-conversões)
2. [Criando Dimensões Personalizadas](#2-criando-dimensões-personalizadas)
3. [Criando Relatórios Personalizados](#3-criando-relatórios-personalizados)
4. [Testando com DebugView](#4-testando-com-debugview)
5. [Criando Alertas](#5-criando-alertas)

---

## 1. Marcando Eventos como Conversões

### Passo 1: Acessar Eventos

1. Acesse: [Google Analytics](https://analytics.google.com/)
2. Selecione sua propriedade do Taipei Coffee House
3. No menu lateral, clique em: **Configure → Events**

### Passo 2: Identificar os Eventos

Após alguns dias de implementação, você verá os seguintes eventos na lista:

- `click_whatsapp`
- `click_reserva`
- `click_como_chegar`
- `click_ligar`
- `click_menu`
- `click_instagram`
- `form_start_eventos`
- `form_submit_eventos`
- `form_submit_reserva`

> **Nota:** Os eventos só aparecem aqui depois que alguém dispará-los pela primeira vez no site.

### Passo 3: Marcar como Conversão

Para cada evento abaixo, marque o **toggle "Mark as conversion"**:

- ✅ `click_whatsapp` → **Conversão**
- ✅ `click_reserva` → **Conversão**
- ✅ `click_como_chegar` → **Conversão**
- ✅ `click_ligar` → **Conversão**
- ✅ `form_submit_eventos` → **Conversão**
- ✅ `form_submit_reserva` → **Conversão**

Os demais eventos (`click_menu`, `click_instagram`, `form_start_eventos`) são eventos de **apoio** e não precisam ser marcados como conversão.

---

## 2. Criando Dimensões Personalizadas

As dimensões personalizadas permitem que você veja os parâmetros customizados nos relatórios.

### Passo 1: Acessar Custom Definitions

1. No GA4, clique em: **Configure → Custom definitions**
2. Clique em: **Create custom dimensions**

### Passo 2: Criar Cada Dimensão

Crie as seguintes dimensões uma por uma:

#### Dimensão 1: CTA Name

| Campo | Valor |
|-------|-------|
| **Dimension name** | CTA Name |
| **Scope** | Event |
| **Description** | Nome identificador do CTA (ex: whatsapp_hero) |
| **Event parameter** | `cta_name` |

#### Dimensão 2: Click Location

| Campo | Valor |
|-------|-------|
| **Dimension name** | Click Location |
| **Scope** | Event |
| **Description** | Seção da página onde ocorreu o click |
| **Event parameter** | `click_location` |

#### Dimensão 3: Link Text

| Campo | Valor |
|-------|-------|
| **Dimension name** | Link Text |
| **Scope** | Event |
| **Description** | Texto do botão ou link |
| **Event parameter** | `link_text` |

#### Dimensão 4: Link URL

| Campo | Valor |
|-------|-------|
| **Dimension name** | Link URL |
| **Scope** | Event |
| **Description** | URL de destino do link |
| **Event parameter** | `link_url` |

#### Dimensão 5: Form Name

| Campo | Valor |
|-------|-------|
| **Dimension name** | Form Name |
| **Scope** | Event |
| **Description** | Nome do formulário |
| **Event parameter** | `form_name` |

### Passo 3: Aguardar Processamento

As dimensões podem levar **até 48 horas** para começar a coletar dados. Após esse período, você poderá usá-las nos relatórios.

---

## 3. Criando Relatórios Personalizados

### Relatório 1: Análise de Conversões por Página

**Objetivo:** Ver quantas conversões cada página gera

1. Clique em: **Explore → Blank**
2. Configure:
   - **Técnica:** Free form
   - **Dimensões:**
     - `Page path and screen class`
     - `Event name`
   - **Métricas:**
     - `Event count`
   - **Filtro:**
     - Event name → contém → `click_` OU `form_submit_`

3. Clique em **Save** e nomeie: "Conversões por Página"

**Resultado esperado:**
```
/brunch       → click_whatsapp: 32
/brunch       → click_reserva: 18
/menu         → click_whatsapp: 15
/eventos      → form_submit_eventos: 8
```

---

### Relatório 2: Desempenho de CTAs

**Objetivo:** Ver qual CTA tem melhor performance

1. Clique em: **Explore → Blank**
2. Configure:
   - **Técnica:** Free form
   - **Dimensões:**
     - `CTA Name` (dimensão personalizada)
     - `Event name`
   - **Métricas:**
     - `Event count`
   - **Filtro:**
     - Event name → é um dos → `click_whatsapp`, `click_reserva`, `click_como_chegar`

3. Clique em **Save** e nomeie: "Desempenho de CTAs"

**Resultado esperado:**
```
WhatsApp Hero     → 45 clicks
WhatsApp Footer   → 23 clicks
Reserva Menu      → 18 clicks
Maps Footer       → 12 clicks
```

---

### Relatório 3: Funil de Conversão

**Objetivo:** Ver o caminho do usuário até a conversão

1. Clique em: **Explore → Funnel exploration**
2. Configure os **Steps**:
   - **Step 1:** Page view → Event name → `page_view`
   - **Step 2:** Interesse → Page path → contém → `/brunch` OU `/menu` OU `/eventos`
   - **Step 3:** Intenção → Event name → `click_whatsapp` OU `click_reserva`
   - **Step 4:** Conversão → Event name → `form_submit_eventos` OU `form_submit_reserva`

3. Clique em **Save** e nomeie: "Funil de Conversão"

**Resultado esperado:**
```
1000 usuários → Page View
↓ 45%
450 usuários → Página de Interesse
↓ 20%
90 usuários → Ação de Intenção
↓ 15%
13 usuários → Conversão Final
```

---

### Relatório 4: Análise por Localização (Seção)

**Objetivo:** Ver quais seções da página geram mais cliques

1. Clique em: **Explore → Blank**
2. Configure:
   - **Técnica:** Free form
   - **Dimensões:**
     - `Click Location` (dimensão personalizada)
     - `Page path`
   - **Métricas:**
     - `Event count`
   - **Filtro:**
     - Event name → começa com → `click_`

3. Clique em **Save** e nomeie: "Análise por Seção"

**Resultado esperado:**
```
Hero Section   → 120 clicks (/brunch: 45, /home: 35, /eventos: 40)
Footer         → 68 clicks  (/brunch: 20, /home: 25, /menu: 23)
CTA Section    → 45 clicks  (/eventos: 30, /brunch: 15)
```

---

## 4. Testando com DebugView

### Passo 1: Instalar a Extensão

1. Acesse a Chrome Web Store
2. Busque por: **Google Analytics Debugger**
3. Clique em: **Add to Chrome**

### Passo 2: Ativar o DebugView

1. No GA4, clique em: **Configure → DebugView**
2. Em outra aba, abra o site do Taipei: [taipeicoffeehouse.com.br](https://taipeicoffeehouse.com.br)
3. Ative a extensão **Google Analytics Debugger** (ícone fica azul)
4. Recarregue o site

### Passo 3: Testar os Eventos

1. Volte para a aba do GA4 DebugView
2. Você verá seu dispositivo conectado em tempo real
3. No site, clique em um botão do WhatsApp
4. No DebugView, você verá:

```
📊 click_whatsapp
   ├─ page_path: /brunch
   ├─ link_url: https://wa.me/5548985008964
   ├─ link_text: Fazer Reserva
   ├─ cta_name: whatsapp_hero
   └─ click_location: Hero Section
```

### Passo 4: Validar Todos os Eventos

Teste cada tipo de evento:

- [ ] `click_whatsapp` → Clique em qualquer link do WhatsApp
- [ ] `click_reserva` → Clique em "Fazer Reserva"
- [ ] `click_como_chegar` → Clique em Google Maps
- [ ] `click_ligar` → Clique no telefone
- [ ] `click_menu` → Clique em "Ver Menu"
- [ ] `click_instagram` → Clique no Instagram
- [ ] `form_start_eventos` → Foque em um campo do formulário de eventos
- [ ] `form_submit_eventos` → Envie o formulário de eventos
- [ ] `form_submit_reserva` → Envie formulário de reserva (se existir)

---

## 5. Criando Alertas

Configure alertas para ser notificado sobre conversões importantes.

### Alerta 1: Queda em Conversões

1. No GA4, clique em: **Configure → Custom alerts**
2. Clique em: **Create**
3. Configure:
   - **Alert name:** Queda em Conversões WhatsApp
   - **Alert type:** Custom
   - **Frequency:** Daily
   - **Condition:**
     - Event name → é → `click_whatsapp`
     - Event count → decreases by → 30%
     - Compared to previous → day
   - **Recipients:** Adicione seu email

4. Clique em **Save**

### Alerta 2: Pico de Conversões

1. Crie outro alerta
2. Configure:
   - **Alert name:** Pico de Conversões
   - **Alert type:** Custom
   - **Frequency:** Daily
   - **Condition:**
     - Event name → é → `form_submit_eventos`
     - Event count → increases by → 50%
     - Compared to previous → day
   - **Recipients:** Adicione seu email

---

## 📊 Métricas Recomendadas para Acompanhar

### Diárias
- Número de clicks no WhatsApp
- Número de submissões de formulários
- Taxa de conversão por página

### Semanais
- Comparação de conversões semana a semana
- Desempenho de CTAs
- Páginas com maior taxa de conversão

### Mensais
- Funil completo de conversão
- Crescimento de conversões MoM
- ROI por canal de aquisição

---

## 🎯 Dashboard Sugerido

Crie um dashboard no GA4 com:

### Card 1: Conversões Totais (Mês Atual)
- Métrica: Conversões (todos os eventos marcados como conversão)

### Card 2: Top 3 CTAs
- Tabela: CTA Name x Event Count
- Ordenar por: Event Count (descendente)
- Limite: 3

### Card 3: Conversões por Página
- Gráfico de barras: Page Path x Conversions

### Card 4: Funil de Conversão
- Funil: Page View → Interesse → Intenção → Conversão

### Card 5: Tendência de WhatsApp Clicks
- Gráfico de linha: Date x click_whatsapp (últimos 30 dias)

---

## ✅ Checklist Final de Configuração

- [ ] Eventos aparecem na lista de eventos do GA4
- [ ] Eventos principais marcados como conversões
- [ ] Dimensões personalizadas criadas
- [ ] DebugView testado e funcionando
- [ ] Relatório "Conversões por Página" criado
- [ ] Relatório "Desempenho de CTAs" criado
- [ ] Relatório "Funil de Conversão" criado
- [ ] Alertas configurados
- [ ] Dashboard criado
- [ ] Equipe treinada para acessar os relatórios

---

## 🆘 Problemas Comuns

### Eventos não aparecem na lista

**Causa:** Ninguém ainda disparou o evento no site

**Solução:** Aguarde alguém clicar ou teste você mesmo (sem o DebugView ativo)

---

### Dimensões personalizadas não coletam dados

**Causa:** Pode levar até 48h para começar a coletar

**Solução:** Aguarde e verifique novamente após 48h

---

### DebugView não mostra eventos

**Causa 1:** Extensão não está ativa

**Solução:** Verifique se o ícone da extensão está azul

**Causa 2:** Está testando em produção sem a extensão

**Solução:** Instale e ative a extensão Google Analytics Debugger

---

### Parâmetros aparecem como (not set)

**Causa:** Dimensão personalizada não foi criada

**Solução:** Siga o passo 2 deste guia para criar as dimensões

---

## 📚 Recursos Adicionais

- [Documentação Oficial GA4](https://support.google.com/analytics/answer/9267735)
- [GA4 Event Parameters](https://support.google.com/analytics/answer/9267744)
- [Custom Dimensions Guide](https://support.google.com/analytics/answer/10075209)
- [DebugView Documentation](https://support.google.com/analytics/answer/7201382)

---

## 🎉 Conclusão

Após completar este guia, você terá:

✅ Um sistema completo de tracking de conversões
✅ Visibilidade total sobre o funil de conversão
✅ Capacidade de identificar quais páginas/CTAs performam melhor
✅ Alertas automáticos sobre mudanças significativas
✅ Dados para tomar decisões informadas sobre otimizações

**Próximo passo:** Analise os dados após 2 semanas e identifique oportunidades de otimização!
