import { useContext } from "react";
import { v4 } from "uuid";

import CheckoutItem from "../../components/checkout-item/checkoutItem";
import { CartContext } from "../../context/cart";

import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

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
      {Object.entries(cartItems).map(([name, itemValues]) => (
        <CheckoutItem key={v4()} name={name} {...itemValues} />
      ))}
      <span className="total">
        Total:
        {Object.values(cartItems).reduce(
          (acc, { price, quantity }) => acc + price * quantity,
          0
        )}
        $
      </span>
    </div>
  );
};

export default Checkout;
