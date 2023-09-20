import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from './slideimages/blog-1.jpg';
import blog2 from './slideimages/blog-2.jpg';
import blog3 from './slideimages/blog-3.jpg';
import blog4 from './slideimages/blog-4.jpg';
import './Navvv.css'
export default function Blogg() {
  return (
    <div> 
        <div className="blog">

    <div className="container">

      <div className="blog-container has-scrollbar">

        <div className="blog-card">

          <Link to="/home">
            <img src={blog1} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" style={{ width:"300"}} className="blog-banner"/>
          </Link>

          <div className="blog-content">

            <Link to="/home" className="blog-category">Fashion</Link>

            <Link to="/home">
              <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
            </Link>

            <p className="blog-meta">
              By <cite>rrfashion</cite> 
            </p>

          </div>

        </div>

        <div className="blog-card">
        
          <Link to="/home">
            <img src={blog2} alt="Curbside fashion Trends: How to Win the Pickup Battle."
              className="blog-banner" style={{width:"300"}}/>
          </Link>
        
          <div className="blog-content">
        
            <Link to="/home" className="blog-category">Clothes</Link>
        
            <h3>
              <Link to="/home" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</Link>
            </h3>
        
            <p className="blog-meta">
              By <cite>rrfashion</cite> 
            </p>
        
          </div>
        
        </div>

        <div className="blog-card">
        
          <Link to="/home">
            <img src={blog4} alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
              className="blog-banner" style={{width:"300"}}/>
          </Link>
        
          <div className="blog-content">
        
            <Link to="/home" className="blog-category">Novelty</Link>
        
            <h3>
              <Link to="/home" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</Link>
            </h3>
        
            <p className="blog-meta">
              By <cite>rrfashion</cite> 
            </p>
        
          </div>
        
        </div>


      </div>

    </div>

  </div>
</div>
  )
}
