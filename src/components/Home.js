import Blogg from './Blogg';
import Footer from './Footer'
import Navvv from "./Navvv";
import Product from './Product';
import Slideshow from './Slideshow'
import Testimonial from './Testimonial';
function Home(){

  return(
      <>
      <div style={{paddingTop:"70px"}}>
        <Navvv/>
        <Slideshow />
        <Product />
        <hr/>
        <Blogg />
        <Testimonial /> 
        <Footer/>
        </div>
      </>
  )
}
export default Home;