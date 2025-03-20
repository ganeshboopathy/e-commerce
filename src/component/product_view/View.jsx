import React, { useEffect, useState } from 'react';
import './View.css';
import { useParams } from 'react-router-dom';
import { TbShoppingCartPlus } from "react-icons/tb";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Iteam from '../iteams/Iteam';
import Offer from '../offer/Offer';
import { BlinkBlur } from 'react-loading-indicators';
import {data_e_commerce} from '../../data/data'
import { useNavigate } from 'react-router-dom';
import {addCard} from "../../store/CardSlice"
const View = () => {
    const { id,category } = useParams();
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
                                <div style={{ display: 'flex', flexDirection:'column', marginTop: "10px", gap: '5px', alignItems: 'start' }}>
                                    <h1 style={{ fontWeight: 'bold', width: '800px' }}>Description :</h1><br/>
                                    <h2 className='description-view'>{iteam.description}</h2>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                    <h2 style={{ fontWeight: 'bold' }}>Rating:</h2>
                                    {renderStars(iteam.rating)}
                                    <span style={{ fontSize: '1.2rem', color: 'gray' }}>({iteam.rating})</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '50px' }}>
                                    <button className="btn" onClick={()=>addtoCard(iteam.id)}>
                                        Add to Cart <TbShoppingCartPlus  className='view-icon' />
                                    </button>
                                    <h1 style={{ color: 'green' }}>Price : {iteam.new_price}</h1>
                                    <h2 style={{ color: 'gray', textDecoration: "line-through" }}>Old price :{iteam.old_price}</h2>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '1rem', justifyContent: 'center' }}>
                                    <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                                    <h2 style={{ color: 'red' }}>Limited Offer</h2>
                                    <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                                </div>

                                <h2 style={{ color: 'blue' }}>Specification :</h2>
                                <ul style={{ margin: "2rem" }}>
                                    {iteam.review.map((rev, index) => (
                                        <li key={index} style={{ padding: '1rem'}} className='specification-li'>{rev}</li>
                                    ))}
                                </ul>
                                <button className='btn PlacetheOrder'  onClick={()=>{navigate(`/order/${id}`)}}>Place the Order</button>

                            </div>
                            
                        </div>
                    );
                }
                return null;
            })}
            
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '1rem', justifyContent: 'center', width: '100%' }}>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
                <button className='btn PlacetheOrder'  onClick={()=>{navigate(`/order/${id}`)}}>Place the Order</button>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }} />
            </div>

            <div className="popular-container">
                <Offer />
                <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>RELATED PRODUCTS</h1>
                <hr style={{ textAlign: 'center', width: '300px', height: '7px', backgroundColor: 'black', marginBottom: '20px' }} />
                <div className='card-popular'>
                    {data_e_commerce.map((iteam,index) => {
                        if(Number(id)!==iteam.id && category== iteam.category )
                           return <Iteam
                                key={iteam.id}
                                id={iteam.id}
                                image={iteam.image}
                                description={iteam.description}
                                new_price={iteam.new_price}
                                old_price={iteam.old_price}
                                category={iteam.category}
                            />
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default View;
