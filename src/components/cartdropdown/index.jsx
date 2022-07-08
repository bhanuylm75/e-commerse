import "./index.css"
import { useContext } from 'react';

import { CartContext } from "../cartcontext";
import { useNavigate } from "react-router";

import CartItem from "../cartitem"; 

const CartDropdown = () => {
  const { cartitems } = useContext(CartContext);
  console.log(cartitems)
  const navigate=useNavigate()
  const gotocheckout=()=>{
    navigate("/checkout")
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartitems.length ? (
          cartitems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button type="button" onClick={gotocheckout} className="butt">GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;