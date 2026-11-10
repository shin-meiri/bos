import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import About from './pages/About';
import Admin from './pages/Admin';

export default function App() {
  // Membaca parameter URL (contoh: ?e=login)
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('e') || 'home'; // Default ke 'home' jika parameter kosong

  // Menentukan komponen halaman yang akan dirender
  const renderPage = () => {
    switch (page) {
      case 'home':
      case 'dashboard':
        return <Dashboard />;
      case 'login':
        return <Login />;
      case 'daftar':
        return <Daftar />;
      case 'about':
        return <About />;
      case 'admin':
        return <Admin />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a1a] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      <Head />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}