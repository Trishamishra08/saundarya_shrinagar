import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/insta_1.png';
import img2 from '../../assets/images/insta_2.png';
import img3 from '../../assets/images/insta_3.png';
import img4 from '../../assets/images/insta_4.png';
import img5 from '../../assets/images/insta_5.png';
import fbLogo from '../../assets/images/facebook_logo.jpg';

const instagramUrl = "https://www.instagram.com/saundaryashringarpvtltd/";

const images = [
  '/insta_1.png',
  '/facebook_logo.jpg',
  '/insta_2.png',
  '/insta_3.png',
  '/insta_4.png',
  '/insta_5.png',
];

const InstagramGallery = () => {
  return (
    <section className="py-6 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 group"
        >
          <FiInstagram size={24} className="mx-auto mb-1 text-brand-gold transition-transform group-hover:scale-110" />
          <h2 className="text-sm md:text-base font-serif font-black text-brand-dark uppercase tracking-widest group-hover:text-brand-gold transition-colors">Follow Our Journey</h2>
          <div className="w-10 h-0.5 bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((img, index) => (
            <motion.a 
              key={index}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 0.98 }}
              className="relative aspect-square overflow-hidden group cursor-pointer block border border-gray-50"
            >
              <img 
                src={img} 
                alt="Instagram Post"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FiInstagram className="text-white text-3xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
