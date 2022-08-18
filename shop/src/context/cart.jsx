import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addItemToCart = ({ name, imageUrl, price }) => {
    if (!cartItems.hasOwnProperty(name, imageUrl, price)) {
      setCartItems({ ...cartItems, [name]: { imageUrl, price, quantity: 1 } });
    } else {
      setCartItems({
        ...cartItems,
        [name]: {
          ...cartItems[name],
          quantity: (cartItems[name]["quantity"] += 1),
        },
      });
    }
  };

  const removeItemFromCart = (name) => {
    setCartItems(
      Object.entries(cartItems).reduce((acc, [key, values]) => {
        if (key === name && cartItems[key].quantity !== 1) {
          acc[key] = { ...values, quantity: (cartItems[key]["quantity"] -= 1) };
          return acc;
        }

        if (key === name && cartItems[key].quantity === 1) {
          return acc;
        }

        acc[key] = { ...cartItems[key] };
        return acc;
      }, {})
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
