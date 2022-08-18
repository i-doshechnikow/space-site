import { useContext } from "react";
import { CartContext } from "../../context/cart";
import Button from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ name, imageUrl, price }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => addItemToCart({ name, imageUrl, price })}
      >
        add to card
      </Button>
    </div>
  );
};

export default ProductCard;
