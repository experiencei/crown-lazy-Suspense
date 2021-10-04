import React from 'react';
import CollectionPage from "./collectionpreview";
import WithSpinner from "../../components/withspinner/withSpinner";
import { connect } from 'react-redux';
import { SelectisCollectionLoading } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !SelectisCollectionLoading(state)
}) 

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionsOverviewContainer;