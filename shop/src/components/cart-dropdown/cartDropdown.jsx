import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";

import Button from "../button/button";
import CartItem from "../cart-item/cartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {Object.entries(cartItems).map(([name, productProperty]) => (
          <CartItem
            key={name + `${Math.random()}`}
            name={name}
            {...productProperty}
          />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
