import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-amber-500">
              PEGASUS AUTOMOTIVES
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Call Action */}
          <div>
            <a
              href="tel:+919876543210"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-4 py-2 rounded-md transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
