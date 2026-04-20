"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/sobre-o-taipei", label: "Sobre" },
    { href: "/menu", label: "Menu" },
    { href: "/brunch", label: "Brunch" },
    { href: "/espaco-eventos-florianopolis", label: "Eventos" },
  ];

  return (
    <header className={`${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-secondary/95 backdrop-blur-sm'} border-b border-taipei-beige sticky top-0 z-50 transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <motion.h1 
              className="text-2xl font-serif text-taipei-red font-bold hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Taipei Coffee House
              <motion.div 
                className="h-0.5 bg-taipei-red mt-1"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.h1>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.li key={item.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link 
                  href={item.href} 
                  className="text-taipei-brown hover:text-taipei-red transition-colors relative group font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-taipei-red to-taipei-brown transition-all group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#contato" 
                className="group bg-gradient-to-r from-taipei-red to-taipei-brown text-white px-6 py-2 rounded-full hover:shadow-lg transition-all relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-taipei-brown to-taipei-red opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Reservar</span>
              </Link>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-taipei-red p-2 hover:bg-taipei-cream rounded-lg transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-2 space-y-3">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-taipei-brown hover:text-taipei-red transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <Link 
                    href="#contato"
                    onClick={() => setIsOpen(false)}
                    className="block bg-taipei-red text-white px-6 py-2 rounded-full text-center hover:bg-taipei-brown transition-colors"
                  >
                    Reservar
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
