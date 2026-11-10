import React from 'react';

export default function Dashboard() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-purple-950 via-purple-900 to-slate-950 text-white overflow-hidden flex items-center">
      
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Teks Kiri */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              WELCOME TO <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                OUR SITE
              </span>
            </h1>
            
            <p className="text-purple-200/80 text-sm sm:text-base max-w-lg leading-relaxed">
              The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a.
            </p>

            <div>
              <a 
                href="?e=about" 
                className="inline-block px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:opacity-95 transition-all"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Ilustrasi Laptop Kanan */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-slate-900 rounded-t-2xl border-4 border-slate-700/80 shadow-2xl overflow-hidden aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-indigo-900/40 to-pink-900/30 flex items-center justify-center p-4">
                  <div className="w-full h-full border border-purple-500/20 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                    <span className="text-xs font-medium tracking-wider text-purple-200">Interactive Workspace</span>
                  </div>
                </div>
              </div>
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