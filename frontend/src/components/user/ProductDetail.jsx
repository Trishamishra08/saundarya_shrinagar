
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar, FiHeart, FiShare2, FiShoppingCart, FiZap, 
  FiShield, FiTruck, FiRefreshCw, FiCheckCircle, FiChevronRight 
} from 'react-icons/fi';
import { initialProducts } from '../../data/products';
import { useShop } from '../../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const product = initialProducts.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-black text-brand-dark mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-brand-pink font-bold uppercase tracking-widest text-xs">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white pb-10 pt-0 font-sans focus:outline-none">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-1 pb-2 flex items-center gap-2 text-[10px] md:text-[11px] text-gray-400 font-medium">
        <Link to="/shop" className="hover:text-brand-pink">Shop</Link>
        <FiChevronRight className="w-3 h-3" />
        <span className="capitalize hover:text-brand-pink cursor-pointer">{product.category}</span>
        <FiChevronRight className="w-3 h-3" />
        <span className="text-brand-dark font-bold truncate max-w-[150px] md:max-w-none">{product.name}</span>
      </div>

      <main className="container mx-auto px-4 md:px-8 lg:px-12 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Left: Image Gallery - New Vertical Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Large Image - Tighter Boundary */}
            <div className="relative aspect-square overflow-hidden bg-white shadow-2xl rounded-2xl group border border-gray-100/50 max-w-[500px] mx-auto">
               <motion.img 
                 key={selectedImage}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 src={selectedImage} 
                 alt={product.name}
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
               />
               
               <button 
                 onClick={() => toggleWishlist(product)}
                 className={`absolute top-4 right-4 p-2.5 rounded-full shadow-lg z-10 transition-all active:scale-90 bg-white ${
                   isInWishlist(product.id) ? 'text-brand-pink' : 'text-gray-300 hover:text-brand-pink'
                 }`}
               >
                 <FiHeart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
               </button>
            </div>

            {/* Thumbnails Row Below - Clickable & Labeled */}
            <div className="flex justify-center gap-4 mt-2">
              {[
                { img: product.image, label: 'FRONT' },
                { img: product.image, label: 'SIDE' },
                { img: product.image, label: 'DETAIL' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <button 
                    onClick={() => setSelectedImage(item.img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all border-2 flex items-center justify-center bg-gray-50/30 ${
                      selectedImage === item.img ? 'border-brand-pink shadow-md' : 'border-gray-100 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={item.img} alt={item.label} className="w-full h-full object-contain p-2" />
                  </button>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#5C2E3E]/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Info - Amazon Style */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border-b border-gray-100 pb-3">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[9px] md:text-[10px] items-center gap-2 mb-1 inline-flex">
                <FiZap size={10} /> {product.label || 'Premium Selection'}
              </span>
              <h1 className="text-2xl md:text-3xl font-serif font-black text-brand-dark mb-2 leading-tight tracking-tight uppercase">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1 group cursor-pointer">
                  <span className="font-bold text-gray-700 underline decoration-gray-200 underline-offset-4">{product.rating || 4.2}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating || 4) ? "fill-brand-gold text-brand-gold" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                  <FiChevronRight className="w-3 h-3 text-gray-300" />
                </div>
                <span className="text-brand-pink font-bold hover:underline cursor-pointer">{product.reviews || 24344} ratings</span>
                <span className="h-4 w-[1px] bg-gray-200" />
                <span className="text-gray-500 font-medium">5K+ bought in past month</span>
              </div>
            </div>

            <div className="py-2">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-brand-pink text-3xl font-medium">-{product.discount || '29%'}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold align-top mt-1">₹</span>
                  <span className="text-4xl font-black tracking-tighter text-brand-dark leading-none">{product.price}</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs font-medium">
                M.R.P.: <span className="line-through">₹{product.oldPrice || product.price + 225}</span>
              </p>
              <div className="mt-2 text-[10px] md:text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md inline-block border border-gray-100 shadow-sm uppercase tracking-wide">
                 Inclusive of all taxes
              </div>
            </div>

            {/* Bank Offers - More focus */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-3">
               <h4 className="flex items-center gap-2 text-brand-dark font-black text-[11px] uppercase tracking-widest border-b border-gray-100 pb-2">
                  <FiZap className="text-brand-gold" /> Available Offers
               </h4>
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                  {[
                    { title: 'Bank Offer', desc: 'Flat ₹100 Off on SBI' },
                    { title: 'Cashback', desc: '5% Unlimited Reward' },
                    { title: 'Coupons', desc: 'Apply ₹50 coupon' }
                  ].map((offer, idx) => (
                    <div key={idx} className="min-w-[140px] bg-white p-2 rounded-lg border border-gray-100 shadow-sm hover:border-brand-pink/30 transition-all cursor-pointer">
                      <p className="font-black text-[10px] text-brand-dark mb-0.5">{offer.title}</p>
                      <p className="text-[9px] text-gray-500 line-clamp-2 leading-tight">{offer.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Icons - Grid style */}
            <div className="grid grid-cols-4 gap-2 py-4 border-y border-gray-100 bg-gray-50/30 rounded-lg px-2">
               {[
                 { icon: <FiShield />, label: 'Genuine' },
                 { icon: <FiTruck />, label: 'Fast Delivery' },
                 { icon: <FiRefreshCw />, label: '7 Days Return' },
                 { icon: <FiCheckCircle />, label: 'Quality Check' }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center gap-1 group">
                    <div className="text-gray-400 group-hover:text-brand-gold">
                      {item.icon}
                    </div>
                    <span className="text-[7px] md:text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{item.label}</span>
                 </div>
               ))}
            </div>

            {/* Bullet Points */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-brand-dark uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-4 bg-brand-gold" /> About this item
              </h3>
              <ul className="space-y-2.5">
                {(product.about || [
                  'Non Oily Matte Look: Evens out complexion and hides imperfections.',
                  'Blends Effortlessly: Pressed powder for all skin types.',
                  'Weightless Stay: Breathable HD coverage that lasts 12h+.',
                  'Pure & Organic: Crafted with botanical heritage rituals.'
                ]).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-black text-xs leading-none mt-1">•</span>
                    <p className="text-xs md:text-sm text-gray-600 leading-snug">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Buy Section - Amazon Buy Box */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                 <div className="space-y-2 mb-6">
                    <div className="flex items-baseline gap-1">
                       <span className="text-sm font-bold mt-1">₹</span>
                       <span className="text-3xl font-black text-brand-dark tracking-tight">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <p className="text-green-600 font-black text-sm">In Stock</p>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight">
                       FREE delivery <span className="text-brand-dark font-bold">Sunday, 22 March</span> on your first order. <span className="text-blue-600 font-bold cursor-pointer hover:underline">Details</span>
                    </p>
                    <p className="text-[11px] text-gray-700 font-medium">
                       Or fastest delivery <span className="font-bold underline">Today 6 pm - 10 pm</span>. Order within <span className="text-red-600 font-bold">2 hrs 56 mins</span>.
                    </p>
                 </div>

                 <div className="space-y-3">
                    <button 
                      onClick={handleAddToCart}
                      className={`w-full py-3 rounded-full flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg border-b-2 border-brand-dark/20 ${
                        isAdded ? 'bg-green-600 text-white' : 'bg-[#FFD814] hover:bg-[#F7CA00] text-gray-900 border-[#F0C14B]'
                      }`}
                    >
                      {isAdded ? <FiCheckCircle /> : <FiShoppingCart />}
                      {isAdded ? 'Added to Bag' : 'Add to Bag'}
                    </button>
                    
                    <button 
                      onClick={handleBuyNow}
                      className="w-full py-3 rounded-full bg-[#FFA41C] hover:bg-[#FA8900] text-gray-900 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg border-b-2 border-[#A88734] border-brand-dark/20"
                    >
                      <FiZap /> Buy Now
                    </button>
                 </div>

                 <div className="mt-8 pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400">
                         <FiShield size={14} />
                       </div>
                       <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Secure transaction</p>
                    </div>
                    <div className="pl-9 space-y-1">
                       <p className="text-[10px] text-gray-400">Ships from <span className="text-gray-900 font-bold ml-2">Saundarya</span></p>
                       <p className="text-[10px] text-gray-400">Sold by <span className="text-gray-900 font-bold ml-2">Saundarya Official</span></p>
                    </div>
                 </div>
              </div>

              <div className="bg-brand-pink/5 rounded-xl p-4 border border-brand-pink/10 group cursor-pointer hover:bg-brand-pink/10 transition-colors">
                 <div className="flex items-center justify-between">
                    <p className="text-[10px] text-brand-dark font-black uppercase tracking-widest">Customer Help</p>
                    <FiChevronRight className="w-3 h-3 text-brand-pink group-hover:translate-x-1 transition-transform" />
                 </div>
                 <button className="text-brand-pink text-[11px] font-black underline underline-offset-4 mt-2">Chat with Beauty Expert</button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
