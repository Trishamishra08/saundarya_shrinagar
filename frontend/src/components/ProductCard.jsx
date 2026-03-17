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
          <span className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-brand-gold text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded">
            {product.discount} OFF
          </span>
        )}
        <button className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-1.5 md:p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-dark hover:bg-brand-pink transition-colors">
          <FiHeart className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
        </button>
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-brand-dark text-white py-1.5 md:py-2 rounded-lg flex items-center justify-center space-x-1 md:space-x-2 hover:bg-brand-gold transition-colors text-[10px] md:text-sm">
            <FiShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="p-2 md:p-4 text-center">
        <h3 className="font-medium text-xs md:text-sm text-brand-dark mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex justify-center items-center space-x-0.5 md:space-x-1 mb-1 md:mb-2">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`w-2.5 h-2.5 md:w-3 md:h-3 ${i < product.rating ? "fill-brand-gold text-brand-gold" : "text-gray-300"}`} 
            />
          ))}
          <span className="text-[8px] md:text-[10px] text-gray-400 pl-0.5">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-center space-x-1.5 md:space-x-2">
          <span className="text-brand-gold font-bold text-xs md:text-base">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 text-[10px] md:text-sm line-through">₹{product.oldPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
