import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.select";
import Button from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ name, imageUrl, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() =>
          dispatch(addItemToCart(cartItems, { name, imageUrl, price }))
        }
      >
        add to card
      </Button>
    </div>
  );
};

export default ProductCard;
