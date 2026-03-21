import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imgLakmePowder from '../../assets/products/lakme_face_powder.png';
import imgLipGloss from '../../assets/products/plumping_lip_gloss.png';
import imgMascara from '../../assets/products/volumizing_mascara.png';
import imgLipstick from '../../assets/products/lakme_2_in_1_lipstick.png';
import imgHighlighter from '../../assets/products/liquid_highlighter.png';

const bestSellers = [
  {
    id: 10,
    name: 'Face Scrub (Mini)',
    price: 149,
    rating: 5,
    reviews: 912,
    image: imgLakmePowder,
  },
  {
    id: 11,
    name: 'Lustrous Lip Gloss',
    price: 299,
    rating: 5,
    reviews: 610,
    image: imgLipGloss,
    hasTimer: true,
  },
  {
    id: 12,
    name: 'Volumizing Eye Mascara',
    price: 349,
    rating: 4,
    reviews: 489,
    image: imgMascara,
  },
  {
    id: 13,
    name: 'Herbal Lipstick Stick',
    price: 199,
    rating: 4,
    reviews: 745,
    image: imgLipstick,
    hasTimer: true,
  },
  {
    id: 14,
    name: 'Organic Kajal Pencil',
    price: 99,
    rating: 5,
    reviews: 520,
    image: imgHighlighter,
  },
];

const BestSellers = () => {
  return (
    <section className="py-8 md:py-10 bg-brand-pink/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-1 text-brand-dark uppercase tracking-wide">Our Best Sellers</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="pb-8"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <Link to="/shop?sort=Top Rated" className="inline-block border-2 border-brand-dark text-brand-dark px-10 py-3 rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-xl active:scale-95">
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
