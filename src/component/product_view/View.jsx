import React from 'react';
import './View.css';
import { useParams } from 'react-router-dom';
import { popular_dress } from '../../data/popular_girl';
import { TbShoppingCartPlus } from "react-icons/tb";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"; // Fixed missing import
import { CiStar } from "react-icons/ci";
import Iteam from '../iteams/Iteam';
import Offer from '../offer/Offer';

const View = () => {
    const { id } = useParams();
    const category = ['dress', 'women', 'popular'];

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

    return (
        <div style={{margin:'3rem'}}>
            {popular_dress.map((iteam) => {
                if (parseInt(id) === iteam.id) { // Ensure id comparison works correctly
                    return (
                        <div key={iteam.id} className='view-container'>
                            <div>
                                <div className='category'>
                                    <div className='category-name'>
                                        {category.map((item, index) => (
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
                            <div>
                                {/* Dress Description */}
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: "10px", gap: '20px', alignItems: 'start' }}>
                                    <h1 style={{ fontWeight: 'bold', width: '300px' }}>Description :</h1>
                                    <h2 style={{ color: 'gray' }}>{iteam.description}</h2>
                                </div>

                                {/* Star Rating Display */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                    <h2 style={{ fontWeight: 'bold' }}>Rating:</h2>
                                    {renderStars(iteam.rating)}
                                    <span style={{ fontSize: '1.2rem', color: 'gray' }}>({iteam.rating})</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '50px' }}>
                                    <button className="btn" >
                                        Add to Cart <TbShoppingCartPlus style={{ fontSize: '1.5rem' }} />
                                    </button>
                                    <h1 style={{ color: 'green' }}>Price : {iteam.new_price}</h1>
                                    <h2 style={{ color: 'gray', textDecoration: "line-through" }}>Old price :{iteam.old_price}</h2>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '1rem', justifyContent: 'center' }}>
                                    <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }}></hr>
                                    <h2 style={{ color: 'red' }}>Limted Offer</h2>
                                    <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }}></hr>
                                </div>
                                <h2 style={{ color: 'blue' }}>Specification :</h2>
                                <ul style={{ margin: "2rem", }}>
                                    {iteam.review.map((rev, index) => {
                                        return (
                                            <li key={index} style={{ padding: '1rem', fontSize: '1.5rem' }}>{rev}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                }
                return null; // Ensure `.map()` always returns something
            })}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '1rem', justifyContent: 'center', width: '100%' }}>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }}></hr>
                <button className='btn' style={{ padding: '20px', fontSize: '1.5rem' }}>pleace the order</button>
                <hr style={{ width: '30%', height: '3px', backgroundColor: 'black' }}></hr>
            </div>
            <div className="popular-container">
            <Offer/>
                <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>RELATED PRODUCTS</h1>
                <hr style={{ textAlign: 'center', width: '300px', height: '7px', backgroundColor: 'black', marginBottom: '20px' }}></hr>
                <div className='card-popular'>
                    {popular_dress.map((iteam) => {
                        if (Number(id) !==iteam.id){ ; // Prevent rendering the same item
                    return (
                            <Iteam
                                key={iteam.id} // Always provide a unique key
                                id={iteam.id}
                                image={iteam.image}
                                description={iteam.description}
                                new_price={iteam.new_price}
                                old_price={iteam.old_price}
                            />
                        )};
                    })}
                </div>

            </div>
        </div>
    );
};

export default View;
