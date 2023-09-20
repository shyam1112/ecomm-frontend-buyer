import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useCart } from './ContextProvider/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const authId = localStorage.getItem('userid');
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Calculate the total price when the cart changes
    const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setPrice(totalPrice);

    // Update cartItems whenever cart length changes
    setCartItems(cart.length); // Move this line here
  }, [cart, setCartItems]);

  const getData = async () => {
    try {
      let result = await fetch(`https://royal-backend-seller.onrender.com/carts/${authId}`);
      if (!result.ok) {
        throw new Error(`Fetch error: ${result.status}`);
      }
      result = await result.json();
      setCart(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const removeFromCart = async (id) => {
    let result = await fetch(`https://royal-backend-seller.onrender.com/carts/${id}`, {
      method: "delete"
    });
    result = await result.json();
    if (result) {
      getData();
    }
  }

  const checkout = async () => {

    const orderData = {
      userId: authId,
      cart: cart,
      total: price.toFixed(2),
    };
    navigate('/checkout', { state: { orderData } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={item._id + index}>
            <div className="item-info">
              <img src={item.img} alt={item.name} />
              <div className='cartitemdata'>
              <h3>{item.name}</h3>
                <p> Category : {item.category}</p>
                <p>Company : {item.company}</p>
                <p>Price : &#8377;{item.price}</p>
                <p>Size: {item.size}</p>
                <p>Selected Color : <span style={{
                  backgroundColor: `${item.color1}`,
                  width: "30px",
                  height: "20px",
                }}></span></p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: &#8377;{price.toFixed(2)}</h2>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
