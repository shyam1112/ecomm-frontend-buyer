import React, { useContext, useState } from 'react';

import "./header.css";
import { useNavigate, NavLink } from "react-router-dom";
import Carticon from './Carticon';
import logo from './slideimages/logo.jpg';

const Header = () => {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const logoutuser = async () => {
        localStorage.clear();
        navigate("/");
    }
    const logindata = localStorage.getItem('user');

    const authId = localStorage.getItem('userid');

    const goDash = () => {
        navigate("/profile/" + authId);
    };

  

    return (
        <>
            <header>
                <nav>
                    <div className="logo" onClick={toggleMenu}>
                        <img src={logo} alt='logo' />
                        <h5>Royal  Perfume &  Novelty</h5>
                    </div>

                    {logindata?(<div className='carticon'>
                        <Carticon />
                    </div>):null}

                    <div className="avtar" onClick={toggleMenu}>
                        {logindata ? (
                            <div
                                style={{
                                    background: "salmon",
                                    fontWeight: "bold",
                                    textTransform: "capitalize",
                                    marginLeft: 0,
                                    width: "36px", // Adjust the width as needed
                                    height: "36px", // Adjust the height as needed
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                }}
                            >
                                👤
                            </div>
                        ) : (
                            null
                        )}
                    </div>

                    {isMenuOpen && (
                        <div className="custom-menu">
                               {logindata  ? (
                            <div className="custom-menu-item" onClick={() => {
                                goDash();
                                toggleMenu();
                            }}>Profile</div>
                            ) : null}   
                            {logindata  ? (
                                <div className="custom-menu-item" onClick={() => {
                                    logoutuser();
                                    toggleMenu();
                                }}>Logout</div>
                            ) : null}
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
