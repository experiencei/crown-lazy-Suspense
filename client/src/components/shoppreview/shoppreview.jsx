import React from 'react';
import { withRouter } from 'react-router-dom';

import Shopitem from '../shop-item/shopitem';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './shoppreview.styles';

const Shoppreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <Shopitem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );


export default withRouter(Shoppreview);
