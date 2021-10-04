import React from 'react';
import Custombtn from '../customButton/custombtn';
import { addCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import "./shopitem.scss";

function Shopitem({item , addCart}) {
    const {name , price , imageUrl} = item;
    return (
        <div className="collection-item">
           <div className="image" style={{ background : `url(${imageUrl})`}}/> 
           <div className="collection-footer">
           <span className="name">{name}</span>
           <span className="price">${price}</span>
          </div>
          <Custombtn inverted onClick={() => addCart(item)}> Add to cart</Custombtn>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addCart: item => dispatch(addCart(item))
  });
export default connect(null,mapDispatchToProps)(Shopitem)
