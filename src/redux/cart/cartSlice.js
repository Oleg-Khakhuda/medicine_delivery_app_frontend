import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== action.payload._id
      );
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const ProductToUpdate = state.cartProducts.find(
        (item) => item._id === _id
      );
      if (ProductToUpdate) {
        ProductToUpdate.amount = quantity;
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  CartSlice.actions;

export const CartReducer = CartSlice.reducer;