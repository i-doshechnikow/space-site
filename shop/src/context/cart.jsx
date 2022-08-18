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

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
