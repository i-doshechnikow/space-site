import "./cartItem.scss";

const CartItem = ({ name, quantity }) => {
  return (
    <div className="">
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
