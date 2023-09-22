import React from "react";
import './carticon.css';
import { useNavigate } from "react-router-dom";
import { useCart } from './ContextProvider/CartContext';
import icon from './slideimages/shopping-cart-icon.png';
export default function Carticon() {
  const { cartItems } = useCart();
  const navigat = useNavigate();
  const cartclick = () => {
    navigat('/cart')
  };

  return (
    <div className="cart-icon" onClick={cartclick}>
      <div className="cart-badge">
        {cartItems > 0 && (
          <span className="cart-badge-content">{cartItems}</span>
        )}
      </div>
      <div  className="shopping-cart-icon"><img src={icon} /></div>
    </div>
  );
}
