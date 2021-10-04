import React from "react";
import  { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { ShopSelect1 } from '../../redux/shop/shop.selector';
import Shoppreview from '../shoppreview/shoppreview';
import './shopextent.scss';


function Shopextent ({collections}) {
    return (
               <div className='collections-overview'>
               {collections.map(({id , ...othersection}) => (
               <Shoppreview key={id} {...othersection} /> )             
               )}
               </div>
           )
       }


const mapStateToProps = createStructuredSelector({
    collections : ShopSelect1
})



export default connect(mapStateToProps)(Shopextent);