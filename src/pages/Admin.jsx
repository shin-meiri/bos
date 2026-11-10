import React from 'react';

export default function Admin() {
  // Data dummy yang disesuaikan dengan struktur tabel users pada database Anda
  const usersData = [
    {
      id: 1,
      email: 'amy@mayhost.com',
      full_name: 'amy',
      hashed_password: '$2b$12$iAZ55HrrL1EuwO3SfbUW.5xjWFoi1zu.e/SbDcVerWciMP3rRbFe',
      is_active: true,
      is_superuser: false,
      created_at: '2026-11-05 14:08:40'
    },
    {
      id: 4,
      email: 'endi@mayhost.com',
      full_name: 'amy',
      hashed_password: '$2b$12$Ob1pKjyhnOX4j2B4ImIVuOKW//GCtSVhE/Ekm/93gMsvOxzMMAD8a',
      is_active: true,
      is_superuser: false,
      created_at: '2026-11-05 14:10:19'
    },
    {
      id: 5,
      email: 'aku@mayhost.com',
      full_name: 'Aku Oke',
      hashed_password: '$2b$12$n6SpzjXJ5pV5B0.i/Wz1i.NQGAnMznkbS6ywBG1uh2zpgkTNbEUXC',
      is_active: true,
      is_superuser: false,
      created_at: '2026-11-09 12:35:02'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#2e1a47] via-[#1e1330] to-[#0f0a1a] text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Area Admin */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#1e1330]/80 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-xl gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              CWP Area Admin
            </h1>
            <p className="text-purple-200/70 text-sm mt-1">Selamat datang kembali, Administrator.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-300">
              Role: Super Admin
            </span>
            <a 
              href="?e=home" 
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-xl text-xs font-semibold transition-all"
            >
              Logout
            </a>
          </div>
        </div>

        {/* Statistik Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Total Pengguna</p>
            <h3 className="text-3xl font-bold mt-2 text-white">3</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">Active Database</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Aktivitas Server</p>
            <h3 className="text-3xl font-bold mt-2 text-white">99.9%</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">Normal & Stabil</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Database</p>
            <h3 className="text-3xl font-bold mt-2 text-white">PostgreSQL</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">maydb.public.users</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Keamanan</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">Secure</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Bcrypt Hashed</span>
          </div>
        </div>

        {/* Tabel Data Users */}
        <div className="bg-[#1e1330]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-purple-200">Database Table: <span className="text-pink-400">users</span></h3>
            <span className="text-xs px-3 py-1 bg-purple-950 border border-purple-500/30 rounded-lg text-purple-300">Total: 3 rows</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-purple-200/80 font-mono">
              <thead className="border-b border-purple-500/20 text-[11px] uppercase text-purple-300 bg-purple-950/60">
                <tr>
                  <th className="p-3.5 rounded-l-xl">id</th>
                  <th className="p-3.5">email</th>
                  <th className="p-3.5">full_name</th>
                  <th className="p-3.5">hashed_password</th>
                  <th className="p-3.5">is_active</th>
                  <th className="p-3.5">is_superuser</th>
                  <th className="p-3.5 rounded-r-xl">created_at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {usersData.map((user) => (
                  <tr key={user.id} className="hover:bg-purple-900/20 transition-colors">
                    <td className="p-3.5 font-bold text-white">{user.id}</td>
                    <td className="p-3.5 text-pink-300">{user.email}</td>
                    <td className="p-3.5 text-white">{user.full_name}</td>
                    <td className="p-3.5 text-purple-400/70 truncate max-w-[200px]" title={user.hashed_password}>
                      {user.hashed_password}
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px]">
                        {user.is_active ? 'true' : 'false'}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-[10px]">
                        {user.is_superuser ? 'true' : 'false'}
                      </span>
                    </td>
                    <td className="p-3.5 text-purple-300/80">{user.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}