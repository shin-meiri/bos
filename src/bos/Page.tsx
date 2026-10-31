import React from 'react';

export default function Page() {
  return (
    <div style={{
      backgroundColor: '#0b0f19',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* MENU HEADER ATAS */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        backgroundColor: '#ffffff',
        color: '#333333',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#22c55e', color: 'white', fontWeight: 'bold', padding: '5px 10px', borderRadius: '4px', fontSize: '14px' }}>X-LEGEND</div>
          <span style={{ fontWeight: 700, letterSpacing: '1px', color: '#111' }}>ENTERTAINMENT</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '30px', fontWeight: 500, fontSize: '15px' }}>
          <span style={{ color: '#22c55e', cursor: 'pointer' }}>Games ▾</span>
          <span style={{ cursor: 'pointer', color: '#555' }}>Support</span>
          {/* TOMBOL LOGIN DI POJOK ATAS */}
          <span 
            onClick={() => window.location.href = '/bos/login'} 
            style={{ cursor: 'pointer', color: '#22c55e', fontWeight: 'bold', border: '1px solid #22c55e', padding: '4px 14px', borderRadius: '4px' }}
          >
            Member Center (Login)
          </span>
        </nav>
      </header>

      {/* BANNER UTAMA JALUR FANTASI */}
      <div style={{
        height: 'calc(100vh - 65px)',
        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), #0b0f19), url("https://unsplash.com") center/cover no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '4px', textShadow: '0 4px 12px rgba(0,0,0,0.8)', margin: '0 0 10px 0' }}>
          GRAND FANTASIA
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', letterSpacing: '1px', margin: '0 0 35px 0', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
          FANTASY ADVENTURE MASTERPIECE<br/>Global Direct Operations
        </p>

        {/* TOMBOL AKSI BAWAH BANNER */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={{ backgroundColor: '#ffffff', color: '#111', padding: '12px 35px', borderRadius: '30px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>Sign Up</button>
          <button style={{ background: 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)', color: '#000', padding: '12px 45px', borderRadius: '30px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>Play Now</button>
          <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '12px 35px', borderRadius: '30px', fontWeight: 600, border: '1px solid #555', cursor: 'pointer' }}>Account Transfer</button>
        </div>
      </div>
    </div>
  );
}
