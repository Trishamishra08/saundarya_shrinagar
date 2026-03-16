import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imgLakmePowder from '../assets/products/lakme_face_powder.png';
import imgLipGloss from '../assets/products/plumping_lip_gloss.png';
import imgMascara from '../assets/products/volumizing_mascara.png';
import imgLipstick from '../assets/products/lakme_2_in_1_lipstick.png';
import imgHighlighter from '../assets/products/liquid_highlighter.png';

const bestSellers = [
  {
    id: 10,
    name: 'Lakme UV-Protect Face Powder',
    price: 1899,
    rating: 5,
    reviews: 912,
    image: imgLakmePowder,
  },
  {
    id: 11,
    name: 'Plumping Lip Gloss',
    price: 850,
    rating: 5,
    reviews: 610,
    image: imgLipGloss,
  },
  {
    id: 12,
    name: 'Volumizing Mascara',
    price: 1150,
    rating: 4,
    reviews: 489,
    image: imgMascara,
  },
  {
    id: 13,
    name: 'Lakme 2-in-1 Lipstick + Liner',
    price: 999,
    rating: 4,
    reviews: 745,
    image: imgLipstick,
  },
  {
    id: 14,
    name: 'Dewy Liquid Highlighter',
    price: 1450,
    rating: 5,
    reviews: 520,
    image: imgHighlighter,
  },
];

const BestSellers = () => {
  return (
    <section className="py-10 md:py-12 bg-brand-pink/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-1 text-brand-dark uppercase tracking-wide">Our Best Sellers</h2>
            <p className="text-gray-500 font-medium text-xs md:text-sm">Most loved products by our community</p>
          </div>
          <div className="flex space-x-2">
            {/* Custom navigation buttons will be handled by Swiper default for now */}
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default BestSellers;
