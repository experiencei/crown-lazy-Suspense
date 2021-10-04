import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems ,selectTotal } from "../../redux/cart/cart.selector";
import StripeCheckoutButton from '../../components/stripebutton/stripebutton';
import CheckoutItem from '../../components/cart-checkout/checkout';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styled'

function Cartcheckout({cart , total }) {
    return (
      
      <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
    {
        cart.map( carted =>
        <CheckoutItem key={carted.id} carted={carted}/> )
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242  —  Exp: 01/22  —  CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
    )
};
const mapStateToProps = createStructuredSelector({
    cart : selectCartItems,
    total : selectTotal
 });

export default connect(mapStateToProps)(Cartcheckout)