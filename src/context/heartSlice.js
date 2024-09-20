import { createSlice } from "@reduxjs/toolkit";

export const heartSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(localStorage.getItem("heart")) || [],
  reducers: {
    addToHeart: (state, action) => {
      let result = (state = [...state, action.payload]);
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },
    clearHeat: (state, action) => {
      let result = (state = []);
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },
    removefromHeart: (state, action) => {
      let result = (state = state.filter((item) => item.id !== action.payload));
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },
  },
});

export const { addToHeart, clearHeat, removefromHeart } = heartSlice.actions;
