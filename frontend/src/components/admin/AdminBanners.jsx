import React from 'react';
import AdminLayout from './AdminLayout';
import { FiEdit2, FiPlus, FiTrash2, FiEye, FiImage } from 'react-icons/fi';

import banner1 from '../../assets/images/banner_1.png';
import banner2 from '../../assets/images/banner_2.png';
import banner3 from '../../assets/images/banner_3.png';
import trendingBanner from '../../assets/images/trending_banner.png';
import catSkincare from '../../assets/images/cat_skincare_new.png';

const AdminBanners = () => {
  const banners = [
    { id: 1, title: 'Hero Season Collection', type: 'Main Slider', image: banner1, res: '1920x800' },
    { id: 2, title: 'Festive Makeup Sale', type: 'Main Slider', image: banner2, res: '1920x800' },
    { id: 3, title: 'Skincare Essentials', type: 'Main Slider', image: banner3, res: '1920x800' },
    { id: 4, title: 'Trending Now Promo', type: 'Mid-Section', image: trendingBanner, res: '1200x400' },
    { id: 5, title: 'Organic Soap Highlight', type: 'Category Banner', image: catSkincare, res: '800x800' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-4 min-h-screen">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
              Store Banners
            </h1>
            <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Visual Merchandising Assets</p>
          </div>
          <button className="bg-brand-dark text-white px-5 py-2 rounded-none text-[9px] font-black uppercase tracking-widest shadow-xl shadow-brand-dark/20 flex items-center gap-2 hover:bg-black transition-all">
            <FiPlus /> New Banner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {banners.map((banner) => (
            <div key={banner.id} className="bg-white rounded-none border border-brand-pink/10 shadow-md group relative overflow-hidden">
              <div className="p-2">
                 <div className="relative aspect-[21/9] bg-brand-light overflow-hidden rounded-none">
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all group-hover:scale-105" />
                    <div className="absolute top-2 left-2 flex gap-1">
                       <span className="bg-brand-dark/80 text-white text-[6px] font-black px-1.5 py-0.5 rounded-none uppercase tracking-widest backdrop-blur-sm">{banner.type}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       <button className="p-2 bg-white text-brand-dark rounded-none hover:bg-brand-gold hover:text-white transition-all"><FiEye size={12} /></button>
                       <button className="p-2 bg-white text-brand-dark rounded-none hover:bg-brand-gold hover:text-white transition-all"><FiEdit2 size={12} /></button>
                       <button className="p-2 bg-red-500 text-white rounded-none hover:bg-red-600 transition-all"><FiTrash2 size={12} /></button>
                    </div>
                 </div>
              </div>
              
              <div className="p-3 bg-white border-t border-brand-pink/5 flex items-center justify-between">
                <div>
                   <h3 className="text-[9px] font-black text-brand-dark uppercase tracking-widest mb-0.5">{banner.title}</h3>
                   <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">RES: {banner.res}</span>
                </div>
                <div className="flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-none bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                   <span className="text-[7px] font-black text-green-500 uppercase">Live</span>
                </div>
              </div>
            </div>
          ))}

          <button className="border-2 border-dashed border-brand-pink/10 rounded-none h-48 flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/[0.02] transition-all group">
             <div className="p-3 bg-brand-light/20 rounded-none group-hover:scale-110 transition-transform">
                <FiImage size={24} />
             </div>
             <span className="text-[8px] font-black uppercase tracking-[0.2em]">Add New Banner</span>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBanners;
