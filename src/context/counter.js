import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state = state + action.payload);
    },

    decrement: (state, action) => {
      return (state = state - action.payload);
    },
  },
});

export const { increment, decrement } = counter.actions;
