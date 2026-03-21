import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FiPlus, FiEdit2, FiTrash2, FiMoreVertical, FiX, FiImage, FiArrowLeft, FiGrid, FiSmile } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import catSkincare from '../../assets/images/cat_skincare_new.png';
import catHaircare from '../../assets/images/cat_haircare_new.png';
import catMakeup from '../../assets/images/cat_makeup_new.png';
import catSoaps from '../../assets/images/cat_soaps.png';
import catJewellery from '../../assets/images/cat_jewellery.png';
import catInnerwear from '../../assets/images/cat_innerwear.png';
import catWellness from '../../assets/images/cat_wellness_new.png';
import catBeautyKits from '../../assets/images/cat_beautykits_new.png';

const AdminCategories = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [categories, setCategories] = useState([
    { id: 'Skincare', name: 'Skincare', image: catSkincare, count: 12 },
    { id: 'Soaps', name: 'Soaps', image: catSoaps, count: 8 },
    { id: 'Makeup', name: 'Makeup', image: catMakeup, count: 15 },
    { id: 'Jewellery', name: 'Jewellery', image: catJewellery, count: 5 },
    { id: 'Innerwear', name: 'Innerwear', image: catInnerwear, count: 10 },
    { id: 'Haircare', name: 'Haircare', image: catHaircare, count: 6 },
    { id: 'Wellness', name: 'Wellness', image: catWellness, count: 4 },
    { id: 'Combos', name: 'Combos', image: catBeautyKits, count: 2 },
  ]);

  const [form, setForm] = useState({ name: '', count: 0 });

  const handleAdd = (e) => {
    e.preventDefault();
    if (form.name) {
      if (editingCat) {
        setCategories(categories.map(c => c.id === editingCat.id ? { ...c, name: form.name, count: form.count } : c));
        setEditingCat(null);
      } else {
        setCategories([...categories, { 
          name: form.name, 
          count: form.count, 
          id: Date.now().toString(), 
          image: catWellness // Default
        }]);
      }
      setIsAdding(false);
      setForm({ name: '', count: 0 });
    }
  };

  const startEdit = (cat) => {
    setEditingCat(cat);
    setForm({ name: cat.name, count: cat.count });
    setIsAdding(true);
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-4 min-h-screen">
        <AnimatePresence mode="wait">
          {!isAdding ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
                    Store Categories
                  </h1>
                  <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Manage your product hierarchy</p>
                </div>
                <button 
                  onClick={() => { setEditingCat(null); setForm({name: '', count: 0}); setIsAdding(true); }}
                  className="bg-brand-dark text-white px-5 py-2 rounded-none text-[9px] font-black uppercase tracking-widest shadow-xl shadow-brand-dark/20 flex items-center gap-2 hover:bg-black transition-all"
                >
                  <FiPlus /> Add New Category
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <div key={cat.id} className="bg-white rounded-none border border-brand-pink/10 shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                    <div className="h-24 bg-brand-light/20 relative overflow-hidden flex items-center justify-center p-3">
                      <div className="w-16 h-16 rounded-none border border-brand-pink/10 shadow-inner overflow-hidden transition-transform group-hover:scale-110">
                         <img src={cat.image} alt="Cat" className="w-full h-full object-cover p-1" />
                      </div>
                    </div>
                    <div className="p-3 flex items-center justify-between border-t border-brand-pink/5">
                      <div>
                         <h3 className="text-[10px] font-black text-brand-dark uppercase tracking-widest leading-none mb-1">{cat.name}</h3>
                         <span className="text-[8px] text-brand-pink font-black uppercase tracking-tighter">{cat.count} Items</span>
                      </div>
                      <div className="flex items-center gap-1">
                         <button 
                            onClick={(e) => { e.stopPropagation(); startEdit(cat); }}
                            className="text-gray-300 hover:text-brand-dark p-1.5 hover:bg-brand-light rounded-none transition-all"
                         >
                            <FiEdit2 size={11}/>
                         </button>
                         <button className="text-gray-200 hover:text-brand-dark p-1.5"><FiMoreVertical size={11}/></button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => { setEditingCat(null); setForm({name: '', count: 0}); setIsAdding(true); }}
                  className="h-full min-h-[120px] border-2 border-dashed border-brand-pink/10 rounded-none flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/[0.02] transition-all group"
                 >
                   <FiPlus size={16} className="group-hover:scale-110 transition-transform" />
                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">Create New</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
               key="add"
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.98 }}
               className="max-w-xl mx-auto bg-white rounded-none border border-brand-pink/10 shadow-2xl p-6 relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-dark" />
               <button 
                  onClick={() => setIsAdding(false)}
                  className="absolute top-4 right-4 p-1.5 bg-brand-light/50 text-brand-dark rounded-none hover:bg-brand-pink/10 transition-all"
               >
                  <FiX />
               </button>

               <div className="mb-6 text-center">
                  <div className="w-12 h-12 bg-brand-light rounded-none flex items-center justify-center text-brand-dark mx-auto mb-3 border border-brand-pink/5 shadow-inner">
                     <FiGrid size={20} />
                  </div>
                  <h2 className="text-lg font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
                    {editingCat ? 'Refine Category' : 'Divine Category'}
                  </h2>
                  <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Store hierarchy classification</p>
               </div>

               <form onSubmit={handleAdd} className="space-y-4">
                  <div className="space-y-1.5">
                     <label className="text-[8px] font-black text-brand-dark/50 uppercase tracking-widest pl-1">Name</label>
                     <div className="relative">
                        <FiEdit2 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                        <input 
                           type="text" 
                           placeholder="e.g. Organic Soaps"
                           className="w-full bg-brand-light/20 border border-brand-pink/10 p-3 pl-10 rounded-none text-[10px] font-black uppercase tracking-wider outline-none focus:border-brand-dark transition-all"
                           value={form.name}
                           onChange={(e) => setForm({...form, name: e.target.value})}
                           required
                        />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[8px] font-black text-brand-dark/50 uppercase tracking-widest pl-1">Stock Count</label>
                     <div className="relative">
                        <FiPlus className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                        <input 
                           type="number" 
                           placeholder="0"
                           className="w-full bg-brand-light/20 border border-brand-pink/10 p-3 pl-10 rounded-none text-[10px] font-black uppercase tracking-wider outline-none focus:border-brand-dark transition-all"
                           value={form.count}
                           onChange={(e) => setForm({...form, count: e.target.value})}
                        />
                     </div>
                  </div>

                  <button 
                     type="submit"
                     className="w-full bg-brand-dark text-white py-3.5 rounded-none text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-dark/20 flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98]"
                  >
                     {editingCat ? 'Save Changes' : 'Create Category'} <FiX className="rotate-45" />
                  </button>
               </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;
