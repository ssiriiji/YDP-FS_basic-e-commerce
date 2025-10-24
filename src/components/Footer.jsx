import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F6CF4D] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid แยกเป็น 2 ส่วน: บนและล่าง */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Join Our Club, Get 15% Off For Your Birthday
            </h3>
            
            {/* Email Input Form */}
            <form className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full px-4 py-3 pr-12 border border-black font-light bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-900 text-black placeholder-black"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-900/10 rounded transition"
                  aria-label="Submit email"
                >
                  <svg 
                    className="w-5 h-5 text-gray-900" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Checkbox Agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree"
                className="mt-1 w-4 h-4 cursor-pointer accent-gray-900"
              />
              <label htmlFor="agree" className="text-xs text-gray-900 cursor-pointer">
                By Submitting your email, you agree to receive advertising emails from Modimal.
              </label>
            </div>
          </div>

          {/* Help & Support */}
          <div className=''>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Help & Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/orders" className="text-gray-900 hover:underline transition">
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-900 hover:underline transition">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-gray-900 hover:underline transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-900 hover:underline transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Join Up - ชิดขวาบนจอใหญ่ */}
          <div className="">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Join Up</h4>
            <ul className="space-y-3">
              <li>
                <a href="/club" className="text-gray-900 hover:underline transition">
                  Modimal Club
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-900 hover:underline transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/visit" className="text-gray-900 hover:underline transition">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ส่วนล่าง: Social Media + Copyright */}
        <div>
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={24} className="text-gray-900" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={24} className="text-gray-900" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-gray-900">
            <span>©</span>
            <span>2025 YDP. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;