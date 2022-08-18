import { useContext } from "react";
import { CartContext } from "../../context/cart";

import Button from "../button/button";
import CartItem from "../cart-item/cartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {Object.entries(cartItems).map(([name, quantity]) => (
          <CartItem
            key={name + `${Math.random()}`}
            name={name}
            quantity={quantity}
          />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
