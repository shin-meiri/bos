import React from 'react';

export default function Dashboard() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#2e1a47] via-[#1e1330] to-[#0f0a1a] text-white overflow-hidden flex items-center">
      
      {/* Efek Lingkaran Abstrak di Background */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Teks & Tombol Read More */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              WELCOME TO <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                OUR SITE
              </span>
            </h1>
            
            <p className="text-purple-200/80 text-sm sm:text-base max-w-md leading-relaxed">
              The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a.
            </p>

            <div className="pt-2">
              <a 
                href="?e=about" 
                className="inline-block px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95 transform hover:-translate-y-0.5 transition-all"
              >
                Read More
              </a>
            </div>

            {/* Titik Slider di Bawah */}
            <div className="flex items-center space-x-2 pt-8">
              <span className="w-8 h-2 bg-pink-500 rounded-full"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full"></span>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi Laptop */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Layar Laptop */}
              <div className="bg-slate-900 rounded-t-2xl border-4 border-slate-700/80 shadow-2xl overflow-hidden aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-indigo-900/40 to-pink-900/30 flex items-center justify-center p-6">
                  <div className="w-full h-full border border-purple-500/20 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-medium tracking-wider text-purple-200">Workspace Mockup Preview</span>
                  </div>
                </div>
              </div>
              {/* Bagian Bawah Laptop */}
              <div className="h-4 bg-slate-300 rounded-b-xl shadow-md mx-auto w-[110%] -ml-[5%] relative flex justify-center items-center">
                <div className="w-16 h-1 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}