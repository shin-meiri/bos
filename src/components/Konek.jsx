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

// Nanti bisa ditambah:
// getUsers, updateUser, deleteUser, dll