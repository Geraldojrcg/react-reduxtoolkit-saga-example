import { all, takeLatest } from "redux-saga/effects";

import { getPosts } from "../ducks/posts/slice";
import { handleGetPosts } from "../ducks/posts/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(getPosts.type, handleGetPosts)]);
}
