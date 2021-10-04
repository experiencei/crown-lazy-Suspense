import React from "react";
import Custombtn from "../customButton/custombtn";
import Cartitem from "../cart-item/cart-item";
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { Cartdropdown , Emptymessage , Cartitems } from "./cart-dropdown.jsx"

 function Cartdropdowm({cart , history , dispatch}) {
    return (
    <Cartdropdown>
    <Cartitems >
      {cart.length? 
        (cart.map(carted => 
        <Cartitem key={carted.id} item={carted}/>
        )):
        (<Emptymessage> Your Cart is empty</Emptymessage>)
      }
    </Cartitems>
    <Custombtn onClick={ () =>{ 
      history.push("/checkout")
      dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</Custombtn>
  </Cartdropdown>
    )
}

const mapStateToProps = createStructuredSelector({
  cart : selectCartItems
});




export default withRouter(connect(mapStateToProps)(Cartdropdowm));