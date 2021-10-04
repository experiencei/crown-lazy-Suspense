import shopTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotTomap } from "../../firebase/firebase.utility";

 export const fetchcollectionstart = () => ({
   type : shopTypes.FETCH_COLLECTIONS_START
 });
 export const fetchcollectionsuccess = collectionsMap => ({
   type : shopTypes.FETCH_COLLECTIONS_SUCCESS,
   payload : collectionsMap
 })
 export const fetchcollectionfailure = errorMsg => ({
   type : shopTypes.FETCH_COLLECTIONS_FAILURE,
   payload : errorMsg
 })

 export const fetchcollectionstartAsync =()=> {
  return dispactch => {

    const collectionRef = firestore.collection("collection");
    dispactch(fetchcollectionstart());
    collectionRef.get().then(snapShot => {
      const collectionsMap =  convertCollectionsSnapshotTomap(snapShot);
      dispactch(fetchcollectionsuccess(collectionsMap));
    }).catch( error => dispactch(fetchcollectionfailure(error.message)))

  }
 }
 