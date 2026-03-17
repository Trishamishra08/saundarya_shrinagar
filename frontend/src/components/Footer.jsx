import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../assets/images/logo_pink.png';
import footerBg from '../assets/images/footer_bg.jpg';

const Footer = () => {
  return (
    <footer className="relative bg-[#FFF0F3] text-brand-dark pt-8 pb-4 border-t border-brand-pink/10 italic overflow-hidden">
      {/* Sketched Cosmetic Background - High Visibility */}
      <div 
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-500 mb-3 text-xs leading-relaxed max-w-xs">
              Experience the pure essence of nature with Soundarya Shrinagar. Our 100% organic and natural beauty products are crafted to enhance your natural glow.
            </p>
            <div className="flex space-x-3 mb-4">
              <a href="https://www.facebook.com/people/Saundarya-Shringar-Pvt-Ltd/61580709900798/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors text-sm"><FiFacebook /></a>
              <a href="https://www.instagram.com/saundaryashringarpvtltd/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors text-sm"><FiInstagram /></a>
              <a href="https://x.com/LtdShringar" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors text-sm"><FiTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-2 border-b border-brand-gold/30 pb-1 inline-block">Quick Links</h3>
            <ul className="space-y-1 text-gray-500 text-[10px]">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shop All Products</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-bold mb-2 border-b border-brand-gold/30 pb-1 inline-block">Support</h3>
            <ul className="space-y-1 text-gray-500 text-[10px]">
              <li><a href="#" className="hover:text-brand-gold transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Gifting</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold mb-2 border-b border-brand-gold/30 pb-1 inline-block">Contact</h3>
            <ul className="space-y-2 text-gray-500 text-[10px]">
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-0.5 text-brand-gold shrink-0" size={12} />
                <span>123, Bloom Plaza, MG Road, Bangalore, India - 560001</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-brand-gold shrink-0" size={12} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-brand-gold shrink-0" size={12} />
                <span>support@soundaryashrinagar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[8px] text-gray-400">
          <p>© 2024 Soundarya Shrinagar. All Rights Reserved. Designed with Love.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 justify-center md:justify-end grayscale contrast-125 brightness-150">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
