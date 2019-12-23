import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import reducers from "../store/Reducers";
import initialState from "../store/initialState";
import saga  from './Actions/saga'
import createSageMiddleware from "redux-saga";
import { fetchAllItems } from "./Actions/itemsActions";


const sagaMiddleware = createSageMiddleware();

const middleware = [thunk, sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);


sagaMiddleware.run(saga)

store.dispatch(fetchAllItems())



export default store;
