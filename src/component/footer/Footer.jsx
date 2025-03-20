import React from 'react'
import './Footer.css'
import logo from '../../assets/logo1.jpg'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="footer">
            <div className="container">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our nowsletter and stay updated</p>
                <div className='footer_input'>
                    <input type="email" placeholder="Your email id"/>
                    <button className='btn-footer'>Subscribe</button>
                </div>
                <div className='logo_footer'>
                    <img src={logo}></img>
                    <h2>SHOPPER</h2>
                </div>
                <ul>
                    <li>Company </li>
                    <li>Products</li>
                    <li>offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='footer_icon'>
                <FaInstagramSquare className='icon' />
                <IoLogoWhatsapp className='icon' />
                <FaTwitterSquare className='icon' />
                </div>
            </div>
        </footer>
  )
}

export default Footer