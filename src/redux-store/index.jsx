import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";
import filterSlice from "./filter-slice"


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
