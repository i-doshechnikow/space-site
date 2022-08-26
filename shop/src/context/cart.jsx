import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems } = state;

  const addItemToCart = ({ name, imageUrl, price }) => {
    if (!cartItems.hasOwnProperty(name, imageUrl, price)) {
      dispatch({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: { ...cartItems, [name]: { imageUrl, price, quantity: 1 } },
      });
    } else {
      dispatch({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: {
          ...cartItems,
          [name]: {
            ...cartItems[name],
            quantity: (cartItems[name]["quantity"] += 1),
          },
        },
      });
    }
  };

  const removeItemFromCart = (name) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: Object.entries(cartItems).reduce((acc, [key, values]) => {
        if (key === name && cartItems[key].quantity !== 1) {
          acc[key] = { ...values, quantity: (cartItems[key]["quantity"] -= 1) };
          return acc;
        }

        if (key === name && cartItems[key].quantity === 1) {
          return acc;
        }

        acc[key] = { ...cartItems[key] };
        return acc;
      }, {}),
    });
  };

  const clearItemFromCart = (name) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: Object.entries(cartItems).reduce((acc, [key]) => {
        if (key !== name) {
          acc[key] = { ...cartItems[key] };
        }

        return acc;
      }, {}),
    });
  };

  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: !isCartOpen,
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
