import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Makeup Artist',
    text: "Soundarya Shrinagar's Vitamin C serum is a game changer. My skin has never felt so hydrated and glowing. I highly recommend it to all my clients!",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Anjali Gupta',
    role: 'Beauty Blogger',
    text: "I love the fact that all their products are organic and natural. The Aloe Vera gel is so pure and refreshing. Definitely my new favorite brand!",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 3,
    name: 'Meera Reddy',
    role: 'Loyal Customer',
    text: "The Kumkumadi oil is magic in a bottle. It helped reduce my pigmentation in just 2 weeks. Thank you Soundarya Shrinagar!",
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-pink/20 italic">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-dark uppercase tracking-tight">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="pb-12 max-w-4xl mx-auto"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={i < item.rating ? "fill-brand-gold text-brand-gold" : "text-gray-300"} 
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-brand-gold p-1"
                  />
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
