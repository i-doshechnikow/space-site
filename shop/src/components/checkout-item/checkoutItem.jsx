import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout-item.scss";

const CheckoutItem = ({ name, imageUrl, price, quantity }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(name)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addItemToCart({ name, imageUrl, price })}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(name)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
