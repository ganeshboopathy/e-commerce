import './navbar.css'
import logo from '../../../src/assets/logo1.jpg'
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
   let count= 1
    return (
        <>
            <div className='nav-bar-container'>
                <div className='nav-bar-logo'>
                    <img src={logo} />
                    <h1>SHOPPER</h1>
                </div>
                <ul>
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
                <div className='nav-bar-button'>
                   <button>Login</button>
                   <div style={{position:'relative'}}>
                   <MdOutlineShoppingCart className='icon' /> 
                   <div className='card-display'>{count}</div>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Navbar