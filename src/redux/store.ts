import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterReducer } from "./counter/counterSlice";

export const storeReducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer: storeReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/**
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 * In order to have typed dispatch and selectors.
 *
 * In a real application, we would 100% use an eslint file to avoid importing
 * `useDispatch` and `useSelectoor` from `react-redux` instead of those
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
