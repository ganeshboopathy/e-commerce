import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './HeroBannar.css'

export const HeroBannar = () => {
  return (
    <div>
        <div className="hero-banner">
            <div className='hero-banner-text'>
                <h2 style={{color:''}}>NEW ARRIVALS ONLY</h2>
                <h1 style={{fontSize:"5rem"}}>new<br/>Collections<br/>For everyone</h1>
                <button>Latest Collection <FaArrowRight />
                </button>
            </div>
            <div className='hero-banner-img'></div>
        </div>
    </div>
  )
}
export default HeroBannar
