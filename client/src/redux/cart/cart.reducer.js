import CartActionTypes  from './cart.type';
import { addItemToCart , removeItem } from './cart.utilis';
const INITIAL_STATE = {
  hidden: true,
  cart : []
};

const cartReducer = (state = INITIAL_STATE, {type , payload}) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart , payload )
      };
    case CartActionTypes.CLEAR_OUT:
      return {
        ...state,
        cart: state.cart.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: removeItem(state.cart , payload )
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};
 


export default cartReducer

