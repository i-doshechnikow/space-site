import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({ ked: 1 });

  const addItemToCart = (productToAdd) => {
    if (!cartItems.hasOwnProperty(productToAdd)) {
      setCartItems({ ...cartItems, [productToAdd]: 1 });
    } else {
      setCartItems({
        ...cartItems,
        [productToAdd]: cartItems[productToAdd] + 1,
      });
    }
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
