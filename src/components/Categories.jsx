import React from 'react';
import { motion } from 'framer-motion';

import catSkincare from '../assets/images/cat_skincare.png';
import catHaircare from '../assets/images/cat_haircare.png';
import catWellness from '../assets/images/cat_wellness.png';

const categories = [
  { name: 'Skincare', image: catSkincare },
  { name: 'Haircare', image: catHaircare },
  { name: 'Makeup', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop' },
  { name: 'Bath & Body', image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=500&auto=format&fit=crop' },
  { name: 'Organic Wellness', image: catWellness },
  { name: 'Beauty Kits', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop' },
  { name: 'Fragrances', image: 'https://images.unsplash.com/photo-1541604193435-22287d32c2c2?q=80&w=500&auto=format&fit=crop' },
];

const Categories = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-dark">Shop by Category</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand-gold transition-all duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-brand-dark group-hover:text-brand-gold transition-colors text-center">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
