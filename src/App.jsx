import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Admin from './pages/Admin';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    const handleRouteChange = () => {
      const params = new URLSearchParams(window.location.search);
      let page = params.get('e');
      if (!page) {
        const hash = window.location.hash.replace('#', '');
        page = hash || 'home';
      }
      setCurrentRoute(page.toLowerCase());
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0a1a] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      <Head />
      <main className="flex-grow">
        {(currentRoute === 'home' || currentRoute === 'dashboard') && <Dashboard />}
        {currentRoute === 'login' && <Login />}
        {currentRoute === 'daftar' && <Daftar />}
        {currentRoute === 'admin' && <Admin />}
        {currentRoute !== 'home' && currentRoute !== 'dashboard' && currentRoute !== 'login' && currentRoute !== 'daftar' && currentRoute !== 'admin' && <Dashboard />}
      </main>
      <Footer />
    </div>
  );
}