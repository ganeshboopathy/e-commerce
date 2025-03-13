import React from 'react'
import './Iteam.css'
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Riple } from 'react-loading-indicators';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/CardSlice';
import {removeCard} from '../../store/CardSlice'


export const Iteam = ({ id, image, description, new_price, old_price,category}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const dispatch= useDispatch()
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
  const addtoCard = (id)=>{
    dispatch(addCard(id))
    
  }
 
  return (
    <div>
      <div className='card' >
        <div key={id} className='card-container'>
          <img src={image} alt={description} className='image-container' onClick={() => { navigate(`/view/${id}/${category}`) }} />
          <h4 className='description'>{description}</h4>
          <div className='price-container'>
            <div className='box' >
              <p style={{ fontWeight: '800' }}> ${new_price}</p>
              <p style={{ color: 'gray', textDecoration: "line-through" }}> ${old_price}</p>
            </div>
            <button className='btn' onClick={()=>addtoCard(id)}>Add to Cart <TbShoppingCartPlus style={{ fontSize: '1.5rem' }} /> </button>
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