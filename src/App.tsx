import { useEffect, useState, ComponentType } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';

// Membaca folder src/bos/ secara otomatis
const bosModules = import.meta.glob('/src/bos/**/*.{tsx,jsx}');

function BosDynamicLoader() {
  // Mengambil sisa parameter rute wildcards
  const params = useParams();
  const fileName = params['*'];
  
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Jika tidak ada parameter (akses /), otomatis membaca Page.jsx/tsx
    const targetName = fileName ? (fileName.charAt(0).toUpperCase() + fileName.slice(1)) : 'Page';
    
    const fullPath = `/src/bos/${targetName}.tsx`; 
    const fullPathJsx = `/src/bos/${targetName}.jsx`;
    
    const importFunction = bosModules[fullPath] || bosModules[fullPathJsx];

    if (importFunction) {
      setError(null);
      importFunction()
        .then((mod: any) => {
          setComponent(() => mod.default || Object.values(mod)[0]);
        })
        .catch(() => {
          setError(`Gagal memuat komponen: ${targetName}`);
        });
    } else {
      setError(`File tidak ditemukan di src/bos/${targetName}.jsx/tsx`);
      setComponent(null);
    }
  }, [fileName]);

  if (error) return <div style={{ padding: '20px', color: 'red', fontFamily: 'sans-serif' }}>❌ {error}</div>;
  if (!Component) return <div style={{ padding: '20px', color: '#aaa', fontFamily: 'sans-serif' }}>Memuat halaman...</div>;

  return <Component />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 1. Jalur Otomatis untuk folder bos menggunakan HashRouter */}
        <Route path="/bos/*" element={<BosDynamicLoader />} />
        
        {/* 2. JALUR UTAMA (HOME /) */}
        <Route path="/" element={<BosDynamicLoader />} />
      </Routes>
    </HashRouter>
  );
}
