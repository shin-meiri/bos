import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0a1a] border-t border-purple-900/30 text-purple-300/70 text-xs py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} COMPANY. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="?e=home" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="?e=home" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}