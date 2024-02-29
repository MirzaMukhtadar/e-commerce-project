import { configureStore, createReducer } from "@reduxjs/toolkit";

import counterSlice from "./ProductListSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
