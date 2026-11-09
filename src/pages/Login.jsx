import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('username', email)
      formData.append('password', password)

      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Login gagal')

      localStorage.setItem('token', data.access_token)
      window.location.href = '?e=dashboard'
    } catch (err) {
      setError(typeof err.message === 'string' ? err.message : 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0e17]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0a0e17] to-[#0a0e17]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      {/* Glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-wider text-white">
            SHIN <span className="text-indigo-400">KAIRI</span>
          </h1>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-indigo-500/50"></div>
            <p className="text-indigo-300/80 text-xs tracking-[0.3em] uppercase">Corporate System</p>
            <div className="h-px w-8 bg-indigo-500/50"></div>
          </div>
        </div>

        {/* Login Card */}
        <div className="relative">
          {/* Border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30"></div>
          
          <div className="relative bg-[#111827]/90 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <h2 className="text-center text-xl font-semibold text-white mb-6">
              Sign In to Continue
            </h2>

            {error && (
              <div className="mb-5 p-3 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
                <span>⚠</span> {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 tracking-wide">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 tracking-wide">
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 font-semibold tracking-wide text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  'ENTER SYSTEM'
                )}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          © 2026 Shin Kairi Corporate • All Rights Reserved
        </p>
      </div>
    </div>
  )
}