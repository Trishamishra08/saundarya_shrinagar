import React from 'react';
import AdminLayout from './AdminLayout';
import { FiUser, FiMail, FiShield, FiLock, FiBell, FiChevronRight, FiEdit3, FiSettings } from 'react-icons/fi';

const AdminSettings = () => {
  const adminInfo = {
    name: 'Trisha Mishra',
    role: 'Super Admin',
    email: 'customercare@saundaryashringar.com',
    phone: '+91 9896472169',
    joined: 'Jan 2024'
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h1 className="text-xl font-serif font-black text-brand-dark uppercase tracking-widest leading-none mb-1">
              Portal Settings
            </h1>
            <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">Identity & Security</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <div className="bg-white rounded-none border border-brand-pink/10 shadow-md overflow-hidden h-full">
               <div className="h-16 bg-brand-light/40" />
               <div className="px-4 pb-6 -mt-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-none bg-white p-1 shadow-lg mb-3 border border-brand-pink/5">
                     <div className="w-full h-full rounded-none bg-brand-dark flex items-center justify-center text-brand-gold text-xl font-serif font-black">
                        TM
                     </div>
                  </div>
                  <h2 className="text-sm font-serif font-black text-brand-dark uppercase leading-tight mb-1">{adminInfo.name}</h2>
                  <p className="text-[8px] text-brand-pink font-black uppercase tracking-widest mb-4">{adminInfo.role}</p>
                  
                  <div className="space-y-2 text-left">
                     <div className="flex items-center gap-2 p-2 bg-brand-light/10 rounded-none border border-brand-pink/5 overflow-hidden">
                        <FiMail size={12} className="text-brand-pink shrink-0" />
                        <span className="text-[8px] font-bold text-brand-dark truncate">{adminInfo.email}</span>
                     </div>
                     <div className="flex items-center gap-2 p-2 bg-brand-light/10 rounded-none border border-brand-pink/5">
                        <FiShield size={12} className="text-brand-gold shrink-0" />
                        <span className="text-[8px] font-bold text-brand-dark uppercase">Super Admin</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <div className="bg-white rounded-none border border-brand-pink/10 shadow-md p-4">
               <div className="flex justify-between items-center mb-4 border-b border-brand-pink/5 pb-3">
                  <h3 className="text-[10px] font-serif font-black text-brand-dark uppercase tracking-widest leading-none">Account Profile</h3>
                  <button className="text-brand-pink flex items-center gap-1.5 text-[8px] font-black uppercase hover:text-brand-gold transition-colors">
                     <FiEdit3 size={12} /> Edit
                  </button>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                     <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-1">Name</p>
                     <p className="text-[10px] font-bold text-brand-dark uppercase">{adminInfo.name}</p>
                  </div>
                  <div>
                     <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-1">Role</p>
                     <p className="text-[10px] font-bold text-brand-dark uppercase">{adminInfo.role}</p>
                  </div>
                  <div>
                     <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-1">Contact</p>
                     <p className="text-[10px] font-bold text-brand-dark uppercase">{adminInfo.phone}</p>
                  </div>
                  <div>
                     <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-1">Started</p>
                     <p className="text-[10px] font-bold text-brand-dark uppercase">{adminInfo.joined}</p>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-none border border-brand-pink/10 shadow-md p-4">
               <h3 className="text-[10px] font-serif font-black text-brand-dark uppercase tracking-widest mb-4 leading-none">Security Controls</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                     { icon: <FiLock />, label: 'Passkeys', desc: 'Secure login' },
                     { icon: <FiBell />, label: 'Alerts', desc: 'Order tracking' },
                     { icon: <FiSettings />, label: 'Presets', desc: 'Regional opts' },
                     { icon: <FiUser />, label: 'Session', desc: 'Device logs' },
                  ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-none hover:bg-brand-light/20 border border-brand-pink/5 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-brand-light/50 rounded-none text-brand-pink group-hover:scale-105 transition-transform shrink-0">
                              {React.cloneElement(item.icon, { size: 14 })}
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-brand-dark uppercase tracking-wide leading-none">{item.label}</p>
                              <p className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter mt-0.5 opacity-70">{item.desc}</p>
                           </div>
                        </div>
                        <FiChevronRight size={14} className="text-gray-200 group-hover:text-brand-pink transition-all" />
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
