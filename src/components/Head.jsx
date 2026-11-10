import React, { useState } from 'react';

export default function Head() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1e1330]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="?e=home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                📦
              </div>
              <span className="text-xl font-bold tracking-wide text-white">
                COMPANY
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="?e=home" className="px-4 py-2 rounded-lg text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition-all">Home</a>
            <a href="?e=about" className="px-4 py-2 rounded-lg text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition-all">About</a>
            <a href="?e=home" className="px-4 py-2 rounded-lg text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition-all">Our Services</a>
            <a href="?e=home" className="px-4 py-2 rounded-lg text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition-all">Portfolio</a>
            <a href="?e=admin" className="px-4 py-2 rounded-lg text-sm font-medium text-pink-300 hover:text-pink-200 hover:bg-pink-950/40 transition-all">Admin Panel</a>
          </nav>

          {/* Right Action / Auth */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="?e=login" className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-purple-900/60 border border-purple-700/50 hover:bg-purple-800 transition-all">
              Log in
            </a>
            <a href="?e=daftar" className="px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/30 hover:opacity-95 transition-all">
              Sign Up
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-purple-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e1330] border-b border-purple-900 px-4 pt-2 pb-4 space-y-1">
          <a href="?e=home" className="block px-3 py-2 rounded-md text-sm text-purple-200 hover:bg-purple-900">Home</a>
          <a href="?e=about" className="block px-3 py-2 rounded-md text-sm text-purple-200 hover:bg-purple-900">About</a>
          <a href="?e=admin" className="block px-3 py-2 rounded-md text-sm text-pink-300 hover:bg-purple-900">Admin Panel</a>
          <div className="pt-2 flex gap-2">
            <a href="?e=login" className="w-1/2 text-center py-2 rounded-full text-xs font-semibold border border-purple-700 text-white">Log in</a>
            <a href="?e=daftar" className="w-1/2 text-center py-2 rounded-full text-xs font-semibold bg-pink-500 text-white">Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
}