import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  // Form tambah user
  const [form, setForm] = useState({
    email: '',
    full_name: '',
    password: '',
  })
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      window.location.href = '?e=login'
      return
    }

    // Ambil user yang sedang login
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

    // Sementara kita tampilkan data dari /me dulu
    // Nanti bisa ditambah endpoint /users
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '?e=login'
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError('')

    try {
      const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal menambah user')

      // Reset & tutup modal
      setForm({ email: '', full_name: '', password: '' })
      setShowModal(false)
      alert('User berhasil ditambahkan')
    } catch (err) {
      setFormError(typeof err.message === 'string' ? err.message : 'Gagal menambah user')
    } finally {
      setFormLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-slate-400">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg tracking-wide">Shin Kairi</span>
            <span className="text-xs text-slate-500 hidden sm:inline">Admin Panel</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
            >
              + Add User
            </button>
            <div className="text-sm text-slate-400 hidden sm:block">
              {user?.full_name || user?.email}
            </div>
            <button
              onClick={logout}
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">
            Selamat datang, {user?.full_name || user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-slate-500 text-sm">Status</p>
            <p className="text-xl font-semibold text-green-400 mt-1">Active</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-slate-500 text-sm">Role</p>
            <p className="text-xl font-semibold text-indigo-400 mt-1">
              {user?.is_superuser ? 'Superuser' : 'User'}
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <p className="text-slate-500 text-sm">Email</p>
            <p className="text-xl font-semibold text-slate-200 mt-1 truncate">
              {user?.email}
            </p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
            <h2 className="font-semibold">Data User</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-900/50 text-slate-400">
                <tr>
                  <th className="text-left px-6 py-3 font-medium">ID</th>
                  <th className="text-left px-6 py-3 font-medium">Nama</th>
                  <th className="text-left px-6 py-3 font-medium">Email</th>
                  <th className="text-left px-6 py-3 font-medium">Status</th>
                  <th className="text-left px-6 py-3 font-medium">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4">{user?.id}</td>
                  <td className="px-6 py-4">{user?.full_name || '-'}</td>
                  <td className="px-6 py-4">{user?.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs ${user?.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {user?.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {user?.is_superuser ? 'Superuser' : 'User'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal Add User */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-5">Tambah User Baru</h3>

            {formError && (
              <div className="mb-4 p-3 text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg">
                {formError}
              </div>
            )}

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 border border-slate-600 rounded-lg hover:bg-slate-700 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 rounded-lg transition"
                >
                  {formLoading ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}