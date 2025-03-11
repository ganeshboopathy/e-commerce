import React from 'react'
import '../popular_dress/Popular.css'
import {kids_data} from '../../data/kids'
import Iteam from '../iteams/Iteam'
import {data_e_commerce} from '../../data/data'
const Kids = () => {
  return (
<div>
    <div className="popular-container">
        <h1 style={{textAlign:'center',marginTop:'30px',marginBottom:'10px'}}>POPULAR  IN  KIDS</h1>
        <hr style={{textAlign:'center', width:'200px',height:'7px', backgroundColor:'black',marginBottom:'20px'}}></hr>
        {/* <Iteam/> */}
        <div className='card-popular'>
        {data_e_commerce.map((iteam,index)=>{
          if(iteam.category=='kids')
          return(
            <Iteam
            key={iteam.id} // Always provide a key when mapping
            id={iteam.id}
            image={iteam.image}
            description={iteam.description}
            new_price={iteam.new_price}
            old_price={iteam.old_price}
            category={iteam.category
            }
          /> )
        })}
        {data_e_commerce.map((iteam,index)=>{
          if(iteam.category=='kids')
          return(
            <Iteam
            key={iteam.id} // Always provide a key when mapping
            id={iteam.id}
            image={iteam.image}
            description={iteam.description}
            new_price={iteam.new_price}
            old_price={iteam.old_price}
            category={iteam.category}
          /> )
        })}
        </div>
    </div>
</div>   )
}

export default Kids