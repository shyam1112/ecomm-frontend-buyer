import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './cartcontains.css'
import { useState } from "react";

const CartContain = () => {
    const [productdetails, setProductDetails] = useState([]);
    const params = useParams();


    const getData = async () => {
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        const data = await result.json();
        setProductDetails([data]);
    }

    useEffect(() => {
        getData();
    }, [params.id]);

    const authid = (localStorage.getItem('userid'));

    // Define updateProduct as a callback function
    const updateProduct = async (item) => {
        let result = await fetch('http://localhost:5000/addcart', {
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
    }

    return (
        <div className="productt-detailss">
            {productdetails.map((item, index) => (
                <div className="productt" key={item._id}>
                    <div className="productt-image-container">
                        <img src={item.img} alt={item.name} className="productt-image" />
                    </div>
                    <div className="productt-content">
                        <h2 className="productt-title">{item.name}</h2>
                        {/* <p className="productt-description">{item.description}</p> */}
                        <p className="productt-size">Category: {item.category}</p>
                        <p className="productt-size">Company: {item.company}</p>
                        <p className="productt-size">Size: {item.size}</p>
                        <p className="productt-price">Price: &#8377;{item.price}</p>
                        <p   className="productt-price" >Color : <span style={{
                                backgroundColor: `${item.color1}`,
                                width: "30px",
                                height: "20px",
                            }}></span> &nbsp;
                            <span style={{
                                backgroundColor: `${item.color2}`,
                                width: "30px",
                                height: "20px",
                            }}></span> &nbsp;
                            <span style={{
                                backgroundColor: `${item.color3}`,
                                width: "30px",
                                height: "20px",
                            }}></span></p>
                        {/* Pass a callback function to onClick */}
                        <button onClick={() => updateProduct(item)} className="update-button">
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContain;
