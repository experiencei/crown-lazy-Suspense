import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addCart = item => ({
  type: CartActionTypes.ADD_CART,
  payload : item
});
export const clearOutitem = item => ({
  type: CartActionTypes.CLEAR_OUT,
  payload : item
});
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload : item
});
export const clearCart= () => ({
  type: CartActionTypes.CLEAR_CART,
});