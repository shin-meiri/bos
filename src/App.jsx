import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Head from './components/Head';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Admin from './pages/Admin';
import About from './pages/About';
import Search from './pages/Search';

export default function App() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('e') || 'home';

  const pages = {
    home: <Dashboard />,
    login: <Login />,
    daftar: <Daftar />,
    admin: <Admin />,
    about: <About />,
    search: <Search />,
  };

  // Sembunyikan Header dan Footer di halaman login dan daftar
  const noLayout = ['login', 'daftar'].includes(page);

  return (
    <div className="min-h-screen bg-[#0f0a1a] text-white flex flex-col font-sans">
      {!noLayout && <Head />}
      <main className="flex-1">
        {pages[page] || <Dashboard />}
      </main>
      {!noLayout && <Footer />}
    </div>
  );
}