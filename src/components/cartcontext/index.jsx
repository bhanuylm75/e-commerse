import { createContext, useState,useEffect } from 'react';

export const addcartitem=(cartitems,product)=>{
  const existingCartItem = cartitems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    return cartitems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }


 return [...cartitems,{ ...product, quantity: 1 }];

}
export const removeitem=(cartitems,product)=>{
  const existingCartItem = cartitems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem.quantity === 1) {
    return cartitems.filter((cartItem) => cartItem.id !== product.id);
  }


  if (existingCartItem) {
    return cartitems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }


}
export const clearitem=(cartitems,product)=>
  cartitems.filter((eachitem)=> eachitem.id!==product.id)


export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen: () => {},
  cartitems:[],
  additemstocart:()=>{},
  clearitems:()=>{},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartitems,setcartitems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const additemstocart=(product)=>{
    setcartitems(addcartitem(cartitems,product))
  }
  const clearitems=(product)=>{
    setcartitems(clearitem(cartitems,product))
  }
  const removeitems=(product)=>{
    setcartitems(removeitem(cartitems,product))
  }
  useEffect(() => {
    const newCartCount = cartitems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartitems]);

  useEffect(() => {
    const newCartTotal = cartitems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartitems]);

  const value = { isCartOpen, removeitems, setIsCartOpen,clearitems ,additemstocart,cartitems,cartCount,cartTotal};
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};