import React from 'react'
import '../popular_dress/Popular.css'
import Iteam from '../iteams/Iteam'
import {mens_data}from '../../data/mens'
const Mens = () => {
  return (
    <div>
    <div className="popular-container">
        <h1 style={{textAlign:'center',marginTop:'30px',marginBottom:'10px'}}>POPULAR  IN  MEN</h1>
        <hr style={{textAlign:'center', width:'200px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
        {/* <Iteam/> */}
        <div className='card-popular'>
        {mens_data.map((iteam,index)=>{
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
        {mens_data.map((iteam,index)=>{
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

export default Mens