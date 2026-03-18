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
  FiSearch
} from 'react-icons/fi';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', path: '/admin', icon: <FiGrid /> },
    { title: 'Products', path: '/admin/products', icon: <FiShoppingBag /> },
    { title: 'Categories', path: '/admin/categories', icon: <FiLayers /> },
    { title: 'Customers', path: '/admin/customers', icon: <FiUsers /> },
    { title: 'Banners', path: '/admin/banners', icon: <FiImage /> },
    { title: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFCFB]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] text-white hidden md:flex flex-col fixed h-screen z-50">
        <div className="p-8">
          <h2 className="text-xl font-decorative font-black text-brand-gold uppercase tracking-[0.2em] mb-1">
            Soundarya
          </h2>
          <p className="text-[10px] text-gray-500 tracking-[0.4em] uppercase font-bold">Admin Portal</p>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                location.pathname === item.path 
                ? 'bg-brand-gold text-white shadow-lg shadow-brand-gold/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`text-lg transition-transform duration-300 ${location.pathname === item.path ? '' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-white/5">
          <Link to="/" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors group">
            <FiLogOut className="text-lg group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-wide uppercase">Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl w-64 md:w-96 border border-gray-100">
            <FiSearch className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search data..." 
              className="bg-transparent border-none outline-none text-sm w-full font-medium"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-brand-dark transition-colors">
              <FiBell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full border-2 border-white"></span>
            </button>
            <div className="w-[1px] h-8 bg-gray-100"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-brand-dark uppercase tracking-wider">Trisha Mishra</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold font-black">
                TM
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
