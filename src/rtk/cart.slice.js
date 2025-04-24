import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // { productId, quantity, product: {} }
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.products = action.payload.products;
      state.totalItems = action.payload.items;
    },
    addToCart(state, action) {
      const product = action.payload; // { productId, quantity, product }

      const existing = state.products.find(
        (item) => item.productId === product.productId
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalItems += 1;
    },
    removeFromCart(state, action) {
      const productId = action.payload;

      const item = state.products.find((item) => item.productId === productId);
      if (item) {
        state.totalItems -= item.quantity;
        state.products = state.products.filter(
          (item) => item.productId !== productId
        );
      }
    },
    clearCart(state) {
      state.products = [];
      state.totalItems = 0;
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
