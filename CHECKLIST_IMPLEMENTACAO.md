# ✅ Checklist de Implementação - Tracking GA4

Use este checklist para acompanhar o progresso da implementação do sistema de tracking.

## 📋 Fase 1: Preparação

- [x] Sistema de tracking desenvolvido (`src/lib/analytics.ts`)
- [x] Componentes criados (`TrackingLink`, `TrackingButton`)
- [x] Hook de formulários criado (`useFormTracking`)
- [x] Documentação completa escrita
- [x] Exemplos práticos criados

## 🔧 Fase 2: Implementação por Página

### Home (`src/app/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp no Hero
- [ ] Link WhatsApp na seção de contato
- [ ] Link Google Maps (Como Chegar)
- [ ] Link de Telefone
- [ ] Link do Instagram no Footer
- [ ] Botão "Fazer Reserva"
- [ ] Testar no console (dev mode)

### Brunch (`src/app/brunch/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp no Hero
- [ ] Link WhatsApp na seção de info
- [ ] Link Google Maps
- [ ] Link "Ver Menu" (se houver)
- [ ] Testar no console (dev mode)

### Menu (`src/app/menu/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp no Hero
- [ ] Botão "Fazer Reserva"
- [ ] Link para PDF do menu (trackingType="menu")
- [ ] Link Google Maps
- [ ] Testar no console (dev mode)

### Eventos (`src/app/espaco-eventos-florianopolis/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp no Hero
- [ ] Link WhatsApp na seção de CTA
- [ ] Link do Instagram
- [ ] **Formulário de eventos** (usar `useFormTracking`)
  - [ ] Importar hook `useFormTracking`
  - [ ] Adicionar `onFormStart` no `onFocus` do form
  - [ ] Adicionar `onFormSubmit` no submit do form
- [ ] Testar no console (dev mode)

### Eventos Sociais (`src/app/service-page/eventos-sociais/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp "Solicitar Orçamento"
- [ ] Testar no console (dev mode)

### Eventos Corporativos (`src/app/service-page/eventos-corporativos-em-florianopolis/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp "Solicitar Orçamento"
- [ ] Testar no console (dev mode)

### Sobre (`src/app/sobre-o-taipei/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp (se houver)
- [ ] Link Instagram (se houver)
- [ ] Testar no console (dev mode)

### Kids (`src/app/cafeteria-com-espaco-kids-florianopolis/page.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp
- [ ] Testar no console (dev mode)

### Header (`src/components/Header.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link de Telefone
- [ ] Link "Fazer Reserva" (se houver)
- [ ] Testar no console (dev mode)

### Footer (`src/components/Footer.tsx`)
- [ ] Importar `TrackingLink` no topo
- [ ] Link WhatsApp
- [ ] Link de Telefone
- [ ] Link Google Maps
- [ ] Link Instagram
- [ ] Testar no console (dev mode)

### ContactSection (`src/components/ContactSection.tsx`)
- [ ] Verificar se há formulário de contato/reserva
- [ ] Se sim, adicionar tracking com `useFormTracking`
- [ ] Link WhatsApp (se houver)
- [ ] Testar no console (dev mode)

### Botão Flutuante do WhatsApp
- [ ] Substituir `WhatsAppButton` por `WhatsAppButtonTracked`
- [ ] Atualizar import em todas as páginas que usam
- [ ] Testar no console (dev mode)

## 🧪 Fase 3: Testes

### Testes em Desenvolvimento
- [ ] Abrir console do navegador (F12)
- [ ] Executar `npm run dev`
- [ ] Clicar em cada CTA implementado
- [ ] Verificar se eventos aparecem no console:
  ```
  📊 GA4 Event: click_whatsapp { ... }
  ```
- [ ] Verificar parâmetros corretos (page_path, cta_name, etc.)
- [ ] Testar formulários (form_start e form_submit)

### Testes de Build
- [ ] Executar `npm run build`
- [ ] Verificar se não há erros de build
- [ ] Executar `npm start`
- [ ] Testar novamente os eventos

### Checklist de Validação por Evento
- [ ] `click_whatsapp` → Funciona em todas as páginas
- [ ] `click_reserva` → Funciona onde implementado
- [ ] `click_como_chegar` → Funciona em todas as páginas
- [ ] `click_ligar` → Funciona em Header/Footer
- [ ] `click_menu` → Funciona na página de Menu
- [ ] `click_instagram` → Funciona no Footer
- [ ] `form_start_eventos` → Funciona no formulário
- [ ] `form_submit_eventos` → Funciona no envio do formulário

## 🚀 Fase 4: Deploy

- [ ] Fazer commit das mudanças
  ```bash
  git add .
  git commit -m "feat: Implementa sistema de tracking GA4 avançado"
  ```
- [ ] Push para repositório
  ```bash
  git push origin main
  ```
- [ ] Fazer deploy em produção (Vercel/Netlify/etc)
- [ ] Aguardar deploy completo
- [ ] Verificar se site está funcionando normalmente

## 🔍 Fase 5: Validação em Produção

### Instalar Extensão
- [ ] Instalar [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)

### Testar com DebugView
- [ ] Abrir site em produção
- [ ] Ativar extensão Google Analytics Debugger
- [ ] Acessar GA4 → Configure → DebugView
- [ ] Clicar em cada tipo de CTA
- [ ] Verificar eventos aparecendo em tempo real no DebugView

### Validação de Eventos
- [ ] `click_whatsapp` aparece no DebugView
- [ ] `click_reserva` aparece no DebugView
- [ ] `click_como_chegar` aparece no DebugView
- [ ] `click_ligar` aparece no DebugView
- [ ] `click_menu` aparece no DebugView
- [ ] `click_instagram` aparece no DebugView
- [ ] `form_start_eventos` aparece no DebugView
- [ ] `form_submit_eventos` aparece no DebugView

### Validação de Parâmetros
- [ ] `page_path` está correto
- [ ] `link_url` está correto
- [ ] `link_text` está correto
- [ ] `cta_name` está correto
- [ ] `click_location` está correto

## ⚙️ Fase 6: Configuração do GA4

### Marcar Conversões
Acesse GA4 → Configure → Events

- [ ] Marcar `click_whatsapp` como conversão
- [ ] Marcar `click_reserva` como conversão
- [ ] Marcar `click_como_chegar` como conversão
- [ ] Marcar `click_ligar` como conversão
- [ ] Marcar `form_submit_eventos` como conversão
- [ ] Marcar `form_submit_reserva` como conversão (se existir)

### Criar Dimensões Personalizadas
Acesse GA4 → Configure → Custom definitions

- [ ] Criar dimensão: `CTA Name` (event parameter: `cta_name`)
- [ ] Criar dimensão: `Click Location` (event parameter: `click_location`)
- [ ] Criar dimensão: `Link Text` (event parameter: `link_text`)
- [ ] Criar dimensão: `Link URL` (event parameter: `link_url`)
- [ ] Criar dimensão: `Form Name` (event parameter: `form_name`)

### Criar Relatórios
Acesse GA4 → Explore

- [ ] Relatório: "Conversões por Página"
- [ ] Relatório: "Desempenho de CTAs"
- [ ] Relatório: "Funil de Conversão"
- [ ] Relatório: "Análise por Seção"

### Configurar Alertas
Acesse GA4 → Configure → Custom alerts

- [ ] Alerta: Queda em conversões WhatsApp (30% dia a dia)
- [ ] Alerta: Pico de conversões (50% aumento)

### Criar Dashboard
Acesse GA4 → Library → Create report

- [ ] Card: Conversões Totais (mês atual)
- [ ] Card: Top 3 CTAs
- [ ] Card: Conversões por Página
- [ ] Card: Funil de Conversão
- [ ] Card: Tendência de WhatsApp Clicks

## 📊 Fase 7: Monitoramento (Primeiras 2 Semanas)

### Semana 1
- [ ] Dia 1: Verificar se eventos estão sendo coletados
- [ ] Dia 3: Verificar volume de eventos por tipo
- [ ] Dia 7: Primeira análise de dados
  - [ ] Quantos eventos de cada tipo?
  - [ ] Quais páginas geram mais conversões?
  - [ ] Quais CTAs têm melhor desempenho?

### Semana 2
- [ ] Dia 10: Análise de funil de conversão
- [ ] Dia 14: Relatório completo
  - [ ] Compilar todos os dados
  - [ ] Identificar páginas de alta conversão
  - [ ] Identificar páginas de baixa conversão
  - [ ] Listar oportunidades de otimização

## 🎯 Fase 8: Otimização

### Análise de Dados
- [ ] Identificar top 3 CTAs com melhor performance
- [ ] Identificar top 3 páginas com melhor conversão
- [ ] Identificar CTAs/páginas de baixo desempenho
- [ ] Calcular taxa de conversão por página

### Plano de Ação
- [ ] Melhorar CTAs de baixo desempenho
- [ ] Adicionar mais CTAs nas páginas de alta conversão
- [ ] Testar posições diferentes de CTAs
- [ ] A/B test de textos de botões

### Medir Impacto
- [ ] Aguardar 2 semanas após mudanças
- [ ] Comparar métricas antes/depois
- [ ] Documentar melhorias
- [ ] Repetir ciclo de otimização

## 📝 Notas e Observações

### Problemas Encontrados
```
Data: _____________________
Problema: __________________________________________________
Solução: ___________________________________________________
```

### Melhorias Sugeridas
```
Data: _____________________
Sugestão: __________________________________________________
Prioridade: [ ] Alta [ ] Média [ ] Baixa
```

### Resultados Alcançados
```
Data: _____________________
Métrica: ___________________________________________________
Antes: _____________ | Depois: _____________ | Variação: ____%
```

## ✅ Status Geral

**Progresso da Implementação:**
- [ ] 0-25% - Preparação e primeiras páginas
- [ ] 26-50% - Implementação em andamento
- [ ] 51-75% - Maioria das páginas implementadas
- [ ] 76-99% - Quase completo, faltam testes finais
- [ ] 100% - Implementação completa e validada

**Próxima Revisão:** _______________

**Responsável:** _______________

---

## 🆘 Suporte

Se tiver dúvidas durante a implementação:

1. **Problemas técnicos:** Consulte `TRACKING_GUIDE.md`
2. **Exemplos de código:** Consulte `IMPLEMENTATION_EXAMPLE.md`
3. **Configuração GA4:** Consulte `GA4_SETUP_GUIDE.md`
4. **Visão geral:** Consulte `TRACKING_README.md`
5. **Resumo executivo:** Consulte `RESUMO_EXECUTIVO.md`

---

**Última atualização:** Agosto 2026  
**Versão:** 1.0
