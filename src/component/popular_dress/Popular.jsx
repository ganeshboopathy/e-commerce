import React from 'react'
import './Popular.css'
import Iteam from '../iteams/Iteam'
import Offer from '../offer/Offer'
import { New_collection } from '../iteams/New_collection'
export const Popular = () => {
  return (
    <div>
        <div className="popular-container">
            <h1 style={{textAlign:'center',marginTop:'100px',marginBottom:'10px'}}>POPULAR  IN  WOMEN</h1>
            <hr style={{textAlign:'center', width:'300px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
            <Iteam/>
            <Offer/>
            <h1 style={{textAlign:'center',marginTop:'100px',marginBottom:'10px'}}>NEW COLLECTION</h1>
            <hr style={{textAlign:'center', width:'300px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
            <New_collection/>
        </div>
    </div>
  )
}
export default Popular
