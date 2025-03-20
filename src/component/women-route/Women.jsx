import React from 'react'
import '../popular_dress/Popular.css'
import Iteam from '../iteams/Iteam'
import { data_e_commerce } from '../../data/data'
const Women = () => {
  return (
    <div>
      <div className="popular-container">
        <h1 >POPULAR  IN   WOMEN</h1>
        <hr ></hr>
        {/* <Iteam/> */}
        <div className='card-popular'>
          {data_e_commerce.map((iteam, index) => {
            if (iteam.category == 'women')
              return (
                <Iteam
                  key={iteam.id} // Always provide a key when mapping
                  id={iteam.id}
                  image={iteam.image}
                  description={iteam.description}
                  new_price={iteam.new_price}
                  old_price={iteam.old_price}
                  category={iteam.category}
                />)
          })}
          {data_e_commerce.map((iteam, index) => {
            if (iteam.category == 'popular_dress')
              return (
                <Iteam
                  key={iteam.id} // Always provide a key when mapping
                  id={iteam.id}
                  image={iteam.image}
                  description={iteam.description}
                  new_price={iteam.new_price}
                  old_price={iteam.old_price}
                  category={iteam.category}
                />)
          })}
        </div>
      </div>
    </div>)
}

export default Women