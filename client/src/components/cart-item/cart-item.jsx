import React from 'react';

import {CartItemContainer , ItemDetails} from "./cartitem.styled"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetails>
      <span >{name}</span>
      <span >
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem