import React, { useState } from 'react';
import { 
  Menu, Search, User, X, 
  Film, Tv, Grid, Star, Heart, Settings 
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'سەرەکی', link: '/', icon: <Grid size={24} /> },
    { name: 'فیلمەکان', link: '/movies', icon: <Film size={24} /> },
    { name: 'زنجیرە فیلمەکان', link: '/tv-shows', icon: <Tv size={24} /> },
    { name: 'دڵپێکراوەکان', link: '/favorites', icon: <Heart size={24} /> },
    { name: 'پلەبەندی', link: '/rating', icon: <Star size={24} /> }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wider">
          KurdishMovie
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 w-1/3">
          <Search className="text-gray-400 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="گەڕان بۆ فیلم..." 
            className="bg-transparent text-white w-full focus:outline-none"
          />
        </div>

        {/* Desktop Navigation & Account */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              className="hover:text-blue-500 transition-colors flex items-center"
            >
              {item.name}
            </a>
          ))}
          <div className="relative group">
            <User size={24} className="hover:text-blue-500 cursor-pointer" />
            <div className="absolute hidden group-hover:block bg-gray-800 text-white rounded-lg shadow-lg p-4 top-full right-0 mt-2 w-48 z-50">
              <a href="/login" className="block py-2 hover:bg-gray-700">چوونەژورەوە</a>
              <a href="/register" className="block py-2 hover:bg-gray-700">خەساندن</a>
              <a href="/profile" className="block py-2 hover:bg-gray-700">پڕۆفایل</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
          <Search className="text-gray-400 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="گەڕان بۆ فیلم..." 
            className="bg-transparent text-white w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        >
          <div 
            className="absolute right-0 top-0 h-full w-1/2 bg-gray-900 
            transform transition-transform duration-300 ease-in-out 
            animate-slide-in-right p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={toggleMobileMenu} 
              className="absolute top-4 left-4"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-6 mt-12">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.link} 
                  className="flex items-center space-x-3 text-xl hover:text-blue-500 
                  transition-colors rtl:space-x-reverse"
                  onClick={toggleMobileMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="flex items-center space-x-3 text-xl hover:text-blue-500 
              transition-colors rtl:space-x-reverse">
                <Settings size={24} />
                <span>ڕێکخستنەکان</span>
              </div>

              {/* Mobile Account Section */}
              <div className="mt-6 border-t border-gray-700 pt-6">
                <div className="flex items-center space-x-3 text-xl">
                  <User size={24} />
                  <span>هەژمار</span>
                </div>
                <div className="mt-4 space-y-3">
                  <a href="/login" className="block hover:text-blue-500">چوونەژورەوە</a>
                  <a href="/register" className="block hover:text-blue-500">خەساندن</a>
                  <a href="/profile" className="block hover:text-blue-500">پڕۆفایل</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;