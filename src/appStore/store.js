import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import postsReducer from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: todoReducer,
  posts: postsReducer,
})