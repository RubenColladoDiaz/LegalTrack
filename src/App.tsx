import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/Exercici33" element={<Home />} />
          <Route path="/Exercici35" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
