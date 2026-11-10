import React from 'react';

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sukses, arahkan ke CWP Area Admin
    window.location.href = '?e=admin';
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#2e1a47] via-[#1e1330] to-[#0f0a1a] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="bg-[#1e1330]/90 backdrop-blur-xl border border-purple-500/30 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md relative z-10 text-center">
        
        <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-pink-500/30 mb-6">
          <span className="text-2xl font-bold text-white">🔒</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
        <p className="text-purple-200/70 text-sm mt-1 mb-6">Sign in to your CWP Admin account</p>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5 uppercase tracking-wider">Email / Username</label>
            <input 
              type="text" 
              required
              placeholder="name@company.com" 
              className="w-full bg-[#0f0a1a]/80 border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-pink-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full bg-[#0f0a1a]/80 border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-pink-500 transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95 transform hover:-translate-y-0.5 transition-all mt-2"
          >
            Log in
          </button>
        </form>

        <div className="mt-6 text-sm text-purple-200/70">
          Don't have an account? <a href="?e=daftar" className="text-pink-400 font-semibold hover:underline">Sign up</a>
        </div>
        
        <div className="mt-4">
          <a href="?e=home" className="text-xs text-purple-300/60 hover:text-purple-200 transition-colors">
            ← Back to Home
          </a>
        </div>

      </div>
    </div>
  );
}