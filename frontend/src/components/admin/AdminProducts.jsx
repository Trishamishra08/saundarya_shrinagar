import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { initialProducts } from '../../data/products';
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiMoreVertical, FiX, FiImage, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const AdminProducts = () => {
  const [searchParams] = useSearchParams();
  const [isAdding, setIsAdding] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Filtering and Searching
  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDelete = (id) => {
    if (window.confirm('Remove this product from catalog?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    setIsAdding(false);
    alert('Product details saved to vault.');
  };

  useEffect(() => {
    if (searchParams.get('add') === 'true') {
      setIsAdding(true);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
            Store Catalog
          </h1>
          <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Inventory Vault</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex bg-white border border-brand-pink/10 p-1 rounded-none shadow-sm">
            {['All', 'Skincare', 'Soaps', 'Wellness'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-dark text-white' : 'text-gray-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-brand-gold text-white px-5 py-2.5 rounded-none text-[9px] font-black uppercase tracking-widest shadow-xl shadow-brand-gold/20 flex items-center gap-2 hover:bg-brand-dark transition-all"
          >
            <FiPlus /> New Entry
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-2 rounded-none border border-brand-pink/10 shadow-sm flex items-center gap-3">
        <FiSearch className="text-gray-300 ml-2" size={14} />
        <input 
          type="text" 
          placeholder="Search catalog... (e.g. Saffron)"
          className="bg-transparent border-none outline-none text-[10px] font-bold uppercase w-full placeholder:text-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product Grid - Compacted */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {filteredProducts.map(p => (
          <motion.div 
            key={p.id}
            whileHover={{ y: -3 }}
            className="bg-white rounded-none border border-brand-pink/10 shadow-sm group relative flex flex-col overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="aspect-square bg-brand-light/20 relative overflow-hidden p-2">
              <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-1 right-1 flex flex-col gap-1">
                 <button onClick={() => setIsAdding(true)} className="p-2 bg-brand-pink text-white rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100"><FiEdit2 size={10} /></button>
                 <button onClick={() => handleDelete(p.id)} className="p-2 bg-white text-red-500 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100"><FiTrash2 size={10} /></button>
              </div>
            </div>
            <div className="p-2 border-t border-brand-pink/10 flex-1 flex flex-col justify-between bg-white">
              <div className="mb-1">
                <h3 className="text-[9px] font-bold text-brand-dark uppercase tracking-wider leading-tight mb-1 truncate group-hover:text-brand-pink transition-colors">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-[6px] text-gray-400 font-medium uppercase tracking-[0.1em]">{p.category}</p>
                  <span className={`text-[6px] font-bold uppercase tracking-tight px-1 py-0.5 rounded-none ${p.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
                    {p.stock} QTY
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-brand-pink/5">
                <span className="text-[10px] font-serif font-black text-brand-pink truncate">₹{p.price}</span>
                <FiMoreVertical size={10} className="text-gray-300"/>
              </div>
            </div>
            {p.flashSale && <div className="absolute top-0 left-0 bg-brand-gold text-brand-dark text-[5px] font-black px-1.5 py-0.5 rounded-none uppercase tracking-widest">SALE</div>}
          </motion.div>
        ))}
        
        <button onClick={() => setIsAdding(true)} className="border border-dashed border-brand-pink/20 rounded-none aspect-square flex flex-col items-center justify-center gap-1 text-gray-300 hover:border-brand-gold hover:text-brand-gold transition-all group bg-white/40">
           <FiPlus size={16} className="group-hover:scale-110 transition-transform" />
           <span className="text-[6px] font-bold uppercase tracking-[0.1em]">New Entry</span>
        </button>
      </div>

      {/* Add Product Sidebar Panel */}
      <AnimatePresence>
        {isAdding && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl flex flex-col p-4 border-l border-brand-pink/10 rounded-none"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-sm font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">New Entry</h2>
                  <p className="text-[7px] text-gray-400 font-black uppercase tracking-[0.2em]">Add to inventory</p>
                </div>
                <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-brand-light rounded-none transition-all">
                  <FiX size={16} className="text-brand-dark" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-1 space-y-4 no-scrollbar">
                  <div className="aspect-video bg-brand-light/20 rounded-none border border-dashed border-brand-pink/15 flex flex-col items-center justify-center gap-2 text-gray-400 group hover:border-brand-gold hover:bg-brand-gold/[0.02] cursor-pointer transition-all">
                    <FiImage size={24} className="text-brand-pink/60 group-hover:scale-110 transition-transform" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Add Assets</span>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Name</label>
                      <input type="text" placeholder="Title..." className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all uppercase" required />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Category</label>
                        <div className="relative">
                          <select className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all uppercase appearance-none cursor-pointer pr-8">
                            {['Skincare', 'Soaps', 'Wellness'].map(c => <option key={c}>{c}</option>)}
                          </select>
                          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Price</label>
                        <input type="number" placeholder="₹" className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all" required />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Description</label>
                      <textarea rows="3" placeholder="..." className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all resize-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                       <div className="space-y-1">
                        <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Stock</label>
                        <input type="number" placeholder="Qty" className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">SKU</label>
                        <input type="text" placeholder="ID" className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all uppercase" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-pink/5 mt-auto">
                  <button 
                    type="submit"
                    className="w-full bg-brand-dark text-white py-3 rounded-none text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-dark/20 hover:bg-black transition-all"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminProducts;
