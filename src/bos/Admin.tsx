import React from 'react';

export default function Admin() {
  return (
    <div style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      margin: 0
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        border: '2px solid #22c55e',
        borderRadius: '8px',
        padding: '30px 50px',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.4)'
      }}>
        <h2 style={{ color: '#22c55e', margin: '0 0 10px 0' }}>✅ Login Berhasil!</h2>
        <p style={{ color: '#94a3b8', margin: '0 0 20px 0', fontSize: '14px' }}>Anda telah masuk menggunakan data akun dari user.json.</p>
        <a href="/" style={{ color: '#4ade80', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>Kembali ke Beranda</a>
      </div>
    </div>
  );
}
