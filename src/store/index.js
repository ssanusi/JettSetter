import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import reducers from "../store/Reducers";
import initialState from "../store/initialState";
import { getAllItems } from './Actions/itemsActions';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.dispatch(getAllItems())

export default store;
