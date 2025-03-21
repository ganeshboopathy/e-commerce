import React from 'react'
import '../product_view/View.css'
import { useParams } from 'react-router-dom';
import { popular_dress } from '../../data/popular_girl';
import { TbShoppingCartPlus } from "react-icons/tb";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Iteam from '../iteams/Iteam';
import Offer from '../offer/Offer';
import { BlinkBlur } from 'react-loading-indicators';
import {data_e_commerce} from '../../data/data'
import { useEffect, useState } from 'react';
import Order_form from './Order_form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/CardSlice';

const Order = () => {
  
    const { id} = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    
        

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={`full-${index}`} style={{ color: 'gold', fontSize: '1.5rem' }} />
                ))}
                {halfStar && <FaStarHalfStroke key="half" style={{ color: 'gold', fontSize: '1.5rem' }} />}
                {[...Array(emptyStars)].map((_, index) => (
                    <CiStar key={`empty-${index}`} style={{ color: 'gray', fontSize: '1.5rem' }} />
                ))}
            </>
        );
    };

    if (loading) {
        return (
            <div className="loading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <BlinkBlur color="blue" size="large" text="loading" textColor="gray" />
</div>
        );
    }

    return (
        <div className="full-view-container in-mobile-view">
               <div style={{ margin: '3rem' }}>
            {data_e_commerce.map((iteam) => {
                            if (Number(id) === iteam.id) {
                                return (
                                    <div key={iteam.id} className='view-container'>
                                        <div>
                                            <div className='category'>
                                                <div className='category-name'>
                                                    {iteam.category_in_view.map((item, index) => (
                                                        <h2 key={index}>{item}/</h2>
                                                    ))}
                                                </div>
                                                <div className='img-container-view-aling'>
                                                    <div className='img-container-view'>
                                                        <img src={iteam.image} alt="dress" className='img-view' />
                                                        <img src={iteam.image} alt="dress" className='img-view cover-img' />
                                                        <img src={iteam.image} alt="dress" className='img-view' />
                                                        <img src={iteam.image} alt="dress" className='img-view' />
                                                        <img src={iteam.image} alt="dress" className='img-view' />
                                                        <img src={iteam.image} alt="dress" className='img-view' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div >
                                            <div style={{ display: 'flex', flexDirection:'column', marginTop: "10px", gap: '0px', alignItems: 'start' }}>
                                                <h1 style={{ fontWeight: 'bold' }}>Description :</h1><br/>
                                                <h2 className='description-view'>{iteam.description}</h2>
                                            </div>
            
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                                <h2 style={{ fontWeight: 'bold' }}>Rating:</h2>
                                                {renderStars(iteam.rating)}
                                                <span style={{ fontSize: '1.2rem', color: 'gray' }}>({iteam.rating})</span>
                                            </div>
            
                                            <div className='' style={{ display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center', marginTop: '50px',justifyItems:'center' }}>
                                                <button className="btn" >
                                                    Add to Cart <TbShoppingCartPlus  className='view-icon' />
                                                </button>
                                                <h1 style={{ color: 'green' }}>Price : {iteam.new_price}</h1>
                                                <h2 style={{ color: 'gray', textDecoration: "line-through" }}>Old price :{iteam.old_price}</h2>
                                            </div>
            
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', margin: '2rem', justifyContent: 'center' }}>
                                                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                                                <h2 style={{ color: 'red' }}>Limited Offer</h2>
                                                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                                            </div>

                                <Order_form/>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '1rem', justifyContent: 'center', width: '100%' }}>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                <button className='btn back-to-home' onClick={()=>navigate('/')}>Back to home</button>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
            </div>          
        </div>
        </div>
       
    );  
}

export default Order