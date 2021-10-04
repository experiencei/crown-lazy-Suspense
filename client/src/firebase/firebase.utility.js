import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDdjN2N2JT24RdxT1zVnaMdcHG6zKd7xto",
    authDomain: "crown-db-2a6b9.firebaseapp.com",
    projectId: "crown-db-2a6b9",
    storageBucket: "crown-db-2a6b9.appspot.com",
    messagingSenderId: "998464910088",
    appId: "1:998464910088:web:676130bd233f3def80b2bd",
    measurementId: "G-91KVXY9DN2"
  };

export const createDocument = async (userAuth , additionalData) => {
  if(!userAuth) return;
 
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get(); 

  if(!snapshot.exists){
    const { displayName , email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userRef;
}

// export const addCollectionAnddocument = async ( collectionKey , objecttoAdd) => {
//   const collectionRef = firestore.collection(collectionKey)
   
//   const batch = firestore.batch();
//   objecttoAdd.forEach( obj => {
//     const newdoc = collectionRef.doc()
//     batch.set( newdoc , obj)
//   })
  
//   return await batch.commit()
// }

 export const convertCollectionsSnapshotTomap = collections => {
  const transformed = collections.docs.map( doc => {
    const { title , items} = doc.data();

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })

  return transformed.reduce((previous, collection) => {
    previous[collection.title.toLowerCase()] = collection;
    return previous
  },{});
 }

export const getCurrentUser = () => {
  return new Promise((resolve , reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        unsubscribe();
        resolve(userAuth)
      }, reject
    )})
}

firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

 export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);

export default firebase;