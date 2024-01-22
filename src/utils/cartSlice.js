import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],  
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state) => {
            state.items.pop();
        },
        clearToCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearToCart } = cartSlice.actions;

export default cartSlice.reducer;
