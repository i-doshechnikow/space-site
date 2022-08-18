import { useContext } from "react";
import { CartContext } from "../../context/cart";

import "./checkout.scss";

const Checkout = () => {
  const { cartItems, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  return (
    <div className="">
      <div className="">
        {Object.entries(cartItems).map(
          ([name, { imageUrl, price, quantity }]) => {
            return (
              <div>
                <h2>{name}</h2>
                <name>{quantity}</name>
                <button onClick={() => removeItemFromCart(name)}>
                  decrement
                </button>
                <button
                  onClick={() => addItemToCart({ name, imageUrl, price })}
                >
                  increment
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Checkout;
