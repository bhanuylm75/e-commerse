import { createContext, useState } from 'react';

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
  clearitems:()=>{}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartitems,setcartitems] = useState([]);
  const additemstocart=(product)=>{
    setcartitems(addcartitem(cartitems,product))
  }
  const clearitems=(product)=>{
    setcartitems(clearitem(cartitems,product))
  }
  const removeitems=(product)=>{
    setcartitems(removeitem(cartitems,product))
  }
  const value = { isCartOpen, removeitems, setIsCartOpen,clearitems ,additemstocart,cartitems};
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};