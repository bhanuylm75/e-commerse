import "./index.css"
import { useContext } from "react"
import { CartContext } from "../cartcontext"
const Checkoutitem=({cartitem})=>{
  const { name, imageUrl, price, quantity } = cartitem;
  const {additemstocart,clearitems,removeitems}=useContext(CartContext)
  const onincrement=()=>{
    additemstocart(cartitem)

  }
  const onclear=()=>{
    clearitems(cartitem)

  }
  const ondecrement=()=>{
    removeitems(cartitem)

  }
  return(
    <div className='checkout-item-container'>
      <img src={imageUrl} className="checkout-img" alt={`${name}`} />
    <span className='name'> {name} </span>
    <span className='quantity'>
      <div className='arrow' onClick={ondecrement}>
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={onincrement}>
        &#10095;
      </div>
    </span>
    <span className='price'> {price}</span>
    <div className='remove-button' onClick={onclear}>
      &#10005;
    </div>
  </div>
    
  )
}
export default Checkoutitem