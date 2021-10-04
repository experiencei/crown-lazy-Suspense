import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//     hats : 1,
//     sneakers : 2,
//     jackets : 3,
//     womens : 4, 
//     mens : 5
// }         .find( shopdate => shopdate.id === COLLECTION_ID_MAP[collectionUrlParam])

const shoppageSelect = state => state.shop;


export const ShopSelect = createSelector(
    [shoppageSelect],
    shop =>  shop.collections
);

export const ShopSelect1 = createSelector(
  [ShopSelect],
  collections => collections ? Object.keys(collections).map( key => collections[key] ) : []
);



export const selectCollection = collectionUrlParam =>
  createSelector(
    [ShopSelect],
    collections =>( collections? collections[collectionUrlParam] : null)
  );

  // export const selectisCollection = createSelector(
  //   [ShopSelect],
  //   shop => isFetching
  // )

  export const selectisCollection = createSelector(
    [shoppageSelect],
    shop =>  shop.isFetching
);

export const SelectisCollectionLoading = createSelector(
  [shoppageSelect],
  shop =>  !!shop.collections
);
  // import { createSelector } from 'reselect';

  // const selectShop = state => state.shop;
  
  // export const selectCollections = createSelector(
  //   [selectShop],
  //   shop => shop.collections
  // );
  
  // export const selectCollectionsForPreview = createSelector(
  //   [selectCollections],
  //   collections => Object.keys(collections).map(key => collections[key])
  // );
  
  // export const selectCollection = collectionUrlParam =>
  //   createSelector(
  //     [selectCollections],
  //     collections => collections[collectionUrlParam]
  //   );