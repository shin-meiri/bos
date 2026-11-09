import { useEffect, useState } from 'react'
import { getMe } from '../components/Konek'

export default function Admin() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '?e=login'
      return
    }

    getMe(token)
      .then(setUser)
      .catch(() => {
        localStorage.removeItem('token')
        window.location.href = '?e=login'
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="p-10 text-center text-slate-400">Loading...</div>
  if (!user) return null

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Data User</h1>
        <a
          href="?e=daftar"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm transition"
        >
          + Tambah User
        </a>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800/80 text-slate-400">
            <tr>
              <th className="text-left px-5 py-3">No</th>
              <th className="text-left px-5 py-3">ID</th>
              <th className="text-left px-5 py-3">Nama</th>
              <th className="text-left px-5 py-3">Email</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-right px-5 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="hover:bg-slate-800/40">
              <td className="px-5 py-3">1</td>
              <td className="px-5 py-3">{user.id}</td>
              <td className="px-5 py-3">{user.full_name || '-'}</td>
              <td className="px-5 py-3">{user.email}</td>
              <td className="px-5 py-3">
                <span className={`px-2 py-0.5 rounded text-xs ${user.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {user.is_active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-5 py-3 text-right">
                <a
                  href={`?e=edit&id=${user.id}`}
                  className="text-indigo-400 hover:text-indigo-300 text-sm"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}