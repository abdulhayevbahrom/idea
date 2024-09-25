import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { compare } from "./compare";
import { cardSlice } from "./cardSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    compare: compare.reducer,
    card: cardSlice.reducer,
  },
});
