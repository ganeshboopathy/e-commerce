import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './HeroBannar.css'

export const HeroBannar = () => {
  return (
    <div>
        <div className="hero-banner">
            <div className='hero-banner-text'  data-aos="fade-up">
                <h2 >NEW ARRIVALS ONLY</h2>
                <h1 style={{fontSize:"50px"}}>new<br/>Collections<br/>For everyone</h1>
                <button>Latest Collection <FaArrowRight />
                </button>
            </div>
            <div className='hero-banner-img'></div>
        </div>
    </div>
  )
}
export default HeroBannar
