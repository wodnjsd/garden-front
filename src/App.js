import React from 'react'
import Home from './components/Home'
import PlantIndex from './components/PlantIndex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantIndex />} />
      </Routes>
    </Router>
  )
}

export default App
