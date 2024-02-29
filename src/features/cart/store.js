import { configureStore, createReducer } from "@reduxjs/toolkit";

import counterSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
