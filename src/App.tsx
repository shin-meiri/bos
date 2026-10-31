import { useEffect, useState, ComponentType } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// Membaca folder src/bos/ secara otomatis
const bosModules = import.meta.glob('/src/bos/**/*.{tsx,jsx}');

function BosDynamicLoader() {
  const { "*": fileName } = useParams();
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Jika tidak ada parameter (berarti akses root /), kita paksa muat Page.jsx
    const targetName = fileName ? (fileName.charAt(0).toUpperCase() + fileName.slice(1)) : 'Page';
    
    const fullPath = `/src/bos/${targetName}.tsx`; 
    const fullPathJsx = `/src/bos/${targetName}.jsx`;
    
    const importFunction = bosModules[fullPath] || bosModules[fullPathJsx];

    if (importFunction) {
      setError(null);
      importFunction()
        .then((mod: any) => {
          setComponent(() => mod.default || Object.values(mod));
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
    <BrowserRouter>
      <Routes>
        {/* 1. Jalur Otomatis untuk folder bos */}
        <Route path="/bos/*" element={<BosDynamicLoader />} />
        
        {/* 2. JALUR UTAMA (HOME /): Sekarang langsung memanggil BosDynamicLoader tanpa membawa nama file, sehingga otomatis membaca Page.jsx */}
        <Route path="/" element={<BosDynamicLoader />} />
      </Routes>
    </BrowserRouter>
  );
}
