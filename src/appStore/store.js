import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import postsReducer from '../features/posts/postsSlice';
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});