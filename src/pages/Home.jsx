export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white tracking-wide">Shin Kairi</h1>
      <p className="text-slate-400 mt-2 mb-8">Corporate System</p>
      <a
        href="?e=login"
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition"
      >
        Login
      </a>
    </div>
  )
}