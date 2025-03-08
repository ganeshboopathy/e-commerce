import React from 'react'
import './Offer.css'
const Offer = () => {
    return (
        <div className='offer-container'>
            <div className="offer-banner">
            <div className='offer-banner-text'>
                <h1 style={{ fontSize: "5rem" }}>Exclusive<br />Offers For You</h1>
                <h2 style={{color:'gray' ,marginTop:'20px'}}>ONLY ON BEST SELLERS PRODUCTS</h2>
                <button>Check now
                </button>
            </div>
            <div className='offer-banner-img'></div>
        </div>
        </div>
        )
}
export default Offer

