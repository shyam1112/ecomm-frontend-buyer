import React, { useContext, useState } from 'react';

import "./header.css";
import { LoginContext } from './ContextProvider/Context';
import { useNavigate, NavLink } from "react-router-dom";
import Carticon from './Carticon';
import logo from './slideimages/logo.jpg';

const Header = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    const history = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const handleLogout=()=>{
    //     localStorage.removeItem("usersdatatoken")
    // }


    const logoutuser = async () => {
        localStorage.removeItem("usersdatatoken");
        localStorage.removeItem("userid")
        setLoginData(false)
        history("/");
        
        // const res = await fetch(`/logout`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": token,
        //         Accept: "application/json"
        //     },
        //     credentials: "include"
        // });

        // const data = await res.json();
        // console.log(data);

        // if (data.status == 201) {
        //     console.log("use logout");
        //     localStorage.removeItem("usersdatatoken");
        //     localStorage.removeItem("userid")
        //     setLoginData(false)
        //     history("/");
        // } else {
        //     console.log("error");
        // }
    }


    const authId = localStorage.getItem('userid');

    const goDash = () => {
        history("/profile/" + authId);
    };

    const goError = () => {
        history("*");
    };

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return (
        <>
            <header>
                <nav>
                    <div className="logo" onClick={toggleMenu}>
                        <img src={logo} alt='logo' />
                        <h5>Royal  Perfume &  Novelty</h5>
                    </div>

                    <div className='carticon'>
                        <Carticon />
                    </div>

                    <div className="avtar" onClick={toggleMenu}>
                        {logindata.ValidUserOne ? (
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
                                {logindata.ValidUserOne.fname[0].toUpperCase()}
                            </div>
                        ) : (
                            <div
                                style={{
                                    background: "blue",
                                    width: "36px", // Adjust the width as needed
                                    height: "36px", // Adjust the height as needed
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                }}
                            >
                                {/* Add your default avatar icon or text here */}
                            </div>
                        )}
                    </div>

                    {isMenuOpen && (
                        <div className="custom-menu">
                            <div className="custom-menu-item" onClick={() => {
                                goDash();
                                toggleMenu();
                            }}>Profile</div>
                            {logindata.ValidUserOne || isLoggedIn ? (
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
