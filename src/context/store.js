import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { cardSlice } from "./cardSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    card: cardSlice.reducer,
  },
});
