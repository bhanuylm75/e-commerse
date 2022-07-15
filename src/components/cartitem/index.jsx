import './index.css';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img className='img-cart' src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity}x${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;