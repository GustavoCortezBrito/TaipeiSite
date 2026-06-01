"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Script from "next/script";

export default function InstagramFeed() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-taipei-cream">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-taipei-red" size={40} />
            <h2 className="text-4xl md:text-5xl font-serif text-taipei-red">
              Siga-nos no Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/taipeicoffeehouse/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-taipei-brown hover:text-taipei-red transition-colors inline-flex items-center gap-2"
          >
            @taipeicoffeehouse
          </a>
          <div className="w-24 h-1 bg-taipei-red mx-auto mt-6" />
        </motion.div>

        {/* Elfsight Instagram Feed Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-d36d09ec-c135-4d80-b27d-eaf114695b7a"
            data-elfsight-app-lazy
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-taipei-brown mb-6">
            Descubra nosso menu com brunch, almoço, cafés especiais e pratos autorais com influência asiática em Florianópolis
          </p>
          <motion.a
            href="https://www.instagram.com/taipeicoffeehouse/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            <Instagram size={24} />
            Seguir no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
