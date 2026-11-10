import React from 'react';

export default function Admin() {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#2e1a47] via-[#1e1330] to-[#0f0a1a] text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Area Admin */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#1e1330]/80 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-xl gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              CWP Area Admin
            </h1>
            <p className="text-purple-200/70 text-sm mt-1">Selamat datang kembali, Administrator.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-300">
              Role: Super Admin
            </span>
            <a 
              href="?e=home" 
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-xl text-xs font-semibold transition-all"
            >
              Logout
            </a>
          </div>
        </div>

        {/* Statistik Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Total Pengguna</p>
            <h3 className="text-3xl font-bold mt-2 text-white">1,284</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">+12% bulan ini</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Aktivitas Server</p>
            <h3 className="text-3xl font-bold mt-2 text-white">99.9%</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">Normal & Stabil</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Bandwidth</p>
            <h3 className="text-3xl font-bold mt-2 text-white">45.2 GB</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Sisa kuota aman</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Keamanan</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">Secure</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Tidak ada ancaman</span>
          </div>
        </div>

        {/* Tabel Konten Manajemen */}
        <div className="bg-[#1e1330]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Manajemen Sistem Terbaru</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-purple-200/80">
              <thead className="border-b border-purple-500/20 text-xs uppercase text-purple-300 bg-purple-950/40">
                <tr>
                  <th className="p-4 rounded-l-xl">Modul / Fitur</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                <tr>
                  <td className="p-4 font-medium text-white">Konfigurasi Panel CWP</td>
                  <td className="p-4"><span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs">Aktif</span></td>
                  <td className="p-4"><button className="text-pink-400 hover:text-pink-300 font-semibold text-xs">Kelola</button></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Database Manajemen (MySQL)</td>
                  <td className="p-4"><span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs">Running</span></td>
                  <td className="p-4"><button className="text-pink-400 hover:text-pink-300 font-semibold text-xs">Kelola</button></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Keamanan SSL & Firewall</td>
                  <td className="p-4"><span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs">Secured</span></td>
                  <td className="p-4"><button className="text-pink-400 hover:text-pink-300 font-semibold text-xs">Kelola</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}