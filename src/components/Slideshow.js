import React from 'react'
import { Link } from 'react-router-dom'
import Image1  from './slideimages/banner-1.jpg';
import Image2  from './slideimages/banner-2.jpg';
import Image3  from './slideimages/banner-3.jpg';

export default function Slideshow() {
  return (
   
    <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">

          <div className="slider-item">

            <img src={Image1} alt="women's latest fashion sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at <b>200</b>.00
              </p>

              <Link to="/home" className="banner-btn">Shop now</Link>

            </div>

          </div>

          <div className="slider-item">

            <img src={Image2} alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern accessories </h2>

              <p className="banner-text">
              Fashion Forward Savings
              </p>

              <Link to="/home" className="banner-btn">Shop now</Link>

            </div>

          </div>

          <div className="slider-item">

            <img src={Image3} alt="new fashion summer sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion  sale</h2>

              <p className="banner-text">
              Sleek Styles Sale
              </p>

              <Link to="/home" className="banner-btn">Shop now</Link>

            </div>

          </div>

        </div>

      </div>

    </div>



  )
}
