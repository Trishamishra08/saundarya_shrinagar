import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiGrid, 
  FiShoppingBag, 
  FiUsers, 
  FiLayers, 
  FiImage, 
  FiSettings, 
  FiLogOut,
  FiBell,
  FiSearch,
  FiTrendingUp
} from 'react-icons/fi';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', path: '/admin', icon: <FiGrid /> },
    { title: 'Products', path: '/admin/products', icon: <FiShoppingBag /> },
    { title: 'Categories', path: '/admin/categories', icon: <FiLayers /> },
    { title: 'Users', path: '/admin/users', icon: <FiUsers /> },
    { title: 'Orders', path: '/admin/orders', icon: <FiShoppingBag /> },
    { title: 'Finance', path: '/admin/finance', icon: <FiTrendingUp /> },
    { title: 'Banners', path: '/admin/banners', icon: <FiImage /> },
    { title: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <div className="flex min-h-screen bg-brand-light">
      {/* Sidebar - Redesigned to Brand Pink theme as requested */}
      <aside className="w-64 bg-[#FBD5DA] text-[#5C2E3E] hidden md:flex flex-col fixed h-screen z-50 border-r border-brand-pink/20">
        <div className="p-6 border-b border-brand-pink/10">
          <Link to="/admin" className="flex items-center gap-3.5 group">
            <div className="relative shrink-0 flex items-center justify-center">
               <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 w-auto transition-all"
                />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="text-sm font-serif font-black text-[#5C2E3E] uppercase tracking-[0.15em] leading-none truncate">
                Soundarya
              </h2>
              <p className="text-[7px] text-[#5C2E3E]/60 font-black tracking-[0.25em] uppercase mt-1">Admin Portal</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-none transition-all duration-200 group ${
                location.pathname === item.path 
                ? 'bg-[#5C2E3E] text-white font-bold' 
                : 'text-[#5C2E3E]/70 hover:bg-white/30 hover:text-[#5C2E3E]'
              }`}
            >
              <div className={`transition-all duration-200 ${location.pathname === item.path ? 'scale-110' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'}`}>
                {React.cloneElement(item.icon, { size: 14 })}
              </div>
              <span className="text-[9px] font-black tracking-[0.2em] uppercase">{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-brand-pink/10 bg-white/10">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-[#5C2E3E]/60 hover:text-brand-pink transition-all group rounded-none hover:bg-white/40">
            <FiLogOut className="text-base group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] font-black tracking-[0.15em] uppercase">Exit Portal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-w-0">
        {/* Header - Premium Glassmorphism */}
        <header className="h-14 bg-white/70 backdrop-blur-xl border-b border-brand-pink/10 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-2 bg-brand-light/50 px-3 py-1.5 rounded-none w-56 md:w-80 border border-brand-pink/10 group focus-within:border-brand-pink/30 transition-all">
            <FiSearch className="text-brand-pink/50 group-focus-within:text-brand-pink" size={12} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-[10px] w-full font-bold uppercase tracking-wider text-brand-dark placeholder:text-gray-300"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-1.5 text-gray-400 hover:text-brand-pink transition-all">
              <FiBell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-pink rounded-none border border-white"></span>
            </button>
            <div className="w-[1px] h-6 bg-brand-pink/10"></div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[9px] font-black text-brand-dark uppercase tracking-widest leading-none mb-0.5">Admin</p>
                <p className="text-[7px] text-brand-pink font-bold uppercase tracking-tighter opacity-70">Master Control</p>
              </div>
              <div className="w-8 h-8 rounded-none bg-brand-dark flex items-center justify-center text-white text-[10px] font-black">
                TM
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <main className="p-4 md:p-6 min-h-[calc(100vh-56px)] bg-[#FAF7F8]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
