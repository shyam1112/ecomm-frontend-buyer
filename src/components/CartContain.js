import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './cartcontains.css'
import { ToastContainer, toast } from 'react-toastify';


const CartContain = () => {
    const [productdetails, setProductDetails] = useState([]);
    const [selectedColor, setSelectedColor] = useState("");
    const [sizee, setSize] = useState();
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
                size: sizee,
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



    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const dropdownStyles = {
        position: 'relative',
        display: 'inline-flex',
    };

    const dropdownContentStyles = {
        display: isDropdownOpen ? 'flex' : 'none',
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
        width: '400px', // Set the width to 600px
        top: '50px', // Adjust the top position as needed
        left: '-100px', // Adjust the left position as needed
    };
    const largeImageStyles = {
        width: '100%', // Ensure the image takes the full width of the container
        height: 'auto', // Maintain the aspect ratio
      };


    return (
        <div className="productt-detailss">
            {productdetails.map((item, index) => (
                <div className="productt" key={item._id}>
                    <div className="productt-image-container">
                        {/* <img src={item.img} alt={item.name} className="productt-image" /> */}
                        <div
                            className="productt-image"
                            style={dropdownStyles}
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <img
                                src={item.img}
                                alt="Cinque Terre"
                            />
                            <div className="dropdown-content" style={dropdownContentStyles}>
                                <img
                                    src={item.img}
                                    alt="Cinque Terre"
                                    style={largeImageStyles}
                                />
                            </div>
                        </div>
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
                                onChange={(e) => setSize(e.target.value)}
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
