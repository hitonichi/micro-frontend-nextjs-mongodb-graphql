import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  let composeEnhancer = compose;
  if (typeof window !== "undefined")
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
