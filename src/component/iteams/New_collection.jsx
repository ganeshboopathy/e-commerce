import React from 'react'
import './iteam.css'
import { new_collection } from '../../data/new-collection'

export const New_collection = () => {
  return (
   <div>
           <div className='card'>
               {new_collection.map((iteam,index)=>{
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
