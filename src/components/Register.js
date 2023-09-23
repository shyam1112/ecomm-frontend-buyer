import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./mix.css"

const Register = () => {
    const navigate = useNavigate();
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/home");
        }
    }, []);

    const addUserdata = async (e) => {
        e.preventDefault();

        if (name === "") {
            toast.warning("Name is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("Email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Email must include @!", {
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
        } else if (cpass === "") {
            toast.error("Confirm Password is required!", {
                position: "top-center"
            });
        } else if (cpass.length < 6) {
            toast.error("Confirm Password must be at least 6 characters!", {
                position: "top-center"
            });
        } else if (pass !== cpass) {
            toast.error("Password and Confirm Password do not match!", {
                position: "top-center"
            });
        } else {
            try {
                const response = await fetch('https://royal-backend-seller.onrender.com/register', {
                    method: 'POST',
                    body: JSON.stringify({ name, email, pass, cpass }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem("user", JSON.stringify(data));
                    toast.success("Registration Successfully done 😃!", {
                        position: "top-center"
                    });
                    navigate('/login');
                } else {
                    toast.error("Registration failed. Please try again later.", {
                        position: "top-center"
                    });
                }
            } catch (error) {
                console.error("Error during registration:", error);
                toast.error("An error occurred. Please try again later.", {
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
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={(e) => setname(e.target.value)} value={name} name="name" id="name" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" placeholder='Enter Your Email Address' />
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

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={cpass} onChange={(e) => setCpass(e.target.value)} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </div>
    );
}

export default Register;
