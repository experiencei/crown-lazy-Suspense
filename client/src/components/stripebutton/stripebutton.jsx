import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"; 


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JZ1ycKGIJkkC9mH7KdDoL1405zKGoTLPtrTAZIBgN18rW6piu4UOzUsiluqGs9IJX9Pblj7FBCoS69f1V21umzX00Txk5zcZt';

  const onToken = token => {
    axios({
      url : "payment",
      method : "post",
      data : {
        amount : priceForStripe,
        token
      }
    }).then( response => {
      alert('payment successful');
    }).catch( error => {
      console.log( "payment error " + error);
      alert(
        'There was an issue with your payment. please sure you use the provided create Card.'
      )
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;