import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './cartcontains.css'

const CartContain = () => {
    const [productdetails, setProductDetails] = useState([]);
    const [selectedColor, setSelectedColor] = useState(""); // State variable for selected color
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

    // Define updateProduct as a callback function
    const addtocart = async (item) => {
        if (!selectedColor) {
            alert("Please select a color before adding to cart.");
            return;
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
                size: item.size,
                color1: selectedColor, 
            }),
            headers: {
                'content-type': 'application/json'
            },
        });

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
        </div>
    );
};

export default CartContain;
