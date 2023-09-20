import "./Navvv.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menuicon from "./Menuicon";

function Navvv() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
   
            setIsSmallScreen(window.innerWidth <= 824); // Adjust the breakpoint as needed
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="desktop-navigation-menu">
           
                <div className="mmenu">
                <Menuicon />
                </div>

                    <div className="container">

                        <ul className="desktop-menu-category-list">

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Home</Link>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Categories</Link>

                                <div className="dropdown-panel">

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <Link to="/home">Men's</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Formal</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Casual</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Sports</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Jacket</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Sunglasses</Link>
                                        </li>

                                        {/* <li className="panel-list-item">
                    <Link to="/home">
                        <img src="./assets/images/mens-banner.jpg" alt="men's fashion" style={{ width: "250", height: "119" }} />
                    </Link>
                </li> */}

                                    </ul>

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <Link to="/home">Women's</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Formal</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Casual</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Perfume</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Cosmetics</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Bags</Link>
                                        </li>

                                        {/* <li className="panel-list-item">
                    <Link to="/home">
                        <img src="./assets/images/womens-banner.jpg" alt="women's fashion" style={{ width: "250", height: "119" }} />
                    </Link>
                </li> */}

                                    </ul>

                                    <ul className="dropdown-panel-list">

                                        <li className="menu-title">
                                            <Link to="/home">Kids</Link>
                                        </li>

                                        <li className="panel-list-item">
                                            <Link to="/home">Toy</Link>
                                        </li>

                                    </ul>

                                </div>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Men's</Link>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <Link to="/home">t-Shirt</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Shorts</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Wallet</Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/home">NightWear</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Innerwear</Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/home">Accessories</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Women's</Link>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <Link to="/home">NightWear</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Innerwear</Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/home">Accessories</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Makeup Kit</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Accessories</Link>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <Link to="/home">Handkerchief</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Gloves</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Perfume</Link>

                                <ul className="dropdown-list">

                                    <li className="dropdown-item">
                                        <Link to="/home">Clothes Perfume</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Deodorant</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Flower Fragrance</Link>
                                    </li>

                                    <li className="dropdown-item">
                                        <Link to="/home">Air Freshener</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Blog</Link>
                            </li>

                            <li className="menu-category">
                                <Link to="/home" className="menu-title">Hot Offers</Link>
                            </li>

                        </ul>
                    </div>
         
        </nav>
    );
}

export default Navvv;




























