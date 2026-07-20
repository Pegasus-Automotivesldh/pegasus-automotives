import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Pegasus Automotives</h3>
          <p className="text-sm leading-relaxed">
            Private luxury car advisory and brokerage based in Ludhiana, Punjab. Serving clients across India with premium automotive solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-amber-400">About Our Advisory</a></li>
            <li><a href="#services" className="hover:text-amber-400">Services & Brokerage</a></li>
            <li><a href="#inventory" className="hover:text-amber-400">Featured Vehicles</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Get in Touch</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media & Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="https://www.instagram.com/pegasus_automotivs/" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/pegasus-automotives" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/PegasusAutomotives/about/" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              Facebook
            </a>
            <a href="https://www.youtube.com/@pegsusautomotives" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              YouTube
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Pegasus Automotives. All rights reserved. Ludhiana, Punjab.
      </div>
    </footer>
  );
}
