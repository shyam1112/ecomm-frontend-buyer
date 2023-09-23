import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./mix.css";

const Login = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate("/home");
    //     }
    // }, []);

    const [passShow, setPassShow] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const loginuser = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Include @ in your email!", {
                position: "top-center"
            });
        } else if (pass === "") {
            toast.error("Password is required!", {
                position: "top-center"
            });
        } else if (pass.length < 6) {
            toast.error("Password must be at least 6 characters!", {
                position: "top-center"
            });
        } else {
        
            let result= await fetch('https://royal-backend-seller.onrender.com/login',{
                method:'post',
                body:JSON.stringify({email,pass}),
                headers:{
                    'content-type':'application/json'
                },
            });
            result=await result.json();
            if(result.name){
                localStorage.setItem("user",JSON.stringify(result));
                localStorage.setItem("userid", result._id);
                navigate('/home');
            }else{
                toast.error("Login failed. Please check your credentials and try again.", {
                        position: "top-center"
                });
            }
                
            }
   
        }

    return (
        <div className='loginn'>
            <div className='logindesign'>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/23fc76de-857c-408d-9f3c-a5e2ac43cfbb/6OVTIXpiJC.json"
                    style={{ height: '350px', width: '350px' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are glad you are back. Please log in.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={pass} onChange={(e) => setPass(e.target.value)} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </div>
    );
}

export default Login;
