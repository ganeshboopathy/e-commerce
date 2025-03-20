import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBannar from './component/hero/Herobannar'
import Offer from './component/offer/Offer'
import Popular from './component/popular_dress/Popular'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='layout'>
         <HeroBannar/>
         <Popular/>
         <Offer/>
      </div>
    </>
  )
}

export default App
