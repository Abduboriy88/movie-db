import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Navbar from './components/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { MovieProvider } from './contexts/MovieContext'
import NotFound from './pages/NotFound'
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </main>
      </MovieProvider>
    
  )
}

export default App
