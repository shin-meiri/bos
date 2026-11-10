import React, { useState, useEffect } from 'react';

export default function Head() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Cek apakah ada sesi user di localStorage
    const savedUser = localStorage.getItem('user_session');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    setUser(null);
    window.location.href = '?e=home';
  };

  return (
    <header className="w-full bg-[#0f0a1a]/90 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
            <span className="text-white font-bold text-lg">📦</span>
          </div>
          <span className="text-xl font-black tracking-wider text-white">COMPANY</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-purple-200/80">
          <a href="?e=home" className="hover:text-white transition-colors">Home</a>
          <a href="?e=about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Our Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        </nav>

        {/* Auth Buttons / User Profile */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3 bg-purple-950/60 border border-purple-500/30 px-4 py-2 rounded-2xl">
              <a href="?e=admin" className="text-sm font-semibold text-pink-300 hover:underline">
                👤 {user.fullName || user.email}
              </a>
              <button 
                onClick={handleLogout}
                className="text-xs text-red-300 bg-red-500/20 px-2.5 py-1 rounded-xl hover:bg-red-500/30 transition-all font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <a 
                href="?e=login" 
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-purple-200 hover:text-white hover:bg-purple-900/40 transition-all border border-purple-500/30"
              >
                Log in
              </a>
              <a 
                href="?e=daftar" 
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95 transform hover:-translate-y-0.5 transition-all"
              >
                Sign Up
              </a>
            </>
          )}
        </div>

      </div>
    </header>
  );
}