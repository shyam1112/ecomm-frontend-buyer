import React from "react";
import './carticon.css'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from './ContextProvider/CartContext'; 


export default function Carticon() {
  
  const { cartItems, setCartItems } = useCart();
  const navigat = useNavigate();
  const cartclick = () => {
    navigat('/cart')
  }

  return (
    <div  onClick={cartclick}>
      <div >
        <div>
          <Badge color="secondary" badgeContent={cartItems}>
            <ShoppingCartIcon />{" "}
          </Badge>

        </div>
      </div>
    </div>
  )
}
