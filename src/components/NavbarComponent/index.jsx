import {ReactComponent as Logo} from "../../assets/crown.svg"
import {ReactComponent as Cart} from "../../assets/shopping-bag.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../cartcontext"
import CartDropdown from "../cartdropdown"
import './index.css'
const NavbarComponent = ()=> {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="nav-con">
     <div className="logo"> <Logo/></div>
     <div className="navbar">
       <Link to="/shop" className="shop">Shop</Link>
       <Link to="/signin" className="signin">signin</Link>
       <div className='cart-icon-container' onClick={toggleIsCartOpen}>
       <Cart className='shopping-icon' />
      <span className='item-count'>0</span>
       </div>
     </div>
     {isCartOpen&&<CartDropdown/>}
    </div>
  )
}
export default NavbarComponent