import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594125355938-f99602568600?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337660859-02fbef9d502f?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=500&auto=format&fit=crop',
];

const InstagramGallery = () => {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 italic">
          <FiInstagram size={40} className="mx-auto mb-4 text-brand-gold" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-brand-dark uppercase tracking-tight">Follow Us on Instagram</h2>
          <p className="text-brand-gold font-bold tracking-widest uppercase text-xs">@soundaryashrinagar</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt="Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FiInstagram className="text-white text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
