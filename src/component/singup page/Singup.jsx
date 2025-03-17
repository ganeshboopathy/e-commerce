import './Singup.css'
import { useState } from 'react';
import Swal from 'sweetalert2'

function Singup({setlogin}) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !email || !password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all fields!",
                customClass: {
                    popup: 'swal-custom-popup' 
                }
              });
            return;
        }else{
       
        Swal.fire({
            title: "Signup successful!",
            icon: "success",
            draggable: true,
            customClass: {
                popup: 'swal-custom-popup' 
            }
          });
          setlogin(true);
        }
    };
    
    return (
        <div className="signup">
            <div className="singup-container">
                <div className='img-content'>
                    <div className='blue-button'><div></div></div>
                    <h1>Let us help you run your <br />freelance business</h1>
                    <h3>Our registration process is quick and easy, taking no more thsn 10 minutes to complete</h3>
                    <div className='primary-content'>
                        <p>I'm impressed with the results l've seen since starting to use this product, I begin receiving clients and projects in the first week.</p>
                        <div className='image-login'>
                            <div className='image-face'></div>
                            <div style={{ marginLeft: '8px' }}>
                                <h6>Jonas Kim </h6>
                                <h6 style={{ marginTop: '5px', color: 'gray' }}>Product Designer</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sing-up-container">
                    <h1>Get Started</h1>
                    <h4 style={{ marginTop: '10px', color: 'gray', marginBottom: '30px' }}>Create your account now  </h4>
                    <label style={{ color: 'gray', marginBottom: '10px' }}>Full name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <label className='green-label'>Strong !</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='button-login' onClick={handleSubmit}>Sing Up</button>
                    <center>
                        <p style={{color:'gray',marginTop:"30px"}}>Have a account ? <a href=''>Login</a></p>
                    </center>
                </div>
            </div>
            <button className='sing-up-close'  onClick={()=>setlogin(true)}>X</button>
        </div>
    )
}
export default Singup