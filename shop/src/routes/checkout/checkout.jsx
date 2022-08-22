import { useContext } from "react";
import { CartContext } from "../../context/cart";

import "./checkout.scss";

const Checkout = () => {
  const { cartItems, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {Object.entries(cartItems).map(
        ([name, { imageUrl, price, quantity }]) => {
          return (
            <div>
              <h2>{name}</h2>
              <name>{quantity}</name>
              <button onClick={() => removeItemFromCart(name)}>
                decrement
              </button>
              <button onClick={() => addItemToCart({ name, imageUrl, price })}>
                increment
              </button>
            </div>
          );
        }
      )}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
