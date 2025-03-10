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
import View from './component/product_view/View'
import Singup from './component/singup page/Singup'
function App() {
  const [count, setCount] = useState(0)
  const [login,setlogin]= useState(true)

  if(login){
    
    return (
      <>
      <BrowserRouter>
      <Navbar setlogin={setlogin} /> 
      <HeroBannar/> 
      <Routes>
        <Route path="/" element={<Popular/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path='/kids' element ={<Kids/>}/>
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    )
  }
  else{
    return (
      <div className='login-body'>
        <Singup setlogin={setlogin} />
      </div>
    )
  }
 
}

export default App
