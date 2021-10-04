import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { ReactComponent as ShoppingCart } from "../assests/shopping.svg";
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartContainer ,Itemcount, Shoppingicon
} from "./cartIcon.styled"

function Carticon({ toggleCartHidden , itemCount }) {
    return (
        <CartContainer>
            <Shoppingicon onClick={toggleCartHidden} />
            <Itemcount>{itemCount}</Itemcount>
        </CartContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
 const mapStateToProps =createStructuredSelector({
    itemCount : selectCartItemsCount
  })
 
 
export default connect(
mapStateToProps,
mapDispatchToProps
  )(Carticon);