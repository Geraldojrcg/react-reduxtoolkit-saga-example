import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./ducks/rootSaga";

import postsReducer from "./ducks/posts/slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
