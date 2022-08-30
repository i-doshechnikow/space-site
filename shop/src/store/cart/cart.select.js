import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  ({ cartItems }) => cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  ({ isCartOpen }) => isCartOpen
);
