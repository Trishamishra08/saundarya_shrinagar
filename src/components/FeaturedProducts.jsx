import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Vitamin C Face Serum',
    price: 899,
    oldPrice: 1199,
    rating: 5,
    reviews: 124,
    discount: '25%',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Organic Aloe Vera Gel',
    price: 450,
    rating: 4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Hibiscus Herbal Shampoo',
    price: 650,
    oldPrice: 750,
    rating: 5,
    reviews: 56,
    discount: '15%',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Bulgarian Rose Water',
    price: 399,
    rating: 5,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1626015112520-7f283296067b?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Activated Charcoal Wash',
    price: 550,
    rating: 4,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1556228515-91953ed98365?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Kumkumadi Tailam oil',
    price: 1250,
    oldPrice: 1599,
    rating: 5,
    reviews: 340,
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-dark uppercase tracking-tight">Featured Products</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Discover our curated selection of premium organic beauty essentials, crafted with nature's finest ingredients.</p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-brand-dark text-brand-dark px-10 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
