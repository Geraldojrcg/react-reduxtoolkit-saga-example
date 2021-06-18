import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { getPostsError, getPostsSuccess } from "./slice";

export function* handleGetPosts() {
  try {
    const response = yield call(api.get, "/posts");
    const { data } = response;
    yield put(getPostsSuccess({ data }));
  } catch (error) {
    yield put(getPostsError({ error }));
  }
}
