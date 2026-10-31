import React, { useState } from 'react';
import styles from './Login.module.css';

export default function Input() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('❌ Kata sandi tidak cocok!');
      setIsSuccess(false);
      return;
    }

    setMessage('Sedang menyimpan ke PostgreSQL...');

    // Mengirim data ke Container Backend Node.js di port 5000
    fetch('http://may.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ id: id, password: password })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('ID sudah terdaftar atau terjadi kesalahan server.');
        }
        return res.json();
      })
      .then((data) => {
        setIsSuccess(true);
        setMessage('✅ Akun Berhasil Terdaftar di PostgreSQL!');
        setId('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((err) => {
        setIsSuccess(false);
        setMessage(`❌ Gagal: ${err.message}`);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ borderColor: '#3b82f6' }}>
        <div className={styles.avatar} style={{ backgroundColor: '#3b82f6' }}>
          <svg style={{ width: '48px', height: '48px', color: '#0f172a' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>

        <h2 className={styles.title}>REGISTRATION</h2>
        <p className={styles.subtitle}>CREATE NEW ACCOUNT TO POSTGRES</p>

        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <input 
                type="text" 
                value={id} 
                onChange={e => setId(e.target.value)} 
                placeholder="Create User ID" 
                className={styles.inputField} 
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password" 
                className={styles.inputField} 
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password" 
                className={styles.inputField} 
                required 
              />
            </div>
          </div>

          <button type="submit" className={styles.loginButton} style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)' }}>
            REGISTER TO DB
          </button>

          {message && (
            <div style={{ color: isSuccess ? '#4ade80' : '#ef4444', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>
              {message}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <a href="/bos/login" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>← Kembali ke Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
