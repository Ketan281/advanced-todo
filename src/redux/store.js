import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducer.js";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk];
const enhancer = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(todoReducer, enhancer);

