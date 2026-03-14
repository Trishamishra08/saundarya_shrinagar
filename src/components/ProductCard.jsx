import React from 'react';
import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {product.discount && (
          <span className="absolute top-4 left-4 z-10 bg-brand-gold text-white text-[10px] font-bold px-2 py-1 rounded">
            {product.discount} OFF
          </span>
        )}
        <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-dark hover:bg-brand-pink transition-colors">
          <FiHeart size={18} />
        </button>
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-brand-dark text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-brand-gold transition-colors">
            <FiShoppingBag />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-medium text-brand-dark mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex justify-center items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              size={12} 
              className={i < product.rating ? "fill-brand-gold text-brand-gold" : "text-gray-300"} 
            />
          ))}
          <span className="text-[10px] text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-brand-gold font-bold">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">₹{product.oldPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
