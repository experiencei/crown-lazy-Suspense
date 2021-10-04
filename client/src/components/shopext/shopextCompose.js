import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from 'reselect';
import { selectCollection } from "../../redux/shop/shop.selector";
import Shopextent from "./shopextent";
import WithSpinner from "../withspinner/withSpinner";

const mapStateToProps = createStructuredSelector({
    isLoading : selectCollection
})

const ShopextentContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Shopextent)

export default ShopextentContainer;