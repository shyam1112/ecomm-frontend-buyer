import React from 'react'
import "./Navvv.css"
import { useEffect, useState } from "react";
import Carticon from './Carticon';
import { Link, useNavigate } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState();
    const navigate=useNavigate();


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch("https://royal-backend-seller.onrender.com/products");
        result = await result.json();
        setProduct(result);
    }

    const searchdata = async (event) => {
        let key = event.target.value;
        if (key) {

            let result = await fetch(`https://royal-backend-seller.onrender.com/search/${key}`);
            result = await result.json();
            if (result) {
                setProduct(result);
            }
        } else {
            getData();
        }
        
    }
    const authid = (localStorage.getItem('userid'));
    const handleAddToCart = async (item) => {


        let result = await fetch('https://royal-backend-seller.onrender.com/addcart', {
            method: 'post',
            body: JSON.stringify({
                name: item.name,
                price: item.price,
                category: item.category,
                userId: authid,
                company: item.company,
                img: item.img,
                size: item.size
            }),
            headers: {
                'content-type': 'application/json'
            },
        });


    };

    return (
        <div className="product-container">
            <div className="container"  >
                <div className="product" >
                    <input type="text" className="search" placeholder="Search the product" onChange={searchdata} />
                    <div className="product-main" style={{ borderRadius: "20px" }}>
                        <h1 className="title" style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }}> Products</h1>

                        <div className="product-grid"  >
                            {product && product.length > 0 ? (
                                product.map((item, index) => (
                                    <ul key={item._id}>
                                        {/* <li>{index + 1}</li> */}
                                        {/* <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li> */}


                                        <div className="showcase" >
                                            
                                            <div className="showcase-banner">

                                                <img src={item.img} alt="Mens Winter Leathers Jackets" style={{ width: "230px", height: "200px" }} className="product-img default" />
                                                <img src={item.img} alt="Mens Winter Leathers Jackets" style={{ width: "230px", height: "200px" }} className="product-img hover" />

                                                {/* <p className="showcase-badge">15%</p> */}


                                                <div className="showcase-actions">

                                                    <button className="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>

                                                    <button className="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>

                                                    <button className="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>

                                                    <button className="btn-action">
                                                        <ion-icon name="bag-add-outline"></ion-icon>
                                                    </button>

                                                </div>


                                            </div>
                                            
                                            <div className="showcase-content" >
                                                <Link   to={"/cartcontains/"+item._id} style={{cursor:'pointer',textDecoration:'none'}}>
                                                <h2 className="showcase-category" style={{ textDecoration: "none" }}>{item.name}</h2>


                                                <h3 className="showcase-title">{item.company}</h3>
                                           

                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <div className="price-box">
                                                    <p className="price">&#8377;{item.price}</p>
                                                    {/* <p>{item.size}</p> */}
                                                </div>
                                                </Link>
                                                <div className="btn">
                                                    <button className="btn-action" onClick={() => handleAddToCart(item)}>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                            </div>


                                        </div>



                                    </ul>
                                ))
                            ) : (
                                <div className="loader" ></div>
                            )}
                        </div>

                    </div>

                </div>
            </div></div>
    )
}
export default Product;
