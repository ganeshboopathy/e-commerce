import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Riple } from 'react-loading-indicators';
import { removeCard } from '../../store/CardSlice'

const Add_to_card = () => {
    const card = useSelector((state) => state.card);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(card);
    }, [card]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const removetoCard = (id) => {
        dispatch(removeCard(id));
    };

    if (loading) {
        return (
            <div className="loading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Riple color="blue" size="large" />
            </div>
        );
    }

    return (
        <div className="card-popular" style={{ margin: '2rem' }}>
            {card.map((iteam) => (
                <div key={iteam.id} className="card" style={{ position: 'relative' }}>
                    <div className="card-container">
                        <img src={iteam.image} alt={iteam.description} className="image-container" onClick={() => navigate(`/view/${iteam.id}/${iteam.category}`)} />
                        <h4 className="description">{iteam.description}</h4>
                        <div className="price-container">
                            <div className="box">
                                <p style={{ fontWeight: '800' }}>${iteam.new_price}</p>
                                <p style={{ color: 'gray', textDecoration: 'line-through' }}>${iteam.old_price}</p>
                            </div>
                            <button className="btn" onClick={()=>navigate(`/order/${iteam.id}`)}>Place the order</button>
                        </div>
                        <div className="price-container">
                            <button className="btn" style={{ backgroundColor: 'green' }} onClick={() => navigate('/')}>
                                Back to home
                            </button>
                            <button className="btn" style={{ backgroundColor: 'red' }} onClick={() => removetoCard(iteam.id)}>
                                Remove from cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Add_to_card;
