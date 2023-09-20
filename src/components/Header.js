import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from './ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"
import Carticon from './Carticon';
import logo from './slideimages/logo.jpg';
const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (data.status == 201) {
            console.log("use logout");
            localStorage.removeItem("usersdatatoken");
            localStorage.removeItem("userid")
            setLoginData(false)
            history("/");
        } else {
            console.log("error");
        }
    }
    const authId = localStorage.getItem('userid');

    const goDash = () => {
        history("/profile/"+authId)
    }

    const goError = () => {
        history("*")
    }
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt='logo' />
                <NavLink to="/home"><h5>Royal  Perfume &  Novelty</h5></NavLink>

                        <div  className='carticon'>
                            
                            <Carticon/>

                        

                        </div>
                    <div className="avtar">
                        {
                            logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize", marginLeft:0 }} onClick={handleClick}>{logindata.ValidUserOne.fname[0].toUpperCase()}</Avatar> :
                                <Avatar style={{ background: "blue" }} onClick={handleClick} />
                        }

                    </div>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            logindata.ValidUserOne|| isLoggedIn ? (
                                <div>
                                    <MenuItem onClick={() => {
                                        goDash()
                                        handleClose()
                                        
                                    }}>Profile</MenuItem>
                                    <MenuItem onClick={() => {
                                        logoutuser()
                                        handleClose()
                                    }}>Logout</MenuItem>
                                </div>
                            ) : (
                                <div>
                                    
                                    <MenuItem onClick={() => {
                                        logoutuser()
                                        handleClose()
                                    }}>Logout</MenuItem>
                               </div>
                            )
                        }

                    </Menu>
                </nav>
            </header>
        </>
    )
}

export default Header