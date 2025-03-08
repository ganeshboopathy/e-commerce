import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import HeroBannar from './component/hero/HeroBannar'
import Popular from './component/popular_dress/Popular'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    <HeroBannar/> 
    <Popular/>  
   
    </>
  )
}

export default App
