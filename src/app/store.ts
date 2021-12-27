import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import testReducer from "../features/test/testSlice";
import profileReducer from "../features/profile/profileSlice";
import bookReducer from "../features/book/bookSlice";
import allBookReducer from "../features/books/allbooksSlice";

export const store = configureStore({
  reducer: {
    user: loginReducer, // delete
    test: testReducer, // delete
    profile: profileReducer,
    book: bookReducer,
    books: allBookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
