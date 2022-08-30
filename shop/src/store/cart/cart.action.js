import { CART_ACTION_TYPES } from "./cart.types";

import { actionCreator } from "../../utils/reducers/utils";

export const addItemToCart = (cartItems, { name, imageUrl, price }) => {
  if (!cartItems.hasOwnProperty(name, imageUrl, price)) {
    return actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, {
      ...cartItems,
      [name]: { imageUrl, price, quantity: 1 },
    });
  } else {
    return actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, {
      ...cartItems,
      [name]: {
        ...cartItems[name],
        quantity: (cartItems[name]["quantity"] += 1),
      },
    });
  }
};

export const removeItemFromCart = (cartItems, name) =>
  actionCreator(
    CART_ACTION_TYPES.SET_CART_ITEMS,
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

export const clearItemFromCart = (cartItems, name) =>
  actionCreator(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    Object.entries(cartItems).reduce((acc, [key]) => {
      if (key !== name) {
        acc[key] = { ...cartItems[key] };
      }

      return acc;
    }, {})
  );

export const setIsCartOpen = (isCartOpen) =>
  actionCreator(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen);
