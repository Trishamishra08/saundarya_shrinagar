import React from 'react';
import AdminLayout from './AdminLayout';
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiShoppingBag, FiCreditCard, FiArrowUpRight, FiMoreVertical, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AdminFinance = () => {
  const financeStats = [
    { title: 'Gross Revenue', value: '₹4,52,000', change: '+24%', icon: <FiDollarSign />, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Net Profit', value: '₹1,28,000', change: '+12%', icon: <FiTrendingUp />, color: 'text-brand-pink', bg: 'bg-brand-light' },
    { title: 'Avg. Order', value: '₹1,850', change: '-4%', icon: <FiShoppingBag />, color: 'text-orange-600', bg: 'bg-orange-50' },
    { title: 'Pending Dues', value: '₹12,400', change: '8 units', icon: <FiClock />, color: 'text-blue-600', bg: 'bg-blue-50' }
  ];

  const transactions = [
    { id: 'T-9921', user: 'Aditi Sharma', amount: '₹1,250', status: 'Success', method: 'UPI', date: '20 Mar' },
    { id: 'T-9920', user: 'Rahul Verma', amount: '₹3,400', status: 'Success', method: 'Credit Card', date: '19 Mar' },
    { id: 'T-9919', user: 'Priya Singh', amount: '₹2,100', status: 'Processing', method: 'Net Banking', date: '19 Mar' },
    { id: 'T-9918', user: 'Suresh Kumar', amount: '₹850', status: 'Success', method: 'Razorpay', date: '18 Mar' },
    { id: 'T-9917', user: 'Neha Gupta', amount: '₹1,500', status: 'Refunded', method: 'UPI', date: '18 Mar' }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
              Store Finance
            </h1>
            <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Live Revenue & Transaction Audits</p>
          </div>
          <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-none border border-brand-pink/10 text-[8px] font-black uppercase tracking-widest shadow-sm hover:bg-brand-pink/[0.02] transition-colors">
             <FiCalendar /> Filter Range
          </button>
        </div>

        {/* Finance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {financeStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-none p-4 border border-brand-pink/5 shadow-md relative overflow-hidden group"
            >
               <div className={`p-2.5 ${stat.bg} ${stat.color} rounded-none w-fit mb-3 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
               </div>
               <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{stat.title}</p>
               <h3 className="text-xl font-serif font-black text-brand-dark">{stat.value}</h3>
               <div className="flex items-center justify-between mt-3 border-t border-brand-pink/5 pt-3">
                  <span className={`text-[8px] font-black flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                     {stat.change.startsWith('+') ? <FiArrowUpRight /> : <FiTrendingDown />} {stat.change}
                  </span>
                  <span className="text-[6px] font-black text-gray-300 uppercase tracking-widest">Growth</span>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-brand-dark rounded-none p-5 text-white border border-white/5 relative overflow-hidden shadow-2xl">
           <div className="flex items-center justify-between mb-6">
             <div>
                <h3 className="text-base font-serif font-black text-brand-gold uppercase tracking-widest leading-none mb-1">Audit Logs</h3>
                <p className="text-[8px] text-gray-500 font-black uppercase tracking-[0.2em]">summary</p>
             </div>
             <div className="flex bg-white/5 p-1 rounded-none">
                <button className="px-3 py-1 bg-brand-gold text-brand-dark rounded-none text-[8px] font-black uppercase tracking-widest">All</button>
                <button className="px-3 py-1 text-gray-400 rounded-none text-[8px] font-black uppercase tracking-widest">Withdrawals</button>
             </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-white/5">
                   <th className="px-4 py-3 text-[6px] font-black uppercase tracking-widest text-brand-gold/50">Txn ID</th>
                   <th className="px-4 py-3 text-[6px] font-black uppercase tracking-widest text-brand-gold/50">User</th>
                   <th className="px-4 py-3 text-[6px] font-black uppercase tracking-widest text-brand-gold/50">Amount</th>
                   <th className="px-4 py-3 text-[6px] font-black uppercase tracking-widest text-brand-gold/50 text-right">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {transactions.map((tr) => (
                   <tr key={tr.id} className="hover:bg-white/[0.02] transition-colors group text-[9px]">
                      <td className="px-4 py-3 font-black text-brand-gold uppercase">{tr.id}</td>
                      <td className="px-4 py-3 font-bold text-gray-300 uppercase">{tr.user}</td>
                      <td className="px-4 py-3 font-black">{tr.amount}</td>
                      <td className="px-4 py-3 text-right">
                         <span className={`px-2 py-0.5 rounded-none text-[6px] font-black uppercase tracking-widest border ${tr.status === 'Success' ? 'bg-green-500/10 text-green-500 border-green-500/20' : tr.status === 'Refunded' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-brand-gold/10 text-brand-gold border-brand-gold/20'}`}>
                            {tr.status}
                         </span>
                      </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const FiClock = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export default AdminFinance;
