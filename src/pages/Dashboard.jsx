import React from 'react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-cyan-950/40 border border-slate-800 p-8 sm:p-12">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Sistem Aktif & Terhubung
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kelola Data Pengguna dengan Cepat dan Efisien
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Platform terpadu berbasis React dan Vite untuk memantau, mengedit, serta mengontrol manajemen data pengguna melalui panel admin yang responsif.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="?e=admin" 
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all"
            >
              Buka Panel Admin
            </a>
            <a 
              href="?e=search" 
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800/80 text-slate-200 border border-slate-700 hover:bg-slate-800 transition-all"
            >
              Cari Data User
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Pengguna</p>
          <h3 className="text-3xl font-bold text-white mt-2">1,284</h3>
          <span className="text-xs text-emerald-400 mt-1 inline-block">+12% bulan ini</span>
        </div>
        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sistem Status</p>
          <h3 className="text-3xl font-bold text-white mt-2">99.9%</h3>
          <span className="text-xs text-indigo-400 mt-1 inline-block">Server Normal</span>
        </div>
        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Akses API</p>
          <h3 className="text-3xl font-bold text-white mt-2">Ready</h3>
          <span className="text-xs text-cyan-400 mt-1 inline-block">Terhubung ke /api/v1</span>
        </div>
      </div>

    </div>
  );
}