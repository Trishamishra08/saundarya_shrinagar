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

  useEffect(() => {
    if (searchParams.get('add') === 'true') {
      setIsAdding(true);
    }
  }, [searchParams]);

  // Filter products based on selected category
  useEffect(() => {
    if (filter === 'All') {
      setProducts(initialProducts);
    } else {
      setProducts(initialProducts.filter(p => p.category === filter));
    }
  }, [filter]);

  const categories = ['Skincare', 'Soaps', 'Makeup', 'Jewellery', 'Innerwear', 'Haircare', 'Wellness', 'Combos'];

  return (
    <AdminLayout>
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
          />
        </div>

        {/* Product Grid - Compact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map(p => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-none border border-brand-pink/5 shadow-md group relative flex flex-col overflow-hidden"
            >
              <div className="aspect-square bg-brand-light/20 relative overflow-hidden p-2">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                <div className="absolute top-1 right-1 flex flex-col gap-1">
                   <button className="p-1.5 bg-white/80 backdrop-blur-sm text-brand-dark rounded-none opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-gold hover:text-white"><FiEdit2 size={10} /></button>
                   <button className="p-1.5 bg-white/80 backdrop-blur-sm text-red-500 rounded-none opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"><FiTrash2 size={10} /></button>
                </div>
              </div>
              <div className="p-2 border-t border-brand-pink/5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[8px] font-black text-brand-dark uppercase tracking-widest leading-none mb-1 truncate">{p.name}</h3>
                  <p className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter mb-1.5">{p.category}</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black text-brand-pink">₹{p.price}</span>
                  <span className={`text-[6px] font-black uppercase px-1 py-0.5 rounded-none ${p.stock > 10 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {p.stock}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          
          <button className="border-2 border-dashed border-brand-pink/10 rounded-none aspect-square flex flex-col items-center justify-center gap-1 text-gray-300 hover:border-brand-gold hover:text-brand-gold transition-all group">
             <FiPlus size={20} className="group-hover:scale-110 transition-transform" />
             <span className="text-[7px] font-black uppercase tracking-[0.2em]">Add Entry</span>
          </button>
        </div>
        {/* Add Product Sidebar Panel */}
        <AnimatePresence>
          {isAdding && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAdding(false)}
                className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
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

                <div className="flex-1 overflow-y-auto pr-1 space-y-4 no-scrollbar">
                  <div className="aspect-video bg-brand-light/20 rounded-none border border-dashed border-brand-pink/15 flex flex-col items-center justify-center gap-2 text-gray-400 group hover:border-brand-gold hover:bg-brand-gold/[0.02] cursor-pointer transition-all">
                    <FiImage size={24} className="text-brand-pink/60 group-hover:scale-110 transition-transform" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Add Assets</span>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">Name</label>
                      <input type="text" placeholder="Title..." className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all uppercase" />
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
                        <input type="number" placeholder="₹" className="w-full bg-brand-light/10 border border-brand-pink/5 rounded-none px-3 py-2 text-[10px] font-bold outline-none focus:border-brand-pink/20 transition-all" />
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
                    onClick={() => setIsAdding(false)}
                    className="w-full bg-brand-dark text-white py-3 rounded-none text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-dark/20 hover:bg-black transition-all"
                  >
                    Save Product
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
