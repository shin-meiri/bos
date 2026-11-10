import React, { useState } from 'react';
import { login } from '../components/Konek';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Memanggil fungsi login dari Konek.jsx
      const data = await login(email, password);
      // Simpan token atau arahkan ke dashboard
      localStorage.setItem('token', data.token);
      window.location.href = '?e=admin';
    } catch (err) {
      setErrorMsg(err.message || 'Login gagal, periksa kembali email dan sandi Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-[#0a0e17] border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-indigo-500/5 space-y-6">
        
        {/* Header Form */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 items-center justify-center font-bold text-white text-lg shadow-lg shadow-indigo-500/20 mb-2">
            B
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Selamat Datang Kembali</h2>
          <p className="text-xs text-slate-400">Masuk untuk mengelola sistem dan data pengguna</p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="bg-red-950/40 border border-red-800/60 text-red-300 text-xs p-3 rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email / Username</label>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@domain.com"
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Kata Sandi</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Masuk Sekarang'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-2 border-t border-slate-800/60 text-xs text-slate-400 space-y-2">
          <p>Belum punya akun? <a href="?e=daftar" className="text-indigo-400 font-medium hover:underline">Daftar di sini</a></p>
          <p><a href="?e=home" className="text-slate-500 hover:text-slate-300 transition-colors">&larr; Kembali ke Beranda</a></p>
        </div>

      </div>
    </div>
  );
}