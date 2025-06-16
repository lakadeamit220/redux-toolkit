import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import postsReducer from '../features/posts/postsSlice';
import { postsApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});