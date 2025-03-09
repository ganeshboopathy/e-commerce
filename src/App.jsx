import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import HeroBannar from './component/hero/HeroBannar'
import Popular from './component/popular_dress/Popular'
import Footer from './component/footer/Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Mens from './component/mens-route/Mens'
import Women from './component/women-route/Women'
import Kids from './component/kids-route/Kids'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <HeroBannar/> 
    <Routes>
      <Route path="/" element={<Popular/>}/>
      <Route path="/mens" element={<Mens/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path='/kids' element ={<Kids/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
