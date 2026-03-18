import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from './AdminLayout';
import { 
  FiArrowUpRight, 
  FiPackage, 
  FiUsers, 
  FiLayers, 
  FiImage,
  FiPlus,
  FiMoreVertical
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Products', value: '1,248', change: '+12%', icon: <FiPackage />, color: 'bg-blue-500' },
    { title: 'Registered Users', value: '8,420', change: '+5%', icon: <FiUsers />, color: 'bg-purple-500' },
    { title: 'Categories', value: '24', change: '0%', icon: <FiLayers />, color: 'bg-brand-gold' },
    { title: 'Active Banners', value: '5', change: '+2', icon: <FiImage />, color: 'bg-brand-pink' },
  ];

  const recentOrders = [
    { id: '#8821', customer: 'Ananya Sharma', product: 'Silk Radiance Cream', date: '2 mins ago', status: 'Processing', amount: '₹1,250' },
    { id: '#8820', customer: 'Rahul Verma', product: 'Gold Glow Serum', date: '15 mins ago', status: 'Shipped', amount: '₹2,400' },
    { id: '#8819', customer: 'Priya Patel', product: 'Organic Face Wash', date: '1 hour ago', status: 'Delivered', amount: '₹850' },
    { id: '#8818', customer: 'Sneha Gupta', product: 'Bridal Kit Premium', date: '3 hours ago', status: 'Pending', amount: '₹5,600' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-decorative font-black text-brand-dark uppercase tracking-tight mb-2">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 text-sm font-medium">Monitoring your store's performance in real-time.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-white text-brand-dark px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-gray-100 shadow-sm hover:bg-gray-50 transition-all">
              Export Report
            </button>
            <button className="bg-brand-dark text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-dark/20 flex items-center gap-2 hover:bg-black transition-all">
              <FiPlus /> Add Product
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="flex items-center text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change} <FiArrowUpRight className="ml-1" />
                </div>
              </div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.title}</p>
              <p className="text-2xl font-serif font-black text-brand-dark">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-decorative font-black text-[#5C2E3E] uppercase tracking-wider">Recent Orders</h3>
                <button className="text-gray-400 hover:text-brand-dark"><FiMoreVertical /></button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Order</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Customer</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-brand-dark">{order.id}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{order.date}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-brand-dark">{order.customer}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{order.product}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-black text-brand-dark">{order.amount}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                <button className="text-[10px] font-black uppercase tracking-widest text-brand-gold hover:text-brand-dark transition-colors">
                  View Full History
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats / Management Area */}
          <div className="space-y-6">
            {/* Category Summary */}
            <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl shadow-xl overflow-hidden relative group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-6 relative z-10">Categories Performance</h3>
              <div className="space-y-4 relative z-10">
                {[
                  { name: 'Skincare', sales: '₹42K', color: 'bg-brand-pink' },
                  { name: 'Makeup', sales: '₹28K', color: 'bg-brand-gold' },
                  { name: 'Wellness', sales: '₹12K', color: 'bg-white/20' }
                ].map((cat) => (
                  <div key={cat.name}>
                    <div className="flex justify-between text-[11px] font-bold uppercase mb-1.5">
                      <span>{cat.name}</span>
                      <span className="text-brand-gold">{cat.sales}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${cat.color} rounded-full`} style={{ width: '70%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Preview Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-sans">Active Hero Banners</h3>
                <span className="text-[9px] bg-brand-pink text-white px-2 py-0.5 rounded font-black">LIVE</span>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((b) => (
                  <div key={b} className="flex gap-4 items-center bg-gray-50 p-2 rounded-xl group cursor-pointer hover:bg-brand-pink/5 transition-colors">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                      <img src={`https://picsum.photos/seed/${b+20}/100/100`} alt="Banner" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-brand-dark uppercase truncate">Spring Collection 2024</p>
                      <p className="text-[9px] text-gray-400 font-medium">Updated 2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-[#5C2E3E]/60 border-2 border-dashed border-gray-100 rounded-xl hover:border-brand-gold hover:text-brand-gold transition-all">
                Add New Banner
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
