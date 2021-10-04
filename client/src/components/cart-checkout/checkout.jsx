import React from 'react';
import { connect } from 'react-redux';
import { clearOutitem, addCart ,removeItem } from '../../redux/cart/cart.actions';

import './checkout.scss';

const CheckoutItem = ({carted , clearOutitem,addCart, removeItem }) => {
 const   { name, imageUrl, price, quantity } = carted;
return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(carted)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCart(carted)}>
          &#10095;
        </div>
      </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={ () => clearOutitem(carted)}>&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
    clearOutitem: item => dispatch(clearOutitem(item)),
    addCart: item => dispatch(addCart(item)),
  removeItem: item => dispatch(removeItem(item))
  });

export default connect(null,mapDispatchToProps)(CheckoutItem);