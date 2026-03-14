import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Skincare Routine for Glowing Skin',
    excerpt: 'Discover the 5 essential steps to achieve a natural, healthy glow every morning.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop',
    date: 'March 10, 2024',
  },
  {
    id: 2,
    title: 'Natural Hair Care Tips',
    excerpt: 'Say goodbye to damage and split ends with these ancient Ayurvedic hair secrets.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbef9d502f?q=80&w=500&auto=format&fit=crop',
    date: 'March 05, 2024',
  },
  {
    id: 3,
    title: 'Benefits of Vitamin C Serum',
    excerpt: 'Why Vitamin C is the most important ingredient in your skincare arsenal.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 28, 2024',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-brand-light italic">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Beauty Blog</h2>
            <div className="w-20 h-1 bg-brand-gold"></div>
          </div>
          <button className="text-brand-dark font-bold hover:text-brand-gold transition-colors">
            Read All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{blog.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 hover:text-brand-gold cursor-pointer transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <button className="underline font-bold text-sm tracking-tighter">Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
