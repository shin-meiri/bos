import { useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('e') || 'home'

  const pages = {
    home: <Home />,
    login: <Login />,
    dashboard: <Dashboard />,
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {pages[page] || <Home />}
    </div>
  )
}

export default App