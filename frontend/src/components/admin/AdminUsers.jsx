import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FiSearch, FiUser, FiMail, FiPhone, FiDollarSign, FiShoppingBag, FiArrowLeft, FiClock, FiStar, FiFilter, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [userList, setUserList] = useState([
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
  ]);

  const filteredUsers = userList.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = (id) => {
    if (window.confirm('Securely terminate this user account and revoke all access?')) {
      setUserList(userList.filter(u => u.id !== id));
      setSelectedUser(null);
    }
  };

  const handleAction = (type) => {
    alert(`${type} protocol initiated for ${selectedUser?.name || 'user'}. Synchronizing secure databases.`);
  };

  if (selectedUser) {
    return (
      <div className="max-w-7xl mx-auto space-y-4 pb-10">
        <div className="flex justify-between items-center mb-2">
          <button 
            onClick={() => setSelectedUser(null)}
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#5C2E3E]/60 hover:text-brand-pink transition-all"
          >
            <FiArrowLeft /> Back to List
          </button>
          <button 
            onClick={() => handleDeleteUser(selectedUser.id)}
            className="text-[9px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-all flex items-center gap-2"
          >
            Terminate Access
          </button>
        </div>

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
                <span className="bg-brand-gold text-white text-[7px] font-bold px-2 py-0.5 rounded-none uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-brand-gold/20">
                  <FiStar className="fill-current" /> {selectedUser.level}
                </span>
              </div>
              
              <div className="space-y-3 text-left border-t border-brand-pink/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-brand-light rounded-none text-brand-dark"><FiMail size={10}/></div>
                  <div>
                    <p className="text-[6px] font-bold uppercase tracking-widest text-gray-400">Email Dispatch</p>
                    <p className="text-[9px] font-medium text-brand-dark">{selectedUser.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-brand-light rounded-none text-brand-dark"><FiPhone size={10}/></div>
                  <div>
                    <p className="text-[6px] font-bold uppercase tracking-widest text-gray-400">Secure Contact</p>
                    <p className="text-[9px] font-medium text-brand-dark">+91 {selectedUser.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance Snapshot */}
            <div className="bg-brand-dark rounded-none p-4 text-white border border-white/5 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10"><FiDollarSign size={40}/></div>
               <h3 className="text-[7px] font-serif font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 border-b border-white/5 pb-2">Financials</h3>
               <div className="grid grid-cols-2 gap-2">
                 <div>
                   <p className="text-[7px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Total Spent</p>
                   <p className="text-base font-serif font-black text-brand-gold">{selectedUser.totalSpent}</p>
                 </div>
                 <div>
                   <p className="text-[7px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Order Count</p>
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
                  <p className="text-[7px] text-gray-400 font-medium uppercase tracking-[0.2em]">history logs</p>
                </div>
                <button onClick={() => handleAction('Filter')} className="text-gray-300 hover:text-brand-pink transition-colors"><FiFilter size={12} /></button>
              </div>

              <div className="space-y-2">
                {selectedUser.recentOrders.map((order, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-50/50 rounded-none border border-brand-pink/5 hover:border-brand-pink/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-white border border-brand-pink/10 flex items-center justify-center text-brand-pink shadow-sm"><FiShoppingBag size={12}/></div>
                      <div>
                        <p className="text-[9px] font-bold text-brand-dark uppercase tracking-wide">{order.id}</p>
                        <p className="text-[7px] text-gray-400 font-medium uppercase tracking-widest">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                         <p className="text-[9px] font-bold text-brand-dark">{order.amount}</p>
                      </div>
                      <div className={`px-2 py-0.5 rounded-none text-[7px] font-bold uppercase tracking-widest border ${order.status === 'Delivered' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-brand-pink/10 text-brand-pink border-brand-pink/20'}`}>
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
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
            Store Users
          </h1>
          <p className="text-[8px] text-gray-400 font-medium uppercase tracking-[0.2em]">Complete Registered Customer Database</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-none border border-brand-pink/10 w-64 shadow-sm">
           <FiSearch className="text-gray-300" size={12} />
           <input 
              type="text" 
              placeholder="Search Database..." 
              className="bg-transparent border-none outline-none text-[9px] font-medium uppercase w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredUsers.map((u) => (
          <motion.div 
            key={u.id}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedUser(u)}
            className="bg-white rounded-none p-4 border border-brand-pink/10 shadow-sm cursor-pointer hover:shadow-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-pink/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-none bg-brand-light flex items-center justify-center text-sm font-serif font-black text-brand-dark shadow-inner border border-brand-pink/5">
                {u.name[0]}
              </div>
              <div>
                 <h3 className="text-[10px] font-serif font-black text-brand-dark uppercase tracking-wider leading-none mb-1 group-hover:text-brand-pink transition-colors">{u.name}</h3>
                 <span className="text-[7px] font-bold text-brand-gold uppercase tracking-tighter">{u.level}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-end border-b border-brand-pink/5 pb-1">
                 <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Spent</span>
                 <span className="text-sm font-serif font-black text-brand-dark">{u.totalSpent}</span>
              </div>
              <div className="flex justify-between items-end border-b border-brand-pink/5 pb-1">
                 <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Joined</span>
                 <span className="text-[8px] font-bold text-brand-dark uppercase tracking-widest">{u.joinDate}</span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#5C2E3E]/60 group-hover:text-brand-pink flex items-center gap-1 transition-all">View <FiArrowLeft className="rotate-180" size={10} /></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
