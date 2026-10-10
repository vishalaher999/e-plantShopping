import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectTotalAmount, selectTotalQuantity } from './CartSlice.jsx';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const calculateTotalCost = (item) => item.cost * item.quantity;

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total">Total Cart Amount: ${totalAmount}</h2>
      <h3 className="cart-total">Total Plants in Cart: {totalQuantity}</h3>
      {cartItems.length === 0 && <p className="cart-empty">Your cart is empty.</p>}
      <div>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit price: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button" aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button" aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
