import './Singup.css'

function Singup({setlogin}) {
    
    return (
        <div className="signup">
            <div className="singup-container">
                <div className='img-content'>
                    <div className='blue-button'><div></div></div>
                    <h1>Let us help you run your <br />freelance business</h1>
                    <h3>Our registration process is quick and easy, taking <br />no more thsn 10 minutes to complete</h3>
                    <div className='primary-content'>
                        <p>I'm impressed with the results l've seen since <br />starting to use this product, I begin receiving<br /> clients and projects in the first week.</p>
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
                    <input type='text' />
                    <label>Email</label>
                    <input type='email' />
                    <label>Password</label>
                    <label className='green-label'>Storng !</label>
                    <input type='password' />
                    <button className='button-login' onClick={()=>setlogin(true)}>Sing Up</button>
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