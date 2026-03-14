import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-pink/15 text-brand-dark pt-20 pb-10 border-t border-brand-pink/10 italic">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Logo" className="h-16 w-auto mix-blend-multiply" />
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Experience the pure essence of nature with Soundarya Shrinagar. Our 100% organic and natural beauty products are crafted to enhance your natural glow while staying true to our Ayurvedic roots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors"><FiFacebook /></a>
              <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors"><FiInstagram /></a>
              <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors"><FiTwitter /></a>
              <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-colors"><FiYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shop All Products</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Support</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Wholesale Inquiries</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Beauty Consultations</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Gifting Solutions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-brand-gold" />
                <span>123, Bloom Plaza, MG Road, Bangalore, India - 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-brand-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-brand-gold" />
                <span>support@soundaryashrinagar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-gray-100 text-center md:text-left md:flex md:justify-between items-center text-xs text-gray-400">
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
