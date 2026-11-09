import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '?e=login'
      return
    }
    fetch('/api/v1/auth/me', {
      headers: {
      Authorization: `Bearer ${token}`,
      },
    })

      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => {
        localStorage.removeItem('token')
        window.location.href = '?e=login'
      })
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '?e=login'
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400 mb-1">Selamat datang,</p>
          <p className="text-xl font-medium">{user.full_name || user.email}</p>
          <p className="text-sm text-slate-500 mt-2">{user.email}</p>
        </div>
      </div>
    </div>
  )
}