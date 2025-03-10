import './navbar.css'
import logo from '../../../src/assets/logo1.jpg'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = ({setlogin}) => {
    let count = 1
    const navigate = useNavigate();
    return (
        <>
            <div className='nav-bar-container'>
                <div className='nav-bar-logo'>
                    <img src={logo} />
                    <h1>SHOPPER</h1>
                </div>
                <ul>
                    {window.location.pathname === '/' ? (
                        <div>
                            <li onClick={() => navigate('/')} style={{color:'red'}}>Shop</li>
                            <hr className='nav-hr' />
                        </div>
                    ) : (
                        <li onClick={() => navigate('/')}>Shop</li>
                    )}
                    {
                        window.location.pathname === '/mens' ? (
                            <div>
                                <li onClick={() => navigate('/mens')} style={{color:'red'}}>Mens</li>
                                <hr className='nav-hr' />
                            </div>
                        ):(
                            <li onClick={() => navigate('/mens')}>Mens</li>
                        )
                    }
                    {
                        window.location.pathname === '/women' ? (
                            <div>
                                <li onClick={() => navigate('/women')} style={{color:'red'}}>Womens</li>
                                <hr className='nav-hr' />
                            </div>
                        ):(
                            <li onClick={() => navigate('/women')}>Womens</li>
                        )
                    }
                    {
                        window.location.pathname === '/kids' ? (
                            <div>
                                <li onClick={() => navigate('/kids')} style={{color:'red'}}>Kids</li>
                                <hr className='nav-hr' />
                            </div>
                        ):(
                            <li onClick={() => navigate('/kids')}>Kids</li>
                        )
                    }
                </ul>
                <div className='nav-bar-button'>
                    <button  onClick={()=>setlogin(false)}>Login</button>
                    <div style={{ position: 'relative' }}>
                        <MdOutlineShoppingCart className='icon' />
                        <div className='card-display'>{count}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar