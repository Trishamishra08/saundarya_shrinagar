import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../assets/images/banner_1.png';
import banner2 from '../assets/images/banner_2.png';
import banner3 from '../assets/images/banner_3.png';
import banner4 from '../assets/images/trending_banner.png';

const banners = [
  {
    image: banner1,
    subtitle: 'Find Your Perfect Shade',
    title: 'Match Me',
    description: 'Find your best shade, along with complexion must-haves perfect for your skin tone.',
    btnText: 'MATCH ME'
  },
  {
    image: banner2,
    subtitle: 'Exclusive Range',
    title: 'Organic Care',
    description: 'Nourish your skin with our premium organic collection.',
    btnText: 'SHOP NOW'
  },
  {
    image: banner3,
    subtitle: 'Luxe Essentials',
    title: 'Makeup Artistry',
    description: 'Master your look with our professional-grade makeup brushes and kits.',
    btnText: 'VIEW PRODUCTS'
  },
  {
    image: banner4,
    subtitle: 'New Arrival',
    title: 'Seasonal Glow',
    description: 'Radiate beauty with our latest seasonal makeup essentials.',
    btnText: 'SEE MORE'
  }
];

const TrendingBanner = () => {
  return (
    <section className="py-10 md:py-16 overflow-hidden bg-[#FEF4F4]">
      <div className="w-full">
        {/* Animated Heading */}
        <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
           <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight">
              TRENDING <span className="text-brand-gold italic">ESSENTIALS</span>
            </h2>
            <div className="w-20 h-1 bg-brand-gold mt-3 mx-auto md:mx-0"></div>
          </motion.div>
        </div>

        {/* Sharp Cornered Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-[350px] md:h-[450px] w-full"
          >
            {banners.map((item, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative w-full h-full"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8 md:px-20 text-white">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xl text-center md:text-left mx-auto md:mx-0"
                      >
                        <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4 block text-brand-gold">
                          {item.subtitle}
                        </span>
                        <h3 className="text-4xl md:text-7xl font-serif font-bold mb-4 italic leading-none">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-lg mb-8 opacity-90 font-medium max-w-sm mx-auto md:mx-0">
                          {item.description}
                        </p>
                        <button className="bg-brand-dark hover:bg-brand-gold text-white border border-white/30 px-8 py-3 rounded-none text-xs md:text-sm font-bold tracking-widest transition-all duration-300">
                          {item.btnText}
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingBanner;
