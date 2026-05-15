"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Calendar, Users, Heart } from "lucide-react";

const eventosDropdown = [
  {
    href: "/espaco-eventos-florianopolis",
    label: "Espaco de Eventos",
    icon: Calendar,
    desc: "Conheca nosso espaco",
  },
  {
    href: "/service-page/eventos-corporativos-em-florianopolis",
    label: "Eventos Corporativos",
    icon: Users,
    desc: "Reunioes e confraternizacoes",
  },
  {
    href: "/service-page/eventos-sociais",
    label: "Eventos Sociais",
    icon: Heart,
    desc: "Aniversarios e celebracoes",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eventosOpen, setEventosOpen] = useState(false);
  const [mobileEventosOpen, setMobileEventosOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setEventosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/sobre-o-taipei", label: "Sobre" },
    { href: "/menu", label: "Menu" },
    { href: "/brunch", label: "Brunch" },
  ];

  return (
    <header className={`${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-secondary/95 backdrop-blur-sm"} border-b border-taipei-beige sticky top-0 z-50 transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <motion.div
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
            </motion.div>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-taipei-red transition-all group-hover:w-full" />
                </Link>
              </motion.li>
            ))}

            {/* Eventos Dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setEventosOpen(!eventosOpen)}
                className="flex items-center gap-1 text-taipei-brown hover:text-taipei-red transition-colors font-medium relative group"
              >
                Eventos
                <motion.span animate={{ rotate: eventosOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-taipei-red transition-all group-hover:w-full" />
              </button>

              <AnimatePresence>
                {eventosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-taipei-beige/40 overflow-hidden z-50"
                  >
                    {eventosDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setEventosOpen(false)}
                        className="flex items-center gap-3 px-5 py-4 hover:bg-taipei-cream transition-colors group"
                      >
                        <div className="bg-taipei-red/10 p-2 rounded-lg group-hover:bg-taipei-red/20 transition-colors">
                          <item.icon size={18} className="text-taipei-red" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-taipei-brown group-hover:text-taipei-red transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-taipei-brown/60">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Botao Reservar */}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contato-form"
                className="bg-taipei-red text-white px-6 py-2 rounded-full transition-shadow hover:shadow-lg font-medium"
              >
                Reservar
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
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
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
                  <motion.li key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-taipei-brown hover:text-taipei-red transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Eventos mobile accordion */}
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: menuItems.length * 0.1 }}>
                  <button
                    onClick={() => setMobileEventosOpen(!mobileEventosOpen)}
                    className="flex items-center justify-between w-full text-taipei-brown hover:text-taipei-red transition-colors py-2"
                  >
                    Eventos
                    <motion.span animate={{ rotate: mobileEventosOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileEventosOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 space-y-2 mt-1"
                      >
                        {eventosDropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => { setIsOpen(false); setMobileEventosOpen(false); }}
                              className="block text-taipei-brown/80 hover:text-taipei-red transition-colors py-1.5 text-sm"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (menuItems.length + 1) * 0.1 }}>
                  <Link
                    href="/#contato-form"
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