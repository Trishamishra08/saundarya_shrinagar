import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../../assets/images/banner_1.png';
import banner2 from '../../assets/images/banner_2.png';
import banner3 from '../../assets/images/banner_3.png';
import banner4 from '../../assets/images/trending_banner.png';

const banners = [
  {
    image: '/banner_1.png',
    subtitle: 'Seasonal Sale | Up to 50% Off',
    title: 'Fashion & Beauty',
    description: 'Grab the best deals on Skincare, Soaps and the new Innerwear collection.',
    btnText: 'SHOP SALE',
    price: '₹299',
    link: '/shop'
  },
  {
    image: '/banner_2.png',
    subtitle: 'Trending Now | Most Loved',
    title: 'Jewellery & Makeup',
    description: 'Discover the heritage jhumka collection and trending foundations.',
    btnText: 'VIEW TRENDING',
    price: '₹599',
    link: '/shop?category=Beauty & Jewellery'
  },
  {
    image: '/banner_3.png',
    subtitle: 'Exclusive Combos | Extra Savings',
    title: 'Gift Rituals',
    description: 'Perfectly curated beauty sets for every occasion. Limited stock.',
    btnText: 'EXPLORE COMBOS',
    price: '₹899',
    link: '/shop?category=Exclusive Combos'
  },
  {
    image: '/trending_banner.png',
    subtitle: 'Bestseller Offers | Big Savings',
    title: 'Daily Essentials',
    description: 'The organic care you deserve at prices you will love. Start your journey today.',
    btnText: 'GRAB DEALS',
    price: '₹50',
    link: '/shop'
  }
];

const TrendingBanner = () => {
  return (
    <section className="py-8 md:py-12 overflow-hidden bg-[#FEF4F4]">
      <div className="w-full">
        {/* Animated Heading */}
        <div className="container mx-auto px-4 md:px-8 mb-4 md:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-dark tracking-tight">
              TRENDING <span className="text-brand-gold italic">ESSENTIALS</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-2 mx-auto"></div>
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
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8 md:px-20 text-white">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xl text-center md:text-left mx-auto md:mx-0"
                      >
                        <div className="flex flex-col gap-2 mb-6">
                           <div className="flex items-center justify-center md:justify-start gap-3">
                              <span className="bg-brand-gold text-brand-dark text-[8px] md:text-[10px] font-black px-2 py-0.5 tracking-tighter uppercase">Limited Time Deal</span>
                              <div className="h-[1px] w-12 bg-white/30" />
                           </div>
                           <h4 className="text-white text-3xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter leading-tight drop-shadow-2xl">
                             Starting <span className="text-brand-gold underline decoration-white/20 underline-offset-8 decoration-4">{item.price || "₹199"}</span>
                           </h4>
                        </div>
                        
                        <h3 className="text-lg md:text-2xl lg:text-3xl font-sans font-bold text-white/90 mb-4 tracking-tight drop-shadow-lg">
                          {item.subtitle} | <span className="text-brand-gold">Best Selection</span>
                        </h3>
                        
                        <p className="text-xs md:text-sm mb-8 opacity-80 font-medium max-w-sm mx-auto md:mx-0 text-white/70 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                           <Link to={item.link} className="bg-[#FF9900] hover:bg-[#FF8800] text-brand-dark px-10 py-3 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_5px_20px_rgba(255,153,0,0.3)] active:scale-95">
                             {item.btnText}
                           </Link>
                           <div className="text-[10px] text-white/60 font-medium tracking-tight border-l border-white/20 pl-4 py-1">
                              Top Brands <br/> Fast Delivery
                           </div>
                        </div>
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
