import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './cartcontains.css'
import { ToastContainer, toast } from 'react-toastify';


const CartContain = () => {
    const [productdetails, setProductDetails] = useState([]);
    const [selectedColor, setSelectedColor] = useState(""); 
    const [sizee, setSize]=useState();
    const params = useParams();

    const getData = async () => {
        let result = await fetch(`https://royal-backend-seller.onrender.com/products/${params.id}`);
        const data = await result.json();
        setProductDetails([data]);
    }

    useEffect(() => {
        getData();
    }, [params.id]);

    const authid = localStorage.getItem('userid');
    console.log(authid);
    // Define updateProduct as a callback function
    const addtocart = async (item) => {
        if (!selectedColor) {
            toast.error("Please select color :)", {
                position: "top-center"
            }); return;
        }
        let result = await fetch('https://royal-backend-seller.onrender.com/addcart', {
            method: 'post',
            body: JSON.stringify({
                name: item.name,
                price: item.price,
                category: item.category,
                userId: authid,
                company: item.company,
                img: item.img,
                size:sizee,
                color1: selectedColor
            }),
            headers: {
                'content-type': 'application/json'
            },
        });
        if (result.ok) {
            toast.success("Product Added To Cart . . . . . . GO TO CART :) ", {
                position: "top-center"
            });
        }

        // Handle the API response as needed
    }

    // Function to handle color selection
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
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
                        <p className="productt-size">Category: {item.category}</p>
                        <p className="productt-size">Company: {item.company}</p>
                        <p className="productt-size">Size: {item.size}</p>
                        <p className="productt-price">Price: &#8377;{item.price}</p>

                        <div className="form-group">
                            <label >Select Size : </label>
                            <select
                                id="payment-method"
                                name="paymentMethod"
                                value={sizee}
                                onChange={(e)=>setSize(e.target.value)}
                                required
                            >
                                <option value="">SELECT</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>

                             
                            </select>
                        </div>
                        {/* Color selection UI */}
                        <div className="color-selection">
                            <label>Select Color:</label>
                            <input
                                type="radio"
                                name="color"
                                value={item.color1}
                                checked={selectedColor === `${item.color1}`}
                                onChange={handleColorChange}
                            />
                            <span style={{
                                backgroundColor: `${item.color1}`,
                                width: "30px",
                                height: "20px",
                            }}></span>
                            <input
                                type="radio"
                                name="color"
                                value={item.color2}
                                checked={selectedColor === `${item.color2}`}
                                onChange={handleColorChange}
                            />
                            <span style={{
                                backgroundColor: `${item.color2}`,
                                width: "30px",
                                height: "20px",
                            }}></span>
                            <input
                                type="radio"
                                name="color"
                                value={item.color3}
                                checked={selectedColor === `${item.color3}`}
                                onChange={handleColorChange}
                            />
                            <span style={{
                                backgroundColor: `${item.color3}`,
                                width: "30px",
                                height: "20px",
                            }}></span>
                        </div>


                        <button onClick={() => addtocart(item)} className="update-button">
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
            <ToastContainer />
        </div>
    );
};

export default CartContain;
