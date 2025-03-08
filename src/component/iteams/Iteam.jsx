import React from 'react'
import './Iteam.css'
import {popular_dress} from '../../data/popular_girl'
export const Iteam = () => {
  return (
    <div>
        <div className='card'>
            {popular_dress.map((iteam,index)=>{
                return(
                    <div key={iteam.id} className='card-container'>
                        <img src={iteam.image} alt={iteam.description}  className='image'/>
                        <h4 className='description'>{iteam.description}</h4>
                        <div className='price-container'>
                          <p> ${iteam.new_price}</p>
                          <p style={{ color: 'gray', textDecoration: "line-through" }}> ${iteam.old_price}</p>
                          </div>    
                    </div>
                )
            })}
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