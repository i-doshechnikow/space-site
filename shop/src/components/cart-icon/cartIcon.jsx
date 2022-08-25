import { useContext } from "react";
import { CartContext } from "../../context/cart";
import {
  CartIconContainer,
  ItemCount,
  ShoppingBagSvg,
} from "./cartIcon-styled";

const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen((oldState) => !oldState);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingBagSvg />
      <ItemCount>
        {Object.values(cartItems).reduce(
          (acc, { quantity }) => acc + quantity,
          0
        )}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
