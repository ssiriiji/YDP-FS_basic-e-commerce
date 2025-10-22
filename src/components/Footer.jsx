import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Music } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to receive advertising emails');
      return;
    }
    console.log('Email submitted:', email);
    alert('Thank you for subscribing!');
    setEmail('');
    setAgreed(false);
  };

  return (
    <footer className="bg-yellow-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Our Club, Get 15% Off For Your Birthday
          </h3>
          
          {/* Email Input Form */}
          <form onSubmit={handleSubmit} className="max-w-md mb-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          </form>

          {/* Checkbox */}
          <div className="flex items-start gap-2 max-w-md">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="agree" className="text-xs text-gray-800 cursor-pointer">
              By Submitting your email, you agree to receive advertising emails from Modimal.
            </label>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Help & Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Help & Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Join Up */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Join Up</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Modimal Club
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Empty Column for spacing or can add more content */}
          <div></div>
        </div>

        {/* Social Media Icons */}
        <div className="mb-8">
          <div className="flex gap-4">
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
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Pinterest"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12c0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4 0 2.2-1.8 4-4 4-.5 0-1-.1-1.5-.3"/>
                <path d="M10.5 16v-4"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="TikTok"
            >
              <Music size={24} className="text-gray-900" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900/20 pt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-800">©</span>
            <span className="text-sm text-gray-800">2025 YDP. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;