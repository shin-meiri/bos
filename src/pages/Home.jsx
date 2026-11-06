export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">BOS</h1>
      <p className="text-slate-400">Sistem berjalan</p>
      <a 
        href="?e=login" 
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
      >
        Login
      </a>
    </div>
  )
}