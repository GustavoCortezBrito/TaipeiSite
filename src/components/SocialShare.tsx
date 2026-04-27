"use client";

import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { motion } from "framer-motion";

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
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-taipei-brown font-medium">Compartilhar:</span>
      <div className="flex gap-2">
        <motion.a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook size={18} />
        </motion.a>
        
        <motion.a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
          aria-label="Compartilhar no Twitter"
        >
          <Twitter size={18} />
        </motion.a>
        
        <motion.a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin size={18} />
        </motion.a>

        {typeof navigator !== 'undefined' && navigator.share && (
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-taipei-red text-white p-2 rounded-full hover:opacity-90 transition-opacity"
            aria-label="Compartilhar"
          >
            <Share2 size={18} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
