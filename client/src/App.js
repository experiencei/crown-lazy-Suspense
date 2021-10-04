import React, { useEffect ,lazy , Suspense} from 'react';
 import { GlobalStyle } from './globalStyle';
 import Header from './components/haeder/header';
 import { connect } from 'react-redux';
 import Spinner from './components/spinner/spinner.component';
 import ErrorBoundary from './components/error-boundary/error-boundary.component';
 import { createStructuredSelector } from "reselect";
 import { selectUser } from "../src/redux/user/user.selector"
import { checkUserSession } from './redux/user/user.actions.';
 import { Route ,Switch ,Redirect } from "react-router-dom";nnn

const Homepages = lazy(() => import('./components/directory/directory'));
const Shoppage = lazy(() => import('./pages/shoppages/shoppage'));
const SigninUp = lazy(() => import('./pages/Signup/sign-in-Up'));
const cartCheckout = lazy(() => import('./pages/checkout/cart-checkout'));
 
 
 const App = ({checkUserSession , currentuser}) => {
    
  useEffect(() => {
    checkUserSession()
    } , [checkUserSession])
    
 


     return (
       <div>
       <GlobalStyle/>
      <Header />
      <Switch>
      <ErrorBoundary>
      <Suspense fallback={<Spinner/>}>
      <Route exact path="/" component={ Homepages }/>
      <Route   path="/shop" component={ Shoppage }/>
      <Route  exact path="/checkout" component={ cartCheckout }/>
      <Route
            exact
            path='/signin'
            render={() =>
            currentuser ? (
                <Redirect to='/' />
              ) : (
                <SigninUp />
              )
            }
          />
        </Suspense>
        </ErrorBoundary>
      </Switch>
       </div>
     )
   }
 

 const mapStateToProps =createStructuredSelector({
   currentuser : selectUser,
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

 const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);









    // //   const { setCurrentUser } = this.props;
    // //   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{ 
    // //  if(userAuth){
    // //   const userRef = await createDocument(userAuth); 

    // //   userRef.onSnapshot(snapShot => {
    // //     setCurrentUser({
    // //        id : snapShot.id,
    // //        ...snapShot.data()
    // //      })
    // //   })
    // //  }
    // //    else{
    // //     setCurrentUser(userAuth);
    // //    } 
      
    // // })