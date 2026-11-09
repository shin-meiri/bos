import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '?e=login'
      return
    }

    // Ambil data user yang login
    fetch('/api/v1/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch(() => {
        localStorage.removeItem('token')
        window.location.href = '?e=login'
      })
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '?e=login'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-cyan-400">
        LOADING SYSTEM...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-cyan-500/20 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-widest text-cyan-400">BOS ADMIN</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">{user?.email}</span>
            <button
              onClick={logout}
              className="px-4 py-1.5 text-sm border border-red-500/50 text-red-400 rounded hover:bg-red-500/10 transition"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Welcome Card */}
        <div className="mb-10 p-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl">
          <p className="text-slate-400 text-sm">Selamat datang kembali,</p>
          <h2 className="text-3xl font-bold text-white mt-1">{user?.full_name || user?.email}</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-5 border border-slate-800 bg-slate-900/50 rounded-xl">
            <p className="text-slate-500 text-sm">Status</p>
            <p className="text-2xl font-bold text-green-400 mt-1">Online</p>
          </div>
          <div className="p-5 border border-slate-800 bg-slate-900/50 rounded-xl">
            <p className="text-slate-500 text-sm">Role</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">
              {user?.is_superuser ? 'Superuser' : 'User'}
            </p>
          </div>
          <div className="p-5 border border-slate-800 bg-slate-900/50 rounded-xl">
            <p className="text-slate-500 text-sm">Active</p>
            <p className="text-2xl font-bold text-purple-400 mt-1">
              {user?.is_active ? 'Yes' : 'No'}
            </p>
          </div>
        </div>

        {/* Database Section */}
        <div className="border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-bold tracking-wider text-cyan-400">DATABASE CONTROL</h3>
            <a
              href="http://mayhost.com:8888"
              target="_blank"
              className="text-sm px-4 py-1.5 bg-cyan-500/20 text-cyan-400 rounded hover:bg-cyan-500/30 transition"
            >
              Open Adminer
            </a>
          </div>
          <div className="p-6 text-slate-400 text-sm">
            <p>Kelola database langsung melalui Adminer.</p>
            <p className="mt-2">Atau nantinya bisa ditambahkan tabel management di sini.</p>
          </div>
        </div>
      </main>
    </div>
  )
}