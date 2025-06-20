import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function ShopFooter() {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              STAY UPTO DATE ABOUT
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              OUR LATEST OFFERS
            </h2>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full md:w-80 bg-white text-black pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <button className="w-full md:w-80 bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-600 text-sm mb-6">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-black mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-black mb-4 tracking-wide">HELP</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Delivery Details</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h4 className="font-semibold text-black mb-4 tracking-wide">FAQ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Orders</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Payments</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-black mb-4 tracking-wide">RESOURCES</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Free eBooks</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-black transition-colors">How to - Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3">
            {/* Visa */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">VISA</span>
            </div>
            {/* Mastercard */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            {/* PayPal */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">PayPal</span>
            </div>
            {/* Apple Pay */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-black">Pay</span>
            </div>
            {/* Google Pay */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">G Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}