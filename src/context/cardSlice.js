import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: JSON.parse(localStorage.getItem("card")) || [],
  reducers: {
    addToCard: (state, action) => {
      action.payload.quantity = 1;
      let result = (state = [...state, action.payload]);
      localStorage.setItem("card", JSON.stringify(result));
      return result;
    },
    clearCard: (state, action) => {
      let result = (state = []);
      localStorage.setItem("card", JSON.stringify(result));
      return result;
    },
    removefromCard: (state, action) => {
      let result = (state = state.filter((item) => item.id !== action.payload));
      localStorage.setItem("card", JSON.stringify(result));
      return result;
    },

    // incrementQuantity: (state, action) => {
    //   let result = state.map((item) => {
    //     let quantity = item.quantity;
    //     if (item.id === action.payload) {
    //       item.quantity = quantity + 1;
    //       return item;
    //     } else {
    //       return item;
    //     }
    //   });

    //   localStorage.setItem("card", JSON.stringify(result));
    //   return (state = result);
    // },

    // decrementQuantity: (state, action) => {
    //   let result = state.map((item) => {
    //     let quantity = item.quantity;
    //     if (item.id === action.payload) {
    //       if (quantity > 1) {
    //         item.quantity = quantity - 1;
    //         return item;
    //       } else {
    //         return item;
    //       }
    //     } else {
    //       return item;
    //     }
    //   });

    //   localStorage.setItem("card", JSON.stringify(result));
    //   return (state = result);
    // },

    incrementQuantity: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
      });
      localStorage.setItem("card", JSON.stringify(state));
      return state;
    },

    decrementQuantity: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity -= 1;
        }
      });
      localStorage.setItem("card", JSON.stringify(state));
      return state;
    },
  },
});

export const {
  addToCard,
  clearCard,
  removefromCard,
  incrementQuantity,
  decrementQuantity,
} = cardSlice.actions;
