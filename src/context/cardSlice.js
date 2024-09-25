import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState: JSON.parse(localStorage.getItem("card")) || [],
    reducers: {
        addToCard: (state, action) => {
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
    },
});

export const { addToCard, clearCard, removefromCard } = cardSlice.actions;