import React from 'react'
import './Iteam.css'
import { popular_dress } from '../../data/popular_girl'
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Riple } from 'react-loading-indicators';
export const Iteam = ({ id, image, description, new_price, old_price }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-container" style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center', height: '100vh',gap:'50px' }}>
           <Riple color="blue" size="large" text="" textColor="" />
</div>
    );
  }

  return (
    <div>
      <div className='card' onClick={() => { navigate(`/view/${id}`) }}>
        <div key={id} className='card-container'>
          <img src={image} alt={description} className='image-container' />
          <h4 className='description'>{description}</h4>
          <div className='price-container'>
            <div className='box'>
              <p style={{ fontWeight: '800' }}> ${new_price}</p>
              <p style={{ color: 'gray', textDecoration: "line-through" }}> ${old_price}</p>
            </div>
            <button className='btn'>Add to Cart <TbShoppingCartPlus style={{ fontSize: '1.5rem' }} /> </button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Iteam
// {
//         id: 1,
//         image: popular,
//         description: "A trendy floral dress with a breezy design, perfect for summer outings and casual wear.",
//         new_price: 75,
//         old_price: 110,
//     }

// {id,image,description,new_price,old_price}