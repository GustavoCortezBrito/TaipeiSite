"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Leaf, Sandwich, UtensilsCrossed, Coffee, Salad, ShoppingBag, Beer, Wine, Droplets, Cookie, Soup, Croissant } from "lucide-react";

interface MenuItem {
  name: string;
  description?: string;
  price?: string | { [key: string]: string };
}
interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}
interface MenuCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  sections: MenuSection[];
}
const menuData: MenuCategory[] = [
  {
    id: "curadoria", label: "Curadoria da Casa", icon: Leaf,
    sections: [{
      title: "Curadoria Especial da Casa",
      subtitle: "Sinta o equilibrio perfeito entre aroma, cor e sabor oriental no Taipei!",
      items: [
        { name: "Salada de Tofu", description: "Mix de folhas com tofu, tempero artesanal feito na casa e tostado na chapa", price: "R$ 38" },
        { name: "Jiaozi - Guiozas", description: "Cozido a vapor e grelhado", price: { "Suino (6 unidades)": "R$ 44", "Legumes": "R$ 44" } },
        { name: "Guabao - Bao Taipei", description: "Receita afetiva e autoral da proprietaria, nascida em Taipei. Panceta cozida por mais de 10 horas com especiarias eshaoxing wine, finalizado com amendoim, acelga e coentro.", price: "R$ 34" },
        { name: "Guabao - Bao de Carne", description: "Bao recheado com carne bovina desfiada, amendoim, coentro e acelga.", price: "R$ 34" },
        { name: "Guabao - Bao de Shitake", description: "Bao recheado com shitake marinado no tempero da casa, finalizado com azeite e coentro.", price: "R$ 36" },
        { name: "Guabao - Mini Baos (3 unidades)", description: "Selecao de 3 mini baos da casa: pancetta, carne desfiada e shitake.", price: "R$ 48" },
      ],
    }],
  },
  {
    id: "sanduiches", label: "Sanduiches", icon: Sandwich,
    sections: [{
      title: "Sanduiches",
      subtitle: "Todos os paes sao artesanais e com fermentacao natural",
      items: [
        { name: "Taipei", description: "Pao ciabatta, bife de file mignon suino empanado com panko, repolho finamente picado, maionese da casa.", price: "R$ 42" },
        { name: "Parma e Rucula", description: "Presunto parma, rucula, tomate italiano assado, mussarela de bufala, com pao ciabatta selado na manteiga.", price: "R$ 42" },
        { name: "Shitake com Berinjela Defumada", description: "Shitake salteado, pasta de berinjela (babaganoush), tomate, hortela e alface no pao baguette.", price: "R$ 42" },
        { name: "De Carne", description: "Pao baguette, carne ao vinho desfiada, vinagrete agridoce, mussarela gratinada e maionese da casa.", price: "R$ 45" },
        { name: "Peito de Peru", description: "Pao de forma sem bordas, peito de peru, ricota, alface e tomate. *acompanha mix de folhas.", price: "R$ 32" },
      ],
    }],
  },
  {
    id: "omeletes", label: "Omeletes", icon: UtensilsCrossed,
    sections: [{
      title: "Omeletes",
      subtitle: "Uma opcao leve, saborosa e versatil para qualquer momento do dia.",
      items: [
        { name: "Mediterraneo", description: "Bacon em cubos, mussarela, azeitonas e tomate cereja.", price: "R$ 30" },
        { name: "Mandarim Veggie", description: "Cenoura, abobrinha, shoyu e gergelim.", price: "R$ 28" },
        { name: "Shitake Imperial", description: "Shitake, parmesao, finalizado com cebolinha.", price: "R$ 38" },
        { name: "Cremoso com Bacon", description: "Parmesao, nata e cubos de bacon crocante.", price: "R$ 30" },
      ],
    }],
  },
  {
    id: "brunch", label: "Brunch", icon: Coffee,
    sections: [
      {
        title: "Brunch Especial Taipei",
        subtitle: "Sabado e Domingo - das 10h30 as 12h30",
        items: [
          { name: "Brunch Taipei", description: "Mini croissants puros, mini pao de queijo, fatia de bolo, fatia de pao de campanha, maca, fatias de mussarela, fatias de presunto, ramekin de manteiga, ramekin de geleia (do nosso emporio), suco de laranja, cafe com leite ou chocolate quente.", price: "R$ 79" },
        ],
      },
      {
        title: "Adicionais Brunch",
        items: [
          { name: "Porcao de Shitake na Manteiga", price: "R$ 12" },
          { name: "Iogurte Natural com Granola", price: "R$ 8" },
          { name: "Ovo Estalado", price: "R$ 7" },
          { name: "Ovo Poche ou Cremoso c/ Nata", price: "R$ 7" },
          { name: "Fatias de Bacon Crocante", price: "R$ 10" },
          { name: "Pao sem Gluten", price: "R$ 5" },
          { name: "Pesto de Beterraba", price: "R$ 5" },
        ],
      },
    ],
  },
  {
    id: "croissant", label: "Croissant", icon: Croissant,
    sections: [
      {
        title: "Croissant",
        items: [
          { name: "Mussarela", price: "R$ 24" },
          { name: "Presunto e Mussarela", price: "R$ 26" },
          { name: "Salame e Mussarela", price: "R$ 30" },
          { name: "Chocolate (Nutella)", price: "R$ 28" },
          { name: "Sem recheio", price: "R$ 15" },
        ],
      },
      {
        title: "Adicionais no Croissant",
        items: [
          { name: "Ovo Estalado", price: "R$ 7" },
          { name: "Ovo Poche ou Cremoso c/ Nata", price: "R$ 7" },
          { name: "Fatias de Bacon Crocante", price: "R$ 10" },
        ],
      },
    ],
  },
  {
    id: "bruschettas", label: "Bruschettas", icon: Soup,
    sections: [{
      title: "Bruschettas",
      subtitle: "Pao campanha selado na chapa com manteiga",
      items: [
        { name: "Caprese", description: "Mussarela de bufala, tomate confit, rucula e pesto de manjericao.", price: "R$ 39" },
        { name: "Ovo Mexido com Bacon", description: "Ovo cremoso com nata e queijo gouda, coberto com bacon crocante.", price: "R$ 36" },
        { name: "Shitake", description: "Shitake salteado com manteiga, tomate confit e lascas de queijo.", price: "R$ 39" },
        { name: "Parma e Figo", description: "Presunto parma, queijo gorgonzola, figos e mel, finalizado com brotos de beterraba.", price: "R$ 48" },
      ],
    }],
  },
  {
    id: "toastes", label: "Toastes", icon: Sandwich,
    sections: [{
      title: "Toastes",
      subtitle: "Finalizados no forno",
      items: [
        { name: "Presunto e Queijo", description: "Pao de forma, presunto, queijo mussarela e lascas de queijo gouda.", price: "R$ 28" },
        { name: "Toast de Ovo", description: "Presunto, mussarela e ovo sobre pao de forma.", price: "R$ 34" },
        { name: "Peito de Peru e Queijo", description: "Peito de peru e queijo gouda em pao de forma.", price: "R$ 30" },
        { name: "Croque Monsieur", description: "Presunto, mostarda Dijon, bechamel e queijo gratinado.", price: "R$ 38" },
        { name: "Trocas - Pao sem Gluten", price: "R$ 5" },
      ],
    }],
  },
  {
    id: "petiscos", label: "Petiscos", icon: UtensilsCrossed,
    sections: [{
      title: "Petiscos",
      subtitle: "Delicias para Beliscar",
      items: [
        { name: "Tabua de Frios", description: "Salame, gorgonzola, mussarela, ovo de codorna, azeitona e peito de peru.", price: "R$ 74" },
        { name: "Bolinho de Bacalhau", description: "Porcao com 4 unidades (200g), feito com bacalhau, batata e salsa.", price: "R$ 49" },
        { name: "Bolinho de Aipim com Carne Seca", description: "Porcao com 4 unidades (200g).", price: "R$ 42" },
        { name: "Pasteis - Carne na cerveja preta", price: "R$ 36" },
        { name: "Pasteis - Queijo (50% mussarela e 50% gruyere)", price: "R$ 39" },
        { name: "Cesta de Paes", description: "Cesta de paes servida com tomate confitados com pesto de manjericao e queijo mussarela de bufala (4 fatias de pao baguette).", price: "R$ 42" },
        { name: "Crocantes", description: "Batata frita ou polenta (250g), servidos com maionese da casa.", price: "R$ 26" },
        { name: "Opcao Kids - Mini Hamburguer com Fritas", description: "Maionese da casa, hamburguer, alface e tomate.", price: "R$ 39" },
      ],
    }],
  },
  {
    id: "salgados", label: "Salgados", icon: Cookie,
    sections: [{
      title: "Salgados",
      subtitle: "Massa artesanal, recheios unicos",
      items: [
        { name: "Quiche", description: "Opcoes: 4 queijos, alho-poro ou lorraine.", price: "R$ 19" },
        { name: "Pao de Queijo", description: "Cesta com 5 unidades de pao de queijo artesanal (20g cada).", price: "R$ 18" },
        { name: "Coxinha", description: "Coxinha de frango com massa leve e recheio cremoso.", price: "R$ 12" },
        { name: "Empanados - Saltena / Frango / Linguica Blumenau / Caprese", price: "R$ 14 cada" },
      ],
    }],
  },
  {
    id: "saladas", label: "Saladas", icon: Salad,
    sections: [
      {
        title: "Saladas",
        subtitle: "Ingredientes frescos, equilibrio ideal",
        items: [
          { name: "Salada de Frango", description: "Alface americana, frango grelhado, ovo e lascas de parmesao, servida com molho Caesar (sem anchova).", price: "R$ 38" },
          { name: "Salada Rucula & Parma", description: "Rucula fresca com presunto parma e tempero especial.", price: "R$ 42" },
          { name: "Salada Taipei", description: "Mix de folhas com file de mignon suino a moda Taipei.", price: "R$ 40" },
          { name: "Mix de Folhas Verdes", price: "R$ 25" },
        ],
      },
      {
        title: "Proteinas para acompanhar",
        subtitle: "Escolha a sua proteina para acompanhar a sua salada!",
        items: [
          { name: "Frango", price: "R$ 15" },
          { name: "File Mignon", price: "R$ 25" },
          { name: "Salmao", price: "R$ 30" },
        ],
      },
    ],
  },
  {
    id: "tortas", label: "Tortas & Doces", icon: Cookie,
    sections: [{
      title: "Tortas e Doces",
      subtitle: "Docura na medida certa",
      items: [
        { name: "Tortas Tradicionais", description: "Pave de Nozes | Limao c/ Merengue Assado | Trufada de Cacau 50% | Prestigio | Ninho c/ Doce de Leite | Mousse de Limao c/ Ganache de Chocolate | Cheesecake de Frutas Vermelhas", price: "R$ 26" },
        { name: "Snickers", description: "Chocolate 63%, castanha de caju, leite de coco, amendoim a base de farinha de arroz.", price: "R$ 28" },
        { name: "Avela", description: "Castanha de caju, girassol, cacau 100%, avela a base de aveia (sem acucar).", price: "R$ 28" },
        { name: "Bolo do Dia", price: "R$ 16" },
        { name: "Cookie de Chocolate", price: "R$ 14" },
        { name: "Brigadeiro Tradicional", price: "R$ 6" },
      ],
    }],
  },
  {
    id: "cafes", label: "Cafes", icon: Coffee,
    sections: [
      {
        title: "Cafes",
        subtitle: "Graos selecionados, aromas perfeitos",
        items: [
          { name: "Espresso", description: "Classico cafe puro", price: { "P": "R$ 10", "M": "R$ 14" } },
          { name: "Carioca", description: "Classico cafe puro", price: { "P": "R$ 10", "M": "R$ 14" } },
          { name: "Cafe Latte", description: "Cafe com leite", price: { "P": "R$ 12", "M": "R$ 18" } },
          { name: "Descafeinado", price: { "Pequeno": "R$ 14", "Grande": "R$ 17" } },
          { name: "Capuccino Brasileiro", description: "Cremoso e reconfortante, com leite vaporizado, chocolate e canela.", price: { "P": "R$ 14", "G": "R$ 20" } },
          { name: "Capuccino Italiano", description: "Cremoso e reconfortante, com leite vaporizado e espuma.", price: { "P": "R$ 12", "G": "R$ 19" } },
          { name: "Chocolate Quente", price: { "P": "R$ 14", "G": "R$ 20" } },
          { name: "Capuccino Avela", price: "R$ 24" },
          { name: "Cafe Mocha", price: "R$ 24" },
          { name: "Caramel Mocha", price: "R$ 24" },
          { name: "Nutella Coffee", price: "R$ 26" },
        ],
      },
      {
        title: "Trocas",
        items: [
          { name: "Descafeinado", price: "R$ 7" },
          { name: "Leite Vegetal", price: "R$ 5" },
        ],
      },
      {
        title: "Adicionais",
        items: [
          { name: "Leite Integral", price: "R$ 4" },
          { name: "Leite Vegetal", price: "R$ 4,50" },
          { name: "Chantilly", price: "R$ 6" },
        ],
      },
      {
        title: "Cafes Filtrados",
        items: [
          { name: "Taipei Especial - 82-83 pt (SCAA)", description: "Cafe suave e equilibrado, com notas de baunilha, chocolate ao leite e malte.", price: "R$ 15" },
          { name: "Microlotes - TAIPEI ESSENCE 85-86 pt", description: "Notas de caldo de cana e amendoado, com acidez leve e corpo suave.", price: "R$ 17" },
          { name: "Microlotes - TAIPEI AUDAZ 87+ pt", description: "Frutas amarelas e especiarias, com sabor marcante e corpo forte.", price: "R$ 17" },
        ],
      },
    ],
  },
  {
    id: "gelados", label: "Cafe Gelado & Matchas", icon: Droplets,
    sections: [{
      title: "Cafe Gelado, Frapes & Matchas",
      items: [
        { name: "Cafe Ice Chocolatto", description: "Cafe espresso batido com leite, gelo e calda de chocolate.", price: "R$ 22" },
        { name: "Cafe Ice Cappuccino", description: "Cafe espresso batido com leite, gelo, canela e calda de chocolate.", price: "R$ 22" },
        { name: "Cafe Ice Avela", description: "Cafe espresso com leite, xarope de avela e gelo.", price: "R$ 22" },
        { name: "Cafe Ice Latte", description: "Cafe gelado com gelo e leite.", price: "R$ 20" },
        { name: "Frape de Caramelo", description: "Cafe espresso batido com sorvete de creme, calda de caramelo e chantilly.", price: "R$ 28" },
        { name: "Matcha Latte", description: "Matcha e leite vaporizado.", price: "R$ 17" },
        { name: "Ice Matcha Latte", description: "Matcha, gelo e leite.", price: "R$ 18" },
        { name: "Expresso Tonica", description: "Cafe expresso, agua tonica, xarope de limao, cafe e gelo.", price: "R$ 24" },
        { name: "Chas Diversos", price: "R$ 12" },
      ],
    }],
  },
  {
    id: "alcoolicos", label: "Cafes Alcoolicos", icon: Wine,
    sections: [{
      title: "Cafes Alcoolicos",
      subtitle: "Classicos e autorais que unem cafe especial a destilados",
      items: [
        { name: "Espresso Martini", description: "Vodka, Licor de cafe, cafe espresso, xarope simples artesanal.", price: "R$ 38" },
        { name: "Coffee Sour", description: "Licor de cafe, suco de limao, xarope simples artesanal, albumina.", price: "R$ 32" },
        { name: "Taipei Capuccino", description: "Cappuccino cremoso com leite vaporizado, calda de caramelo e um toque marcante de rum ouro.", price: "R$ 36" },
        { name: "Carajillo", description: "Licor 43 e cafe espresso.", price: "R$ 36" },
      ],
    }],
  },
  {
    id: "bebidas", label: "Sucos & Bebidas", icon: Droplets,
    sections: [{
      title: "Sucos e Bebidas",
      items: [
        { name: "Sucos Naturais (polpa)", description: "Sabores: abacaxi, acerola, morango, maracuja.", price: "R$ 16" },
        { name: "Suco de Frutas Vermelhas", description: "Morango, framboesa e mirtilo juntos.", price: "R$ 20" },
        { name: "Sucos Detox (Natural)", description: "100% natural feita de abacaxi, maca, couve, limao, hortela, gengibre, linhaca dourada e sem acucar.", price: "R$ 20" },
        { name: "Soda Italiana", description: "Amora | Cranberry | Limao Siciliano | Maca Verde | Tangerina", price: "R$ 28" },
        { name: "Suco de Laranja (Macrovita)", price: "R$ 10" },
        { name: "Agua com ou sem gas", price: "R$ 9" },
        { name: "Coca-Cola lata / Coca Zero lata", price: "R$ 9 cada" },
        { name: "Guarana / Fanta Laranja / Fanta Uva", price: "R$ 9 cada" },
        { name: "Agua Tonica Schweppes", price: "R$ 12" },
        { name: "Citrus Schweppes", price: "R$ 12" },
        { name: "Itubaina Long Neck", price: "R$ 12" },
        { name: "Kombucha", description: "Diversos sabores.", price: "R$ 12" },
      ],
    }],
  },
  {
    id: "cervejas", label: "Chopp & Cervejas", icon: Beer,
    sections: [{
      title: "Chopp e Cervejas",
      items: [
        { name: "Chopp Heineken 300ml", price: "R$ 18" },
        { name: "Cerveja Heineken Long Neck", price: "R$ 20" },
        { name: "Cerveja Heineken Long Neck Zero", price: "R$ 20" },
        { name: "Cerveja Amstel Ultra Long Neck Zero Gluten", price: "R$ 18" },
        { name: "Cerveja Praya Lager Long Neck", price: "R$ 20" },
        { name: "Classica Long Neck", price: "R$ 20" },
        { name: "Cerveja Blue Moon Long Neck", price: "R$ 22" },
        { name: "Cerveja Lagunitas IPA Long Neck", price: "R$ 22" },
      ],
    }],
  },
  {
    id: "emporio", label: "Emporio Taipei", icon: ShoppingBag,
    sections: [{
      title: "Emporio Taipei",
      subtitle: "Transforme sua casa em um espaco de sabores unicos com as delicias do nosso Emporio.",
      items: [
        { name: "Doces e compotas", description: "Geleias caseiras, mel puro, mel de bracatinga, goiabada cascao, compotas irresistiveis e doces de Minas." },
        { name: "Queijos e Frios", description: "Queijos artesanais e uma selecao especial de frios e embutidos, como jamon, salame, copa e lombo." },
        { name: "Paes e Gourmet", description: "Paes de fermentacao natural, molhos exclusivos, chocolates de Gramado, waffles, azeites aromaticos e leites premium." },
        { name: "Saude e Bem-Estar", description: "Produtos artesanais para dietas restritas, como opcoes sem gluten, lactose e diet." },
        { name: "Cafes e Vinhos", description: "Nossos cafes especiais e os vinhos do cardapio, prontos para enriquecer seus momentos em casa." },
      ],
    }],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  const hasMultiPrice = item.price && typeof item.price === "object";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 py-4 border-b border-taipei-beige/40 last:border-0"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-taipei-brown leading-snug">{item.name}</h4>
          {!hasMultiPrice && item.price && (
            <span className="text-taipei-red font-semibold text-sm whitespace-nowrap flex-shrink-0">{item.price as string}</span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-taipei-brown/70 mt-1 leading-relaxed">{item.description}</p>
        )}
        {hasMultiPrice && (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {Object.entries(item.price as { [key: string]: string }).map(([k, v]) => (
              <span key={k} className="text-sm text-taipei-brown/80">
                <span className="font-medium">{k}</span>{" "}
                <span className="text-taipei-red font-semibold">{v}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const active = menuData.find((c) => c.id === activeTab)!;

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/menu/cafe-especial.jpg" alt="Menu Taipei Coffee House" fill className="object-cover" priority quality={90} />
            <div className="absolute inset-0 bg-gradient-to-br from-taipei-cream/85 via-secondary/75 to-taipei-beige/85" />
          </div>
          <div className="relative text-center px-4 z-10">
            <motion.h1 className="text-5xl md:text-7xl font-serif text-taipei-red mb-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Menu
            </motion.h1>
            <motion.p className="text-lg text-taipei-brown" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              Servido das tercas aos domingos.
            </motion.p>
          </div>
        </section>

        <section className="py-12 px-4 bg-taipei-cream min-h-screen">
          <div className="container mx-auto max-w-5xl">

            {/* Grid de categorias */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-12">
              {menuData.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-center transition-all ${
                      isActive
                        ? "bg-taipei-red text-white shadow-lg"
                        : "bg-white text-taipei-brown hover:bg-taipei-beige/40 border border-taipei-beige/50 shadow-sm"
                    }`}
                  >
                    <Icon size={22} className={isActive ? "text-white" : "text-taipei-red"} />
                    <span className="text-xs font-medium leading-tight">{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Conteudo da categoria ativa */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {active.sections.map((section, si) => (
                  <div key={si} className="bg-white rounded-2xl shadow-sm border border-taipei-beige/30 overflow-hidden">
                    <div className="px-6 pt-6 pb-4 border-b border-taipei-beige/30">
                      <h2 className="text-2xl font-serif text-taipei-red">{section.title}</h2>
                      {section.subtitle && <p className="text-sm text-taipei-brown/70 mt-1">{section.subtitle}</p>}
                    </div>
                    <div className="px-6 pb-2">
                      {section.items.map((item, ii) => <MenuItemRow key={ii} item={item} />)}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
