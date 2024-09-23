import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { compare  } from "./compare"

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    compare: compare.reducer,
  },
});
