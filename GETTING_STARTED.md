# Guia de Início - Taipei Coffee House

## 🚀 Instalação

### 1. Instalar Dependências

```bash
npm install
```

Isso instalará:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion (animações)
- Lucide React (ícones)
- TypeScript

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura de Arquivos

```
taipei-coffee-house/
├── src/
│   ├── app/                          # App Router do Next.js
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Layout principal
│   │   ├── globals.css               # Estilos globais
│   │   ├── brunch/
│   │   │   └── page.tsx
│   │   ├── menu/
│   │   │   └── page.tsx
│   │   ├── sobre-o-taipei/
│   │   │   └── page.tsx
│   │   ├── restaurante-em-cacupe/
│   │   │   └── page.tsx
│   │   ├── cafeteria-com-espaco-kids-florianopolis/
│   │   │   └── page.tsx
│   │   ├── espaco-eventos-florianopolis/
│   │   │   └── page.tsx
│   │   └── service-page/
│   │       ├── eventos-corporativos-em-florianopolis/
│   │       │   └── page.tsx
│   │       └── eventos-sociais/
│   │           └── page.tsx
│   └── components/
│       ├── Header.tsx                # Navegação
│       ├── Footer.tsx                # Rodapé
│       └── AnimatedSection.tsx       # Wrapper de animação
├── public/                           # Assets estáticos
├── tailwind.config.ts                # Configuração Tailwind
├── next.config.mjs                   # Configuração Next.js
└── package.json
```

## 🎨 Usando as Cores da Marca

### No Tailwind CSS

```jsx
// Vermelho principal
<div className="bg-taipei-red text-white">

// Fundo creme
<div className="bg-taipei-cream">

// Verde sálvia
<div className="text-taipei-sage">

// Marrom
<div className="bg-taipei-brown">

// Bege
<div className="border-taipei-beige">
```

### Cores Disponíveis

- `taipei-red` - #A84544 (Principal)
- `taipei-cream` - #F8F1EB (Fundo suave)
- `taipei-sage` - #9AAB9E (Verde sálvia)
- `taipei-brown` - #8F7368 (Marrom)
- `taipei-beige` - #CDB5A7 (Bege)

## ✨ Usando Animações

### AnimatedSection Component

```jsx
import AnimatedSection from "@/components/AnimatedSection";

<AnimatedSection delay={0.2}>
  <h2>Título Animado</h2>
  <p>Conteúdo que aparece ao scroll</p>
</AnimatedSection>
```

### Framer Motion Direto

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo animado
</motion.div>
```

### Hover Effects

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-taipei-red text-white px-8 py-3 rounded-full"
>
  Botão Animado
</motion.button>
```

## 🖼️ Adicionando Imagens

### 1. Adicionar imagens na pasta `public/`

```
public/
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── menu/
│       ├── cafe.jpg
│       └── brunch.jpg
```

### 2. Usar Next Image

```jsx
import Image from "next/image";

<Image
  src="/images/logo.png"
  alt="Taipei Coffee House"
  width={200}
  height={100}
  className="rounded-lg"
/>
```

## 📱 Responsividade

Todas as páginas são responsivas usando breakpoints do Tailwind:

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Exemplo:
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Título Responsivo
</div>
```

## 🔗 Navegação

### Links Internos

```jsx
import Link from "next/link";

<Link href="/menu" className="text-taipei-red hover:text-taipei-brown">
  Ver Menu
</Link>
```

### Links Externos

```jsx
<a 
  href="https://instagram.com/taipeicoffeehouse" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Instagram
</a>
```

## 🎯 Próximos Passos

1. **Adicionar Imagens Reais**
   - Baixar assets do site atual
   - Otimizar imagens (WebP, compressão)
   - Adicionar na pasta `public/images/`

2. **Implementar Formulários**
   - Formulário de contato
   - Sistema de reservas
   - Integração com WhatsApp/Email

3. **SEO Avançado**
   - Adicionar sitemap.xml
   - Configurar robots.txt
   - Structured data (JSON-LD)

4. **Performance**
   - Lazy loading de imagens
   - Code splitting
   - Otimização de fontes

5. **Deploy**
   - Vercel (recomendado)
   - Netlify
   - Ou servidor próprio

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🐛 Troubleshooting

### Erro: Module not found

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de Build

```bash
# Limpar build anterior
rm -rf .next
npm run build
```

### Problemas com Animações

Certifique-se de que o componente está marcado como `"use client"` no topo do arquivo.
