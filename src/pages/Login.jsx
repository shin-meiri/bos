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
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      window.location.href = '?e=admin';
    } catch (err) {
      setErrorMsg(err.message || 'Login gagal, periksa kembali data Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-purple-950/40 border border-purple-900/40 rounded-2xl p-8 shadow-2xl space-y-6 backdrop-blur-md">
        
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 items-center justify-center font-bold text-white text-lg shadow-lg shadow-pink-500/30 mb-2">
            📦
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-xs text-purple-300/70">Sign in to your account</p>
        </div>

        {errorMsg && (
          <div className="bg-red-950/40 border border-red-800 text-red-300 text-xs p-3 rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-purple-200 mb-1.5">Email / Username</label>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full bg-slate-900 border border-purple-900/60 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-purple-200 mb-1.5">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-900 border border-purple-900/60 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-pink-500"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95 disabled:opacity-50 transition-all"
          >
            {loading ? 'Processing...' : 'Log in'}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-purple-900/40 text-xs text-purple-300/70 space-y-2">
          <p>Don't have an account? <a href="?e=daftar" className="text-pink-400 font-medium hover:underline">Sign up</a></p>
          <p><a href="?e=home" className="text-purple-400 hover:text-white transition-colors">&larr; Back to Home</a></p>
        </div>

      </div>
    </div>
  );
}