export default function Head() {
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '?e=home'
  }

  return (
    <header className="bg-slate-900/90 border-b border-slate-800 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="?e=home" className="font-bold text-lg tracking-wide text-white">
          Shin <span className="text-indigo-400">Kairi</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="?e=home" className="text-slate-300 hover:text-white transition">Home</a>
          <a href="?e=post" className="text-slate-300 hover:text-white transition">Post</a>
          <a href="?e=about" className="text-slate-300 hover:text-white transition">About</a>
          <a href="?e=search" className="text-slate-300 hover:text-white transition">Search</a>
        </nav>

        <div className="flex items-center gap-3">
          {token ? (
            <>
              <a href="?e=admin" className="text-sm text-indigo-400 hover:text-indigo-300">
                Admin
              </a>
              <button onClick={logout} className="text-sm text-slate-400 hover:text-white">
                Logout
              </button>
            </>
          ) : (
            <a
              href="?e=login"
              className="px-4 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </header>
  )
}