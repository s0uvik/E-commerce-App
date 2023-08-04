import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export default cartSlice;
export const cartAction = cartSlice.actions;
