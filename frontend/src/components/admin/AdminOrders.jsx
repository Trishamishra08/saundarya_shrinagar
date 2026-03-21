import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FiSearch, FiFilter, FiExternalLink, FiTruck, FiCheckCircle, FiClock, FiMoreVertical, FiEye } from 'react-icons/fi';

const AdminOrders = () => {
  const dummyOrders = [
    {
      id: '#8821',
      customer: 'Aditi Sharma',
      email: 'aditi@example.com',
      products: 'Rose Water, Lakme Face Powder',
      amount: '₹1,250',
      status: 'Delivered',
      date: '20 Mar 2024'
    },
    {
      id: '#8820',
      customer: 'Rahul Verma',
      email: 'rahul.v@example.com',
      products: 'TIRTIR Cushion (Pink) x2',
      amount: '₹3,400',
      status: 'In Transit',
      date: '19 Mar 2024'
    },
    {
      id: '#8819',
      customer: 'Priya Singh',
      email: 'priyas@example.com',
      products: 'Royal Jhumkas, Lip Gloss',
      amount: '₹2,100',
      status: 'Processing',
      date: '19 Mar 2024'
    },
    {
      id: '#8818',
      customer: 'Suresh Kumar',
      email: 'suresh.k@example.com',
      products: 'Men\'s Grooming Kit',
      amount: '₹850',
      status: 'Delivered',
      date: '18 Mar 2024'
    },
    {
      id: '#8817',
      customer: 'Neha Gupta',
      email: 'neha.g@example.com',
      products: 'Handmade Soap Set of 5',
      amount: '₹1,500',
      status: 'Shipped',
      date: '18 Mar 2024'
    }
  ];

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [orders] = useState(dummyOrders);

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'All' || order.status === filter;
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'In Transit': return 'bg-blue-100 text-blue-700';
      case 'Shipped': return 'bg-purple-100 text-purple-700';
      case 'Processing': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <FiCheckCircle />;
      case 'In Transit': return <FiTruck />;
      case 'Processing': return <FiClock />;
      default: return null;
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
              Order Logs
            </h1>
            <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Live Transaction Tracking</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex bg-white border border-brand-pink/10 p-1 rounded-none shadow-sm">
                {['All', 'Delivered', 'Shipped', 'Processing'].map(f => (
                  <button 
                    key={f} 
                    className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-brand-dark text-white' : 'text-gray-400'}`} 
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
             </div>
             <div className="bg-white border border-brand-pink/10 p-1.5 rounded-none flex items-center gap-2 w-48 shadow-sm">
                <FiSearch size={12} className="text-gray-300" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none outline-none text-[9px] font-bold uppercase w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-none border border-brand-pink/10 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-light/20 border-b border-brand-pink/5">
                  <th className="px-4 py-3 text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/50">Order ID</th>
                  <th className="px-4 py-3 text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/50">Customer</th>
                  <th className="px-4 py-3 text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/50">Total</th>
                  <th className="px-4 py-3 text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/50">Status</th>
                  <th className="px-4 py-3 text-[7px] font-black uppercase tracking-widest text-[#5C2E3E]/50 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-brand-light/10 transition-colors group text-[9px]">
                    <td className="px-4 py-3 font-black text-brand-dark">{order.id}</td>
                    <td className="px-4 py-3">
                       <p className="font-bold text-gray-700 uppercase">{order.customer}</p>
                       <p className="text-[7px] text-gray-400 font-bold">{order.date}</p>
                    </td>
                    <td className="px-4 py-3 font-black text-brand-dark">{order.amount}</td>
                    <td className="px-4 py-3">
                       <span className={`px-2 py-0.5 rounded-none text-[6px] font-black uppercase tracking-widest border flex items-center gap-1 w-fit ${
                          order.status === 'Delivered' ? 'bg-green-50 text-green-600 border-green-100' :
                          order.status === 'Shipped' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          'bg-orange-50 text-orange-600 border-orange-100'
                       }`}>
                          {order.status}
                       </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                       <button className="text-gray-300 hover:text-brand-dark transition-colors"><FiEye size={12}/></button>
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

export default AdminOrders;
