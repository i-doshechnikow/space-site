import { ReactComponent as ShoppingBag } from "../../assets/bag.svg";
import "./cartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
