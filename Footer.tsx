
import React from 'react';
import { SOCIAL_LINKS, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2">MR <span className="text-yellow-400">YUMMY</span></h2>
            <p className="opacity-80">
              Fast, fresh, and full of fun in every bite. The best fast food experience in Batna!
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex justify-center space-x-4 text-3xl">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <i className="fas fa-phone text-yellow-400"></i>
                <span>+213 676 81 89 99</span>
              </p>
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <i className="fas fa-envelope text-yellow-400"></i>
                <span>info@mryummy.dz</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-700 pt-8">
          <p className="text-center text-xs opacity-70">
            &copy; {new Date().getFullYear()} MR Yummy Batna. All rights reserved. 
            <br/> Crafted with passion for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
