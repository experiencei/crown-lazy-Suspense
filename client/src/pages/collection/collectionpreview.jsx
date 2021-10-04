import React from 'react';
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer
} from  './collection.styled'
import { connect } from 'react-redux';

import Shopitem from "../../components/shop-item/shopitem";

import { selectCollection } from '../../redux/shop/shop.selector';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <Shopitem key={item.id} item={item} />
        ))}
        </CollectionItemsContainer>
    </CollectionContainer>
  );
};


const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
  });
export default connect(mapStateToProps)(CollectionPage);
