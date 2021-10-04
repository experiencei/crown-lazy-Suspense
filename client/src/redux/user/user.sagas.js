import { takeLatest, call, put , all} from 'redux-saga/effects';
import UserActionTypes from "./user.type";
import{ googleprovider , createDocument , auth , getCurrentUser}from "../../firebase/firebase.utility";
import{  SignInSuccess, SignInFailure , signOutSuccess , signOutFailure , signUpFailure , signUpSuccess} from "./user.actions."

export function* onUserAuthchange(userAuth , additionalData){
    try {
const userRef = yield call( createDocument ,userAuth , additionalData );
const snapShot = yield userRef.get();
yield put(SignInSuccess({
   id : snapShot.id,
    ...snapShot.data()
}))
    } catch (error) {
        yield put(SignInFailure(error))
    }
}


export function* userSession(){
  try {
      const userAuth = yield getCurrentUser();
      if(!userAuth) return;
      yield onUserAuthchange(userAuth);
      
  } catch (error) {
      yield put(SignInFailure(error))
  }
}

export function* signInWithGooglepop() {
    try {
const { user } = yield auth.signInWithPopup(googleprovider);
 yield onUserAuthchange(user)
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* signInWithEmail({payload :{ email , password}}) {
    try {
    const { user } = yield auth.signInWithEmailAndPassword( email , password);
      yield onUserAuthchange(user)
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* signUp({payload :{ email , password , displayName}}) {
    try {
    const { user } = 
    yield auth.createUserWithEmailAndPassword(email , password);
      yield put(signUpSuccess({user , additionalData : {displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signUptoSignIn({payload : {user , additionalData}}){
   yield onUserAuthchange(user , additionalData)
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGooglesignin() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGooglepop
    )
}
export function* onEmailsignin() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}
export function* onCheckUsersession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        userSession
    )
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
export function* signInafterSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUptoSignIn);
}


export function* userSagas() {
    yield all([call(onGooglesignin) , call(onEmailsignin) , call(onCheckUsersession) , call(onSignOutStart) , call(onSignUpStart) , call(signInafterSignUp)])
}