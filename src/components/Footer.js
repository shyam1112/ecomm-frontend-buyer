import { Link } from 'react-router-dom'
import "./Navvv.css"
function Footer(){

    return (
      <footer>
                <div className="footer-nav">

        <div className="container">
  
          <ul className="footer-nav-list">
  
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>
  
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Fashion</Link>
            </li>
  
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Cosmetic</Link>
            </li>
  
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Watches</Link>
            </li>
  
          </ul>
  
          <ul className="footer-nav-list">
          
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Prices drop</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">New products</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Best sales</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Contact us</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Sitemap</Link>
            </li>
          
          </ul>
  
          <ul className="footer-nav-list">
          
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Delivery</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Legal Notice</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Terms and conditions</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">About us</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Secure payment</Link>
            </li>
          
          </ul>
  
          <ul className="footer-nav-list">
          
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Prices drop</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">New products</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Best sales</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Contact us</Link>
            </li>
          
            <li className="footer-nav-item">
              <Link to="/home" className="footer-nav-link">Sitemap</Link>
            </li>
          
          </ul>
  
          <ul className="footer-nav-list">
  
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>
  
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
  
              <address className="content">
                Royal Arcade, G70, Varachha Main Rd, Sarthana Jakat Naka, Surat, Gujarat 395006
              </address>
            </li>
  
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>
  
              <Link to="tel:+607936-8058" className="footer-nav-link">9727666576</Link>
            </li>
  
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
  
              <Link to="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</Link>
            </li>
  
          </ul>
  
          {/* <ul className="footer-nav-list"> */}
  
            {/* <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li> */}
  
            {/* <li>
              <ul className="social-link">
  
                <li className="footer-nav-item">
                  <Link to="/home" className="footer-nav-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </Link>
                </li>
  
                <li className="footer-nav-item">
                  <Link to="/home" className="footer-nav-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </Link>
                </li>
  
                <li className="footer-nav-item">
                  <Link to="/home" className="footer-nav-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                </li>
  
                <li className="footer-nav-item">
                  <Link to="/home" className="footer-nav-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </Link>
                </li>
  
              </ul>
            </li> */}
  
        
  
        </div>
  
      </div>
      <div className="footer-bottom">

<div className="container">



  <p className="copyright">
    Copyright &copy; <Link to="/home">rrfashion</Link> all rights reserved.
  </p>
  <p className="copyright">
    Contact us : +91 9727666576
  </p>
</div>

</div>
      </footer>

    )
  }
export default Footer;
