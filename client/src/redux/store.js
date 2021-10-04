import { createStore , applyMiddleware} from "redux";
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
const sagaMiddleWare = createSagaMiddleware()

const middleware = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const store = createStore(rootReducer , applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga)
const persistor =  persistStore(store);

export {store , persistor};
