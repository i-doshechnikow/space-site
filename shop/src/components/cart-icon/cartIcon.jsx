import { useContext } from "react";
import { ReactComponent as ShoppingBag } from "../../assets/bag.svg";
import { CartContext } from "../../context/cart";

import "./cartIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen((oldState) => !oldState);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
