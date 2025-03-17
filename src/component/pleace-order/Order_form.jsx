import React, { useState } from 'react';
import './Order_form.css';
import { FaPlus, FaMinus } from "react-icons/fa";
import { data_e_commerce } from '../../data/data';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/CardSlice';

const Order_form = () => {
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState();
    const { id } = useParams();
    const product = data_e_commerce.find((item) => item.id === Number(id));
    
    const handleConfirmOrder = () => {
        if (!address || !phone) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all fields!",
                customClass: {
                    popup: 'swal-custom-popup' 
                }
            });
            return;
        }
        Swal.fire({
            title: "Thank You! Your Order is Confirmed",
            icon: "success",
            draggable: true,
            customClass: {
                popup: 'swal-custom-popup' 
            }
        });
    };

    if (!product) return <p>Product not found</p>;


    return (
        <div className="order-form-container">
            <div className='order-form'>
                <h2>Purchase Details</h2>

                {/* Product Count */}
                <label>Product Count:</label>
                <div className='count-container'>
                    <button
                        className='btn-order'
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                        style={{ backgroundColor: 'red' }}>
                        <FaMinus />
                    </button>

                    <input
                        className='input-order'
                        type='number'
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    />

                    <button className='btn-order' onClick={() => setQuantity(quantity + 1)}>
                        <FaPlus />
                    </button>
                </div>

                {/* Price Calculation */}
                <label>Price: ₹{product.new_price * quantity}</label>

                {/* Address Input */}
                <label>Address:</label>
                <textarea
                    name="address"
                    rows="3"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                {/* Phone Number Input */}
                <label>Phone Number:</label>
                <input
                    type="tel"
                    className="input-phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => Number(setPhone(e.target.value))}
                />

                {/* Confirm Order Button */}
                <button className='btn-confirm ' onClick={handleConfirmOrder}>Confirm The Order</button>
            </div>
        </div>
    );
}

export default Order_form;
