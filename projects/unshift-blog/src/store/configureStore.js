import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import postsReducer from "../reducers/posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: postsReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => console.log(store.getState()));

export default store;
