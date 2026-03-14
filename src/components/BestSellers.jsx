import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bestSellers = [
  {
    id: 10,
    name: 'Anti-Aging Night Cream',
    price: 1499,
    rating: 5,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1594125355938-f99602568600?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'Glow Face Mask',
    price: 850,
    rating: 5,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Lip Nourishing Balm',
    price: 350,
    rating: 4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 13,
    name: 'Sun Defense SPF 50',
    price: 999,
    rating: 4,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4ffb?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 14,
    name: 'Natural Hair Serum',
    price: 750,
    rating: 5,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=500&auto=format&fit=crop',
  },
];

const BestSellers = () => {
  return (
    <section className="py-20 bg-brand-pink/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-brand-dark uppercase tracking-tight">Our Best Sellers</h2>
            <p className="text-gray-500 font-medium">Most loved products by our community</p>
          </div>
          <div className="flex space-x-2">
            {/* Custom navigation buttons will be handled by Swiper default for now */}
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
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
