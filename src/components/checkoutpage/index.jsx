import "./index.css"
import { useContext } from "react";
import { CartContext } from "../cartcontext";
import Checkoutitem from "../checkout-item";
import Pay from "../payments/payments";
const Checkout=()=>{
  const { cartitems ,cartTotal} = useContext(CartContext);
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Details</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className="remove">
          <span>Remove</span>
        </div>
      </div>
      {cartitems.map((eachitem)=>(
        <Checkoutitem key={eachitem.id} cartitem={eachitem}/>
      ))}
        <span className='total'>Total: ${cartTotal}</span>
        <Pay/>
    </div>
    
  )
}
export default Checkout