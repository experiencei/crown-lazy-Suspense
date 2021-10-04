import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectHiddin = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cart
);
export const selectHidden = createSelector(
  [selectHiddin],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cart =>
    cart.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectTotal = createSelector(
  [selectCartItems],
  cart =>
    cart.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
