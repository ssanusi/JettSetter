import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../store/Reducers";
import initialState from "../store/initialState";

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

export default store;