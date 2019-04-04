import { createStore, applyMiddleware, compose } from "redux";
import promise from 'redux-promise';
import reducers from "./reducers";

const middlewares = [promise];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
	applyMiddleware(...middlewares)
));

export default store;