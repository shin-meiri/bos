export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
          BOS
        </h1>
        <p className="text-cyan-400/70 tracking-[0.3em] text-sm">CONTROL SYSTEM ONLINE</p>

        <a
          href="?e=login"
          className="inline-block px-10 py-4 mt-6 font-bold tracking-widest text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300"
        >
          LOGIN
        </a>
      </div>
    </div>
  )
}