import React from 'react'
import '../popular_dress/Popular.css'
import Iteam from '../iteams/Iteam'
import {women_data} from '../../data/women'
import {popular_dress} from '../../data/popular_girl'
const Women = () => {
  return (
<div>
    <div className="popular-container">
        <h1 style={{textAlign:'center',marginTop:'30px',marginBottom:'10px'}}>POPULAR  IN   WOMEN</h1>
        <hr style={{textAlign:'center', width:'200px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
        {/* <Iteam/> */}
        <div className='card-popular'>
        {women_data.map((iteam,index)=>{
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
    </div>
</div>   )
}

export default Women