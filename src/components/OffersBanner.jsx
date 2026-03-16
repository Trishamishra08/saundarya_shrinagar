import React from 'react';
import promoImg from '../assets/images/promo.png';

const OffersBanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[350px]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://v1.pinimg.com/videos/iht/720p/7e/ea/de/7eeadea15e5a731b14692d3986188a44.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-gradient-to-r md:from-brand-pink/60 md:to-transparent flex items-center">
            <div className="p-8 md:p-20 text-brand-dark max-w-lg">
              <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-[10px] font-bold mb-4 inline-block tracking-widest uppercase">FESTIVAL SPECIAL</span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 italic leading-tight">Festival Beauty Sale</h2>
              <p className="text-base mb-8 opacity-90 italic">Buy 1 Get 1 Free on all Skincare Kits. Flat 25% Off Storewide.</p>
              <button className="bg-brand-dark text-white px-10 py-3 rounded-full font-bold hover:bg-brand-gold transition-all transform hover:scale-105 duration-300 shadow-lg">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
