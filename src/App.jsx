import { useSearchParams } from 'react-router-dom'
import Head from './components/Head'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Daftar from './pages/Daftar'
import Edit from './pages/Edit'
import Admin from './pages/Admin'
import Post from './pages/Post'
import About from './pages/About'
import Search from './pages/Search'

function App() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('e') || 'home'

  const pages = {
    home: <Dashboard />,
    login: <Login />,
    daftar: <Daftar />,
    edit: <Edit />,
    admin: <Admin />,
    post: <Post />,
    about: <About />,
    search: <Search />,
  }

  // Login & Daftar tanpa navbar
  const noLayout = ['login', 'daftar'].includes(page)

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white flex flex-col">
      {!noLayout && <Head />}
      <main className="flex-1">
        {pages[page] || <Dashboard />}
      </main>
      {!noLayout && <Footer />}
    </div>
  )
}

export default App