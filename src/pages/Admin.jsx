import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, updateUser } from '../components/Konek';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Ambil data user saat komponen dimuat
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setError('');
    } catch (err) {
      setError(err.message || 'Gagal memuat data pengguna dari server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Hapus User
  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus user ini?')) return;
    try {
      await deleteUser(id);
      setSuccessMsg('User berhasil dihapus.');
      fetchUsers(); // Refresh data tabel
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      alert(err.message || 'Gagal menghapus user.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#2e1a47] via-[#1e1330] to-[#0f0a1a] text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Area Admin */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#1e1330]/80 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-xl gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              CWP Area Admin
            </h1>
            <p className="text-purple-200/70 text-sm mt-1">Kelola data pengguna langsung dari database backend.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-300">
              Role: Super Admin
            </span>
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user_session');
                window.location.href = '?e=login';
              }}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-xl text-xs font-semibold transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Notifikasi Pesan */}
        {successMsg && (
          <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl text-sm">
            {successMsg}
          </div>
        )}
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-xl text-sm">
            {error} (Pastikan endpoint backend `/api/v1/users` sudah aktif).
          </div>
        )}

        {/* Statistik Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Total Pengguna</p>
            <h3 className="text-3xl font-bold mt-2 text-white">{users.length}</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">Live Database</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Aktivitas Server</p>
            <h3 className="text-3xl font-bold mt-2 text-white">99.9%</h3>
            <span className="text-emerald-400 text-xs font-semibold mt-2 inline-block">Normal & Stabil</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Database</p>
            <h3 className="text-3xl font-bold mt-2 text-white">PostgreSQL</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Connected</span>
          </div>
          <div className="bg-[#1e1330]/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-lg">
            <p className="text-purple-300/70 text-xs font-medium uppercase tracking-wider">Keamanan</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">Secure</h3>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">JWT Bearer Token</span>
          </div>
        </div>

        {/* Tabel Data Users */}
        <div className="bg-[#1e1330]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-purple-200">Database Table: <span className="text-pink-400">users</span></h3>
            <button 
              onClick={fetchUsers}
              className="px-3 py-1.5 bg-purple-900/50 hover:bg-purple-900 border border-purple-500/30 rounded-xl text-xs text-purple-200 transition-all"
            >
              🔄 Refresh Data
            </button>
          </div>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center py-10 text-purple-300">Memuat data dari server...</div>
            ) : users.length === 0 ? (
              <div className="text-center py-10 text-purple-300">Belum ada data user di database.</div>
            ) : (
              <table className="w-full text-left text-xs text-purple-200/80 font-mono">
                <thead className="border-b border-purple-500/20 text-[11px] uppercase text-purple-300 bg-purple-950/60">
                  <tr>
                    <th className="p-3.5 rounded-l-xl">id</th>
                    <th className="p-3.5">email</th>
                    <th className="p-3.5">full_name</th>
                    <th className="p-3.5">hashed_password</th>
                    <th className="p-3.5">is_active</th>
                    <th className="p-3.5">is_superuser</th>
                    <th className="p-3.5 rounded-r-xl text-center">aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-purple-900/20 transition-colors">
                      <td className="p-3.5 font-bold text-white">{user.id}</td>
                      <td className="p-3.5 text-pink-300">{user.email}</td>
                      <td className="p-3.5 text-white">{user.full_name || '-'}</td>
                      <td className="p-3.5 text-purple-400/70 truncate max-w-[150px]" title={user.hashed_password}>
                        {user.hashed_password}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${user.is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                          {String(user.is_active)}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${user.is_superuser ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-500/20 text-slate-300'}`}>
                          {String(user.is_superuser)}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="px-2.5 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded text-[11px] transition-all"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}