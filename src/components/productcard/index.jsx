import "./index.css"
import { useContext } from "react"
import { CartContext } from "../cartcontext"
const Productcard=(props)=>{
  const{product}=props
  const {name,imageUrl,price}=product
  const { additemstocart } = useContext(CartContext);
  const addProductToCart = () => additemstocart(product);
  return(
    <div className="cap">
        <img className="img"src={imageUrl} alt="nd"/>
        <div className="hats-inner">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <button className="button-product" onClick={addProductToCart}>Add To Cart</button>
      </div>
  )
}
export default Productcard