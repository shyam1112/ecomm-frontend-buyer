import React, { useState } from 'react';
import './menuicon.css'// You can create a CSS file for styling
import { Link } from 'react-router-dom';

function Menuicon() {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };

  return (
    <div className='navvmenu'>
      <div id="mySidenav" className="sidenav" style={{ width: `${navWidth}px` }}>
        <Link to="/home" className="closebtn" onClick={closeNav}>&times;</Link>
        <Link to="/home">HOME</Link>
        <Link to="#">CATEGORIES</Link>
        <Link to="#">MEN'S</Link>
        <Link to="#">WOMEN'S</Link>
        <Link to="#">ACCESSORIES</Link>
        <Link to="#">PERFUME</Link>
        <Link to="#">BLOG</Link>
        <Link to="#">HOT OFFERS</Link>

      </div>

      <span  style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; </span>
    </div>
  );
}

export default Menuicon;
