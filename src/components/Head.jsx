import React, { useState } from 'react';

export default function Head() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="?e=home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                B
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                BosApp
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="?e=home" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Beranda
            </a>
            <a 
              href="?e=search" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Cari
            </a>
            <a 
              href="?e=about" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Tentang
            </a>
            <a 
              href="?e=admin" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/30 transition-all"
            >
              Admin Panel
            </a>
          </nav>

          {/* Auth Buttons / Profile Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="?e=login" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all"
            >
              Masuk
            </a>
            <a 
              href="?e=daftar" 
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 hover:opacity-90 transition-all"
            >
              Daftar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1322] border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          <a href="?e=home" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800">Beranda</a>
          <a href="?e=search" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800">Cari</a>
          <a href="?e=about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800">Tentang</a>
          <a href="?e=admin" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-400 hover:bg-slate-800">Admin Panel</a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a href="?e=login" className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-200">Masuk</a>
            <a href="?e=daftar" className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white">Daftar</a>
          </div>
        </div>
      )}
    </header>
  );
}