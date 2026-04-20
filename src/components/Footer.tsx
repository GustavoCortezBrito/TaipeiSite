import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-taipei-brown via-taipei-brown to-taipei-sage text-taipei-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl mb-4 text-white">Taipei Coffee House</h3>
            <p className="text-sm text-taipei-beige leading-relaxed mb-4">
              Café cosmopolita em Cacupé, Florianópolis, com vista para o mar.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://instagram.com/taipeicoffeehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com/taipeicoffeehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/sobre-o-taipei", label: "Sobre Nós" },
                { href: "/menu", label: "Menu" },
                { href: "/brunch", label: "Brunch" },
                { href: "/espaco-eventos-florianopolis", label: "Eventos" },
              ].map((link, index) => (
                <motion.li key={link.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-taipei-beige hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/service-page/eventos-corporativos-em-florianopolis", label: "Eventos Corporativos" },
                { href: "/service-page/eventos-sociais", label: "Eventos Sociais" },
                { href: "/cafeteria-com-espaco-kids-florianopolis", label: "Espaço Kids" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-taipei-beige hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-sm text-taipei-beige">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-white" />
                <span>Estrada Haroldo Soares Glavan, 3010 - Cacupé, Florianópolis - SC, 88050-005</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-white" />
                <span>(48) 98879-8141</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-white" />
                <span>contato@taipeicoffeehouse.com.br</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-taipei-beige/30 mt-8 pt-8 text-center text-sm text-taipei-beige"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} Taipei Coffee House.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart size={14} className="text-taipei-red fill-taipei-red animate-pulse" /> em Florianópolis
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
