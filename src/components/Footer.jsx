import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Kolom 1: Tentang Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white text-xs">
                B
              </div>
              <span className="text-lg font-bold text-white">BosApp</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Platform modern berbasis React & Vite untuk manajemen data pengguna, API, dan dasbor interaktif yang cepat.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="?e=home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="?e=search" className="hover:text-white transition-colors">Pencarian</a></li>
              <li><a href="?e=about" className="hover:text-white transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Kolom 3: Manajemen / Admin */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Sistem</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="?e=admin" className="hover:text-white transition-colors">Tabel Pengguna (Admin)</a></li>
              <li><a href="?e=login" className="hover:text-white transition-colors">Login Akun</a></li>
              <li><a href="?e=daftar" className="hover:text-white transition-colors">Pendaftaran</a></li>
            </ul>
          </div>

          {/* Kolom 4: Info / Status */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Status Server</h4>
            <div className="flex items-center gap-2 text-xs bg-slate-900/80 border border-slate-800 p-3 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-300">API Terhubung & Stabil</span>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Hak Cipta */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} BosApp. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}