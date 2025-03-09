import React from 'react'
import './Popular.css'
import Iteam from '../iteams/Iteam'
import Offer from '../offer/Offer'
import { new_collection } from '../../data/new-collection'
import {popular_dress} from '../../data/popular_girl'
export const Popular = () => {
  return (
    <div>
        <div className="popular-container">
            <h1 style={{textAlign:'center',marginTop:'30px',marginBottom:'10px'}}>POPULAR  IN  WOMEN</h1>
            <hr style={{textAlign:'center', width:'300px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
            {/* <Iteam/> */}
            <div className='card-popular'>
            {popular_dress.map((iteam,index)=>{
              return(
                <Iteam
                key={iteam.id} // Always provide a key when mapping
                id={iteam.id}
                image={iteam.image}
                description={iteam.description}
                new_price={iteam.new_price}
                old_price={iteam.old_price}
              /> )
            })}
            </div>
            <Offer/>
            <h1 style={{textAlign:'center',marginTop:'100px',marginBottom:'10px'}}>NEW COLLECTION</h1>
            <hr style={{textAlign:'center', width:'200px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
            {/* <New_collection/> */}
            <div className='card-popular'>
            {new_collection.map((iteam,index)=>{
              return(
                <Iteam
                key={iteam.id} // Always provide a key when mapping
                id={iteam.id}
                image={iteam.image}
                description={iteam.description}
                new_price={iteam.new_price}
                old_price={iteam.old_price}
              /> )
            })}
            </div>
        </div>
    </div>
  )
}
export default Popular
