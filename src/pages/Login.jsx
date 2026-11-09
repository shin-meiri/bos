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

      if (!res.ok) {
        throw new Error(data.detail || 'Login gagal')
      }

      // Simpan token
      localStorage.setItem('token', data.access_token)
      
      // Redirect ke dashboard
      window.location.href = '?e=dashboard'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form 
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 bg-slate-900 rounded-2xl border border-slate-800 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <div className="p-3 text-sm text-red-400 bg-red-400/10 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm text-slate-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg font-medium transition"
        >
          {loading ? 'Loading...' : 'Masuk'}
        </button>
      </form>
    </div>
  )
}