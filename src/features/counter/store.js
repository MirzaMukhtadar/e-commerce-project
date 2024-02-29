import { configureStore, createReducer } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
