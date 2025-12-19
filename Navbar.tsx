
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS, WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-full overflow-hidden w-14 h-14 border-2 border-yellow-400">
              <img 
                src="assets/logo.jpg" 
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/id/102/100/100"; }}
                alt="MR Yummy Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter">MR <span className="text-yellow-400">YUMMY</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-bold hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : ''}`}>HOME</Link>
            <Link to="/menu" className={`font-bold hover:text-yellow-400 transition-colors ${isActive('/menu') ? 'text-yellow-400' : ''}`}>MENU</Link>
            <Link to="/about" className={`font-bold hover:text-yellow-400 transition-colors ${isActive('/about') ? 'text-yellow-400' : ''}`}>ABOUT</Link>
          </div>

          {/* Socials and Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 mr-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="assets/Facebook.webp" alt="FB" className="w-8 h-8 rounded-md" onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/733/733547.png"; }} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="assets/Insta.webp" alt="Insta" className="w-8 h-8 rounded-md" onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"; }} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="assets/tiktok.webp" alt="TikTok" className="w-8 h-8 rounded-md" onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3046/3046121.png"; }} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src="assets/whatsapp.webp" alt="WA" className="w-8 h-8 rounded-md" onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/733/733585.png"; }} />
              </a>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] opacity-70">Order Now</span>
              <span className="text-sm font-bold">+213 676 81 89 99</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-400">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700 px-4 pt-2 pb-6 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-bold">HOME</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-bold">MENU</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-bold">ABOUT</Link>
          <div className="flex space-x-4 pt-4 border-t border-red-500">
            <a href={SOCIAL_LINKS.facebook} className="text-2xl"><i className="fab fa-facebook"></i></a>
            <a href={SOCIAL_LINKS.instagram} className="text-2xl"><i className="fab fa-instagram"></i></a>
            <a href={SOCIAL_LINKS.tiktok} className="text-2xl"><i className="fab fa-tiktok"></i></a>
            <a href={SOCIAL_LINKS.whatsapp} className="text-2xl"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
