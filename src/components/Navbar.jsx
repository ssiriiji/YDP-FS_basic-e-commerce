import React, { useState } from 'react';
import { Menu, X, User, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';  // เพิ่มบรรทัดนี้
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            
          {/* Logo Link*/}
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/collection" className="text-gray-700 hover:text-gray-900 transition">
              Collection
            </Link>
            <Link to="/new-in" className="text-gray-700 hover:text-gray-900 transition">
              New In
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition">
              About Us
            </Link>
            <Link to="/sustainability" className="text-gray-700 hover:text-gray-900 transition">
              Sustainability
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Heart size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingBag size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Button and Icons */}
          <div className="flex md:hidden items-center space-x-3">
            <button className="p-2">
              <Heart size={20} className="text-gray-700" />
            </button>
            <button className="p-2">
              <ShoppingBag size={20} className="text-gray-700" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-white border-t">
          <Link
            to="/collection"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Collection
          </Link>
          <Link
            to="/new-in"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            New In
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/sustainability"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Sustainability
          </Link>
          <Link
            to="/account"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition border-t pt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={18} className="inline mr-2" />
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
