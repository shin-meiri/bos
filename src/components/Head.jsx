import React from 'react';

export default function Head() {
  return (
    <header className="w-full bg-[#1e1330]/80 backdrop-blur-md border-b border-purple-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="?e=home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 font-bold">
            ⬡
          </div>
          <span className="text-lg font-bold tracking-wider text-white">COMPANY</span>
        </a>

        {/* Menu Navigasi Tengah */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-purple-200">
          <a href="?e=home" className="text-pink-400 hover:text-white transition-colors">Home</a>
          <a href="?e=about" className="hover:text-white transition-colors">About</a>
          <a href="?e=home" className="hover:text-white transition-colors">Our Services</a>
          <a href="?e=home" className="hover:text-white transition-colors">Portfolio</a>
          <a href="?e=admin" className="hover:text-white transition-colors">Contact Us</a>
        </nav>

        {/* Tombol Kanan (Log in & Sign Up) */}
        <div className="flex items-center space-x-3">
          <a href="?e=login" className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-purple-900/50 border border-purple-700/50 hover:bg-purple-800 transition-all">
            Log in
          </a>
          <a href="?e=daftar" className="px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/30 hover:opacity-95 transition-all">
            Sign Up
          </a>
        </div>

      </div>
    </header>
  );
}