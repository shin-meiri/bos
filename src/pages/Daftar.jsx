export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#0a0e17]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#0a0e17] to-[#0a0e17]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-3">
          SHIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">KAIRI</span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-indigo-500/40"></div>
          <p className="text-indigo-300/70 text-sm tracking-[0.35em] uppercase">Corporate System</p>
          <div className="h-px w-12 bg-indigo-500/40"></div>
        </div>

        <a
          href="?e=login"
          className="inline-block px-12 py-4 font-bold tracking-widest text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
        >
          LOGIN
        </a>
      </div>
    </div>
  )
}