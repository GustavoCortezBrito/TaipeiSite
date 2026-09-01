import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

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
            <Link href="/" className="font-serif text-2xl mb-4 text-white font-bold hover:text-taipei-cream transition-colors block">
              Taipei Coffee House
            </Link>
            <p className="text-sm text-taipei-beige leading-relaxed mb-4">
              Café cosmopolita em Cacupé, Florianópolis, com vista para o mar.
            </p>
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <TrackingLink
                  href="https://www.instagram.com/taipeicoffeehouse/"
                  trackingType="instagram"
                  ctaName="instagram_footer"
                  clickLocation="Footer"
                  target="_blank"
                  aria-label="Siga o Taipei Coffee House no Instagram"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors block"
                >
                  <Instagram size={20} />
                </TrackingLink>
              </motion.div>
              <motion.a
                href="https://www.facebook.com/taipeicoffeehouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite a página do Taipei Coffee House no Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/taipei-coffee-house/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conecte-se com o Taipei Coffee House no LinkedIn"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
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
            <p className="font-serif text-lg mb-4 text-white font-bold">Links Rápidos</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/sobre-o-taipei", label: "Sobre Nós" },
                { href: "/menu", label: "Menu" },
                { href: "/brunch", label: "Brunch" },
                { href: "/restaurante-em-cacupe", label: "Restaurante em Cacupé" },
                { href: "/espaco-eventos-florianopolis", label: "Espaço de Eventos" },
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
            <p className="font-serif text-lg mb-4 text-white font-bold">Serviços</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/service-page/eventos-corporativos-em-florianopolis", label: "Eventos Corporativos" },
                { href: "/service-page/eventos-sociais", label: "Eventos Sociais" },
                { href: "/cafeteria-com-espaco-kids-florianopolis", label: "Espaço Kids & Pet Friendly" },
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
            <p className="font-serif text-lg mb-4 text-white font-bold">Contato</p>
            <ul className="space-y-3 text-sm text-taipei-beige">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-white" />
                <TrackingLink
                  href="https://maps.google.com/?q=Taipei+Coffee+House+Cacupe+Florianopolis"
                  trackingType="como_chegar"
                  ctaName="maps_footer"
                  clickLocation="Footer"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Estrada Haroldo Soares Glavan, 3010 - Cacupé, Florianópolis - SC, 88050-005
                </TrackingLink>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-white" />
                <TrackingLink
                  href="https://wa.me/5548985008964"
                  trackingType="whatsapp"
                  ctaName="whatsapp_footer"
                  clickLocation="Footer"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  (48) 98500-8964
                </TrackingLink>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-white" />
                <a
                  href="mailto:contato@taipeicoffeehouse.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@taipeicoffeehouse.com.br
                </a>
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
          <p>&copy; {currentYear} Taipei Coffee House. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
