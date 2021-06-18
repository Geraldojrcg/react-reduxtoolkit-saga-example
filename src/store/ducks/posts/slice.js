import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getPosts(state, action) {
      return { ...state, isLoading: true };
    },
    getPostsSuccess(state, { payload: { data } }) {
      return {
        data,
        error: null,
        isLoading: false,
      };
    },
    getPostsError(state, { payload: { error } }) {
      return {
        data: [],
        error: error,
        isLoading: false,
      };
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsError } = postsSlice.actions;

export default postsSlice.reducer;
