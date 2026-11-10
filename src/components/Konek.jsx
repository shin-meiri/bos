const API = '/api/v1'

// Helper untuk ambil token
function getToken() {
  return localStorage.getItem('token')
}

// Helper header dengan token
function authHeader() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// =====================
// AUTH
// =====================

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
  // payload: { email, full_name, password }
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Register gagal')
  return data
}

export async function getMe() {
  const res = await fetch(`${API}/auth/me`, {
    headers: {
      ...authHeader(),
    },
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal ambil data user')
  return data
}

export function logout() {
  localStorage.removeItem('token')
  window.location.href = '?e=login'
}

// =====================
// USERS (CRUD)
// =====================

// READ - Ambil semua user
export async function getUsers() {
  const res = await fetch(`${API}/users`, {
    headers: {
      ...authHeader(),
    },
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal ambil daftar user')
  return data
}

// READ - Ambil satu user by ID
export async function getUser(id) {
  const res = await fetch(`${API}/users/${id}`, {
    headers: {
      ...authHeader(),
    },
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal ambil user')
  return data
}

// CREATE - Tambah user baru
export async function createUser(payload) {
  // payload: { email, full_name, password }
  const res = await fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal menambah user')
  return data
}

// UPDATE - Edit user
export async function updateUser(id, payload) {
  // payload: { email?, full_name?, password?, is_active? }
  const res = await fetch(`${API}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Gagal update user')
  return data
}

// DELETE - Hapus user
export async function deleteUser(id) {
  const res = await fetch(`${API}/users/${id}`, {
    method: 'DELETE',
    headers: {
      ...authHeader(),
    },
  })

  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.detail || 'Gagal hapus user')
  }

  return true
}