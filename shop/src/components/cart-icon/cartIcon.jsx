import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartReducer } from "../../store/cart/cart.select";
import {
  CartIconContainer,
  ItemCount,
  ShoppingBagSvg,
} from "./cartIcon-styled";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems, isCartOpen } = useSelector(selectCartReducer);

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(isCartOpen))}>
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
