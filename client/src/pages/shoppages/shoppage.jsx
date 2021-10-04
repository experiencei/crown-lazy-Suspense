import React , { useEffect , lazy , Suspense } from 'react';
import { Route } from 'react-router-dom';
import './shoppage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectisCollection , SelectisCollectionLoading } from '../../redux/shop/shop.selector';
import { fetchcollectionstart } from '../../redux/shop/shop.action';

;
import WithSpinner from "../../components/withspinner/withSpinner";
import Spinner from '../../components/spinner/spinner.component';

const CollectionPage = lazy(() => import('../collection/collectionpreview'));
const Shopextent =  lazy(() => import('../../components/shopext/shopextent'));
const WithSpinnerCollectionpage = WithSpinner(CollectionPage);
const WithSpinnerShoppage = WithSpinner(Shopextent);


const Shoppage = ({fetchcollectionstart ,match, isCollectionFetching ,CollectionLoading })  => {
    
   useEffect(() => {
      fetchcollectionstart()
       },[fetchcollectionstart])


   return  (
      <div className="shoppage">
      <Suspense fallback={<Spinner/>}>
      <Route exact path={`${match.path}`} 
       render={ (props) => <WithSpinnerShoppage isLoading={isCollectionFetching} {...props}/>}/>
    <Route path={`${match.path}/:collectionId`} 
    render={ (props) => <WithSpinnerCollectionpage isLoading={!CollectionLoading} {...props} />} />
    </Suspense>
         </div>
       )
   }

const mapStateToProps = createStructuredSelector({
   isCollectionFetching : selectisCollection,
   CollectionLoading  : SelectisCollectionLoading
})


const mapDispatchToProps = dispatch => ({
   fetchcollectionstart : () => dispatch(fetchcollectionstart())
 });

 export default connect(mapStateToProps ,mapDispatchToProps)(Shoppage);











//  import React from 'react';
// import { Route } from 'react-router-dom';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// const ShopPage = ({ match }) => (
//   <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

// export default ShopPage;
    
// const WithSpinnerCollectionpage = WithSpinner(CollectionPage);
// const WithSpinnerShoppage = WithSpinner(Shopextent);


// class Shoppage extends Component {
    

//  componentDidMount(){
//     const { fetchcollectionstartAsync } = this.props
//     fetchcollectionstartAsync()

//  }

//    render(){
//       const { match, isCollectionFetching ,CollectionLoading  } = this.props;
//    return  (
//       <div className="shoppage">
//       <Route exact path={`${match.path}`} 
//        render={ (props) => <WithSpinnerShoppage isLoading={isCollectionFetching} {...props}/>}/>
//     <Route path={`${match.path}/:collectionId`} 
//     render={ (props) => <WithSpinnerCollectionpage isLoading={!CollectionLoading} {...props} />} />
//          </div>
//        )
//    }
// }
// const mapStateToProps = createStructuredSelector({
//    isCollectionFetching : selectisCollection,
//    CollectionLoading  : SelectisCollectionLoading
// })

// const mapDispatchToProps = dispatch => ({
//    CollectionMap: collection => dispatch(CollectionMap(collection))
//  });