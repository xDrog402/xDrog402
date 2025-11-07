import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Join from './pages/Join'
import Live from './pages/Live'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/join" element={<Join />} />
      <Route path="/live" element={<Live />} />
    </Routes>
  )
}

export default App

