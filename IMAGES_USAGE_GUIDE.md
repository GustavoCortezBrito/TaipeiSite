# Guia de Uso de Imagens no Next.js

## Como usar o componente Image do Next.js

O Next.js tem um componente `Image` otimizado que:
- Carrega imagens sob demanda (lazy loading)
- Otimiza automaticamente o tamanho
- Converte para formatos modernos (WebP)
- Melhora a performance

## Exemplos de Uso

### 1. Imagem Simples
```tsx
import Image from "next/image";

<Image
  src="/images/hero/hero-main.jpg"
  alt="Taipei Coffee House - Vista para o mar"
  width={1920}
  height={1080}
  priority // Use apenas para imagens acima da dobra
/>
```

### 2. Imagem Responsiva (preenche o container)
```tsx
<div className="relative w-full h-96">
  <Image
    src="/images/ambiente/interior.jpg"
    alt="Interior do Taipei Coffee House"
    fill
    className="object-cover rounded-lg"
  />
</div>
```

### 3. Grid de Imagens
```tsx
<div className="grid grid-cols-3 gap-4">
  {[
    { src: "/images/menu/cafe-especial.jpg", alt: "Café Especial" },
    { src: "/images/menu/bruschetta.jpg", alt: "Bruschetta" },
    { src: "/images/menu/torta.jpg", alt: "Torta Artesanal" },
  ].map((img, index) => (
    <div key={index} className="relative h-64">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  ))}
</div>
```

## Onde Adicionar as Imagens

### Home Page (`src/app/page.tsx`)
- **Hero**: Imagem principal do banner
- **Sobre**: Fotos do ambiente
- **Destaques**: Ícones ou fotos dos serviços

### Menu Page (`src/app/menu/page.tsx`)
- Fotos de cada categoria de comida/bebida
- Grid de pratos

### Brunch Page (`src/app/brunch/page.tsx`)
- Hero com foto do brunch
- Fotos dos pratos do brunch

### Sobre Page (`src/app/sobre-o-taipei/page.tsx`)
- Fotos da história
- Fotos da equipe
- Fotos do ambiente

### Eventos Pages
- Fotos do espaço de eventos
- Fotos de eventos realizados
- Fotos do espaço kids

## Configuração do Next.js

O arquivo `next.config.mjs` já está configurado para otimizar imagens.
Se precisar adicionar domínios externos (CDN), edite:

```js
const nextConfig = {
  images: {
    domains: ['exemplo.com'], // Adicione domínios externos aqui
  },
};
```

## Dicas de Performance

1. **Use `priority`** apenas para imagens acima da dobra (hero)
2. **Use `loading="lazy"`** para imagens abaixo da dobra (padrão)
3. **Defina width e height** sempre que possível
4. **Use `fill`** para imagens responsivas
5. **Adicione `alt` descritivo** para SEO e acessibilidade

## Próximos Passos

Quando você terminar de organizar as imagens:
1. Me avise quais imagens você colocou em cada pasta
2. Vou atualizar o código para usar as imagens reais
3. Vou adicionar efeitos de hover e animações
4. Vou otimizar o carregamento
