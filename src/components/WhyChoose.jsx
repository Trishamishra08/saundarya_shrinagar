import React from 'react';
import { FiCheckCircle, FiShield, FiHeart, FiBox } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <RiLeafLine className="text-3xl text-brand-gold" />,
    title: '100% Natural Ingredients',
    description: 'Sourced from organic farms across India.'
  },
  {
    icon: <FiShield className="text-3xl text-brand-gold" />,
    title: 'Dermatologically Tested',
    description: 'Safe for all skin types, including sensitive skin.'
  },
  {
    icon: <FiHeart className="text-3xl text-brand-gold" />,
    title: 'Cruelty Free',
    description: 'We never test on animals, only on willing humans.'
  },
  {
    icon: <FiCheckCircle className="text-3xl text-brand-gold" />,
    title: 'Ayurvedic Formulations',
    description: 'Ancient wisdom meets modern science.'
  },
  {
    icon: <FiBox className="text-3xl text-brand-gold" />,
    title: 'Eco Friendly Packaging',
    description: '100% recyclable and biodegradable materials.'
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100 italic">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-dark">Why Choose Soundarya Shrinagar?</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-brand-pink/10 transition-colors duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-bold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
