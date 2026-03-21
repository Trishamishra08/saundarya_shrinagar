import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FiSearch, FiUser, FiMail, FiPhone, FiDollarSign, FiShoppingBag, FiArrowLeft, FiClock, FiStar, FiFilter, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 'USR-001',
      name: 'Aditi Sharma',
      email: 'aditi@example.com',
      phone: '9876543210',
      totalSpent: '₹14,500',
      orderCount: 12,
      lastLogin: '2 hours ago',
      joinDate: 'Jan 2024',
      status: 'Active',
      level: 'Gold Customer',
      recentOrders: [
        { id: '#8821', date: '20 Mar', amount: '₹1,250', status: 'Delivered' },
        { id: '#8752', date: '05 Mar', amount: '₹2,400', status: 'Delivered' },
        { id: '#8611', date: '12 Feb', amount: '₹4,100', status: 'Delivered' }
      ]
    },
    {
      id: 'USR-002',
      name: 'Rahul Verma',
      email: 'rahul.v@example.com',
      phone: '8839044030',
      totalSpent: '₹8,200',
      orderCount: 8,
      lastLogin: '5 mins ago',
      joinDate: 'Feb 2024',
      status: 'Active',
      level: 'Regular',
      recentOrders: [
        { id: '#8820', date: '19 Mar', amount: '₹3,400', status: 'In Transit' }
      ]
    },
    {
       id: 'USR-003',
       name: 'Trisha Mishra',
       email: 'trisha@example.com',
       phone: '8839044031',
       totalSpent: '₹25,000',
       orderCount: 22,
       lastLogin: '1 min ago',
       joinDate: 'Dec 2023',
       status: 'Active',
       level: 'Platinum',
       recentOrders: [
         { id: '#8900', date: '20 Mar', amount: '₹5,000', status: 'Processing' }
       ]
    }
  ];

  if (selectedUser) {
    return (
      <AdminLayout>
        <div className="max-w-7xl mx-auto space-y-4 pb-10">
          <button 
            onClick={() => setSelectedUser(null)}
            className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#5C2E3E]/60 hover:text-brand-pink transition-all mb-2"
          >
            <FiArrowLeft /> Back to List
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* User Profile Card */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white rounded-none p-5 border border-brand-pink/10 shadow-xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold" />
                <div className="w-16 h-16 rounded-none bg-brand-light flex items-center justify-center mx-auto mb-3 border border-brand-pink/5 shadow-md">
                  <span className="text-xl font-serif font-black text-brand-dark">{selectedUser.name[0]}</span>
                </div>
                <h2 className="text-lg font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">{selectedUser.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-brand-gold text-white text-[7px] font-black px-2 py-0.5 rounded-none uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-brand-gold/20">
                    <FiStar className="fill-current" /> {selectedUser.level}
                  </span>
                </div>
                
                <div className="space-y-3 text-left border-t border-brand-pink/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-brand-light rounded-none text-brand-dark"><FiMail size={10}/></div>
                    <div>
                      <p className="text-[6px] font-black uppercase tracking-widest text-gray-400">Email</p>
                      <p className="text-[9px] font-bold text-brand-dark">{selectedUser.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-brand-light rounded-none text-brand-dark"><FiPhone size={10}/></div>
                    <div>
                      <p className="text-[6px] font-black uppercase tracking-widest text-gray-400">Mobile</p>
                      <p className="text-[9px] font-bold text-brand-dark">+91 {selectedUser.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finance Snapshot */}
              <div className="bg-brand-dark rounded-none p-4 text-white border border-white/5 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><FiDollarSign size={40}/></div>
                 <h3 className="text-[7px] font-serif font-black uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-white/5 pb-2">Financials</h3>
                 <div className="grid grid-cols-2 gap-2">
                   <div>
                     <p className="text-[7px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Spent</p>
                     <p className="text-base font-serif font-black text-brand-gold">{selectedUser.totalSpent}</p>
                   </div>
                   <div>
                     <p className="text-[7px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Orders</p>
                     <p className="text-base font-serif font-black text-white">{selectedUser.orderCount}</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Orders Details Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-none p-5 border border-brand-pink/10 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[10px] font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">Active Purchases</h3>
                    <p className="text-[7px] text-gray-400 font-black uppercase tracking-[0.2em]">history logs</p>
                  </div>
                  <FiFilter className="text-gray-300" size={12} />
                </div>

                <div className="space-y-2">
                  {selectedUser.recentOrders.map((order, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50/50 rounded-none border border-brand-pink/5 hover:border-brand-pink/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-none bg-white border border-brand-pink/10 flex items-center justify-center text-brand-pink"><FiShoppingBag size={12}/></div>
                        <div>
                          <p className="text-[9px] font-black text-brand-dark uppercase">{order.id}</p>
                          <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-[9px] font-black text-brand-dark">{order.amount}</p>
                        </div>
                        <div className={`px-2 py-0.5 rounded-none text-[7px] font-black uppercase tracking-widest border ${order.status === 'Delivered' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-brand-pink/10 text-brand-pink border-brand-pink/20'}`}>
                           {order.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
              Store Users
            </h1>
            <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Complete Registered Customer Database</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-none border border-brand-pink/10 w-64 shadow-sm">
             <FiSearch className="text-gray-300" size={12} />
             <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-[9px] font-bold uppercase w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((u) => (
            <motion.div 
              key={u.id}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedUser(u)}
              className="bg-white rounded-none p-3 border border-brand-pink/5 shadow-md cursor-pointer hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-none bg-brand-light flex items-center justify-center text-xs font-serif font-black text-brand-dark">
                  {u.name[0]}
                </div>
                <div>
                   <h3 className="text-[9px] font-black text-brand-dark uppercase tracking-widest leading-none mb-0.5">{u.name}</h3>
                   <span className="text-[6px] font-black text-brand-gold uppercase tracking-widest">{u.level}</span>
                </div>
              </div>

              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-[7px] font-bold">
                  <span className="text-gray-400 uppercase tracking-widest">Spent</span>
                  <span className="text-brand-dark font-black">{u.totalSpent}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-brand-pink/5 flex items-center justify-between">
                <span className="text-[6px] font-black text-brand-pink uppercase tracking-widest">Last seen {u.lastLogin}</span>
                <span className="text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/60 group-hover:text-brand-pink">Details →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
