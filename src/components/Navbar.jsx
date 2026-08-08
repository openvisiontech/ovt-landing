import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/ovt-logo-icon.PNG" alt="OVT Logo" className="w-10 h-16 object-cover rounded-full" />
      <span className="text-xl font-bold tracking-tight text-primary">Open Vision Technology, LLC.</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <a href="#hero" className="hover:text-secondary transition">Home</a>
      <a href="#c2" className="hover:text-secondary transition">Next-Gen C2</a>
      <a href="#solutions" className="hover:text-secondary transition">Capabilities</a>
      <a href="#uli-kaya" className="hover:text-secondary transition">Uli Kaya</a>
      <a href="#federal" className="hover:text-secondary transition">Defense & Procurement</a>
    </div>
    <a
      href="https://www.ulisdk.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
    >
      Explore Uli SDK
    </a>
  </nav>
);

export default Navbar;
