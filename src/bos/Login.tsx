import React, { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Memverifikasi data ke Backend Jembatan PostgreSQL
    fetch('http://may.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ id: username, password: password })
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          window.location.href = '/bos/admin'; // Lolos ke halaman sukses
        } else {
          setError('ID Pengguna atau Kata Sandi Salah!');
        }
      })
      .catch((err) => {
        setLoading(false);
        setError('Gagal terhubung ke server database database.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <svg style={{ width: '48px', height: '48px', color: '#0f172a' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        
        <h2 className={styles.title}>MEMBER CENTER</h2>
        <p className={styles.subtitle}>X-LEGEND ENTERTAINMENT</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className={styles.inputBox}>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="User ID / Username" 
                className={styles.inputField} 
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className={styles.inputBox}>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className={styles.inputField} 
                required 
              />
            </div>
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" defaultChecked style={{ width: '15px', height: '15px' }} />
              <span>Remember Me</span>
            </label>
            <a href="#" className={styles.forgotLink}>Forgot ID/Password?</a>
          </div>

          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'VERIFYING...' : 'SIGN IN'}
          </button>
          
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </div>
  );
}
