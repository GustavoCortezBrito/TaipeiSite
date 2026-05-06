"use client";

import { Facebook, Instagram, Linkedin, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function SocialShare({ 
  url = "https://www.taipeicoffeehouse.com.br",
  title = "Taipei Coffee House - Café e Brunch em Florianópolis",
  description = "Descubra o melhor café e brunch de Florianópolis com vista para o mar"
}: SocialShareProps) {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(!!navigator.share);
  }, []);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/taipeicoffeehouse`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-base text-taipei-brown font-semibold">Compartilhar:</span>
      <div className="flex gap-2">
        <motion.a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook size={20} />
        </motion.a>
        
        <motion.a
          href={shareLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white p-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
          aria-label="Seguir no Instagram"
        >
          <Instagram size={20} />
        </motion.a>
        
        <motion.a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#0A66C2] text-white p-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin size={20} />
        </motion.a>

        {canShare && (
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-taipei-red text-white p-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
            aria-label="Compartilhar"
          >
            <Share2 size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
