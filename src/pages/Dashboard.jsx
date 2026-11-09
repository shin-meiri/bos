export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-black mb-4">
        SHIN <span className="text-indigo-400">KAIRI</span>
      </h1>
      <p className="text-slate-400 mb-8">Corporate System</p>
      <a href="?e=login" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition">
        Login
      </a>
    </div>
  )
}