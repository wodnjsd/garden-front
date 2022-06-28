import React from 'react'
import Home from './components/Home'
import PlantIndex from './components/PlantIndex'
import PlantShow from './components/PlantShow'
import PlantCare from './components/PlantCare'
import PlantCareIndoor from './components/PlantCareIndoor'
import PlantCareOutdoor from './components/PlantCareOutdoor'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import CreatePlant from './components/CreatePlant'
import Cart from './components/Cartstyle'
import Questionnaire from './components/Questionnaire'



function App() {
  // ! 1) You need a router. You'll pretty always use BrowserRouter
  // ! 2) You make a Routes component inside.
  // ! 3) You create all the actual Route components.
  // ! Those need 2 things: URL path, and the actual component to render.

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantIndex />} />
        <Route path="/plants/:plantId" element={<PlantShow />} />
        <Route path="/plantcare" element={<PlantCare />} />
        <Route path="/plantcare/indoor" element={<PlantCareIndoor />} />
        <Route path="/plantcare/outdoor" element={<PlantCareOutdoor />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/logout" element={<Logout/>} /> */}
        <Route path="/createplant" element={<CreatePlant/>} />
        <Route path="/Questionnaire" element={<Questionnaire/>} />

      </Routes>
    </Router>
  )
}

export default App
