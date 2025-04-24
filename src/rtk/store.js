import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice.js"; // Ensure correct path
import productReducer from './product.slice.js';
import cartReducer from "./cart.slice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart:cartReducer,
  }
});
