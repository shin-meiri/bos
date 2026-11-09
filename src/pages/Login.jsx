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
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md p-8 border border-cyan-500/30 bg-black/60 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)]"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            BOS ACCESS
          </h1>
          <p className="text-cyan-500/60 text-sm mt-2 tracking-wider">SECURE TERMINAL</p>
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-400 border border-red-500/40 bg-red-500/10 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className="block text-xs text-cyan-400 mb-1 tracking-wider">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/40 rounded-lg text-cyan-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-cyan-400 mb-1 tracking-wider">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/40 rounded-lg text-cyan-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-2 font-bold tracking-widest text-black bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition disabled:opacity-50"
          >
            {loading ? 'AUTHENTICATING...' : 'ENTER SYSTEM'}
          </button>
        </div>
      </form>
    </div>
  )
}