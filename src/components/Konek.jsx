const API = '/api/v1'

export async function login(email, password) {
  const formData = new FormData()
  formData.append('username', email)
  formData.append('password', password)

  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Login gagal')
  return data
}

export async function register(payload) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Register gagal')
  return data
}

export async function getMe(token) {
  const res = await fetch(`${API}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal ambil data')
  return data
}

// ==========================================
// TAMBAHAN FITUR CRUD USER UNTUK ADMIN/APLIKASI
// ==========================================

/**
 * Mendapatkan daftar semua user (biasanya memerlukan hak akses Admin)
 * @param {string} token - Token Bearer JWT user yang sedang login
 */
export async function getUsers(token) {
  const res = await fetch(`${API}/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal mengambil daftar pengguna')
  return data
}

/**
 * Memperbarui data user berdasarkan ID
 * @param {string|number} userId - ID user yang ingin diupdate
 * @param {Object} payload - Data baru (misal: full_name, email, dll)
 * @param {string} token - Token Bearer JWT
 */
export async function updateUser(userId, payload, token) {
  const res = await fetch(`${API}/users/${userId}`, {
    method: 'PUT', // Sesuaikan dengan backend Anda (bisa PUT atau PATCH)
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal memperbarui pengguna')
  return data
}

/**
 * Menghapus user berdasarkan ID
 * @param {string|number} userId - ID user yang ingin dihapus
 * @param {string} token - Token Bearer JWT
 */
export async function deleteUser(userId, token) {
  const res = await fetch(`${API}/users/${userId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
  // Terkadang endpoint delete mengembalikan status 204 No Content (tanpa JSON body)
  if (res.status === 204) return { success: true }

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal menghapus pengguna')
  return data
}