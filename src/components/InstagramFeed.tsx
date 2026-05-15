"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: "/imagens site/IMG_20260318_143834388_HDR.jpeg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 2,
      image: "/imagens site/IMG_20260318_144718338_HDR.jpg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 3,
      image: "/imagens site/IMG_20260318_150258551_HDR.jpeg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 4,
      image: "/imagens site/IMG_20260318_163852739_HDR.jpeg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 5,
      image: "/imagens site/IMG_20260311_151702893_HDR.jpg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 6,
      image: "/imagens site/IMG_20260311_153245214_HDR.jpg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 7,
      image: "/imagens site/IMG_20260305_143229784_HDR.jpg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
    {
      id: 8,
      image: "/imagens site/IMG_20260305_144711834_HDR.jpg",
      alt: "Taipei Coffee House",
      link: "https://www.instagram.com/taipeicoffeehouse/"
    },
  ];

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
              Follow us on Instagram
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

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-taipei-red/0 group-hover:bg-taipei-red/30 transition-all duration-300 flex items-center justify-center">
                <Instagram 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  size={40} 
                />
              </div>
            </motion.a>
          ))}
        </div>

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
