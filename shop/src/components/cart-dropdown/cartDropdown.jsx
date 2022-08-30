import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.select";

import Button from "../button/button";
import CartItem from "../cart-item/cartItem";

import {
  CartDropdownDiv,
  CartItemsStyleCont,
  EmptyMessage,
} from "./cartDropdown-styled";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <CartDropdownDiv>
      <CartItemsStyleCont>
        {Object.keys(cartItems).length ? (
          Object.entries(cartItems).map(([name, productProperty]) => (
            <CartItem
              key={name + `${Math.random()}`}
              name={name}
              {...productProperty}
            />
          ))
        ) : (
          <EmptyMessage>emty</EmptyMessage>
        )}
      </CartItemsStyleCont>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownDiv>
  );
};

export default CartDropdown;
