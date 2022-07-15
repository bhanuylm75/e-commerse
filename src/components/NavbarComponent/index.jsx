import {ReactComponent as Logo} from "../../assets/crown.svg"
import {ReactComponent as Cart} from "../../assets/shopping-bag.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../cartcontext"
import CartDropdown from "../cartdropdown"
import { signOutUser } from "../firebase/firebase.js"
import { UserContext } from "../userContext"
import './index.css'
const NavbarComponent = ()=> {
  const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="nav-con">
     <Link to="/" className="logo"> <Logo/></Link>
     <div className="navbar">
       <Link to="/shop" className="shop">SHOP</Link>
       {currentUser ? (
            <span className="signin" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to='/auth' className="signin">SIGN IN</Link>
          )}
       <div className='cart-icon-container' onClick={toggleIsCartOpen}>
       <Cart className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
       </div>
     </div>
     {isCartOpen&&<CartDropdown/>}
    </div>
  )
}
export default NavbarComponent